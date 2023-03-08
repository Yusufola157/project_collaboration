import react from "react"
import styled from "styled-components"
import { useRoutes } from "react-router"
import LandPage from "../LandingPage/LandingPage"
import SignUp from "../Form/SignUp"
import SignIn from "../Form/SignIn"


const AllRoutes=()=>{
    const element=useRoutes([
        {
            element:<LandPage/>,
            path:"/"
        },
        {
            element:<SignUp/>,
            path:"/signup"
        },
        {
            element:<SignIn/>,
            path:"/signin"
        },
    ])
    return element
}
export default AllRoutes