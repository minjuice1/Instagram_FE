import {useSelector} from "react-redux";
import HeaderSearchCard from "./HeaderSearchCard";


const HeaderSearchResult = () => {

  const user_data = useSelector(state=>state.search.user);
  const hash_data = useSelector(state=>state.search.result);



  return (
    <>
      <div>

        {user_data && user_data.map((user) => (
          <HeaderSearchCard name={user.name} userId={user.userId} profileImage={user.profileImage}/>
        ))}
        {hash_data && hash_data.map((hash) => (
          <HeaderSearchCard tagName={hash.tagName} postCount={hash.postCount}/>
        ))}

      </div>
    </>
  )
}

export default HeaderSearchResult;