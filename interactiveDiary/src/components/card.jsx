import { useEffect } from 'react';
import Draggable from 'react-draggable';
import Xarrow, {Xwrapper, useXarrow} from "react-xarrows";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/fontawesome-free-solid';
import { Link } from 'react-router-dom';


const Card = ({ title, content, id, previousQuestionId, isPrevQ, spawnNewCard, layer}) => {
  const updateXarrow = useXarrow();

  const isOption = title=="Option"? true: false
  const eligibleForPlus = !(isOption && isPrevQ)

  const handleOnStop=(data, e) => {
    updateXarrow()
  }

  const handleOnStart=(data, e)=> {
    updateXarrow()
  }

  
    return (
      <>
        <Draggable onDrag={handleOnStart} onStop={(data, e)=>{handleOnStop(data, e)}}>
  <div className="card-container" style={{ display: 'flex' }}>

    <div className="card" id={id}>
      <div className="header">{title}</div>
      {content && <div className="content">{content}</div>}
    </div>

    {eligibleForPlus &&
      <div className='icon-container'>
        <button onClick={() => spawnNewCard(id, layer, isOption)}>
          <FontAwesomeIcon icon={faPlus} style={{ fontSize: '24px' }} />
        </button>
      </div>
    }

  </div>
</Draggable>
        </>
    )
  }
  
export default Card;