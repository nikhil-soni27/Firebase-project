import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./Inside.css"

function Inside() {
  const [text, setText] = useState([]);
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

      const loadedText = [];

      for (const key in data) {
        loadedText.push({
          id: key,
          title: data[key].title,
        });
      }
      setText(loadedText);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchText();
  }, [fetchText]);

  async function addTextHandler(texter) {
    console.log(texter);
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

  if (text.length > 0) {
    content = <MoviesList text={text} />;
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
        <AddMovie onAddMovie={addTextHandler} />
      </section>
      <section>
        <button onClick={fetchText} className="btn">Fetch data</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default Inside;
