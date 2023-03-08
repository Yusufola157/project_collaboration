import styled from "styled-components"
import react from "react"
import p1 from "../Images/sign.jpg"
import p2 from "../Images/p2.svg"
import { Link, useNavigate } from "react-router-dom"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query"
import { appDispatch } from "../States/StoreState"
import { LoginUser } from "../States/ReduxState"
import { CreateUser } from "../ApiCors/Api"
// import { type } from "os"

const SignUp=()=>{
    const[show, setShow] = react.useState(false)
    const tog = ()=>{
        setShow(true)
    }
    const navigate = useNavigate();
      const dispatch = appDispatch();
      const schema = yup.object({
        name:yup.string().required(),
        email:yup.string().email().required(),
        password:yup.string().required()
      }).required()
      type formData = yup.InferType<typeof schema>
      const {
        handleSubmit,
        formState:{errors},
        register,
        reset
      }= useForm<formData>({
        resolver:yupResolver(schema)
      })
      const Post = useMutation({
        mutationKey:["post"],
        mutationFn:CreateUser,
        onSuccess:(data)=>{
            dispatch(LoginUser(data.data))
         navigate("/home")
        }
      })
      const submit = handleSubmit((data)=>{
        Post.mutate(data)
        reset()
      })
    return(
        <Cont>
            <Wrap>
                <Img src={p1} />
                <img src={p2} alt="" />
                {/* <div></div> */}
                {/* <h1>hello</h1> */}
                <Form onSubmit={submit}>
                    <h1>Create a Secure Account</h1>
                    <p>Welcome to the future of saving and investments</p>
                    <Ic>
                        <small>Full Name</small>
                        <Inpt placeholder="Full Name" { ...register("name")} bd={errors.name && errors.name.message}/>
                        {/* <span>{}</span> */}
                    </Ic>
                    <Ic>
                        <small>Email</small>
                        <Inpt placeholder="Email" { ...register("email")} bd={errors.name && errors.name.message} />
                        {/* <span>{errors.email && errors.email.message}</span> */}

                    </Ic>
                    <Ic>
                        <small>Password</small>
                        <Inpt placeholder="Password" { ...register("password")} bd={errors.name && errors.name.message}/>
                        <span>{errors.password && errors.password.message}</span>

                    </Ic>
                    <button type="submit">Create Account</button>
                </Form>
                <Links to="/signin">Have an Account SignIn</Links>
            </Wrap>
        </Cont>
    )
}
export default SignUp
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
/* div{
    width: 100%;
    height: 100vh;
    background-color: #00000026;
    position: absolute;
} */
`
const Img = styled.img`
    position: absolute;
    width: 100%;
    height: 100vh;
    background-attachment: fixed;
    overflow: hidden;
`
const Form=styled.form`
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
    cursor: pointer;
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
  
}
small{
    margin-bottom: 10px;
    font-weight: bold;
    // text-decoration: underline;
    color: #070d31;
    // border-bottom: 1px solid black;
}
`
const Inpt= styled.input<{bd:any}>`
      padding: 12px 10px;
    border: none;
    outline: none;
    border-bottom:${({bd})=> bd ? "2px black solid" : "2px red solid"};
    background-color:transparent;
    ::placeholder{
        color: black;
    }
`
const Links=styled(Link)`
    position: absolute;
    bottom:2%;
`