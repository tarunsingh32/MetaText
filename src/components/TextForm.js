import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=> {
      // console.log("UpperCase was clicked" + text);
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to Uppercase!", "success");

    }

    const handleLoClick = ()=> {
      // console.log("UpperCase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lowercase!", "success");

    }

    const handleClearClick = ()=> {
      // console.log("UpperCase was clicked" + text);
      let newText ='';
      setText(newText);
      props.showAlert("Textarea Cleared!", "success");

    }
    
    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
      props.showAlert("Speak!", "success");

    }

    function capitalized(){
      var arr = text.split(" ")
      var c = arr.length
      var temp = ""
      while(c!==0){
          temp = arr[c-1].charAt(0).toUpperCase()+arr[c-1].substring(1).toLowerCase()+" "+temp
          c--;
      }

      setText(temp)
      props.showAlert(" Text Capitalized!", "success");


  }
  // function undo(){
  //   let itm=localStorage.getitem(1)
  //   setText(itm) 
  //   }

  const handleExtraSpaces =() =>{
    let newText = text.split(/[ ] +/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed!", "success");

  }

    const copyText = () => {
      navigator.clipboard.writeText(text);
      props.showAlert("Text copied to Clipboard!", "success");

}
const handleLightTheme = () => {
  document.querySelector('.body').style.backgroundColor = "white"
  document.querySelector('.body').style.color = "black"
  props.showAlert("Textarea Light mode!", "success");


}

const handleDarkTheme = () => {
  document.querySelector('.body').style.backgroundColor = "black"
  document.querySelector('.body').style.color = "white"
  props.showAlert("Textarea Dark mode!", "success");
  
}

const [color,setColor]=useState("black");

 const handleColor=()=>{
          let mycolor=prompt("enter your color name");
           setColor(mycolor);
  props.showAlert(`Text color changed to ${mycolor}!`, "success");
         
    }
   
    const handleOnChange = (event)=> {
      console.log("On Change");
      setText(event.target.value)
    }
    const [ text, setText ] = useState("");
    // setText("Enter the text here");
    return (
      <>
    <div className='container'  style={{color:props.mode === 'light'? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control body" value = {text} style={{color:color , backgroundColor:props.mode === 'light'? '#8e8e8e4d' : 'white' }}  onChange ={handleOnChange} id="myBox" rows ="8"></textarea>
        <button disabled={text.length=== 0} className="btn btn-primary my-3 mx-1" onClick ={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length=== 0} className="btn btn-primary my-3 mx-1" onClick ={handleLoClick}>Convert to lowerCase</button>
        <button disabled={text.length=== 0} className="btn btn-primary my-3 mx-1" onClick ={handleClearClick}>Clear Text</button>
        <button disabled={text.length=== 0} className="btn btn-primary my-3 mx-1" onClick ={speak}>Speak</button>
        <button disabled={text.length=== 0} className="btn btn-primary my-3 mx-1" onClick ={capitalized}>Capitalize</button>
        <button disabled={text.length=== 0} className="btn btn-primary my-3 mx-1" onClick ={ handleExtraSpaces}>Remove Extra Spaces</button>

        {/* <button className="btn btn-primary my-3 mx-1" onClick ={undo}>Undo</button> */}
        <button disabled={text.length=== 0} className="btn btn-primary my-3 mx-1" onClick ={copyText}>Copy</button>
        <button disabled={text.length=== 0} className="btn btn-primary my-3 mx-1" onClick ={handleDarkTheme}>Dark Mode</button>
        <button disabled={text.length=== 0} className="btn btn-primary my-3 mx-1" onClick ={handleLightTheme}>Light Mode</button>
        <button disabled={text.length=== 0} className="btn btn-primary my-3 mx-1" onClick ={handleColor}>Change Color</button>






     </div>
    </div>

    <div className="container my-1 "  style={{color:props.mode === 'light'? 'white' : 'black' }}>
        <h1>Your Summary Here</h1>
        <p>{text.split(" ").length -1} words and {text.length} characters</p>
        <p>{0.008*(text.split(" ").length -1)} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.lenght>0? text :"Enter something in the textbox to preview it here"}</p>
    </div>
    </>
  )
}
