import { useState } from "react";
import "./Amt.css";

const Posts = () => {
  const [header, setHeader] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSend = () => {
    const newPost = {
      id: Date.now().toString(),
      header,
      title,
      description,
    };

    const existingPosts = JSON.parse(
      localStorage.getItem("urgentsPostsLS") || "[]"
    );
    const updatedPosts = [...existingPosts, newPost];
    localStorage.setItem("urgentsPostsLS", JSON.stringify(updatedPosts));

    setHeader("");
    setTitle("");
    setDescription("");
    window.history.back();
  };


  const handleCancel = () => {
    window.history.back();
  };

  
  return (
    <div className="container">
      <h1 className="text-center mt-5 custom-color-01">
        Create an Urgent Post
      </h1>
      <div className="row justify-content-center">
        <div className="col-10">
          <div className="row justify-content-center">
            <div className="col-12 mb-2">
              <label htmlFor="header" className="custom-color-01 fw-bold">Datum</label>
              <input
                type="text"
                id="header"
                className="w-100 rounded-1 acceptedInput"
                value={header}
                onChange={(e) => setHeader(e.target.value)}
              />
            </div>
            <div className="col-12 mb-2">
              <label htmlFor="title" className="custom-color-01 fw-bold">Title</label>
              <input
                type="text"
                id="title"
                className="w-100 rounded-1 acceptedInput"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="col-12 mb-2">
              <label htmlFor="description" className="custom-color-01 fw-bold">Description</label>
              <textarea
                id="description"
                className="w-100 textareaPosts rounded-1 acceptedInput"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="col-6 d-grid">
              <button onClick={handleSend} className="rounded-1 send-btn custom-bg-color-01 border-0 p-1">
                Send
              </button>
            </div>
            <div className="col-6 d-grid">
              <button onClick={handleCancel} className="rounded-1 cansel-btn custom-bg-color-02 border-0 p-1">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
