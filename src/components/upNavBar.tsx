import { Fragment, FunctionComponent } from 'react'
import './css/upNavBar.css'
import Adress from './adress'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import Social from './social'

const upNavBar:FunctionComponent=()=> {
  return (
    <div className='NavBarClass'>
        <div className='fatherupNavBarClass'>
      <Adress icon={faLocationDot} title={'address'} classCss={null}/>
      <Adress icon={faPhone} title={"+39 3886974370 "} classCss={'bgColorNumber1'}/>
      <Adress icon={faPhone} title={"+39 3886974370 "} classCss={'bgColorNumber2'}/>
      <Adress icon={faEnvelope} title={'email@xxxxxxx.com'} classCss={'bgColorEmail'}/>
    </div>
    <Social />
    </div>

  )
}

export default upNavBar