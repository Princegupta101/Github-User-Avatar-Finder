import axios from "axios";
import { useEffect, useState } from "react";
function useUserList(){
    const[isloading , setLoding]=useState(true)
    const[userLists, setUserlist]=useState([])

    async function downloadUsers(){ 
        try {
            // fetch the users data 
            const response=await axios.get('  https://api.github.com/users'); 
            const userData=response.data;
            // iterate to every user 
            const userResult=userData.map((data)=>{
                return{
                    id: data.id,
                    avatar:data.avatar_url,
                    name:data.login,
                    url:data.url,
                }
            })
            //set the imp data
            setUserlist(userResult);
            
        } catch (error) {
            console.log("something went wrong");
        }
        setLoding(false);
    }
    useEffect(()=>{
        downloadUsers();
    },[])
    return[userLists,isloading];
}
export default useUserList;