import { Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
    
  return (
    <div>
        <div className="pr-header" id="playrize-header">    
            <h1 className="pr-title">
                <Link to="/">PLAYRIZE</Link>
            </h1>
        </div>
        <b className="textTitle">PLAYRIZEに登録</b>
        <div className="signupform2">
            <a href="/signup/email" className="signup-button">
                ✉ メールで登録
            </a>
            <a href="Googleの認証URL" className="signup-button">
                Googleで登録
            </a>
            <a href="Googleの認証URL" className="signup-button">
                Appleで登録
            </a>
        </div>
    </div>
  );
}

export default Signup;