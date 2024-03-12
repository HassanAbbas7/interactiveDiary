import React from "react";
import { useEffect, useState, useRef } from "react";
import Card from "./card";
import { ArcherContainer, ArcherElement } from 'react-archer';
import Xarrow, { Xwrapper, useXarrow } from "react-xarrows";
import Draggable from "react-draggable";


const Testing = () => {

  const [newCards, setNewCards] = useState([])
  const [cards, setCards] = useState();
  const [organisedCards, setOrganisedCards] = useState([])
  const [activeLinkCard, setActiveLinkCard] = useState(null)




  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify([
      {
        id: 1,
        question: 'How was your day?',
        options: [
          {
            id: 2,
            text: 'Good',
            nextQuestion: {
              id: 3,
              question: 'How good?',
              options: [
                {
                  id: 4,
                  text: 'Very Good!',
                },
                {
                  id: 5,
                  text: 'Not so good',
                },
                {
                  id: 6,
                  text: 'Meh',
                }
              ]
            }
          },
          {
            id: 7,
            text: 'Bad',
            nextQuestion: false
          },
          {
            id: 8,
            text: 'Neutral',
            nextQuestion: false
          }
        ]
      }
    ]))
  })



  


  useEffect(() => {
    setCards(JSON.parse(localStorage.getItem('cards')))
  }, [])


  const makeLayers = (obj = {}, layer = 0, prevQuestionId = false) => {
    var newCard_ = {};
    if (Object.keys(obj).length === 0 || Array.isArray(obj)) {
      layer -= 1;
    }
    Object.keys(obj).forEach((key) => {
      if (typeof obj[key] === 'object') {
        makeLayers(obj[key], layer + 1, obj.id ? obj.id : prevQuestionId);
        return;
      }
      newCard_[key] = obj[key];
      newCard_.layer = layer;
      newCard_.previousQuestion = [prevQuestionId];
    });

    if (Object.keys(obj).length === 0 || Array.isArray(obj)) {
      return;
    }

    setNewCards((prevCards) => {
      if (!Array.isArray(prevCards)) {
        return [newCard_];
      }
      return [...prevCards, newCard_];
    });
  };

  useEffect(() => {
    makeLayers(cards);
  }, [cards, setNewCards]);

  useEffect(() => {
    console.log(newCards);
    var temp_ = {};
    for (let card of newCards) {
      if (!temp_[card.layer]) {
        temp_[card.layer] = [];
      }
      temp_[card.layer].push(card);
    }
    console.log(temp_);
    setOrganisedCards(Object.values(temp_));
  }, [newCards]);
  
  const boxStyle = { border: 'grey solid 2px', borderRadius: '10px', padding: '5px' };


  const idInPreviousQuestionIds = (id) => {
    return organisedCards.some((card) => {
      return card.some((card_) => {
        console.log(card_.previousQuestion?.includes(parseInt(id)));
        return card_.previousQuestion?.includes(parseInt(id));
      })
    });
  };

  const editCardContent = (id, content, isOption) => {
    setNewCards((prevCards) => {
      return prevCards.map((card) => {
        if (card.id === id) {
          console.log("editing: ")
          console.log(card)
          if (isOption) {
            return {
              ...card,
              text: content,

            }
          }
          else {
            return {
              ...card,
              question: content,
            }
          }

        }
        return card
      })
    })
  }



  const spawnNewCard = (parentId, parentLayer, isOption) => {
    var babyCard = { id: getNewId(), layer: parentLayer + 1, previousQuestion: [parentId] };
    if (!isOption) {
      babyCard.text = 'OPTION TEXT'
    }
    else {
      babyCard.question = 'QUESTION TEXT'
    }
    setNewCards((prevCards) => [...prevCards, babyCard]);
  }

  const deleteCard = (id) => {
    setNewCards((prevCards) => prevCards.filter((card) => card.id !== id));
  }

  const getNewId = () => {
    let randomNum = 0;
    let excludedNumbers = newCards.map((card) => card.id);
    do {
      randomNum = randomNum + 1;
    } while (excludedNumbers.includes(randomNum));
    return randomNum
  }

  const handleCardClick = (id) => {
    console.log("trying to set the link");
    const cardLink = activeLinkCard;
    const cardToBeLinked = id;

    if (activeLinkCard) {
      setOrganisedCards((prevCards) => {
        return prevCards.map((card) => {
          return card.map((card_) => {
            if (card_.id === cardToBeLinked) {
              console.log(`modify ${cardToBeLinked}'s prevQ value to  ${cardLink}`);
              card_.previousQuestion.push(cardLink);
            }
            return card_
          })
        })
      })
    }
  };


  const cardExists = (id) => {
    try {
      return newCards.some((card) => card.id === id);
    } catch (error) {
      console.log("error on id: " + id);
    }
  }

  return (
    <html>
      <head>
      </head>
      <body>
        <p></p>
        <button onClick={() => console.log(newCards)}>show new cards</button>
        <Xwrapper>
          <div style={{ display: 'flex', height: '100vh', flexDirection: 'row' }}>
            {organisedCards.map((card_, index) => (

              <div key={card_.id} style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                {
                  card_.map((card_, index) => (
                    <>
                      {(Number.isInteger(card_.previousQuestion) && cardExists(card_.previousQuestion)) ? <Xarrow start={(card_.previousQuestion).toString()} end={(card_.id).toString()} /> : Array.isArray(card_.previousQuestion) && card_.previousQuestion.map((cardId) => cardExists(cardId) && <Xarrow start={(cardId).toString()} end={(card_.id).toString()} />)}
                      <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%' }}>

                        <Card handleCardClick={handleCardClick} editCardContent={editCardContent} id={card_.id} setActiveLinkCard={setActiveLinkCard} deleteCard={deleteCard} previousQuestionId={card_.previousQuestion} isPrevQ={idInPreviousQuestionIds(card_.id)} title={Object.hasOwn(card_, "question") ? "Question" : "Option"} layer={card_.layer} content={card_.text ? card_.text : card_.question} spawnNewCard={spawnNewCard} />

                      </div>
                    </>

                  ))
                }
              </div>
            ))}
          </div>
        </Xwrapper>
      </body>
    </html>
  )
}

export default Testing