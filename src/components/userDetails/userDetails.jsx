import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Userdetails(){
    const{name}=useParams();
    const [userDetail, setUserDetail]=useState({});
    async function detailDownload(){
        const response=await axios.get(`https://api.github.com/users/${name}`)
        setUserDetail({
            id: response.data.id,
            avatar:response.data.avatar_url,
            login:response.data.login,
            company:response.data.company,
            name:response.data.name,
            location:response.data.location,
            public_repos:response.data.public_repos,
            public_gists:response.data.public_gists,
            followers:response.data.followers,
            following:response.data.following,
        });
    }
 
    useEffect(()=>{
        detailDownload();
    },[])
    return(
        <div className="flex gap-8 items-center justify-center w-screen  flex-wrap h-screen">
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
                <div>public Gists :{userDetail.public_gists}</div>
                <div>followers : {userDetail.followers}</div>
                <div>following : {userDetail.following}</div>
           </div>
            
        </div>
    )

}
export default Userdetails;