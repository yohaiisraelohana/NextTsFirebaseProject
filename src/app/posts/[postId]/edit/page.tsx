import { Metadata } from 'next'
//SERVICES
import { getPost } from '../../../../services/postsServer';
//COMPONENTS
import EditPost from '../../../../components/posts/EditPost';

export const metadata: Metadata = {
  title: 'Posts | Edit',
  description: 'Posts Page',
}

export const dynamic = 'force-static';
interface PostView {
    params:{
        postId:string;
    }
}


export default async function EditPostPage(props:PostView) {
  const {postId} = props.params;
  const post : PostInt  = await getPost(postId);
  return (<>
        <h1>EditPostPage {postId}</h1>
        <EditPost post={post} />
    </>)
}
