import { useEffect } from 'react';
import Draggable from 'react-draggable';


const Card = ({ title, content}) => {
    return (
        <Draggable>
      <div className="card">
        <div className="header">{title}</div>
        {content ? <div className="content">{content}</div> : ""}
      </div>
        </Draggable>
    )
  }
  
  export default Card;