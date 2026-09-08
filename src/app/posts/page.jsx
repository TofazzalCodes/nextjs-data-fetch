// const getpost = async () =>{
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     return res.json();
// }
// const getpost = async () => {
//     try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//         return res.json();
//     }
//     catch{
//         throw new Error("Faild to fetch posts")
//     }
// }

const getpost = async () =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if(!res.ok){
        throw new Error("Failed to fetch posts")
    }
    return res.json();
}

const PostsPage = async () => {
    const posts = await getpost()
    return (
        <div>
            <h2>Post are comming soon: {posts.length} </h2>
        </div>
    );
};

export default PostsPage;