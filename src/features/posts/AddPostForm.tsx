import React, { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { nanoid } from "@reduxjs/toolkit";

import { postAdded } from "./postsSlice";

const AddPostForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const onContentChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setContent(e.target.value);
  const dispatch = useAppDispatch();

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content,
        })
      );
    }

    setTitle("");
    setContent("");
  };

  return (
    <section className="p-4 w-[37%]">
      <h2 className="text-lg font-semibold">Add New Post</h2>
      <form className="flex flex-col">
        <label htmlFor="postTitle" className="py-2">
          Post Title:{" "}
        </label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
          className="rounded-md p-1 text-black"
        />

        <label htmlFor="postCOntent" className="py-2">
          Post Content:{" "}
        </label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
          className="rounded-md rounded-br-none text-black p-1"
        />
        <button type="button" onClick={onSavePostClicked} className="bg-sky-100 text-black p-2 rounded-lg w-fit mx-auto mt-4">
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
