import './styles.scss';
import {useParams} from "react-router-dom";
import {useState} from "react";
import {Card} from "../../components/";
import {usePostsStore} from "../../store/index.js";

export function PostPage() {
  const posts = usePostsStore(state => state.posts)
  const {id} = useParams()
  const [post, setPost] = useState(posts.filter(post => post.objectID === Number(id))[0]);

  console.log(post)

  return (
    <div>
      <h1>Post page</h1>
      <Card title={post.title} artist={post.artistDisplayName} img={post.primaryImage} period={post.objectDate === '' ? 'Unknown' : post.objectDate} favorite={post.favorite} />
      {/*{post && <img src={post.primaryImage} alt=""/>}*/}
    </div>
  )
}