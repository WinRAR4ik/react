import {create} from "zustand";

export const usePostsStore = create((set, get) => ({
  posts: [],
  isLoading: false,
  error: null,
  setPosts: (posts) => set({posts: posts}),
  setIsLoading: loading => set({isLoading: loading}),
  setError: error => set({error: error}),
  setFavorite: (postId) => {
    set({posts: [...get().posts.map(post => post.objectID === postId ? {...post, favorite: !post.favorite} : post)]});
  }
}))

export const useFavoritePostsStore = create((set, get) => ({
  favoritesPosts: [],
  isLoading: false,
  error: null,
  addFavoritePost: (post) => {
    const favoritePost = {...post, favorite: true};
    set({favoritesPosts: [...get().favoritesPosts, favoritePost]});
  },
  setIsLoading: loading => set({isLoading: loading}),
  setError: error => set({error: error}),
}))