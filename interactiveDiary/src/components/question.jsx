import React, { useEffect } from "react";
import { useState } from "react";
import "../App.css"
import { useRef } from "react";


const Question = ({ }) => {

  const questions = [
    {
      id: 1,
      question: 'How was your day?',
      options: { "Good": "My day was good", "Bad": "The day was not very good for me.", "Neutral": "It was a fine day..." },
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState();
  const [lastOption, setLastOption] = useState();
  const currentQuestion = questions[currentQuestionIndex];
  const pref = useRef();
  const [diaryText, setDiaryText] = useState("");
  const [extraText, setExtraText] = useState("");
  const text = document.getElementById("diarytext")

  const handleOptionClick = (option) => {
    // Handle user's option selection here (e.g., store it in state)
    console.log(`Selected option: ${option}`);

    // Move to the next question
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Handle end of questions (e.g., submit the form)
      console.log('End of questions. Submitting...');
    }
  };




  const appendText = (option)=>{
    if ((lastOption != option)){
      setExtraText(currentQuestion.options[option]);
    }
    else{
      alert("...")
    }
    // setDiaryText(diaryText+entry)
  }

  const submit = ()=>{
    setDiaryText(diaryText+extraText)
    setExtraText("")
  }

  const setExtraText_ = (e)=>{
    const et = e.target.value.replace(diaryText, "")
    setExtraText(et)
  }

  return (
    <>
      <div className="container-fluid h-100 position-absolute">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-md-6 text-center">
            <div className="row">
              <div className="col-md-6">
                <h3>Test Your Knowledge</h3>
                <p>{currentQuestion.question}</p>
              </div>
            </div>
            <div className="col-md-6 my-4"  style={{marginTop: "18%" }}>
              <h5>Today's diary:</h5>
              <textarea
              
              id="diarytext"
                onChange={setExtraText_}
                style={{ fontWeight: diaryText ? "" : "100", width:"100%", height:"170px" }}
                value={diaryText+extraText}
                suppressContentEditableWarning="true"
              >
              </textarea>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <div className="btn-group-vertical">
              {Object.keys(currentQuestion.options).map((option, index) => {
                return <button key={index} className="btn btn-primary btn-lg rounded btn-block"
                  onClick={e=>appendText(option=option)}>{option}</button>
              })}
            </div>
          </div>
        <div className="row text-center mx-auto w-auto">
          <button onClick={submit} className="btn btn-info">submit</button>
        </div>
        </div>
      </div>
    </>
  )
}

export default Question