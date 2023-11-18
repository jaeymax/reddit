import {Menu, Search, MoreHoriz, HighlightOff,GridViewOutlined} from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useState } from 'react';


//#1A282D
//#0B1416

const Navbar = () => {
    
    const [search, setSearch] = useState('');
    const [showClosingMenu, setShowClosingMenu] = useState(false);

    const handleChange = (e) =>{
        setSearch(e.target.value);
        if(e.target.value){
            setShowClosingMenu(true);
        }
        else{
            setShowClosingMenu(false);
        }
    }

  return (
    <div className="w-full flex items-center justify-between p-2 border-b border-gray-700 gap-5">
        <IconButton>
            <Menu className='text-white' />
        </IconButton>
        <div className='h-9 w-9 min-w-max' >
            <img  className='w-full h-full object-contain' src="https://www.iconpacks.net/icons/2/free-reddit-logo-icon-2436-thumb.png" alt="" />
        </div>
        <div style={{backgroundColor:'#1A282D'}} className='flex-1 p-2 rounded-3xl flex items-center px-5'>
            <Search className='text-white' />
            <input  value={search} onChange={handleChange} style={{backgroundColor:'#1A282D'}} className='flex-1 outline-0 text-white' placeholder='Search Reddit' />
            {/* <IconButton > */}
            {showClosingMenu && <HighlightOff  fontSize='small' className='text-white'/>}
            
            {/* </IconButton> */}
        </div>
        <div style={{backgroundColor:'#1A282D'}} className='flex items-center gap-1 text-white py-2 px-3 rounded-3xl'>
        <GridViewOutlined fontSize='small' />
         <p>Get app</p>
        </div>
        <a href="http://" style={{backgroundColor:'#FF4500'}} className='min-w-max w-16 h-10 text-white font-bold rounded-3xl px-3 py-2' >Log In</a>
        <IconButton>
            <MoreHoriz className='text-white'/>
        </IconButton>
    </div>
  )
}

export default Navbar
