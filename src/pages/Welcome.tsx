
import { faHouse, faSpa, faUsersGear } from '@fortawesome/free-solid-svg-icons'
import MynavBar from '../components/mynavbar'
import { servizioType } from '../components/servizio'
import UpNavBar from '../components/upNavBar'
import '../components/css/welcome.css'
import ListServizi from "../components/list_servizi";
import Contents from '../components/contents'
import { ReactNode, useRef, useState } from 'react'
import FisioTerapia from './service/Fisio_terapia'
import import_page from '../utils/import_page'
import Footer from '../components/Footer'

function Welcome() {
  const elementOfWelcom=useRef(null);
  var elementNavBar:servizioType[] = [{title:"home" ,icon: faHouse,classCss:null,onCliclServizio:()=>onCliclServizio1(<import_page.Home/>)},
  {title:"Staff",icon:faUsersGear,classCss:null,onCliclServizio:()=>{}},
  {title:"Convenzioni",icon:faUsersGear,classCss:null,onCliclServizio:()=>{}},
  {title:"Contacts",icon:faUsersGear,classCss:null,onCliclServizio:()=>{}},
  {title:"Prenota",icon:faUsersGear,classCss:null,onCliclServizio:()=>{}},
  {title:"About",icon:faUsersGear,classCss:null,onCliclServizio:()=>{}}];
  
  var elementlisSerzi:servizioType[] = [{title:"fisioTerapia" ,icon: faSpa,classCss:null,onCliclServizio:()=>onCliclServizio1(<FisioTerapia/>)},
  {title:"Osteopatia",icon:faSpa,classCss:null,onCliclServizio:()=>onCliclServizio1(<import_page.Osteopatia/>)},
  {title:"Massoterapia",icon:faSpa,classCss:null,onCliclServizio:()=>onCliclServizio1(<import_page.MassoTerapia/>)},
  {title:"Chinesiterapia",icon:faSpa,classCss:null,onCliclServizio:()=>{}},
  {title:"Terapia strumentale",icon:faSpa,classCss:null,onCliclServizio:()=>{}},
  {title:"Terapia domiciliare",icon:faSpa,classCss:null,onCliclServizio:()=>{}}];
  const lor="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur modi cum consequatur cupiditate nemo quos incidunt obcaecati doloribus facere"

  const [welcomContentpage,welcomContentpageSet]=useState<ReactNode>(<div>{lor}</div>);
  const onCliclServizio1 =(page:ReactNode)=>{
    welcomContentpageSet( page);
  }

  return (
    <div ref={elementOfWelcom} className='fatherWelcomeClass'>
      <UpNavBar />
      <MynavBar items={elementNavBar} />
      <ListServizi items={elementlisSerzi}/>
     <Contents pageInsideContent={welcomContentpage} />  
         <Footer/>
    </div>
  )
}

export default Welcome
