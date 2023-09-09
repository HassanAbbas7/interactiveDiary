import React, { useEffect } from "react";
import { useState } from "react";
import "../App.css"
import { useRef } from "react";
import { motion } from "framer-motion";
import ThreeDotsWave from "./loadingDots";

const Questions = ({ }) => {

  const questions = [
    {
      id: 1,
      question: 'How was your day?',
      options: { "Good": "Today, My day was good", "Bad": "The day was not very good for me.", "Neutral": "It was a fine day...", "Meh": "idk" },
    },
    
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];
  const pref = useRef();
  const [diaryText, setDiaryText] = useState("");
  const [extraText, setExtraText] = useState("");
  const [fadeOut, setFadeOut] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
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

  // sleep function
  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }



  const appendText = (option)=>{
      setExtraText(" "+currentQuestion.options[option]);
    
  }


  const submit = async ()=>{
    setDiaryText(diaryText+extraText)
    setExtraText("")

    if (currentQuestionIndex < questions.length - 1) {
      await sleep(1)
      setCurrentQuestionIndex(currentQuestionIndex + 1);

    } else {
      // Handle end of questions (e.g., submit the form)
      console.log('End of questions. Submitting...');
    }
    window.scrollTo(0, 0)
  }

  const setExtraText_ = (e)=>{
    const et = e.target.value.replace(diaryText, "")
    setExtraText(et)
  }

  return (
    <>
    <div className="container">
        {false?<ThreeDotsWave/>:
            <>
            <div className="text-center mt-4">
                <h3>{currentQuestion.question}</h3>
                <p className="diary-text">{diaryText+extraText}</p>
            </div>
            <div className="text-center">
                <div className="row my-5">
                    {Object.keys(currentQuestion.options).map((option, index) => {
                        return (
                            <div className="col-md-6 col-6 justify-content-center align-items-center d-flex" key={index}>
                                <a className="btn btn-outline-primary btn-option d-flex justify-content-center align-items-center" onClick={() => appendText(option)}>
                                <span className="text-center">
                                {option}    
                                </span>    
                                    </a>
                            </div>)
                    })}
                </div>
                <a className="btn btn-success" onClick={submit}>
                    {extraText? "Submit": "Skip"}
                </a>
            </div>
            </>
        }
    </div>
    </>
  )
}

export default Questions