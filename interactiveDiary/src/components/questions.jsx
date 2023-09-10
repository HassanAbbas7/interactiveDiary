import React, { useEffect } from "react";
import { useState } from "react";
import "../App.css"
import { useRef } from "react";
import { motion } from "framer-motion";
import ThreeDotsWave from "./loadingDots";
import { getQuestions, getQuestion } from "../cosnstants";

const Questions = ({ }) => {

  // const questions = [
  //   {
  //     id: 1,
  //     question: 'How was your day?',
  //     options: {
  //       "Good": {
  //         "text": "My day was good",
  //         "nextQuestion": false
  //       },
  //       "Bad": {
  //         "text": "The day was not very good for me.",
  //         "nextQuestion": {
  //           question: "Why was your day bad?",
  //           options: {
  //             "I dont Know":
  //               { "text": "I dont know why my day was bad...", nextQuestion: false },
  //             "Beacuse of my sibling(s)":
  //             {
  //               "text": "My sibling(s) annoyed me today and I am very mad at them...", nextQuestion: {
  //                 question: "Which sibling?",
  //                 options: {
  //                   "Brother": {
  //                     "text": "My brother annoyed me very much today",
  //                     nextQuestion: false
  //                   },
  //                   "Sister": {
  //                     "text": "My sister is very annoying and today was not an exception",
  //                     nextQuestion: false
  //                   }
  //                 }
  //               }
  //             },
  //             "Because of some failure": { "text": "I failed my exams and I am very sad about it", nextQuestion: false }
  //           }
  //         }
  //       }
  //     },
  //   },
  //   {
  //     id: 2,
  //     question: "How was your night?",
  //     options:{
  //       "Good":{
  //         "text": "It was good",
  //         nextQuestion: false
  //       }
  //     }
  //   }

  // ];

  const [questions, setQuestions] = useState();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState();
  const [currentOption, setCurrentOption] = useState();
  const [animationIndex, setAnimationIndex] = useState(0);
  const [diaryText, setDiaryText] = useState("");
  const [extraText, setExtraText] = useState("");
  const text = document.getElementById("diarytext")

  const handleOptionClick = (option) => {
    // Handle user's option selection here (e.g., store it in state)
    console.log(`Selected option: ${option}`);

    // Move to the next question
    if (currentQuestionIndex < questions.length - 1) {
      if (option.nextQuestion){
        setCurrentQuestion(option.nextQuestion)
      }
      else{
        setCurrentQuestionIndex(currentQuestionIndex+1)
        setCurrentQuestion(questions[currentQuestionIndex]);
      }
    } else {
      // Handle end of questions (e.g., submit the form)
      console.log('End of questions. Submitting...');
    }
  };

  // sleep function
  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  useEffect(() => {
    const getQuestions_ = async () => {
      const q_ = await getQuestions()
      setQuestions(q_)
      setCurrentQuestion(q_[0])
      console.log(q_[0])
    }
    getQuestions_()
  }, [])



  const appendText = (option) => {
    console.log(option)
    setExtraText(" " +option.text);
    setCurrentOption(option)
  }


  const submit = async () => {
    setDiaryText(diaryText + extraText)
    setExtraText("")
    console.log(currentQuestionIndex)
    console.log(questions.length - 1)
    if (currentQuestionIndex < questions.length) {
      setAnimationIndex(animationIndex+1)
      if (currentOption.next_question){
        const nq = await getQuestion(currentOption.next_question)
        await sleep(2000)
        setCurrentQuestion(nq)
        console.log(nq)
      }
      else{
        console.log(currentQuestionIndex)
        setCurrentQuestionIndex(currentQuestionIndex+1)
        setCurrentQuestion(questions[currentQuestionIndex+1]);
      }

    } else {
      // Handle end of questions (e.g., submit the form)
      console.log('End of questions. Submitting...');
    }
    window.scrollTo(0, 0)
  }

  const setExtraText_ = (e) => {
    const et = e.target.value.replace(diaryText, "")
    setExtraText(et)
  }

  return (
    <>
      <div className="container">
        {!currentQuestion ? <ThreeDotsWave /> :
          <>
          <motion.div
          // animate this div so that it fades into existance
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 4 }}
          transition={{ duration: 3 }}
          key={animationIndex}
          >
            <div className="text-center mt-4">
              <h3>{currentQuestion && currentQuestion?.title}</h3>
              <p className="diary-text">{diaryText} <b>{extraText}</b> </p>
            </div>
          </motion.div>
            
            <div className="text-center">
            <motion.div
          // animate this div so that it fades into existance
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 4 }}
          key={animationIndex}
          >
            <div className="row my-5">
                {currentQuestion && (currentQuestion?.options)?.map((option, index) => {
                  return (
                    <div key={index} className="col-md-6 col-6 justify-content-center align-items-center d-flex" >
                      <a className="btn btn-outline-primary btn-option d-flex justify-content-center align-items-center" onClick={() => appendText(option)}>
                        <span className="text-center">
                          {option.title}
                        </span>
                      </a>
                    </div>)
                })}
              </div>
          </motion.div>
              
              <a className="btn btn-success" onClick={submit}>
                {extraText ? "Submit" : "Skip"}
              </a>
            </div>
          </>
        }
      </div>
    </>
  )
}

export default Questions