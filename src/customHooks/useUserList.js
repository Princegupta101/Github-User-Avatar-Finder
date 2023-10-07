import axios from "axios";
import { useEffect, useState } from "react";
function useUserList(){
    const[isloading , setLoding]=useState(true)
    const[userLists, setUserlist]=useState([])
    async function downloadUsers(){
        
        const response=await axios.get('  https://api.github.com/users'); 
        const userData=response.data;
        console.log(userData);
       
        const userResult=userData.map((data)=>{
            return{
                id: data.id,
                avatar:data.avatar_url,
                name:data.login,
                url:data.url,
            }
        })
        setUserlist(userResult);
        console.log(userResult)
        setLoding(false);
    }
    useEffect(()=>{
        downloadUsers();
    },[])
    return[userLists,isloading];
}
export default useUserList;