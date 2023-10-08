import { Route, Routes } from "react-router-dom";
import UserFinder from "../userFinder/userFinder";
import Userdetails from "../userDetails/userDetails";

function CustomRoutes(){
    return(
        <Routes>
            <Route  path="/" element={<UserFinder/>}/>
          <Route  path="/:id" element={<Userdetails/>}/>
        </Routes>     
    )
}
export default CustomRoutes;