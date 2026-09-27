import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
function Play() {

    const { id } = useParams();
    const [game, setGame] = useState(null);

    useEffect(() => {
  fetch("/games.json")
    .then((response) => response.json())
    .then((data) => {

      console.log("Playで取得したデータ:", data);

      const foundGame = data.find(
        (item) => String(item.id) === String(id)
      );

      console.log("見つかったゲーム:", foundGame);

      setGame(foundGame);
    });
}, [id]);
  return (
    <>
      
    {game && (
  
    <iframe
      className="game-frame"
      src={game.url}
      title={game.title}
      
      allowFullScreen
    />
  
)}
      
      
    </>
  );
}

export default Play;