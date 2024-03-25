
import { FunctionComponent,  } from 'react'
import{Link} from 'react-router-dom'
import './css/servizio.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

export type servizioType={
    icon:IconDefinition|null,
    title:string,
    classCss:string|null
}
const servizio:FunctionComponent<servizioType>=({icon,title})=> {
  return (
        <Link className='fatherLiClass linkLiClass' to={`/${title}`}>
            {icon != null?<FontAwesomeIcon icon={icon} size='1x' />:null} {title}
        </Link>  
  )
}

export default servizio
