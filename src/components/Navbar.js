import React, { useState } from 'react'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Stack } from '@mui/material';



const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)


  const handleClose = () => {
    setOpen(false)
    

  }
  const handleOpen = () => {
    setOpen(true)
    setOpen1(false)
    setOpen2(false)
    setOpen3(false)
  }
  const handleClose1 = () => {
    setOpen1(false)
  }
  const handleOpen1 = () => {
    setOpen1(true)

    setOpen(false)
    // setOpen1(false)
    setOpen2(false)
    setOpen3(false)
  }
  const handleClose2 = () => {
    setOpen2(false)
  }
  const handleOpen2 = () => {
    setOpen2(true)

    setOpen(false)
    setOpen1(false)
    // setOpen2(false)
    setOpen3(false)
  }
  const handleClose3 = () => {
    setOpen3(false)
  }
  const handleOpen3 = () => {
    setOpen3(true)
    setOpen(false)
    setOpen1(false)
    setOpen2(false)
    // setOpen3(false)
  }

  return (
    <>
      <div className="navbar">
        <div className='logo'> <img src="assets/code.png" alt='log' /></div>
        <div className='left-navbar'>
          <span className='nav-text' onMouseEnter={handleOpen} onMouseLeave={handleClose}>Courses</span>
          <span className='nav-text' onMouseEnter={handleOpen1} onMouseLeave={handleClose1}>Tutorial</span>
          <span className='nav-text' onMouseEnter={handleOpen2} onMouseLeave={handleClose2}>Jobs</span>
          <span className='nav-text' onMouseEnter={handleOpen3} onMouseLeave={handleClose3}>Practice</span>
        </div>
        <Stack
          onMouseEnter={handleOpen}
          style={{ display: open ? 'inherit' : 'none', border: "none", width: "150px", height: "120px", backgroundColor: "white", position: 'absolute', top: '44px', left: '520px' }}>
          <ul>
            <li className='menu-list'>For Student</li>
            <li className='menu-list'>For Professionals</li>
            <li className='menu-list'>For Beginners</li>
            <li className='menu-list'>All Courses</li>
          </ul>
        </Stack>
        <Stack
          onMouseEnter={handleOpen1}
          style={{ display: open1 ? 'inherit' : 'none', border: "none", width: "180px", height: "120px", backgroundColor: "white", position: 'absolute', top: '47px', left: '640px' }}>
          <ul>
            <li className='menu-list'>Web Development</li>
            <li className='menu-list'>Android Development</li>
            <li className='menu-list'>AI</li>
            <li className='menu-list'>Blockchain</li>
          </ul>
        </Stack>
        <Stack
          onMouseEnter={handleOpen2}
          style={{ display: open2 ? 'inherit' : 'none', border: "none", width: "150px", height: "120px", backgroundColor: "white", position: 'absolute', top: '47px', left: '680px' }}>
          <ul>
            <li className='menu-list'>For Job Seeker</li>
            <li className='menu-list'>For Recruiters</li>
            <li className='menu-list'>Internship</li>
            <li className='menu-list'>Remote</li>
          </ul>
        </Stack>
        <Stack
          onMouseEnter={handleOpen3}
          style={{ display: open3 ? 'inherit' : 'none', border: "none", width: "150px", height: "120px", backgroundColor: "white", position: 'absolute', top: '47px', left: '750px' }}>
          <ul>
            <li className='menu-list'>Curated DSA List</li>
            <li className='menu-list'>GFG Sheets</li>
            <li className='menu-list'>Problem of the day</li>
            <li className='menu-list'>DSA Problems</li>
          </ul>
        </Stack>
        {/* <div className="middle">
        <span className='nav-text'> GFG</span>
        </div> */}
        <div className="rightnav">
          <span className='nav-text'><SearchIcon style={{ Color: 'rgb(38,50,56)' }} /></span>
          <span className='nav-text'><Brightness4Icon style={{ Color: 'rgb(38,50,56)' }} /></span>
          <span className='nav-text'><Button variant="contained" style={{ backgroundColor: 'rgb(38,50,56)' }} >Login</Button></span>
        </div>
      </div>
    </>
  )
}

export default Navbar
