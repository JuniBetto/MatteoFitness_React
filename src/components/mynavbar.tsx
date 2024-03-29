import { FunctionComponent, MouseEvent, useRef } from "react"
import Servizio, { servizioType } from "./servizio"
import './css/mynavbar.css'
import { v4 as uuidv4 } from 'uuid';

export type navBarType={
    items:servizioType[],
}
 const MynavBar:FunctionComponent<navBarType>=({items}) =>{
  const navbbarElement=useRef(null);
  return (
    <nav  ref={navbbarElement} className='fatherNavBarClass'>
     {items.map((element)=> <Servizio key={uuidv4()} icon={element.icon} title={element.title} classCss={null} onCliclServizio={element.onCliclServizio}  />)}
    </nav>
  )
}
export default MynavBar
