import { useNavigate } from "react-router-dom";
import '../styles/TitlePage.css'
import '../styles/common.css'
import titleBack from '../assets/titleBack.png'
function TitlePage() {
const navigate = useNavigate();
  return (
    <>
    <div className="container">
       <img src={titleBack} className="back" alt="背景の画像" />
       <div className="content">
        <h1 className='defBack'>
          <span className='red'>色</span>
          <span className='yellow'>合</span>
          <span className='green'>わ</span>
          <span className='blue'>せ</span>
          <span className='white'>ゲーム</span>
        </h1>
        <div className='white fontSsub text defBack'>
           <p>色の意味ではなく、</p>
           <p>文字の色をこたえよう！</p>
        </div>
        <div className='btnWrap'>
          <button
          className='yBtn'
          onClick={() => navigate("/game")}>
            スタート
          </button>
          <button
           className="dBtn"
           onClick={() => navigate("/rule")}
           >

          </button>
        </div>
       </div>
    </div>
    </>
  )
}

export default TitlePage;
