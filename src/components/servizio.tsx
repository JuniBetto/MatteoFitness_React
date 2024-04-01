
import { FunctionComponent, useRef,  } from 'react'
import './css/servizio.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'


export type servizioType={
  onCliclServizio:React.MouseEventHandler<HTMLDivElement>,
    icon:IconDefinition|null,
    title:string,
    classCss:string|null,
    servizioTypeButton:ServizioTypeButton

}
export enum ServizioTypeButton{
  btNavBar="btNavBar",
  isPrenote="isPrenote",
  isLink="isLink"
  }
const servizio:FunctionComponent<servizioType>=({icon,title,servizioTypeButton,onCliclServizio: onCliclservizio})=> {

  const servizioElementRef=useRef(null);
  

  return (
        <div onClick={onCliclservizio} ref={servizioElementRef} className= {`fatherLiClass linkLiClass ${servizioTypeButton}`}   /* to={`/${title}`} */>
            {icon != null?<FontAwesomeIcon icon={icon} size='1x' />:null} {title}
        </div>  
  )
}



export default servizio
