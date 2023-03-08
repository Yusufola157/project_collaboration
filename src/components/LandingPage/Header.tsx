import react from "react"
import styled from "styled-components"
import p1 from "../Images/p1.svg"
import { NavLink } from "react-router-dom"
const Header=()=>{
    return(
        <Cont>
            <Wrap>
                <Left>
                    <Logo>
                        <Ic src={p1}/>
                    </Logo>
                    <Details>
                        <Nav>Save</Nav>
                        <Nav>Invest</Nav>
                        <Nav>Stories</Nav>
                        <Nav>FAQs</Nav>
                        <Nav>Blog</Nav>
                        <Nav>E-book</Nav>
                    </Details>
                </Left>
                <Right>
                    <LogIn to="/signin">SignIn</LogIn>
                    <Register to="/signup">Craete Free Account</Register>
                </Right>
            </Wrap>
        </Cont>
    )
}
export default Header;
const Cont=styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: white;
padding: 15px 0;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

`
const Wrap=styled.div`
width: 90%;
display: flex;
justify-content: space-between;
align-items: center;
`
const Left=styled.div`
width: 59%;
display: flex;
justify-content: space-between;
align-items: center;
`
const Right=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 28%;
`
const Details=styled.div`
width: 65%;
display: flex;
justify-content: space-between;
align-items: center;
/* background-color: red; */
`
const LogIn=styled(NavLink)`
font-size: 18px;
padding: 10px 15px;
color:black;
border: 1px black solid;
background-color: white;
border-radius: 10px;
cursor: pointer;
text-decoration: none;

`
const Register=styled(NavLink)`
font-size: 18px;
padding: 10px 15px;
color:white;
border: 1px black solid;
background-color: black;
border-radius: 10px;
text-decoration: none;
cursor: pointer;

`
const Nav=styled.div`
font-size:18px ;
`
const Logo=styled.div``
const Ic=styled.img`
width: 160px;
`