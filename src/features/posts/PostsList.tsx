import React from 'react'
import { useAppSelector } from "../../app/hooks";
import { selectAllPosts } from './postsSlice';


const PostsList: React.FC = () => {
    const posts = useAppSelector(selectAllPosts);

    const RenderedPosts = posts.map(post => {
        return (<article key={post.id} className='border border-sky-200 rounded-lg rounded-br-none p-4 m-3'>
            <h3 className='font-semibold text-2xl'>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
        </article>);
    });

  return (
    <section className=''>
        <h2 className='text-4xl p-4 font-semibold'>Posts</h2>
        {RenderedPosts}
    </section>
  )
}

export default PostsList