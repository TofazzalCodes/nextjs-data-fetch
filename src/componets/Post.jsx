
const Post = ({post}) => {
    const {id, title, body} = post
    return (
         <div className='border p-4 rounded-3xl space-y-4'>
            <h1>Id: {id} </h1>
            <p>Title: {title} </p>
            <p>post: {body} </p>
        </div>
    );
};

export default Post;