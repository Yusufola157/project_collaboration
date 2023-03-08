import styled from "styled-components"
import p1 from "../Images/sign.jpg"
import p2 from "../Images/p2.svg"
const SignIn=()=>{
    return(
        <Cont>
            <Wrap>
                <Img src={p1} />
                <img src={p2} alt="" />
                {/* <h1>hello</h1> */}
                <Form>
                    <h1>Login To Your Account</h1>
                    <p>Welcome to the future of saving and investments</p>
                    <Ic>
                        <small>Email</small>
                        <input placeholder="Email"/>
                    </Ic>
                    <Ic>
                        <small>Password</small>
                        <input placeholder="Password"/>
                    </Ic>
                    <button>Sign In</button>
                </Form>
            </Wrap>
        </Cont>
    )
}
export default SignIn
const Cont=styled.div`
width: 100%;
`
const Wrap=styled.div`
position: relative;
display: flex;
width: 100%;
height: 100vh;
justify-content: center;
align-items: center;
/* h1{
    position: absolute;
} */
img{
    position: absolute;
    // z-index: 99;
    top: 0;
    // bottom: 20%;
    // margin-top: -200px;
}
`
const Img = styled.img`
    position: absolute;
    width: 100%;
    height: 100vh;
    background-attachment: fixed;
    overflow: hidden;
    // padding-top: 30px;
`
const Form=styled.div`
position: absolute;
display: flex;
width: 350px;
flex-direction: column;
padding: 10px 40px;
background-color: #ffffff4c;
border-radius: 20px;
bottom: 5%;
button{
    color: white;
    background-color: #0a1119;
    width: 350px;
    padding: 15px 15px;
    border: 0;
    outline: none;
    margin-bottom: 20px;
    // padding: 10px 0;
}
h1{
    text-align: center;
    color: #0a1119;
    font-size: 28px;
}
p{
    text-align: center;
    margin-top: -10px;
    margin-bottom: 30px;
    color: #201b1b;
}
`
const Ic=styled.div`
display: flex;
flex-direction: column;
margin-bottom: 25px;
input{
    padding: 12px 10px;
    border: none;
    outline: 0;
    border-bottom: 2px black solid;
    background-color:transparent;
    ::placeholder{
        color: black;
    }
}
small{
    margin-bottom: 10px;
    font-weight: bold;
    // text-decoration: underline;
    color: #070d31;
    // border-bottom: 1px solid black;
}
`