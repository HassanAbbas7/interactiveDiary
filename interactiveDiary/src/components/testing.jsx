import React from "react";
import { useEffect, useState } from "react";


const Testing = ()=>{
    
  const [newCards, setNewCards] = useState()
  const [cards, setCards] = useState([
    {
        id: 1,
        question: 'How was your day?',
        options:[
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
]);




const makeLayers = (obj, layer = 0, prevQuestionId=false) => {
  var newCard_ = {};
  if ((Object.keys(obj).length === 0) || Array.isArray(obj)) {
    layer -= 1
  }
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === 'object') {
      makeLayers(obj[key], layer + 1, obj.id? obj.id: prevQuestionId);
      return;
    }
    newCard_[key] = obj[key];
    newCard_.layer = layer;
    newCard_.previousQuestion = prevQuestionId;
  });

  if ((Object.keys(obj).length === 0) || Array.isArray(obj)) {
    return
  }




  setNewCards((prevCards) => {
    if (!Array.isArray(prevCards)) {
      return [newCard_];
    }
    return [...prevCards, newCard_];
  });
  console.log(newCard_);
};









  useEffect(() => {
    makeLayers(cards)
  }, [cards])



    return (
        <html>
 <head>
 </head>
 <body>
  <p>ayers</p>
  <button onClick={() => console.log(newCards)}>show new cards</button>
 <div style={{ display: 'flex', height: '100vh', flexDirection: 'row' }}>
  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, nihil?</p>
  </div>
  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, nihil?</p>
  </div>
  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, nihil?</p>
  </div>
</div>
 </body>
</html>
    )
}

export default Testing