import AddPostForm from "./features/posts/AddPostForm";
import PostsList from "./features/posts/PostsList";

export default function App() {
  return (
    <div className="w-screen h-screen bg-teal-900 flex flex-col items-center font-mono text-white">
      <PostsList />
      <AddPostForm />
    </div>
  )
}