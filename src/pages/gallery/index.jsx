import { Card } from "../../components/card";
import "./styles.scss";
import { useState } from "react";
export function Gallery() {
  const [cards, setCards] = useState([
    {
      id: 1,
      img: "DP103066",
      artist: "Artist Name 1",
      title: "Painting Title 1",
    },
    {
      id: 2,
      img: "download",
      artist: "sin sluxi",
      title: "sin sluxi",
    },
    {
      id: 3,
      img: "DP103066",
      artist: "Artist Name 1",
      title: "Painting Title 1",
    },
    {
      id: 4,
      img: "DP103066",
      artist: "Artist Name 1",
      title: "Painting Title 1",
    },
    {
      id: 5,
      img: "DP103066",
      artist: "Artist Name 1",
      title: "Painting Title 1",
    },
    {
      id: 6,
      img: "DP103066",
      artist: "Artist Name 1",
      title: "Painting Title 1",
    },
    {
      id: 7,
      img: "DP103066",
      artist: "Artist Name 1",
      title: "Painting Title 1",
    },
    {
      id: 8,
      img: "DP103066",
      artist: "Artist Name 1",
      title: "Painting Title 1",
    },
    {
      id: 9,
      img: "DP103066",
      artist: "Artist Name 1",
      title: "Painting Title 1",
    },
    {
      id: 10,
      img: "DP103066",
      artist: "Artist Name 1",
      title: "Painting Title 1",
    },
    {
      id: 11,
      img: "DP103066",
      artist: "Artist Name 1",
      title: "Painting Title 1",
    },
    {
      id: 12,
      img: "DP103066",
      artist: "Artist Name 1",
      title: "Painting Title 1",
    },
    {
      id: 13,
      img: "DP103066",
      artist: "Artist Name 1",
      title: "Painting Title 1",
    },
    {
      id: 14,
      img: "DP103066",
      artist: "Artist Name 1",
      title: "Painting Title 1",
    },
    {
      id: 15,
      img: "DP103066",
      artist: "Artist Name 1",
      title: "Painting Title 1",
    },
    {
      id: 16,
      img: "DP103066",
      artist: "Artist Name 1",
      title: "Painting Title 1",
    },
  ]);
  return (
    <div className="Gallery">
      <section className="gallery">
        <h2>Gallery</h2>
        <div className="paintings">
          {cards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              artist={card.artist}
              img={card.img}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
