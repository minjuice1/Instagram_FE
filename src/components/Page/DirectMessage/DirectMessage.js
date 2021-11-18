import "./DirectMessage.scss";
import {my_message} from "../../../common/IconImage";
import DirectMessageUser from "./DirectMessageUser";

const DirectMessage = () => {

  return(
    <>
      <div className="direct_message">
        <div>
          <div>hyemin085</div>
          <div>
            <DirectMessageUser/>
          </div>
        </div>
        <div className="my_message">
        <div>
          <img src={my_message}/>
        </div>
          <div>내 메세지</div>
          <div>친구나 그룹에 비공개 사진과 메시지를 보내보세요.</div>
          <button>메시지 보내기</button>
        </div>
      </div>
    </>
  )
}

export default DirectMessage;