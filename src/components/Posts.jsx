import React from 'react';

const Posts = ({ posts, loading}) => {
    if(loading){
        return <h2>Loading....</h2>
    }
  return (
    <div>
        <ul className='p-3'>
            {posts.map(post =>(
                <li key={post.id} className='grid mb-5 bg-slate-50 p-2 border border-slate-800'>
                    {post.title}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Posts;
