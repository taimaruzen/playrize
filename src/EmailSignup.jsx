import "./Signup.css";

function EmailSignup() {
  return (
      
      <div className="foam-screen">
        <div className="foam-screen2">
            <b className="email-signup-title">PLAYRIZE アカウント作成</b>
            <form action="#" method="post">
                <div className="form-group">
                    <label for="username">ユーザー名</label>
                    <input type="text" id="username" name="username" placeholder="お名前を入力" required></input>
                </div>
                <div className="form-group">
                    <label for="email">メールアドレス</label>
                    <input type="email" id="email" name="email" placeholder="example@email.com" required></input>
                </div>
                <div className="form-group">
                    <label for="password">パスワード</label>
                    <input type="password" id="password" name="password" placeholder="8文字以上" required></input>
                </div>
                
                <button type="submit" class="submit-btn">登録する</button>

            </form>
        </div>
      </div>
        
  );
}

export default EmailSignup;