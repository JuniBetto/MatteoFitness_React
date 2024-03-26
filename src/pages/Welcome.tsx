
import { faHouse, faUsersGear } from '@fortawesome/free-solid-svg-icons'
import MynavBar from '../components/mynavbar'
import { servizioType } from '../components/servizio'
import UpNavBar from '../components/upNavBar'
import '../components/css/welcome.css'
import ListServizi from "../components/list_servizi";
import Contents from '../components/contents'

function Welcome() {
  var element:servizioType[] = [{title:"home" ,icon: faHouse,classCss:null},
  {title:"Staff",icon:faUsersGear,classCss:null},
  {title:"Convenzioni",icon:faUsersGear,classCss:null},
  {title:"Contacts",icon:faUsersGear,classCss:null},
  {title:"Prenota",icon:faUsersGear,classCss:null},
  {title:"About",icon:faUsersGear,classCss:null}]
  return (
    <div className='fatherWelcomeClass'>
      <UpNavBar />
      <MynavBar items={element} />
      <ListServizi/>
     <Contents/>
      
         
    </div>
  )
}

export default Welcome
