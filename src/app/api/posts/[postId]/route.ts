import { NextRequest, NextResponse } from "next/server";
import { firestore } from "../../../../firebase";
import { GET_POSTS } from "../../../../constants/urls";
import { validatePost } from "../../../../services/postsServer";
import revalidate from "../../../../services/revalidate";



export async function PUT(request : NextRequest , context : { params : { postId : string } } ) {
    try {
        const {postId} = context.params;
        const post : PostInt = await request.json(); 

        const validPost : ValidPost = validatePost(post);
        if (! validPost.valid) 
            return new NextResponse(validPost.message , {status:400});

        await firestore.collection(GET_POSTS).doc(postId).set({
            title:post.title,
            body:post.body
        });
        await revalidate(request,["/posts" , `/posts/${postId}`]);
        return NextResponse.json({message:"Post updated successfully"});
    } catch (error) {
        console.error("error editing post",error);
        return new NextResponse("Internal Server Error",{status:500});
    }
}

export async function DELETE(request : NextRequest , context : { params : { postId : string } }) {
    const {postId} = context.params;
    if (!postId) 
        return new NextResponse("Bad request : id is required" , {status : 400});
    try {
        await firestore.collection('posts').doc(postId).delete();
        await revalidate(request,["/posts" , `/posts/${postId}`]);
        return NextResponse.json({message:"post deleted successfully"});
    } catch (error) {
        return new NextResponse("Internal Server Error" , {status:500});
    }
}