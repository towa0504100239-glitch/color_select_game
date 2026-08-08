import React from 'react'
import '../styles/common.css'
import '../styles/RulePage.css'
export const RulePage = () => {
  return (
    <div className="container">
      <h1>ルール</h1>
      <p className='ruText'>表示される文字の意味ではなく、<br></br>
        文字の「色」を選んでください！
      </p>
      <div className="exampleBox">
        <h2>例</h2>

        <p>
          「赤」という文字が
          <span className="blue">青色</span>
          で表示されていたら<br />
          正解は「<span className="blue">青</span>」です。
        </p>

        <div className="example">
          <div className="exampleWord blue">赤</div>

          <span className="arrow">→</span>

          <div className="answer blueBack">青</div>
        </div>
      </div>

      {/* 注意 */}
      <div className="attentionBox">
        <h2>注意</h2>

        <ul>
          <li>制限時間内にできるだけ多く正解しよう！</li>
          <li>間違えるとスコアは増えません。</li>
          <li>時間がなくなるとゲーム終了です。</li>
        </ul>
      </div>

      {/* スタート */}
      <button className="startBtn">
        スタート
      </button>
    </div>
  )
}
export default RulePage;