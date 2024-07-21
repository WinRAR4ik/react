import "./styles.scss";
import {Heart} from "../UI/index.js";
import {useState} from "react";
import {useFavoritePostsStore, usePostsStore} from "../../store/index.js";
export function Card({ img, title, artist, onClick, period, post, favorite, id }) {
  const [active, setActive] = useState(favorite);

  const {setFavorite} = usePostsStore()

  const {addFavoritePost} = useFavoritePostsStore();

  function handleClick() {
    setFavorite(id)
    addFavoritePost(post);
    setActive(!active);
  }

  return (
    <div className="painting">
      <div className="img-wrap" onClick={onClick}>
        <img className='img' src={img} alt="Painting 1"/>
      </div>
      <div className="content-wrap">
        <h1 className={'title'} onClick={onClick}>{title}</h1>
        <p className={'artist'}>{artist}</p>
        <span className={'period'}>{period}</span>
        <Heart color={!active ? "#d1d1d1" : "#67043E"} onClick={handleClick}/>
      </div>
    </div>
  );
}
