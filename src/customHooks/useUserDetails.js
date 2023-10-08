import axios from "axios";
import { useEffect, useState } from "react";
function useUserDetails({name,id}){
    const [userDetail, setUserDetail]=useState({});
    
    async function detailDownload(){
        try { 
             let response;
             // fetch user  data details by name search
            if(name){   
                 response=await axios.get(`https://api.github.com/users/${name}`)
            }else{
                // fetch user data details by click avatar and by id 
                 response=await axios.get(`https://api.github.com/users/${id}`) 
            }
            // set the user details 
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
            
        } catch (error) {
            console.log("something went wrong");
        } 
    }
 
    useEffect(()=>{
        detailDownload();
    },[])
    return[userDetail];
}
export default useUserDetails;