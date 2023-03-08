import axios from "axios"
import {UserData} from "./AllInterfcae/interface"
import { useParams } from "react-router-dom"

const localUrl = "http://localhost:2093"

export const CreateUser= async({name,email,password}:any)=>{
    return await axios.post(`${localUrl}/api/register`,{
        name,email,password}).then((res)=>{
            return res.data
        })
}
export const OneUser= async(id:any)=>{
    return await axios.get(`${localUrl}/api/user/${id}`).then((res)=>{
            return res.data
        })
}
// const id=useParams()
// export const Send= async()=>{
//     return await axios.post(`${localUrl}/api/user/${id}/${id}`).then((res)=>{
//             return res.data
//         })
// }