import './styles.scss';
import Error404 from '../../assets/Error404.json'
import Lottie from "lottie-react";
import {NavLink} from "react-router-dom";

export function ErrorPage() {
  return (
    <div>
      <NavLink to={"/"} className={'button'}>Home</NavLink>
      <main className="main">
        <Lottie animationData={Error404} />
      </main>
    </div>
  )
}