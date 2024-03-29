import { FunctionComponent, ReactNode } from "react"
import './css/contents.css';
type contentType={
  pageInsideContent:ReactNode
}

const contents:FunctionComponent<contentType>=({pageInsideContent})=> {
  return (
    <div className='fatherContentClass'>
      {pageInsideContent}
        
      </div>
  )
}

export default contents