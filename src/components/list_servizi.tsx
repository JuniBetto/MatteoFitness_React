
import { FunctionComponent, useRef } from 'react'
import './css/list_servizi.css'
import {  faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Servizio from './servizio'
import { navBarType } from './mynavbar'
import { v4 as uuidv4 } from 'uuid';


const listServizi:FunctionComponent<navBarType>=({items})=> {
  const listServiziElement=useRef(null);


  return (
    <div ref={listServiziElement} className='fatherListServiziClass '>
     <FontAwesomeIcon className='iconArrow ' icon={faChevronLeft} size='1x' /> 
     {items.map((element)=> <Servizio  key={uuidv4()}
      icon={element.icon}
      title={element.title}
      classCss={null}
      onCliclServizio={element.onCliclServizio} 
      servizioTypeButton={element.servizioTypeButton} />)}
     </div>
  )
}

export default listServizi