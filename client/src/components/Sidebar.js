import {SportsEsportsOutlined,SportsSoccerOutlined, BusinessOutlined, SportsBaseballOutlined, StarOutlineOutlined, DesktopWindowsOutlined} from '@mui/icons-material'
import SidebarItem from './SidebarItem'

const Sidebar = () => {
  return (
    <div className='flex text-white' >
    <div className='basis-1/4 border-r border-gray-700 py-4 px-5' >
         <div className='border-b border-gray-700' >
            <SidebarItem icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>} name={'Home'} />
            <SidebarItem icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>} name={'Popular'} />
         </div>
         <div>
           <div>
             <h6>TOPICS</h6>
           </div>
           <SidebarItem icon={<SportsEsportsOutlined/>} name={'Gaming'} />
           <SidebarItem icon={<SportsBaseballOutlined/>} name={'Sports'} />
           <SidebarItem icon={<BusinessOutlined/>} name={'Business'} />
           <SidebarItem icon={<SportsSoccerOutlined/>} name={'Crypto'} />
           <SidebarItem icon={<DesktopWindowsOutlined/>} name={'Television'} />
           <SidebarItem icon={<StarOutlineOutlined/>} name={'Celebrity'} />
         </div>
    </div>
    <div className='basis-3/4'>
         Feed Tab
    </div>
</div>
  )
}

export default Sidebar
