import React from 'react'
import { useAppSelector } from "../../app/hooks";
import { selectAllPosts } from './postsSlice';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';


const PostsList: React.FC = () => {
    const posts = useAppSelector(selectAllPosts);
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

    const RenderedPosts = orderedPosts.map(post => {
        return (<article key={post.id} className='border border-sky-200 rounded-lg rounded-br-none p-4 m-3'>
            <h3 className='font-semibold text-2xl'>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <p className='flex flex-row justify-between'>
              <PostAuthor userId={post.userId}/>
              <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post}/>
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