import header from "../header";
import { useRoutes } from "react-router-dom";
import Detail from "./DEtail";

const Route=()=>{
    const element=useRoutes([
        {
            path:"/",
            element:<Detail/>
        }
    ])
    return element
}
export default Route