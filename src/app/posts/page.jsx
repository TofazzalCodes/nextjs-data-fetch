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

import Post from "@/componets/Post";



const getpost = async () =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts",  );
    if(!res.ok){
        throw new Error("Failed to fetch posts")
    }
    return res.json();
}

const PostsPage = async () => {
    const posts = await getpost()
    return (
        <div className="w-10/12 mx-auto">
            <h2>Post are comming soon: {posts.length} </h2>
            <div className="grid grid-cols-4 gap-4 ">
                {
                    posts.map((post) => <Post key={post.id}post={post}></Post> )
                }
            </div>
        </div>
    );
};

export default PostsPage;