import { useParams } from "react-router-dom";
import useUserDetails from "../../customHooks/useUserDetails";

function Userdetails(){
    const{name}=useParams();
    const[userDetail]=useUserDetails({name});
    return(
        <div className="flex gap-8 items-center justify-center w-screen   h-screen">
            <div>
                 <img src={userDetail.avatar} 
                 className='  h-80 border-1  border-black  rounded-2xl '  />
            </div>
           <div className=" text-2xl">
                <div>Name : {userDetail.name}</div>
                {(userDetail.company)?<div> Company : {userDetail.company}</div>:""}
                {(userDetail.location)?<div> Location : {userDetail.location}</div>:""}
                <div>User Name : {userDetail.login}</div>
                <div>Public repository : {userDetail.public_repos}</div>
                <div>Public Gists :{userDetail.public_gists}</div>
                <div>Followers : {userDetail.followers}</div>
                <div>Following : {userDetail.following}</div>
           </div>
            
        </div>
    )

}
export default Userdetails;