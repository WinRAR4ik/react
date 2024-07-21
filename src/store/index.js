import { create } from 'zustand';

const REQUIRED_POSTS_COUNT = 20;

export const usePostsStore = create((set, get) => ({
  posts: [],
  isLoading: false,
  error: null,
  idsRef: null,
  lastIndex: 0,

  setPosts: (posts) => set({ posts }),
  setIsLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),

  setFavorite: (postId) => {
    set({
      posts: get().posts.map((post) =>
        post.objectID === postId ? { ...post, favorite: !post.favorite } : post
      ),
    });
  },

  getPicturesIds: async () => {
    try {
      const response = await fetch(
        'https://collectionapi.metmuseum.org/public/collection/v1/search?artistOrCulture=true&q=french'
      );
      const data = await response.json();
      set({ idsRef: data.objectIDs });
    } catch (error) {
      set({ error: 'Failed to fetch picture IDs' });
    }
  },

  getDataById: async (id) => {
    try {
      const response = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
      );
      const data = await response.json();
      if (data.message === 'Not a valid object' || data.primaryImage === '') {
        return null;
      }
      return data;
    } catch (error) {
      console.error(`Failed to fetch data for ID ${id}`);
      return null;
    }
  },

  loadMorePosts: async () => {
    const { idsRef, lastIndex, posts, getDataById } = get();
    set({ isLoading: true, error: null });

    try {
      if (!idsRef) {
        await get().getPicturesIds();
      }

      let newPosts = [];
      let currentIndex = lastIndex;

      while (
        newPosts.length < REQUIRED_POSTS_COUNT &&
        currentIndex < get().idsRef.length
      ) {
        const post = await getDataById(get().idsRef[currentIndex]);
        if (
          post !== null &&
          !posts.some((p) => p.objectID === post.objectID) &&
          !newPosts.some((p) => p.objectID === post.objectID)
        ) {
          newPosts.push({ ...post, favorite: false });
        }
        currentIndex++;
      }

      if (newPosts.length === 0) {
        throw new Error('No more posts available');
      }

      set({
        posts: [...posts, ...newPosts],
        lastIndex: currentIndex,
      });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ isLoading: false });
    }
  },
}));
