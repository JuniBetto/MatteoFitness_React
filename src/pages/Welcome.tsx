
import { faHouse, faUsersGear } from '@fortawesome/free-solid-svg-icons'
import MynavBar from '../components/mynavbar'
import { servizioType } from '../components/servizio'

function Welcome() {
  var element = [{title:"home" ,icon:{faHouse}},
  {title:"Staff",icon:{faUsersGear}},
  {title:"Convenzioni",icon:{faUsersGear}},
  {title:"Contacts",icon:{faUsersGear}},
  {title:"Prenota",icon:{faUsersGear}},
  {title:"About",icon:{faUsersGear}}]
  return (
    <div>
      <MynavBar items={element} />

      <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Consectetur, non. Deserunt ipsa quae ab atque autem eaque, 
        architecto eveniet officia reprehenderit laborum,
         repudiandae saepe itaque accusantium nulla voluptatum alias totam.
         </h1>
         
    </div>
  )
}

export default Welcome
