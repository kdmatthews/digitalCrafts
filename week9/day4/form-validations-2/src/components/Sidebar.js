
import { SideBarDiv,  LinkDiv } from '../styled-components/SiderbarStyle';
import { sidebarData } from './SideBarData';
import SideBarLinks from './SideBarLinks';



export default function Sidebar(props) {
    const viewSidebar = props.viewSidebar;
    
   
    
    
 
    return (
        <>
        {viewSidebar ?  
        <SideBarDiv>
    
            {sidebarData?.map((linkData)=>(
                <SideBarLinks linkData={linkData} />
            ))}
            
            
         
        
        </SideBarDiv> 
         :  <></>}

        
        
       </>
    )
    
         }
