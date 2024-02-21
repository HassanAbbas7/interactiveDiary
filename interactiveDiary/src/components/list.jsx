import Card from "./card";
import { useEffect, useState } from 'react'
import { getQuestion } from "../cosnstants";


const List = (props) => {

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

    const [cachedCards, setCachedCards] = useState({})

    const [newCards, setNewCards] = useState({})
    
    const [cardCount, setCardCount] = useState(0)
    useEffect(() => {
        setCardCount(cards.length);
        Object.keys(cards).map((key) => {
            
        })
      }, [cards]);

    
  return (
    <div className="list">
        <button
        onClick={() => console.log(newCards)}
        >Show cards</button>
        <p>{cardCount}</p>
        <div>
           {Object.keys(cards).map((key) => (
                <div className="col d-flex" key={key}>
                <Card title={cards[key].question} content={cards[key].text} />
                    </div>))}
        </div>
      
    </div>
  )
}

export default List;