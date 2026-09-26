import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



function Games() {
  const [games, setGames] = useState([]);
  const [visibleCount, setVisibleCount] = useState(50);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetch("/games.json")
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
      });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100
      ) {
        setVisibleCount((count) => count + 50);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

return (
  <>
    <div className="game-controls">
      <input
        className="kensaku"
        type="text"
        placeholder="Search the game..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      
          <select
            className="category-select"
            value={category}
            onChange={(e) => {
                setCategory(e.target.value);
                setVisibleCount(50);
              }}
          >
            <option value="">ALL Category</option>
            <option value=".IO">.IO</option>
            <option value="2 Player">2 Player</option>
            <option value="3D">3D</option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Arcade">Arcade</option>
            <option value="Bejeweled">Bejeweled</option>
            <option value="Boys">Boys</option>
            <option value="Clicker">Clicker</option>
            <option value="Cooking">Cooking</option>
            <option value="Fighting">Fighting</option>
            <option value="Girls">Girls</option>
            <option value="Hypercasual">Hypercasual</option>
            <option value="Multiplayer">Multiplayer</option>
            <option value="Puzzles">Puzzles</option>
            <option value="Racing">Racing</option>
            <option value="Shooting">Shooting</option>
            <option value="Soccer">Soccer</option>
            <option value="Sports">Sports</option>
          </select>
    </div> 

    <div className="games-list" >
      {games
  .filter((game) =>
    game.title.toLowerCase().includes(search.toLowerCase())
  )
  .filter((game) =>
    category === "" || game.category === category
  )
  .slice(0, visibleCount)
        .map((game) => (
          <div className="game-card" key={game.id}>
            <Link to={`/play/${game.id}`}>
              <img src={game.thumb} alt={game.title} />
            </Link>

            <Link to={`/play/${game.id}`}>
            </Link>
          </div>
        ))}
    </div>
  </>
);
}

export default Games;