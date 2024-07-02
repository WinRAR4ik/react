import "./styles.scss";
export function Card({ img, title, artist }) {
  return (
    <div className="painting">
      <img src={`/paints/${img}.jpg`} alt="Painting 1" />
      <h3>{title}</h3>
      <p>{artist}</p>
    </div>
  );
}
