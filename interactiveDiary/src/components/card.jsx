import { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import Xarrow, {Xwrapper, useXarrow} from "react-xarrows";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faLink, faEdit } from '@fortawesome/fontawesome-free-solid';
import { Link } from 'react-router-dom';


const Card = ({ title, content, id, handleCardClick, setActiveLinkCard, editCardContent, previousQuestionId, isPrevQ, spawnNewCard, layer, deleteCard}) => {
  const updateXarrow = useXarrow();

  const [isEditable, setIsEditable] = useState(false)
  const isOption = title=="Option"? true: false
  const eligibleForPlus = !(isOption && isPrevQ)



  const handleOnStop=(data, e) => {
    updateXarrow()
  }

  const handleOnStart=(data, e)=> {
    updateXarrow()
  }


  
    return (
      <div>
        <Draggable onDrag={handleOnStart} onStop={(data, e)=>{handleOnStop(data, e)}}>
  <div className="card-container" style={{ display: 'flex' }}>

    <div className="card" id={id}>
      <div  onClick={() => handleCardClick(id)} className="header">{title}</div>
      <div className="content">
        {isEditable ? <textarea value={content} onChange={(e) => {editCardContent(id, e.target.value, isOption)}}></textarea>: content}
        </div>
    </div>

      <div className='icon-container'>
        <button>
          <FontAwesomeIcon icon={faTrash} onClick={() => deleteCard(id)} style={{ fontSize: '24px' }}/>
        </button>

        {eligibleForPlus && <>
        <button onClick={() => spawnNewCard(id, layer, isOption)}>
          <FontAwesomeIcon icon={faPlus} style={{ fontSize: '24px' }} />
        </button>
        <button>
          <FontAwesomeIcon onClick={()=>{setActiveLinkCard(id); console.log("set the card link")}} icon={faLink} style={{ fontSize: '24px' }}/>
        </button>
        
        </>
        }
      <button>
          <FontAwesomeIcon onClick={() => setIsEditable(!isEditable)} icon={faEdit} style={{ fontSize: '24px', color: isEditable?'blue':'' }} />
        </button>
        
      </div>
    

  </div>
</Draggable>
        </div>
    )
  }
  
export default Card;