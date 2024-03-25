import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './css/social.css'
import { faFacebook, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons'

function social() {
  return (
    <div className='fatherSocialClass'>
      <FontAwesomeIcon className='iconAdressClass' icon={faFacebook} size='1x' onClick={()=>console.log("jksllsd")} />
      <FontAwesomeIcon className='iconAdressClass' icon={faGoogle} size='1x' onClick={()=>console.log("google")} />
      <FontAwesomeIcon className='iconAdressClass' icon={faInstagram} size='1x' onClick={()=>console.log("Instagram")} />
    </div>
  )
}

export default social
