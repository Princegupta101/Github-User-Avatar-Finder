import useUserList from "../../customHooks/useUserList";
import UserGallary from "../userGallary/userGallary";

function UserList(){
 const[userLists,isloading]=useUserList()
    return(
        <div
             className="flex mt-12 items-center flex-row flex-wrap gap-4 justify-around mb-10">
             {(isloading)?
             <div className=" text-lg ">Loading</div>:
             userLists.map((p)=>
             <UserGallary key={p.id} name={p.name} id={p.id} avatar={p.avatar} />)
             }
        </div>
       
    )
}
export default UserList;