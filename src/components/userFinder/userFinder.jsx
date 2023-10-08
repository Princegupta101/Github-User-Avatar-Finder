import { useState } from "react";
import Search from "../Search/search";
import UserList from "../userList/userList";
import Userdetails from "../userDetails/userDetails";

function UserFinder(){
    const[searchTerm, setSearchTerm]=useState('')
    return(
       <>
       <Search  updateSearchTerm={setSearchTerm}/>
      {(searchTerm.length>0)?<Userdetails name={searchTerm}/>:<UserList/>} 
       </>
    )
}
export default UserFinder;