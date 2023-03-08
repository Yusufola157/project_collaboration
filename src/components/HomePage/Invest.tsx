import react from "react"
import styled from "styled-components"
import t1 from "../Images/pro.png"
import t2 from "../Images/set.jpg"
import {FiRefreshCcw} from "react-icons/fi"
import {BsFillArrowRightCircleFill} from "react-icons/bs"
import {TbCurrencyNaira} from "react-icons/tb"
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
import { Link } from "react-router-dom"
import { appSelector } from "../States/StoreState"
import { useQuery } from "@tanstack/react-query"
import { OneUser } from "../ApiCors/Api"
import { useMutation } from "@tanstack/react-query"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { appDispatch } from "../States/StoreState"
import { useDispatch } from "react-redux"
// import { Send } from "../ApiCors/Api"
import { PayMent } from "../States/ReduxState"
const Home=()=>{
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
    //    const Post=useMutation({
    //     mutationKey:["POST"],
    //     mutationFn: Send,
    //     onSuccess:(data)=>{
    //         dispatch(PayMent(data?.data))
    //     }
    //    })
    //    const submit=handleSubmit((data)=>{
    //     Post.mutate(data)
    //    })
    const user=appSelector((state)=> state.currentUser)
    const UserData=useQuery({
        queryKey:["user"],
        queryFn:()=>OneUser(user?._id)
    })
    return(
        <Cont>
            <Wrap>
                <Head>
                   <Hold>
                    <h1>
                        Savings,
                    </h1>
                    <p>
                        let see how well you are doing
                    </p>
                    </Hold> 
                    <Profile>
                        <img src={t1} alt="" />
                    </Profile>
                </Head>
                 <Sec>
                    <One>
                        <p>Total Balance</p>
                        <Build>
                            <Ic>
                                <TbCurrencyNaira/>
                            </Ic>
                            {UserData?.data ? (<h1>{UserData?.data?.data?.wallet[0].balance}</h1>):(<h1>0</h1>) }
                        </Build>
                    </One>
                    <Two>
                        <p>COMPLETE YOUR SETUP</p>
                        <img src={t2} alt="" />
                    </Two>
                 </Sec>
                 <Ways>
                    <Box>
                        <Link to="/piggy" style={{textDecoration:"none"}}>
                        <Mini src={p7}/>
                        <h3>Piggybank</h3>
                        <p>Build a dedicated savings faster on your terms automatically or manually.</p>
                        <Arrow>
                            <Bow>
                                <TbCurrencyNaira/>
                            </Bow>
                            <small>0.00</small>
                        </Arrow>
                        </Link>
                    </Box>
                    <Box>
                       <Link to="/safe" style={{textDecoration:"none"}}>
                       <Mini src={p8}/>
                        <h3>Safelock</h3>
                        <p>Lock money away for a fixed duration with no access to it until maturity. It’s like having a custom fixed deposit.</p>
                        <Arrow>
                            <Bow>
                                <TbCurrencyNaira/>
                            </Bow>
                            <small>0.00</small>
                        </Arrow></Link>
                    </Box>
                    <Box>
                        <Link to="/target" style={{textDecoration:"none"}}>
                        <Mini src={p9}/>
                        <h3>Target</h3>
                        <p>Reach all your savings goals faster. Save towards multiple goals on your own or with a group.</p>
                        <Arrow>
                            <Bow>
                                <TbCurrencyNaira/>
                            </Bow>
                            <small>0.00</small>
                        </Arrow>
                        </Link>
                    </Box>
                    <Box>
                        <Mini src={p10}/>
                        <h2>Flexible Savings</h2>
                        <p>Save, transfer, withdraw, manage and organise your money for free at any time.</p>
                        <Arrow>
                            <Bow>
                                <TbCurrencyNaira/>
                            </Bow>
                            <small>0.00</small>
                        </Arrow>
                    </Box>
                </Ways>
            </Wrap>
        </Cont>
    )
}
export default Home;
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
const Sec=styled.div`
display: flex;
justify-content: center;
align-items: center;
/* margin-right: 160px; */
`
const One=styled.div`
display: flex;
/* justify-content: center; */
/* align-items: center; */
width: 700px;
/* border: 1px solid black; */
flex-direction:column;
padding: 14px 10px;
border-radius: 10px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
margin-right: 15px;
p{
    margin-bottom: -10px;
    font-size: 12px;
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
const Two=styled.div`
/* padding: 10px; */
img{
    width: 280px;
    border-radius: 10px;
}
p{
    font-size: 10px;
}
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
const Ways=styled.div`
width: 93%;
display: flex;
flex-wrap: wrap;
/* background-color: green; */
justify-content: space-between;
margin-top: 35px;
`
const Box=styled.div`
width: 30%;
height: 300px;
background-color:lightblue;
border-radius: 20px;
padding: 10px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
display: flex;
flex-direction: column;
margin-bottom: 30px;
:nth-child(3){
    background-color:lightgreen;

}
:nth-child(2){
    background-color:lightpink;

}
`
const Arrow=styled.div`
display:flex;
width:50px;
justify-content:space-between;
align-items:center;
h3{
    font-weight:lighter;
    font-size: 18px;
}
`
const Mini=styled.img`
width: 50px;
`
const Bow=styled.div`
font-size: 25px;
/* background-color: lightblue; */
color: gray;
`