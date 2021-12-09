import {useEffect} from "react";
import {useSelector} from "react-redux";

const HeaderSearchCard = ({user, result}) => {

  console.log("유저", user);
  console.log("결과", result);



  return(
    <>

      <div className="header_search_card">
        {/*{user && <div>{user[0].userId}</div>}*/}
        </div>
    </>
  )
}

export default HeaderSearchCard;