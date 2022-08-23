import { API_URL } from "./ConstantApi"

export const Get = async ()=>{
    const repose = await fetch(API_URL)
    .then((res) =>res.json()) 
    .then((resole)=>resole)
    .catch((err)=>console.error(err.message))
    return repose
}
export const Post = async (dataItem)=>{
    const repose = await fetch(API_URL,{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(dataItem)
    })
    return repose
}
export const Delete = async (id)=>{
    const repose = await fetch(API_URL+`/${id}`,{
      method: "DELETE"
    })
    return repose
}
