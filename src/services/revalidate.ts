import { NextRequest } from "next/server";

export default  function revalidate( req : NextRequest , paths:string[]){
    const origin = req.headers.get('origin');
    return fetch(`${origin}/api/revalidate`,
    {
        cache:"no-cache",
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({
            paths,
            secret: process.env.REVALIDATE_SECRET
        })
    })
}