import react from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom"
import p1 from "../Images/p2.svg"
import { BiMenu } from "react-icons/bi"
import { AiFillHome } from "react-icons/ai"
import { GiBullseye } from "react-icons/gi"
import { BsFillPersonFill } from "react-icons/bs"
import { IoIosRocket } from "react-icons/io"
const SideNav=()=>{
    const [show, setShow] = react.useState(true)
    const tog=()=>{
        setShow(!show)
    }
    return(
        <div>
          {show ? ( 
            <Cont wdd="fff">
            <Wrap>
                <Ic>
                    <Icons onClick={tog}>
                    <BiMenu/>
                    </Icons>
                    {show ? (<Img sh="jj">
                    <img src={p1} alt="" />
                    </Img>) : (<Img sh="">
                    <img src={p1} alt="" />
                    </Img>)}
                </Ic>
                <Ip>
                    <Icon>
                        <AiFillHome/>
                    </Icon>
             {show ? ( <Details df="">
              <NavLink to="/home" style={({isActive})=>{
                    return{
                        textDecoration:isActive ? "none" : "none",
                        color:isActive ? "#05325c" : "white",
                        backgroundColor:isActive ? "white" : "",
                        padding:isActive ? "10px 30px" : "0 30px",
                        borderRadius:isActive ? "10px 10px 10px 0" : ""
                    }
                }}>Home</NavLink>
              </Details>) : ( <Details df="gg">
              <NavLink to="/home" style={({isActive})=>{
                    return{
                        textDecoration:isActive ? "none" : "none",
                        color:isActive ? "#05325c" : "white",
                        backgroundColor:isActive ? "white" : "",
                        padding:isActive ? "10px 30px" : "0 30px",
                        borderRadius:isActive ? "10px 10px 10px 0" : ""
                    }
                }}>Home</NavLink>
              </Details>)}
                </Ip>
                <Ip>
                <Icon>
                        <GiBullseye/>
                    </Icon>
                   {show ? ( <Details df="">
                <NavLink to="/invest" style={({isActive})=>{
                    return{
                        textDecoration:isActive ? "none" : "none",
                        color:isActive ? "#05325c" : "white",
                        backgroundColor:isActive ? "white" : "",
                        padding:isActive ? "10px 30px" : "0 30px",
                        borderRadius:isActive ? "10px 10px 10px 0" : ""
                    }
                }}>Savings</NavLink>
                </Details>) : ( <Details df="hh">
                <NavLink to="/invest" style={({isActive})=>{
                    return{
                        textDecoration:isActive ? "none" : "none",
                        color:isActive ? "#05325c" : "white",
                        backgroundColor:isActive ? "white" : "",
                        padding:isActive ? "10px 30px" : "0 30px",
                        borderRadius:isActive ? "10px 10px 10px 0" : ""
                    }
                }}>Savings</NavLink>
                </Details>)}
                </Ip>
                <Ip>
                <Icon>
                        <IoIosRocket/>
                    </Icon>
                   {show ? ( <Details df="">
                <NavLink to="/saving" style={({isActive})=>{
                    return{
                        textDecoration:isActive ? "none" : "none",
                        color:isActive ? "#05325c" : "white",
                        backgroundColor:isActive ? "white" : "",
                        padding:isActive ? "10px 30px" : "0 30px",
                        borderRadius:isActive ? "10px 10px 10px 0" : ""
                    }
                }}>Invest</NavLink>
                </Details>):( <Details df="jj">
                <NavLink to="/saving" style={({isActive})=>{
                    return{
                        textDecoration:isActive ? "none" : "none",
                        color:isActive ? "#05325c" : "white",
                        backgroundColor:isActive ? "white" : "",
                        padding:isActive ? "10px 30px" : "0 30px",
                        borderRadius:isActive ? "10px 10px 10px 0" : ""
                    }
                }}>Invest</NavLink>
                </Details>)}
                </Ip>
                <Ip>
                <Icon>
                        <BsFillPersonFill/>
                    </Icon>
                    {show ? (<Details df="">
                <NavLink to="/account" style={({isActive})=>{
                    return{
                        textDecoration:isActive ? "none" : "none",
                        color:isActive ? "#05325c" : "white",
                        backgroundColor:isActive ? "white" : "",
                        padding:isActive ? "10px 30px" : "0 30px",
                        borderRadius:isActive ? "10px 10px 10px 0" : ""
                    }
                }}>Account</NavLink>
                </Details>) :(<Details df="hh">
                <NavLink to="/account" style={({isActive})=>{
                    return{
                        textDecoration:isActive ? "none" : "none",
                        color:isActive ? "#05325c" : "white",
                        backgroundColor:isActive ? "white" : "",
                        padding:isActive ? "10px 30px" : "0 30px",
                        borderRadius:isActive ? "10px 10px 10px 0" : ""
                    }
                }}>Account</NavLink>
                </Details>)}
                </Ip>
            </Wrap>
            </Cont>
            ) : (  
                <Cont wdd="">
            <Wrap >
                <Ic>
                    <Icons onClick={tog} >
                    <BiMenu/>
                    </Icons>
                    {show ? (<Img sh="jj">
                    <img src={p1} alt="" />
                    </Img>) : (<Img sh="">
                    <img src={p1} alt="" />
                    </Img>)}
                </Ic>
                <Ip>
                    <Icon>
                        <AiFillHome/>
                    </Icon>
                    {show ? ( <Details df="">
              <NavLink to="/home" style={({isActive})=>{
                    return{
                        textDecoration:isActive ? "none" : "none",
                        color:isActive ? "#05325c" : "white",
                        backgroundColor:isActive ? "white" : "",
                        padding:isActive ? "10px 30px" : "0 30px",
                        borderRadius:isActive ? "10px 10px 10px 0" : ""
                    }
                }}>Home</NavLink>
              </Details>) : ( <Details df="gg">
              <NavLink to="/home" style={({isActive})=>{
                    return{
                        textDecoration:isActive ? "none" : "none",
                        color:isActive ? "#05325c" : "white",
                        backgroundColor:isActive ? "white" : "",
                        padding:isActive ? "10px 30px" : "0 30px",
                        borderRadius:isActive ? "10px 10px 10px 0" : ""
                    }
                }}>Home</NavLink>
              </Details>)}
                </Ip>
                <Ip>
                <Icon>
                        <GiBullseye/>
                    </Icon>
                    {show ? ( <Details df="">
                <NavLink to="/invest" style={({isActive})=>{
                    return{
                        textDecoration:isActive ? "none" : "none",
                        color:isActive ? "#05325c" : "white",
                        backgroundColor:isActive ? "white" : "",
                        padding:isActive ? "10px 30px" : "0 30px",
                        borderRadius:isActive ? "10px 10px 10px 0" : ""
                    }
                }}>Savings</NavLink>
                </Details>) : ( <Details df="hh">
                <NavLink to="/invest" style={({isActive})=>{
                    return{
                        textDecoration:isActive ? "none" : "none",
                        color:isActive ? "#05325c" : "white",
                        backgroundColor:isActive ? "white" : "",
                        padding:isActive ? "10px 30px" : "0 30px",
                        borderRadius:isActive ? "10px 10px 10px 0" : ""
                    }
                }}>Savings</NavLink>
                </Details>)}
                </Ip>
                <Ip>
                <Icon>
                        <IoIosRocket/>
                    </Icon>
                    {show ? ( <Details df="">
                <NavLink to="/saving" style={({isActive})=>{
                    return{
                        textDecoration:isActive ? "none" : "none",
                        color:isActive ? "#05325c" : "white",
                        backgroundColor:isActive ? "white" : "",
                        padding:isActive ? "10px 30px" : "0 30px",
                        borderRadius:isActive ? "10px 10px 10px 0" : ""
                    }
                }}>Invest</NavLink>
                </Details>):( <Details df="jj">
                <NavLink to="/saving" style={({isActive})=>{
                    return{
                        textDecoration:isActive ? "none" : "none",
                        color:isActive ? "#05325c" : "white",
                        backgroundColor:isActive ? "white" : "",
                        padding:isActive ? "10px 30px" : "0 30px",
                        borderRadius:isActive ? "10px 10px 10px 0" : ""
                    }
                }}>Invest</NavLink>
                </Details>)}
                </Ip>
                <Ip>
                <Icon>
                        <BsFillPersonFill/>
                    </Icon>
                    {show ? ( <Details df="">
                <NavLink to="/account" style={({isActive})=>{
                    return{
                        textDecoration:isActive ? "none" : "none",
                        color:isActive ? "#05325c" : "white",
                        backgroundColor:isActive ? "white" : "",
                        padding:isActive ? "10px 30px" : "0 30px",
                        borderRadius:isActive ? "10px 10px 10px 0" : ""
                    }
                }}>Account</NavLink>
                </Details>):( <Details df="jj">
                <NavLink to="/account" style={({isActive})=>{
                    return{
                        textDecoration:isActive ? "none" : "none",
                        color:isActive ? "#05325c" : "white",
                        backgroundColor:isActive ? "white" : "",
                        padding:isActive ? "10px 30px" : "0 30px",
                        borderRadius:isActive ? "10px 10px 10px 0" : ""
                    }
                }}>Account</NavLink>
                </Details>)}
                </Ip>
            </Wrap>
            </Cont>
            )}
            </div>
    )
}
export default SideNav;
const Cont=styled.div<{wdd:string}>`
width: ${({wdd})=>wdd ? "20%" : ""};
position: fixed;
`
const Wrap=styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
/* justify-content: center; */
/* align-items:center; */
/* padding-left: 20px; */
background-color: #05325c;
`
const Ip=styled.div`
width: 100px;
color: white;
padding-left: 20px;
margin-top: 50px;
margin-left: -20px;
display: flex;
/* justify-content: space-around; */
align-items: center;
`
const Ic=styled.div`
display: flex;
justify-content: space-around;
align-items: center;
margin-top: 30px;
width: 90%;
margin-left: 20px;

img{
    width: 120px;
    margin-left: 10px;
}
`
const Img=styled.div<{sh:string}>`
       width: 160px;
       display: ${({sh})=>sh ? "block" : "none"};
`
const Icons = styled.div`
font-size: 30px;
color: white;
margin-right: 20px;
`
const Details = styled.div<{df:string}>`
display: ${({df})=>df ? "none" : "block"};
`
const Icon = styled.div`
font-size: 30px;
color: white;
margin-left: 20px;
/* margin-right: 10px; */
`