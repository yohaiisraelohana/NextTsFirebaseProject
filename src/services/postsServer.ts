import { redirect } from "next/navigation";
import { firestore } from "../firebase";


// REQUESTS
export async function getPosts() {
    const snapshot : FirebaseFirestore.QuerySnapshot = await firestore.collection('posts').get();
    const posts : PostInt[] = snapshot.docs.map( doc => {
        const {title , body } = doc.data();
        return {
            id:doc.id,
            title,
            body
        }
    })
    return posts;
}

export async function getPost(postId:string){
    const document : FirebaseFirestore.DocumentSnapshot = await firestore.collection('posts').doc(postId).get();
    const data = document.data();

    if (!(document.exists && data)) {
        redirect('/posts');
    }
    return {
        id : document.id ,
        title : data.title ,
        body : data.body   
    }; 
}

// VALIDATION
export function validatePost(post:PostInt){
    if (! post.title )
        return {valid:false , message:"title is required" }
    if (post.title.length < 3 || post.title.length > 100) 
        return {valid:false , message:"title length must be between 3 to 100 characters" }
    if (! post.body )
        return {valid:false , message:"body is required" }
    if (post.title.length < 3 || post.title.length > 1000) 
        return {valid:false , message:"body length must be between 3 to 1000 characters" }
    return {valid:true , message:"Good Request"};
}