
import { FunctionComponent } from 'react'
import './css/list_servizi.css'
import { faArrowAltCircleLeft, faArrowAltCircleRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const listServizi:FunctionComponent=()=> {
  return (
    <div className='fatherListServiziClass'>
     <FontAwesomeIcon className='iconArrow ' icon={faChevronLeft} size='1x' />   list_servizi</div>
  )
}

export default listServizi