import { NextRequest, NextResponse } from "next/server";
import { firestore } from "../../../firebase";
import { validatePost } from "../../../services/postsServer";
import revalidate from "../../../services/revalidate";


export async function POST(request:NextRequest) {
    const post : PostInt = await request.json();
    const {valid , message} = validatePost(post);
    if (!valid)
        return new NextResponse(message , {status:400});

    try {
        await firestore.collection("posts").doc().set({
            ...post
        });
        await revalidate(request,["/posts"]);
        return NextResponse.json({message:"post added successfully"});
    } catch (error) {
        console.error( "add post error ", error);
        return new NextResponse("Iternal Server Error", {status:500});
    }
}