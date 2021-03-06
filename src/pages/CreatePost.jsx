import React, { useEffect, useState } from "react";
import "./pages.css";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const CreatePost = ({isAuth}) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [postText, setPostText] = useState("");

  const postCollection = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postCollection, {
      title,
      category,
      tags,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate('/');
  };

  useEffect(() => {
    if (!isAuth) {
        navigate('/sign-in');
    }
  }, []);

  return (
    <div id="createPost__page">
      <div id="createPost__container">
        <h1 id="createPost__heading">Create a post</h1>
        <div id="inputGroup">
          <label htmlFor="">Title:</label>
          <input
            type="text"
            required
            placeholder="Title..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div id="inputGroup">
          <label htmlFor="">Category:</label>
          <select
            name="category"
            id=""
            required
            onChange={(event) => {
              setCategory(event.target.value);
            }}
          >
            <option value="pick a category" disabled='disabled'>Category</option>
            <option value="Marketing">Skiing</option>
            <option value="eCommerce">Snowboarding</option>
            <option value="Web Development">Backcountry</option>
            <option value="Business">Travel</option>
          </select>
        </div>
        <div id="inputGroup">
          <label htmlFor="">Tags:</label>
          <input
            type="text"
            required
            placeholder="#..."
            onChange={(event) => {
              setTags(event.target.value);
            }}
          />
        </div>
        <div id="inputGroup">
          <label htmlFor="">Post:</label>
          <textarea
            type="text"
            required
            placeholder="Your post..."
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          />
        </div>
        <button onClick={createPost} id="createPost__btn">Submit Post</button>
      </div>
    </div>
  );
};

export default CreatePost;
