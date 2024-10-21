import React from 'react'
import { FaRegMessage } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

import { FaAngleDown } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";



import { Avatar, Divider, ListItemIcon, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';



const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <div className="flex items-center justify-between shadow-md p-1  pl-7 pr-8 bg-purple-900 text-white rounded-sm">

            <div className="flex gap-7 items-center">
                <h4 className="font-semibold">Dashboard</h4>
            </div>

            <div className="flex pr-5 p-2 gap-9 text-xl items-center ">
                <span><FaRegMessage /></span>
                <span><IoMdNotificationsOutline /></span>

                <span onClick={handleClick} className='flex gap-1'>
                    <CgProfile className='text-2xl' />
                    <FaAngleDown />
                </span>
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >

                    <Link to='/profile'>
                    <MenuItem onClick={handleClose}>
                        <Avatar /> Profile
                    </MenuItem>
                    </Link>

                    <Divider />

                    <Link to='/settings'>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <IoSettingsOutline />
                        </ListItemIcon>
                        Settings
                    </MenuItem>
                    </Link>

                    <Link to='/'>
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <CiLogout />
                            </ListItemIcon>
                            Logout
                        </MenuItem>
                    </Link>

                </Menu>
            </div>

        </div>
    )
}

export default Navbar