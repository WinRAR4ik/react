import "./styles.scss";
import Lottie from "lottie-react";

import Loader from '../../assets/Loader.json'
import {useNavigate} from "react-router-dom";
import {usePostsStore} from "../../store/index.js";
import {PostList} from "../../components/index.js";


export function Gallery() {
  const {error, isLoading, posts} = usePostsStore()

  const navigate = useNavigate();

  if (isLoading) return <Lottie animationData={Loader}/>;
  if (error) return <div>Error: {error}</div>;

  function goToPost(id) {
    navigate(`/gallery/${id}`);
  }

  return (
    <div className="Gallery">
      <section className="gallery">
        <PostList posts={posts} onClick={goToPost}/>
        <button>Show more</button>
      </section>
    </div>
  );
}
