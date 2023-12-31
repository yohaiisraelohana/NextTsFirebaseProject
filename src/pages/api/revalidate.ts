import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(request : NextApiRequest , response : NextApiResponse) {
    if(request.method === "POST"){
        const {secret , paths} = request.body;

        if (secret != process.env.REVALIDATE_SECRET) 
            return response.status(401).json({message:"Invalid Secret"});

        try {
            await Promise.all(paths.map(response.revalidate));
            console.log("revalidate successfull",paths);
            return response.json({message:"revalidated successfully"});
        } catch (error) {
            console.error(error);
            return response.status(500).json({message:"Internal Server Error"});
        }
    }
}
