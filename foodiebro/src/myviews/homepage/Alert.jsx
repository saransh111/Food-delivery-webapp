import {useEffect} from 'react';
import ('./alert.css');
function Profile() {
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    console.log(userInfo);
    return userInfo;
  })
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  return (
    <div>
      <h1>{userInfo.name}</h1>
      <h1>{userInfo.email}</h1>
   </div>
  )
}

export default Profile;
