import react,{useState} from "react"
import styled from "styled-components"
import p1 from "../Images/pro.png"
import {FiRefreshCcw} from "react-icons/fi"
import {BsShield} from "react-icons/bs"
import {TbCurrencyNaira} from "react-icons/tb"
import { useQuery } from "@tanstack/react-query"
// import { OneUser } from "../ApiCors/Api"
import { appSelector } from "../States/StoreState"
import { OneUser } from "../ApiCors/Api"
import { useMutation } from "@tanstack/react-query"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { appDispatch } from "../States/StoreState"
import { useDispatch } from "react-redux"
// import { Send } from "../ApiCors/Api"
import { PayMent } from "../States/ReduxState"
import axios from "axios"
const Home=()=>{
    const user=appSelector((state)=>state.currentUser)
    const fetchData=useQuery({
        queryKey:["users"],
        queryFn:()=>OneUser(user?._id)
    })
    console.log("fet",fetchData)
    const [show,setShow]= useState(false)
    const tog1=()=>{
        setShow(!show)
    }
    const dispatch=useDispatch();
    const schema = yup.object({
      amount:yup.number().required(),
      accountNumber:yup.number().required()
    }).required();
    type formData = yup.InferType<typeof schema>
    const{
        handleSubmit,
        formState:{errors},
        reset,
        register,
    }=useForm<formData>({
      resolver:yupResolver(schema)
    })
     const Post=useMutation({
      mutationKey:["POST"],
      mutationFn:async(data:any)=>{
        return await axios.post(`http://localhost:2093/api/user/${users?._id}/${users?._id}`).then((res:any)=>{
                return res.data
            })
    },
      onSuccess:(data)=>{
          dispatch(PayMent(data?.data))
      }
     })
     const submit=handleSubmit((data)=>{
      Post.mutate(data)
     })
  const users=appSelector((state)=> state.currentUser)
  const UserData=useQuery({
      queryKey:["user"],
      queryFn:()=>OneUser(users?._id)
  })
    return(
        <Cont>
            <Wrap>
                <Head>
                   <Hold>
                    <h1>
                        Jaji,
                    </h1>
                    <p>
                        welcome Back Jaji 😊❗
                    </p>
                    </Hold> 
                    <Profile>
                        <img src={p1} alt="" />
                    </Profile>
                </Head>
                <Bottom>
                    <Bold>
                        <FiRefreshCcw/>
                    </Bold>
                    <Save onClick={tog1}>
                        <p>+ Quick Save</p>
                    </Save>
                </Bottom>
                <AmountDetails>
                    <Amounts>
                        {fetchData?.data ? (<h1>#{fetchData?.data?.data?.wallet[0]?.balance}</h1>): (<h1>#0.0</h1>)}
                    </Amounts>
                    <AccountNumber>
                       {fetchData?.data ? (<h1>{fetchData?.data?.data?.accountNumber}</h1>):(<h1>0</h1>)}
                    </AccountNumber>
                </AmountDetails>
                <Box>
                    <Box1>
                        <Logo>
                            <BsShield/>
                        </Logo>
                        <Holder>
                            <p>Total Savings</p>
                            <Amount>
                                <TbCurrencyNaira/>
                                <h1>0.00</h1>
                            </Amount>
                        </Holder>
                    </Box1>
                    <Box1>
                        <Logo>
                            <BsShield/>
                        </Logo>
                        <Holder>
                            <p>Total Savings</p>
                            <Amount>
                                <TbCurrencyNaira/>
                                <h1>0.00</h1>
                            </Amount>
                        </Holder>
                    </Box1>
                    <Box1>
                        <Logo>
                            <BsShield/>
                        </Logo>
                        <Holder>
                            <p>Total Savings</p>
                            <Amount>
                                <TbCurrencyNaira/>
                                <h1>0.00</h1>
                            </Amount>
                        </Holder>
                    </Box1>
                    {/* <Box1>
                        <Logo>
                            <BsShield/>
                        </Logo>
                        <Holder>
                            <p>Total Savings</p>
                            <Amount>
                                <TbCurrencyNaira/>
                                <h1>0.00</h1>
                            </Amount>
                        </Holder>
                    </Box1> */}
                    {show ? ( <Thir>
                    <Side>
                        <Cancel onClick={tog1}>
                           <h1>X</h1>
                        </Cancel>
                        <Quick>
                            <h1>QuickSave</h1>
                            <small>Enter an asmount and a destination to save to</small>
                        </Quick>
                        <Details onSubmit={submit}>
                            <Mine>
                            <small>Tap here nad enter(e.g 5000)</small>
                            <input type="text" placeholder="ap here nad enter accountNumber(e.g 5000)" {...register("accountNumber")} />
                            </Mine>
                            <Mine>
                            <small>Tap here nad enter(e.g 5000)</small>
                            <input type="text" placeholder="ap here nad enter(e.g 5000)" {...register("amount")} />
                            </Mine>
                            <Mine>
                                <button type="submit">Pay</button>
                            </Mine>
                        </Details>
                    </Side>
                 </Thir>):(null)}
                </Box>
            </Wrap>
        </Cont>
    )
}
export default Home;
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
const Details=styled.form`
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
const AmountDetails=styled.div`
width: 90%;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom:50px;
`
const Amounts=styled.div`
width: 300px;
/* background-color: #094c8b; */
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

display: flex;
/* justify-content: space-b; */
align-items: center;
padding: 20px;
border-radius: 10px;
margin: 0 10px;
`
const AccountNumber=styled.div`
width: 300px;
/* background-color: #094c8b; */
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

display: flex;
/* justify-content: space-b; */
align-items: center;
padding: 20px;
border-radius: 10px;
margin: 0 10px;
`
const Logo=styled.div`
font-size: 35px;
color: #9b0606;
font-weight:bold;
margin-right: 20px;
`
const Amount=styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 35px;
color: #10960b;
h1{
    font-size: 30px;
    color: white;
}
`
const Holder=styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
p{
    color: #e2dddd;
    margin-bottom: -15px;
}
`
const Box1=styled.div`
width: 300px;
background-color: #094c8b;
display: flex;
/* justify-content: space-b; */
align-items: center;
padding: 20px;
border-radius: 10px;
margin: 0 10px;
:nth-child(2){
background-color: #75098b;  
}
:nth-child(3){
background-color: #000000;  
}

`
const Box=styled.div`
width: 90%;
display: flex;
justify-content: center;
align-items: center;
/* margin-top:10px; */
// overflow: hidden;
`
const Bottom=styled.div`
width: 90%;
display: flex;
justify-content: space-between;
align-items: center;
`
const Save=styled.div`
p{
    padding: 10px 40px;
    background-color: #094c8b;
    color: white;
    border-radius: 10px 10px 10px 0;
}
`
const Bold=styled.div``
const Cont=styled.div`
width: 40%;
height: 100%;
/* background-color: blue; */
margin-top: -180px;
// padding-left: 100px;
`
const Wrap=styled.div`
width: 1100px;
height: 100vh;
/* background-color: red; */
margin-left: 230px;

padding-top: 150px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Hold=styled.div`
h1{
    margin-bottom: -10px;
}
p{
    color: gray;
}
`
const Head=styled.div`
width: 90%;
display: flex;
justify-content: space-between;
align-items: center;
`
const Profile=styled.div`
img{
    width: 50px;
}
`