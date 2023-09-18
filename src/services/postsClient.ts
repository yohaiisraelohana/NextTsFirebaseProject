export async function addPost(post : PostInt) {
    try {
        const response = await fetch("/api/posts" , {
            method : "POST",
            headers : {
                "Context-Type" : "application/json"
            },
            body : JSON.stringify(post)
        });
        
        if (!response.ok) {
            return alert("Network response was not ok");
        }
    
        return response.json();
    } catch (error) {
        console.log(error);
        alert(error);        
    }
}

export async function updatePost(post : PostInt) {
    try {
        const response = await fetch(`/api/posts/${post.id}` , {
            method : "PUT",
            headers : {
                "Context-Type" : "application/json"
            },
            body : JSON.stringify(post)
        });
    
        if (!response.ok) {
            return alert("Network response was not ok");
        }
    
        return response.json();
    } catch (error) {
        console.log(error);
        alert(error);        
    }
}

export async function deletePost(postId:string) {
    try {
        const res = await fetch(`/api/posts/${postId}`,
        {
            method:"DELETE"
        })
        return res.json();
    } catch (error) {
        console.error(error);
    }
}

