import React,{useState} from "react";
import {db}  from "../../Fire";
import {GoDeviceCamera}  from "react-icons/go";
import makeid from "../../helper/functions";

const Survey = () => {
  const [image,setImage]=useState(null)
  const [progress,setProgress] = useState(0)
    const handleChange = (e) => {
      if(e.target.files[0]){
         setImage(e.target.files[0])

         var selectedImagesrc = URL.createObjectURL(e.target.files[0])

         var imagePreview = document.getElementById("image-preview");
         imagePreview.src = selectedImagesrc;
         imagePreview.style.display="block"; 
      }
    }

    const handleUpload = () =>{
      // if(image){
      //    var imageName=makeid(10)
      //    const uploadTask = storage.ref(`images/${imageName}.jpg`)
      //    .put(image)

      //    uploadTask.on("state_changed",(snapshot)=>{
      //      const progress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100)
      //      setProgress(progress)
      //    },()=>{
      //      storage.ref("images").child(`${imageName}.jpg`).getDownloadURL().then((imageUrl)=>{
      //        db.collection("SurveyResponses").add({
      //          photoUrl: imageUrl,
      //        })
      //      })
      //    })
      // }
    }
    const saveAnswer = (event) => {
    event.preventDefault();

    const elementsArray = [...event.target.elements];

    const formData = elementsArray.reduce((accumulator, currentValue) => {
      if (currentValue.id) {
        accumulator[currentValue.id] = currentValue.value;
      }
      return accumulator;
    }, {})
    
    db.collection("SurveyResponses").add(formData);
  };

  return (
    <div className="container">
      <h1>try to post something</h1>
      <form onSubmit={saveAnswer}>
        <input type="text" id="answer" placeholder="Type here..." />
        <div>
          <img id="image-preview" alt=""></img>
        </div>
        <div className="createPost">
        <label htmlFor="fileInput">
        <GoDeviceCamera style={{cursor:"pointer"}}/>
        </label>
        <input id="fileInput" type="file" accept="image/*" onClick={handleChange} />
        <button className="createPost_uploadBtn" onClick={handleUpload}>{`Upload ${progress !==0}`}</button>
        </div>
        <button className="btn3">Submit to Firebase</button>
      </form>
    </div>
  );
};

export default Survey;