import React, { useRef ,useState} from "react";
import classes from "./AddText.module.css";
const CreatePost = (props) => {
  const titleRef = useRef("");
   const [baseImage, setBaseImage] = useState("");
   const uploadImage = async (e) => {
   const file = e.target.files[0];
   const base64 = await convertBase64(file);
    setBaseImage(base64);
  }
  const handleChange=() => {
    console.log("clicked")
  }
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader()
       fileReader.readAsDataURL(file)

       fileReader.onload = () => {
        resolve(fileReader.result);
      }

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  function submitHandler(event) {
    event.preventDefault();
    
    const text = {
     title: titleRef.current.value,
     image:baseImage,
    }
     props.onAddText(text);
  }
   return (
     <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <input type="file" onChange={(e) => {uploadImage(e);}} />
        <input type="text" id="title" ref={titleRef} placeholder="Enter your caption here..."/>
      <br></br>
      </div>
      <button className="btn" onClick={handleChange}>Add post</button>
    </form>
  );
}
export default CreatePost
