import {PageRoutes} from "./routes";
import {useEffect} from "react";
import {usePostsStore} from "./store/index.js";

export default function App() {
  const {setPosts, setError, setIsLoading} = usePostsStore()

  const REQUIRED_POSTS_COUNT = 20;

  const getPicturesIds = async () => {
    try {
      const response = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/search?artistOrCulture=true&q=french');
      const data = await response.json();
      return data.objectIDs;
    } catch (error) {
      throw new Error("Failed to fetch picture IDs");
    }
  }

  const getDataById = async (id) => {
    try {
      const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`);
      const data = await response.json();
      if (data.message === 'Not a valid object') {
        return null;
      }
      if (data.primaryImage === '') {
        return null;
      }
      return data;
    } catch (error) {
      console.error(`Failed to fetch data for ID ${id}`);
      return null;
    }
  }

  async function getPosts() {
    setIsLoading(true);
    setError(null);
    try {
      const ids = await getPicturesIds();
      let validPosts = [];
      let index = 0;

      while (validPosts.length < REQUIRED_POSTS_COUNT && index < ids.length) {
        const post = await getDataById(ids[index]);
        if (post !== null && !validPosts.some(p => p.objectID === post.objectID)) {
          validPosts.push({...post, favorite: false});
        }
        index++;
      }

      if (validPosts.length < REQUIRED_POSTS_COUNT) {
        throw new Error(`Could only fetch ${validPosts.length} valid posts`);
      }

      setPosts(validPosts);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return <PageRoutes />;
}
