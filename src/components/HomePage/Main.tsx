import styled from "styled-components";
import SideNav from "./SideNav";
import MainRoutes from "../AllRoute.tsx/MainRoute";

const Main=()=>{
    return(
      <Cont>
          <SideNav/>
       <Sec>
       <MainRoutes/>
       </Sec>
      </Cont>
    )
}
export default Main;
const Cont=styled.div`
    display: flex;
    /* justify-content: center;
    align-items: center; */
    /* width: 100%; */
`
const Sec=styled.div`
/* display: flex; */
    flex: 1;
    /* width: 100%; */
`