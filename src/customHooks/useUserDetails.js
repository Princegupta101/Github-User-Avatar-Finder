import axios from "axios";
import { useEffect, useState } from "react";
function useUserDetails({name}){
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
    return[userDetail];
}
export default useUserDetails;