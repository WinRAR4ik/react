import './styles.scss';
import {PostList} from "../../components/index.js";
import {usePostsStore} from "../../store/index.js";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import Lottie from "lottie-react";
import Cat from '../../assets/Cat.json';


export function Favorite() {
  const {posts} = usePostsStore()
  const navigate = useNavigate();
  const [favoritePosts, setFavoritePosts] = useState(posts.filter(post => post.favorite))

  function goToPost(id) {
    navigate(`/gallery/${id}`);
  }

  console.log(favoritePosts)

  return (
    <div className="Gallery">
      <section className="gallery">
        {!favoritePosts.length ?
          <div style={{width:'100%', height:'100%'}}>
            <Lottie animationData={Cat} style={{height:'100%', width:'300px'}}/>
            <h1 style={{textAlign: "center", fontSize: '1.4rem'}}>No Favorite posts</h1>
          </div> :
          <PostList posts={favoritePosts} onClick={goToPost}/>}
      </section>
    </div>
  );
}
