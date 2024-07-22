import { useAppSelector } from "../../app/hooks";
import { selectAllUsers } from "../users/usersSlice";

type PostAuthorProp = {
    userId: string | undefined;
}

const PostAuthor: React.FC<PostAuthorProp> = ({userId}: PostAuthorProp) => {
    const users = useAppSelector(selectAllUsers);
    const author = users.find(user => user.id === userId);
    console.log("Author: ", author)

    return (
        <span>by {author ? author.name : 'Unknown Author'}</span>
    );
}

export default PostAuthor;