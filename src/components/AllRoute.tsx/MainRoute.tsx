import react from "react"
import styled from "styled-components"
import { useRoutes } from "react-router"
import Home from "../HomePage/Home"
import Account from "../HomePage/Account"
import Invest from "../HomePage/Invest"
import Savings from "../HomePage/SavingPage"
import Piggy from "../HomePage/piggyBank"
import Safe from "../HomePage/safeLock"
import Target from "../HomePage/Target"

const MainRoutes=()=>{
    const element=useRoutes([
        {
            element:<Home/>,
            path:"/home"
        },
        {
            element:<Account/>,
            path:"/account"
        },
        {
            element:<Invest/>,
            path:"/invest"
        },
        {
            element:<Savings/>,
            path:"/saving"
        },
        {
            element:<Piggy/>,
            path:"/piggy"
        },
        {
            element:<Safe/>,
            path:"/safe"
        },
        {
            element:<Target/>,
            path:"/target"
        },
    ])
    return element
}
export default MainRoutes