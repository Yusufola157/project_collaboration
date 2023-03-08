import styled from "styled-components"
import react,{useState} from "react"
import t1 from "../Images/pro.png"
import {TbCurrencyNaira} from "react-icons/tb"
import { NavLink } from "react-router-dom"
const Piggy=()=>{
    const [show,setShow]= useState(false)
    const tog1=()=>{
        setShow(!show)
    }
    return(
        <Cont>
            <Wrap>
            <Head>
                   <Hold>
                    <h1>
                        Piggybank,
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
                        <Save onClick={tog1}>
                        <p>+ Quick Save</p>
                    </Save>
                    </One>
                    <Two>
                        <p>INTEREST RATE</p>
                        <h3>10%</h3>
                        <small>Per Annum</small>
                    </Two>
                 </Sec>
                {show ? ( <Thir>
                    <Side>
                        <Cancel onClick={tog1}>
                           <h1>X</h1>
                        </Cancel>
                        <Quick>
                            <h1>QuickSave</h1>
                            <small>Enter an asmount and a destination to save to</small>
                        </Quick>
                        <Details>
                            <Mine>
                            <small>Tap here nad enter(e.g 5000)</small>
                            <input type="text" placeholder="ap here nad enter(e.g 5000)" />
                            </Mine>
                            <Mine>
                            <small>Tap here nad enter(e.g 5000)</small>
                            <input type="text" placeholder="ap here nad enter(e.g 5000)" />
                            </Mine>
                            <Mine>
                                <button>Pay</button>
                            </Mine>
                        </Details>
                    </Side>
                 </Thir>):(null)}
            </Wrap>
        </Cont>
    )
}
export default Piggy;
const Mine=styled.div`
display: flex;
flex-direction: column;
input{
    padding:15px 10px;
    margin:10px 0;
    width: 300px;
}
button{
    padding:15px 10px;
    margin:10px 0;
    width: 300px;
    color:white;
    background-color:blue;
    border-radius: 10px;
}
`
const Details=styled.div`
width:100%;
display: flex;
margin-top: 30px;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Quick=styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    h1{
        color: blue;
        margin-bottom: -2px;
    }
    small{
        color: gray;
    }
`
const Cancel=styled.div`
    cursor: pointer;
    color: red;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    h1{
        margin-right: 40px;
    }
`
const Side=styled.div`
height: 100vh;
width: 400px;
background-color: #fffbfb;
position: relative;
flex-direction: column;
transition:ease-in 3s;
`
const Thir=styled.div`
width: 100%;
height: 100vh;
background-color: #00000092;
display: flex;
justify-content: flex-end;
align-items: center;
position: absolute;
top: 0;
left: 0;
`
const Save=styled.div`
cursor: pointer;
p{
    padding: 10px 40px;
    background-color: #094c8b;
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
    color: blue;
    font-size: 20px;
}
p{
    font-size: 10px;
}
`
const Ic=styled.div`
font-size: 40px;
color: blue;
`
const Build=styled.div`
display: flex;
/* justify-content: center; */
align-items: center;
/* flex-direction: column; */
h1{
    color: blue;
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
background-color: blue;
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