import { memo ,VFC }  from 'react';

import './Pages.css';

export const About: VFC = memo(() => {
  return (
    <>
    <div className="aboutImage"></div>
    <div className="aboutWrap">
      <div className="aboutIntro">
        <h2>自己紹介</h2>
        <p>2021年3月に四年生大学卒業</p>
        <p>2021年4月にIT企業に就職</p>
        <p>出身：愛知</p>
        <p>スポーツ：中学、高校でバスケ</p>
        <p>趣味：音楽鑑賞、洋画、漫画、アニメ、ゲーム、、旅行、プログラミング</p>
        <p>性格：負けず嫌い</p>
        <p>好きな食べ物；ステーキ、ハンバーグ、焼肉、刺身、カレー</p>
        <img src="${process.env.PUBLIC_URL}/../../../../../images/me.jpg" alt="" className="aboutMyImage"/>
      </div>
      <div className="aboutGitFormWrap"> 
        <div className="aboutGithubWrap">
          <h2>GitHub contribution</h2>
          <img src="https://ghchart.rshah.org/kenji-kk" alt="" className="aboutGithubImg"/>
          </div>
        <div className="aboutFormWrap">
          <form>
            <h2>コンタクト(実装中)</h2>
            <label>
              <p>お名前:</p>
              <input type="text" name="name" className="aboutName"/>
            </label>
            <label>
              <p>メールアドレス:</p>
              <input type="text" name="name" className="aboutMail"/>
            </label>
            <label >
              <p>お問い合わせ：</p>
              <textarea  name="name" className="aboutQue"/>
            </label >
            <button>送信</button>
          </form>
        </div>
      </div>
    </div>
    <div className="aboutMessage"> 
        <h2>私がエンジニアになった理由</h2>
        <p>coming soon</p>
    </div>
    </>
  )
});
