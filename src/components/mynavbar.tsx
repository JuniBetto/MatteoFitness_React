import { FunctionComponent } from "react"
import Servizio, { servizioType } from "./servizio"
import './css/mynavbar.css'

type navBarType={
    items:servizioType[],
}
 const MynavBar:FunctionComponent<navBarType>=({items}) =>{
  return (
    <nav className='fatherNavBarClass'>
     {items.map((element)=> <Servizio icon={element.icon} title={element.title} classCss={null}/>)}
    </nav>
  )
}
export default MynavBar
