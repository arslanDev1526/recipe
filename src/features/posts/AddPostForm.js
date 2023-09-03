import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postsSlice";
import { nanoid } from "@reduxjs/toolkit";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content,
        })
      );

      setTitle("");
      setContent("");
    }
  };
  return (
    <>
      <div>
        <h2> Add a new Post</h2>

        <form className="border d-flex flex-column">
          <label htmlFor="postTitle">Post Title:</label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={onTitleChange}
          />
          <label htmlFor="postContent">Content:</label>
          <textarea
            id="postContent"
            name="postContent"
            value={content}
            onChange={onContentChange}
          />
          <button type="button" onClick={onSavePostClicked}>
            Save Post
          </button>
        </form>
      </div>
    </>
  );
};

export default AddPostForm;
