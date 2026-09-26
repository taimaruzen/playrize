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


          {location.pathname === "/" &&(
            <div className="home-main">
              <h1>PLAYRIZE</h1>

              <p className="home-sub">
                PLAY. SHARE. RISE.
              </p>

              <p className="home-text">
                ゲームを遊んで、シェアして、楽しもう。TEST
              </p>

              <Link to="/games" className="home-button">
                PLAY GAME
              </Link>
            </div> 
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