import React from "react";
import { useAppDispatch } from "../../app/hooks";
import { reactionAdded } from "./postsSlice";
import { Post } from "./types/types";

const reactionEmoji = {
    thumbsUps: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
}

const ReactionButtons: React.FC<{ post: Post }> = ({ post }: { post: Post }) => {
    const dispatch = useAppDispatch();
    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
                key={name}
                type="button"
                className="px-1"
                onClick={() => dispatch(reactionAdded({ id: post.id, reaction: name }))}
            >
                {emoji} {post.reactions[name]}
            </button>
        )
    })
    return (
        <div>{reactionButtons}</div>
    );
}

export default ReactionButtons;