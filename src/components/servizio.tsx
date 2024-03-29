
import { FunctionComponent, useRef,  } from 'react'
import{Link} from 'react-router-dom'
import './css/servizio.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'


export type servizioType={
  onCliclServizio:React.MouseEventHandler<HTMLDivElement>,
    icon:IconDefinition|null,
    title:string,
    classCss:string|null
}
const servizio:FunctionComponent<servizioType>=({icon,title,onCliclServizio: onCliclservizio})=> {

  const servizioElementRef=useRef(null);
  
  

  return (
        <div onClick={onCliclservizio} ref={servizioElementRef} className='fatherLiClass linkLiClass'  /* to={`/${title}`} */>
            {icon != null?<FontAwesomeIcon icon={icon} size='1x' />:null} {title}
        </div>  
  )
}

export default servizio
