import styled from "styled-components"
import t1 from "../Images/pro.png"
import {TbCurrencyNaira} from "react-icons/tb"
import { NavLink } from "react-router-dom"

const safe=()=>{
    return(
        <Cont>
            <Wrap>
            <Head>
                   <Hold>
                    <h1>
                        SafeLock,
                    </h1>
                    <p>
                        let see how well you are doing
                    </p>
                    </Hold> 
                    <Profile>
                        <img src={t1} alt="" />
                    </Profile>
                </Head>
                <Guild>
                <Nav>
                       <NavLink to="/piggy" style={({isActive})=>{
                        return{
                            opacity:isActive ? "1" : "0.5",
                            textDecoration :isActive ? "none" : "none"

                        }
                       }}>
                       <Icon></Icon>
                        <p>Piggybank</p>
                       </NavLink>
                    </Nav>
                    <Nav>
                    <NavLink to="/safe" style={({isActive})=>{
                        return{
                            opacity:isActive ? "1" : "0.5",
                            textDecoration :isActive ? "none" : "none"

                        }
                       }}>
                       <Icon></Icon>
                        <p>Safelock</p>
                       </NavLink>
                    </Nav>
                    <Nav>
                    <NavLink to="/target" style={({isActive})=>{
                        return{
                            opacity:isActive ? "1" : "0.5",
                            textDecoration :isActive ? "none" : "none"

                        }
                       }}>
                       <Icon></Icon>
                        <p>Target</p>
                       </NavLink>
                    </Nav>
                </Guild>
                <Sec>
                    <One>
                        <div>
                        <p>Total Balance</p>
                        <Build>
                            <Ic>
                                <TbCurrencyNaira/>
                            </Ic>
                            <h1>0.00</h1>
                        </Build>
                        </div>
                        <Save>
                        <p>+ Safelock</p>
                    </Save>
                    </One>
                    <Two>
                        <p>INTEREST RATE</p>
                        <h3>10%</h3>
                        <small>Per Annum</small>
                    </Two>
                 </Sec>
            </Wrap>
        </Cont>
    )
}
export default safe;
const Save=styled.div`
cursor: pointer;
p{
    padding: 10px 40px;
    background-color: #10c710;
    color: white;
    border-radius: 10px 10px 10px 0;
}
`
const Two=styled.div`
/* padding: 10px; */
display: flex;
width: 300px;
justify-content: center;
flex-direction: column;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
padding: 10px 20px;
border-radius: 10px;
h3{
    color: #10c710;
    font-size: 20px;
}
p{
    font-size: 10px;
}
`
const Ic=styled.div`
font-size: 40px;
color: #10c710;
`
const Build=styled.div`
display: flex;
/* justify-content: center; */
align-items: center;
/* flex-direction: column; */
h1{
    color: #10c710;
}
`
const One=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 500px;
/* border: 1px solid black; */
/* flex-direction:column; */
padding: 14px 10px;
border-radius: 10px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
margin-right: 50px;
p{
    margin-bottom: -10px;
    font-size: 12px;
}
`
const Sec=styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 30px;
`
const Icon=styled.div`
width: 15px;
height: 15px;
background-color: #10c710;
border-radius: 10px 10px 10px 0;
`
const Nav=styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-left: 60px;
p{
    font-size: 17px;
    margin-left: 5px;
}
`
const Guild=styled.div`
display: flex;
width: 80%;
/* justify-content: center; */
align-items: center;
border-bottom: 2px gray solid;
`
const Cont=styled.div`
width: 100%;
height: 100%;
/* background-color: blue; */
margin-top: -22px;
`
const Wrap=styled.div`
/* width: 100%; */
height: 100vh;
/* background-color: red; */
margin-left: 260px;
padding-top: 50px;
display: flex;
/* justify-content: center; */
align-items: center;
flex-direction: column;
`
const Head=styled.div`
width: 90%;
display: flex;
justify-content: space-between;
align-items: center;
`
const Hold=styled.div`
h1{
    margin-bottom: -10px;
}
p{
    color: gray;
}
`
const Profile=styled.div`
img{
    width: 50px;
}
`