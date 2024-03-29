import { FunctionComponent, useRef } from "react"
import { servizioType } from "../components/servizio"
type AddNewPageType={
    servizioType:servizioType,
    nameLinkOfRoute:string,    
}

const Add_new_page:FunctionComponent<AddNewPageType>=({servizioType,nameLinkOfRoute})=> {
    const firstElementOfNavbar=useRef(null);
    console.dir(firstElementOfNavbar);
  return (
    <div>
      <p>{servizioType.title}</p>
      <p>{nameLinkOfRoute}</p>
    </div>
  )
}

export default Add_new_page
