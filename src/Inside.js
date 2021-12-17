import React, { useState, useEffect, useCallback } from "react";
import TextList from "./components/TextList";
import CreatePost from "./components/CreatePost";
import "./Inside.css"

function Inside() {
  const [text, setText] = useState([]);
  const [image, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const fetchText = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://login-a3b0b-default-rtdb.firebaseio.com/data.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedText = []

      for (const key in data) {
        loadedText.push({
          id: key,
          title: data[key].title,
          image:data[key].image,
        });
      }
      setText(loadedText);
      setImage(loadedText);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchText();
  }, [fetchText]);

  async function addTextHandler(texter) {
    const response = await fetch(
      "https://login-a3b0b-default-rtdb.firebaseio.com/data.json",
      {
        method: "POST",
        body: JSON.stringify(texter),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
  }

  let content = <p>Found no Text.</p>;

  if (text.length && image.length > 0) {
    content = <TextList text={text} image={image}/>;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }
  return (
    <React.Fragment>
      <section>
        <CreatePost onAddText={addTextHandler} text="hello"/>
      </section>
      <section>
        <button onClick={fetchText} className="btn">Fetch from Firebase</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}
export default Inside;
