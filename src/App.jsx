import Hgbt from "./Hgbt.jsx";
import Games from "./Games";
import Play from "./Play.jsx";
import MyPage from "./MyPage.jsx";
import Signup from "./Signup.jsx";
import EmailSignup from "./EmailSignup";
import "./App.css";
import { Routes, Route, Link, useLocation } from "react-router-dom";



function App() {
  const location = useLocation();
  const hideHeader =
  location.pathname.startsWith("/play/") ||
  location.pathname === "/signup" ||
  location.pathname === "/signup/email";
  
  
  // メニューが開いているかを記憶
 
  return (
    <div
      className="pr-body"
    >
      <div className="main-box">
          {!hideHeader && (

                
          
              <div className="pr-header" id="playrize-header">
                      <h1 className="pr-title">
                        <Link to="/">PLAYRIZE</Link>
                      </h1>
                      <img src="logo.png" className="PLAYRIZE-logo" alt="白い猫" />

                  <div>
                    <Link to="/login" className="loginbut">
                      LOGIN
                    </Link>
                    <Link to="/signup" className="signupbut">
                      SIGN UP
                    </Link>
                  </div>

                <Hgbt />

              </div>
            
            )}
          

          {!hideHeader && (
            <div className="ngmenus-box">
              <nav className="ngmenus">
                <Link to="/games" className="ng-menu">GAME</Link>
                <a href="https://orenosaundo.base.shop"className="ng-menu">SHOP</a>
                <Link to="/" className="ng-menu">HOME</Link>
      
              </nav>
            </div>
          )}
      

       {!hideHeader && <hr className="border1" />}
      </div>


      {location.pathname === "/" && (
  <main className="home-main">

    {/* 背景の光 */}
    <div className="home-glow home-glow-1"></div>
    <div className="home-glow home-glow-2"></div>

    {/* メインコンテンツ */}
    <div className="home-content">

      <p className="home-label">
        PLAY • SHARE • RISE
      </p>

      <h1 className="home-title">
        PLAYRIZE
      </h1>

      <p className="home-text">
        無料オンラインゲームを、すぐに楽しもう。
      ゲームが遊ばれるほど、ショップの商品がお得に。
      </p>

      {/* ゲームへ */}
      <div className="home-buttons">

      <Link to="/games" className="home-button">
        PLAY GAME
        <span>→</span>
      </Link>

      <a
        href="https://shop.playrize.net/"
        className="home-button"
      >
        SHOP
        <span>→</span>
      </a>

    </div>
      {/* SNS */}
      <div className="home-social">

        <a
          href="https://x.com/PLAYRIZE109"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <span className="social-icon">𝕏</span>

          <span className="social-info">
            <span className="social-name">X</span>
            <span className="social-id">@PLAYRIZE109</span>
          </span>

          <span className="social-arrow">↗</span>
        </a>

        <a
          href="https://note.com/playrize"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <span className="social-icon note-icon">n</span>

          <span className="social-info">
            <span className="social-name">note</span>
            <span className="social-id">PLAYRIZE</span>
          </span>

          <span className="social-arrow">↗</span>
        </a>

      </div>

    </div>

  </main>
)}
      
      <Routes>
        <Route path="/games" element={<Games />} />
        <Route path="/play/:id" element={<Play />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/email" element={<EmailSignup />} />
          
          
      </Routes>

      
    </div>
  );
}

export default App;