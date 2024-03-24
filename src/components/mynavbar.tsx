import { FunctionComponent } from "react"
import Servizio, { servizioType } from "./servizio"
import './css/mynavbar.css'

type navBarType={
    items:servizioType[],
}
 const MynavBar:FunctionComponent<navBarType>=({items}) =>{
  return (
    <nav className='fatherNavBarClass'>
     {items.map((element)=> <Servizio title={element.title}/>)}
    </nav>
  )
}
export default MynavBar
