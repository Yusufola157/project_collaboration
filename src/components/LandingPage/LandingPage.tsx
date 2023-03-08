import react from "react"
import styled from "styled-components"
import Header from "./Header"
import p1 from "../Images/p1.svg"
import p3 from "../Images/p3.png"
import p4 from "../Images/p4.png"
import p5 from "../Images/p5.png"
import p6 from "../Images/p6.png"
import p7 from "../Images/p7.png"
import p8 from "../Images/p8.png"
import p9 from "../Images/p9.png"
import p10 from "../Images/p10.png"
import p11 from "../Images/p11.png"
import {BsFillArrowRightCircleFill} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"

const Home=()=>{
    return(
        <Cont>
                <Header/>
            <Wrap>
              <Bodys>
                  <Left>
                    <One><h1>The better way<br/> to save & invest</h1></One>
                    <Two>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, dolores!<br/>Lorem ipsum dolor sit amet.uyufe</p>
                    </Two>
                    <Three>
                    <Register>Craete Free Account</Register>
                    </Three>
                  </Left>
                  <Right>
                    <Img src={p3}/>
                    <Img2 src={p4}/>
                    <Img3 src={p5}/>
                  </Right>
              </Bodys>
            </Wrap>
               <Second>
                <Build>
                    <img src={p6} alt="" />
                </Build>
                <Det>
                    <h1>Your security is our priority</h1>
                    <p>PiggyVest uses the highest level of Internet Security and it is secured by 256 bits SSL security encryption to ensure that your information is comepletely protected from fraud</p>
                    <span>Learn more</span>
                </Det>
               </Second>
               <Third>
                <Savings>
                    <h1>4 ways to build<br/> your savings</h1>
                    <p>Earn 5%-15% when you save with any of these PiggyVest plans.</p>
                    <Button>Start Saving</Button>
                </Savings>
                <Ways>
                    <Box>
                        <Mini src={p7}/>
                        <h2>Automated Savings</h2>
                        <p>Build a dedicated savings faster on your terms automatically or manually.</p>
                        <Arrow>
                            <Bow>
                                <BsFillArrowRightCircleFill/>
                            </Bow>
                            <h3>Piggy Bank</h3>
                        </Arrow>
                    </Box>
                    <Box>
                        <Mini src={p8}/>
                        <h2>Fixed Savings</h2>
                        <p>Lock money away for a fixed duration with no access to it until maturity. It’s like having a custom fixed deposit.</p>
                        <Arrow>
                            <Bow>
                                <BsFillArrowRightCircleFill/>
                            </Bow>
                            <h3>Safe Lock</h3>
                        </Arrow>
                    </Box>
                    <Box>
                        <Mini src={p9}/>
                        <h2>Goal-oriented Savings</h2>
                        <p>Reach all your savings goals faster. Save towards multiple goals on your own or with a group.</p>
                        <Arrow>
                            <Bow>
                                <BsFillArrowRightCircleFill/>
                            </Bow>
                            <h3>Target Saving</h3>
                        </Arrow>
                    </Box>
                    <Box>
                        <Mini src={p10}/>
                        <h2>Flexible Savings</h2>
                        <p>Save, transfer, withdraw, manage and organise your money for free at any time.</p>
                        <Arrow>
                            <Bow>
                                <BsFillArrowRightCircleFill/>
                            </Bow>
                            <h3>Flex Naira</h3>
                        </Arrow>
                    </Box>
                </Ways>
               </Third>
               <Forth>
                <Lef src={p11}/>
                <Rig>
                    <p>Up To 25% Returns</p>
                    <h1>Access investment opportunities</h1>
                    <span>Invest securely and confidently on the go. Grow your money confidently by investing in pre-vetted investment opportunities.</span>
                    <div>Learn more about Investments </div>
                </Rig>
               </Forth>
               <Footer>
                  <Item1>
                  <Sub1>
                    <img src={p1} alt="" />
                </Sub1>
                <Sub2>
                    <Title>
                        <h3>Product</h3>
                        <p>piggy Bank</p>
                        <p>Invest</p>
                        <p>Safe Lock</p>
                        <p>Target Saving</p>
                        <p>Flex Naira</p>
                    </Title>
                    <Title>
                        <h3>Company</h3>
                        <p>About</p>
                        <p>FAQs</p>
                        <p>Blog</p>
                    </Title>
                    <Title>
                        <h3>Legal</h3>
                        <p>Terms</p>
                        <p>Privacy</p>
                        <p>Security</p>
                    </Title>
                </Sub2>
                <Sub3>
                    <Icon>
                        <BsFacebook/>
                        <BsTwitter/>
                        <BsInstagram/>
                    </Icon>
                    <span>Teamsot house Abdulraheem Okene<br/> close. victoria island Lagos,Nigeria</span>
                    <p>contact@piggyvest.com</p>
                    <div>+234 345-4443-345</div>
                </Sub3>
                  </Item1>
                  <Item2>
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis culpa, sint laboriosam<br/> quaerat consequuntur dolores.</p>
                  </Item2>
               </Footer>
        </Cont>
    )
}
export default Home;
const Item2=styled.div`
text-align: center;
p{
    color: gray;
}
`
const Item1=styled.div`
display: flex;
width: 100%;
justify-content: space-around;
/* background-color: white; */
/* padding-top:50px; */
padding-bottom:60px;
`
const Icon=styled.div`
display: flex;
width: 40%;
margin-bottom:40px;
font-size: 30px;
justify-content: space-between;
`
const Footer=styled.div`
display: flex;
width: 100%;
justify-content: space-around;
background-color: white;
padding-top:50px;
padding-bottom:200px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
flex-direction: column;
/* align-items: center; */
`
const Title=styled.div`
height: 200px;
p{
    font-size: 16px;
}
`
const Sub2=styled.div`
width: 50%;
/* height: 100px; */
display: flex;
justify-content: space-between;
align-items: center;
`
const Sub1=styled.div``
const Sub3=styled.div`
display: flex;
flex-direction: column;

`
const Forth=styled.div`
width:65%;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 150px;
margin-bottom:100px;

`
const Lef=styled.img`
width: 300px;
`
const Rig=styled.div`
width: 50%;
display: flex;
flex-direction: column;
/* background-color: red; */
h1{
    font-size:50px;
    margin: 10px 0;
}
p{
    margin: 10px 0;
    color: purple;
    padding: 8px;
    border-radius: 10px;
    width: 150px;
    background-color: #c5c0c0;
    font-weight: 700;
    text-align: center;
}
span{
    margin: 10px 0;
    /* color: purple; */
     font-size: 18px;
}
div{
    color: purple;

}
`
const Mini=styled.img`
width: 50px;
`
const Arrow=styled.div`
display:flex;
width:130px;
justify-content:space-between;
align-items:center;
h3{
    font-weight:lighter;
    font-size: 18px;
}
`
const Bow=styled.div`
font-size: 25px;
/* background-color: lightblue; */
color: gray;
`
const Third=styled.div`
display: flex;
width: 90%;
justify-content: space-between;
background-color: whitesmoke;
`
const Savings=styled.div`
width: 35%;
display: flex;
flex-direction: column;
`
const Ways=styled.div`
width: 60%;
display: flex;
flex-wrap: wrap;
/* background-color: green; */
justify-content: space-between;
`
const Box=styled.div`
width: 40%;
height: 300px;
/* background-color: red; */
border-radius: 20px;
padding: 20px 10px 20px 40px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
display: flex;
flex-direction: column;
margin-bottom: 30px;
`
const Second=styled.div`
display: flex;
width: 60%;
justify-content: center;
align-items: center;
margin: 120px 0 150px 100px;
padding:20px 0;
`
const Build=styled.div`
    margin-right:30px;

img{
    width: 100px;
}
`
const Det=styled.div`
display: flex;
flex-direction: column;
span{
    color:blue;
    font-size: 18px;
    font-weight: bold;
}
p{
    color:gray;
}
`
const Cont=styled.div`
display: flex;
justify-content: center;
align-items:center;
flex-direction: column;
background-color: whitesmoke;
`
const Wrap=styled.div`
display: flex;
width: 100%;
height: 100vh;
justify-content: center;
align-items: center;
`
const Left=styled.div`
display: flex;
flex-direction: column;
`
const One=styled.div`
h1{
    font-size: 60px;
    margin-bottom: 10px;

}
`
const Two=styled.div`
margin-bottom: 10px;

`
const Three=styled.div`
margin-bottom: 10px;

`
const Right=styled.div`
position: relative;
width: 40%;
/* background-color: red; */
/* top: -30%; */

`
const Img=styled.img`
position: relative;
`
const Img3=styled.img`
position: absolute;
width: 200px;
bottom: 10%;
right: -12%;
/* bottom: 0; */
`
const Img2=styled.img`
position: absolute;
width: 200px;
top: 30%;
left: -12%;
/* bottom: 0; */
`
const Bodys=styled.div`
width: 85%;
display: flex;
justify-content: space-between;
align-items: center;
height: 100%;
/* position: relative; */
`
const Button=styled.button`
font-size: 20px;
padding: 15px 12px;
color:white;
width: 150px;
border: 1px black solid;
background-color: black;
border-radius: 10px;
`
const Register=styled.button`
font-size: 20px;
padding: 10px 15px;
color:white;
border: 1px black solid;
background-color: black;
border-radius: 10px;
cursor: pointer;
`