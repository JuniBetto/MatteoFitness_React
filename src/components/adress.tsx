import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './css/adress.css'
import { Link } from 'react-router-dom'
import { FunctionComponent } from 'react'
import  { servizioType } from './servizio'

const adress:FunctionComponent<servizioType>=({icon,title,classCss})=> {
  return (
    <Link className= {`fatherAdressClass ${classCss}`} to={`/${title}`}>
    {icon != null?<FontAwesomeIcon className='iconAdressClass' icon={icon} size='1x' />:null} {title}
</Link>  
  )
}

export default adress