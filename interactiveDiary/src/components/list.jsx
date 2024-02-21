import Card from "./card";
import { useEffect, useState } from 'react'
import { getQuestion } from "../cosnstants";


const List = (props) => {

    const [cards, setCards] = useState([
        {
            "id": 12,
            "options": [
                {
                    "id": 40,
                    "title": "No",
                    "text": "I feel good for no reason rarely. I often need a strong reason to be happy.",
                    "next_question": []
                },
                {
                    "id": 41,
                    "title": "Yes",
                    "text": "I believe happiness is the key to live a good life, I dont need a reason to be happy.",
                    "next_question": []
                }
            ],
            "title": "Do you often feel good like this for no reason?",
            "is_next_question": true
        },
        {
            "id": 13,
            "options": [
                {
                    "id": 37,
                    "title": "Achievement",
                    "text": "I achieved [somthing]",
                    "next_question": []
                },
                {
                    "id": 38,
                    "title": "Gift",
                    "text": "I got a gift by someone!",
                    "next_question": []
                },
                {
                    "id": 39,
                    "title": "Success",
                    "text": "I succeeded in [something]!",
                    "next_question": []
                },
                {
                    "id": 42,
                    "title": "No",
                    "text": "Nothing special, I am just feeling good!",
                    "next_question": [
                        12
                    ]
                }
            ],
            "title": "Any special reason?",
            "is_next_question": true
        },
        {
            "id": 14,
            "options": [
                {
                    "id": 44,
                    "title": "No",
                    "text": "I havent told them yet, I fear they will be dissappointed in me",
                    "next_question": []
                },
                {
                    "id": 45,
                    "title": "Yes",
                    "text": "They accepted my failure and maybe they dont care no more...",
                    "next_question": []
                },
                {
                    "id": 46,
                    "title": "Dont care",
                    "text": "They dont care about my failures any more",
                    "next_question": []
                }
            ],
            "title": "Do your parents know about your failure?",
            "is_next_question": true
        },
        {
            "id": 15,
            "options": [
                {
                    "id": 47,
                    "title": "Yes",
                    "text": "I tried my best",
                    "next_question": []
                },
                {
                    "id": 48,
                    "title": "No",
                    "text": "I dont care about these tests",
                    "next_question": []
                }
            ],
            "title": "Have you even tried passing?",
            "is_next_question": true
        },
        {
            "id": 16,
            "options": [
                {
                    "id": 49,
                    "title": "Failure",
                    "text": "I failed in [something]",
                    "next_question": [
                        14,
                        15
                    ]
                },
                {
                    "id": 50,
                    "title": "Rejection",
                    "text": "I was rejected by [someone]",
                    "next_question": []
                },
                {
                    "id": 51,
                    "title": "Dont know",
                    "text": "I dont know why am I sad....",
                    "next_question": []
                }
            ],
            "title": "Why do you feel sad?",
            "is_next_question": true
        },
        {
            "id": 17,
            "options": [
                {
                    "id": 43,
                    "title": "Good",
                    "text": "I am feeling good",
                    "next_question": [
                        13
                    ]
                },
                {
                    "id": 52,
                    "title": "Sad",
                    "text": "I am feeling sad...",
                    "next_question": [
                        16
                    ]
                }
            ],
            "title": "How are you feeling today?",
            "is_next_question": false
        },
        {
            "id": 18,
            "options": [
                {
                    "id": 53,
                    "title": "Yes",
                    "text": "We went to the restaurant because of [important event]. I want more events like this in my life...",
                    "next_question": []
                },
                {
                    "id": 54,
                    "title": "No",
                    "text": "There was no special event, we were just in the mood of dining today.",
                    "next_question": []
                }
            ],
            "title": "Was It a special event?",
            "is_next_question": true
        },
        {
            "id": 19,
            "options": [
                {
                    "id": 57,
                    "title": "Yes",
                    "text": "Despite it being a dangerous sport, we still made it and nobody got seriously injured. Sometimes it feels good to take small risks.",
                    "next_question": []
                },
                {
                    "id": 58,
                    "title": "No",
                    "text": "It was an innocent sport. I really enjoyed it. I look forward to play more.",
                    "next_question": []
                }
            ],
            "title": "Was it a dangerous sport?",
            "is_next_question": true
        },
        {
            "id": 20,
            "options": [
                {
                    "id": 59,
                    "title": "Yes",
                    "text": "Despite being the first time, I really enjoyed the game!",
                    "next_question": []
                },
                {
                    "id": 60,
                    "title": "No",
                    "text": "I think I did not enjoy it maybe because I did not know the rules yet.",
                    "next_question": []
                }
            ],
            "title": "Did you enjoy it?",
            "is_next_question": true
        },
        {
            "id": 21,
            "options": [
                {
                    "id": 61,
                    "title": "Yes",
                    "text": "I played it the first time. It was something new to me.",
                    "next_question": [
                        20
                    ]
                },
                {
                    "id": 62,
                    "title": "No",
                    "text": "It was not the first time I played [sport]. And everytime I play, I feel the exact same happiness after playing it.",
                    "next_question": []
                }
            ],
            "title": "Was it your first time play?",
            "is_next_question": true
        },
        {
            "id": 22,
            "options": [
                {
                    "id": 55,
                    "title": "Dining/Restaurant",
                    "text": "We had a little dinner with the family today. I feel great after that dinner we had. We should spend more time with our families I think.",
                    "next_question": [
                        18
                    ]
                },
                {
                    "id": 56,
                    "title": "Friends",
                    "text": "I hung out with friends. We are best friends!",
                    "next_question": []
                },
                {
                    "id": 63,
                    "title": "sports",
                    "text": "We played [sport/hiking]. I felt like I am gonna pass out from exhaustion lol. It was a good day.",
                    "next_question": [
                        19,
                        21
                    ]
                },
                {
                    "id": 64,
                    "title": "crafting/exploring",
                    "text": "I did some exploring/crafting. I figured out that [a task] is possible and I can do it! It increased my confidence and gave me inspiration.",
                    "next_question": []
                }
            ],
            "title": "What was it?",
            "is_next_question": true
        },
        {
            "id": 23,
            "options": [
                {
                    "id": 68,
                    "title": "Yes",
                    "text": "I dislike my [guardian] for that. I think everybody has the freedom of entertainment and having fun. They suck man.",
                    "next_question": []
                },
                {
                    "id": 69,
                    "title": "No",
                    "text": "But I understand that it is for my own good. I cant blame them for anything.",
                    "next_question": []
                }
            ],
            "title": "Do you dislike your guardians for that?",
            "is_next_question": true
        },
        {
            "id": 24,
            "options": [
                {
                    "id": 71,
                    "title": "Yes",
                    "text": "I hate homework. Truly, I feel like dying then doing the goddam homework! :(",
                    "next_question": []
                },
                {
                    "id": 72,
                    "title": "No",
                    "text": "But I dont hate homework. I think it is important to keep students busy, otherwise they will busy themselves into other things that are not good for them.",
                    "next_question": []
                }
            ],
            "title": "Do you hate homework?",
            "is_next_question": true
        },
        {
            "id": 25,
            "options": [
                {
                    "id": 73,
                    "title": "Homework",
                    "text": "Busy doing homework. I dont understand why teachers give so much homework to the students.",
                    "next_question": [
                        24
                    ]
                },
                {
                    "id": 74,
                    "title": "Chores",
                    "text": "I did a lot of chores today. Chores here chores there everywhere chores! I am tired man.",
                    "next_question": []
                },
                {
                    "id": 75,
                    "title": "Work",
                    "text": "But you got to work if you want to stay active and not die of infections and hunger. It is the most basic human thing. To work. Doing it for millions of years as a human soooo......",
                    "next_question": []
                }
            ],
            "title": "Busy doing what?",
            "is_next_question": true
        },
        {
            "id": 26,
            "options": [
                {
                    "id": 66,
                    "title": "Tired",
                    "text": "Maybe I am too tired for fun stuff today...",
                    "next_question": []
                },
                {
                    "id": 67,
                    "title": "Mood",
                    "text": "Maybe it is because I am not in the mood right now.",
                    "next_question": []
                },
                {
                    "id": 70,
                    "title": "Restrictions",
                    "text": "I am too restricted by my parents to be able to do fun stuff...",
                    "next_question": [
                        23
                    ]
                },
                {
                    "id": 76,
                    "title": "Busy",
                    "text": "I have been too busy today...",
                    "next_question": [
                        25
                    ]
                }
            ],
            "title": "Why?",
            "is_next_question": true
        },
        {
            "id": 27,
            "options": [
                {
                    "id": 65,
                    "title": "Yes",
                    "text": "I have done something fun today. It was really a refreshing activity!",
                    "next_question": [
                        22
                    ]
                },
                {
                    "id": 77,
                    "title": "No",
                    "text": "I did not do anything special today. I dont know why tho.",
                    "next_question": [
                        26
                    ]
                },
                {
                    "id": 78,
                    "title": "Dont know",
                    "text": "I really did not keep record of what happened today, I should really remember things....",
                    "next_question": []
                }
            ],
            "title": "Have you done something fun today?",
            "is_next_question": false
        }
    ]);

    const [cachedCards, setCachedCards] = useState({})

    const [newCards, setNewCards] = useState({})
    
    const [cardCount, setCardCount] = useState(0)
    useEffect(() => {
        setCardCount(cards.length);
      }, [cards]);
    
    useEffect(()=>{

        const getCard = async (obj, relationKey=null, level=0)=>{
            var tempCard = {}
            console.log("key: " + relationKey)
            tempCard.relationKey = relationKey
            tempCard.level = level
            var nextQuestion = obj.next_question
            var id = obj.id

            for (let x in obj){
                if (typeof(obj[x]) === 'object'){
                    await getCard(obj[x], relationKey=id? id:relationKey, level+1)
                }
                if (nextQuestion && nextQuestion.length > 0){
                    for (let x in nextQuestion){
                        if (x in Object.keys(cachedCards)){
                            await getCard(cachedCards[x], relationKey=id? id:relationKey, level+1)
                        }
                        else{
                            var questionJson = await getQuestion(x)
                            if (!questionJson) continue
                            setCachedCards(prevState => ({...prevState, [x]: questionJson}))
                            await getCard(questionJson, relationKey=id? id:relationKey, level+1)
                        }
                    }
                }
                else{
                    tempCard[x] = obj[x]
                }
            }
            setNewCards(prevState => ({...prevState, [id]: tempCard}));
        }
        getCard(cards, 0)
        console.log(newCards)
    }, [])

    
  return (
    <div className="list">
        <button
        onClick={() => console.log(newCards)}
        >Show cards</button>
        <p>{cardCount}</p>
        <div>
           {Object.keys(cards).map((key) => (
                <div className="col d-flex" key={key}>
                <Card title={cards[key].title} content={cards[key].content} />
                    </div>))}
        </div>

        <div className="col">
           {Object.keys(cards).map((key) => (
                <div className="col d-flex" key={key}>
                <Card title={cards[key].title} content={cards[key].content} />
                    </div>))}
        </div>
      
    </div>
  )
}

export default List;