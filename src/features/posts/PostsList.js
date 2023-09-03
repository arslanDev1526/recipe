import React from "react";

import { useSelector } from "react-redux";

const PostsList = () => {
  const posts = useSelector((state) => state.posts);


const renderedPosts = posts.map((post) => (
  <article className="border" key={post.id}>
    <h3> {post.title} </h3>
    <p> {post.content.substring(0, 100)} </p>
  </article>
));

return (

    <div className="border border-primary w-50 d-flex justify-content-center mx-auto">    <section >
    <h2> Posts </h2>

    {renderedPosts}
  </section> </div>
 
)

 }


 export default PostsList;