import { NavLink } from 'react-router-dom';
import { Box, Drawer, List, ListItem, ListItemText, Avatar } from "@mui/material";
import { Close } from "@mui/icons-material";
import Logo from '../assets/imgs/Logo.png';

export const SideBar = ({ sideBarToggle, onClose, activeButton }) => {
    return (
        <Drawer
            variant="temporary"
            anchor="right"
            open={sideBarToggle}
            onClose={onClose}
            sx={{
                width: 240, 
                flexShrink: 0, 
                '& .MuiDrawer-paper': {
                    width: '40%', 
                    boxSizing: 'border-box', 
                    border: 'solid #444 2px', 
                    bgcolor: '#2e79ba',
                },
            }}
        >
            <Box sx={{ width: '100%', height: '100%', position: 'relative', display: 'flex', flexDirection: 'column'}}>
            <Avatar 
                    src={Logo}
                    sx={{
                        width: 'auto',
                        height: '20%',
                        maxWidth: 250,
                        maxHeight: 250,
                        margin: '0 auto',  
                        display: 'block',
                        mt: 3, 
                        p:0
                    }}
                />
                <List sx={{mt:2}}>
                {['About Me', 'Work', 'Contact', 'Resume'].map((text) => (
                        <ListItem
                            button
                            key={text}
                            component={NavLink}
                            to={text === 'About Me' ? '/' : `/${text.replace(' ', '').toLowerCase()}`}
                            className={activeButton === text.replace(' ', '') ? 'active' : ''}
                            sx={{
                                    backgroundColor: '#212529',
                                    '&:hover': {
                                        backgroundColor: 'rgba(33, 37, 41, 0.7)',
                                    },
                                    borderRadius:1 ,
                                    border: '1px solid black',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    p: 1.25
                                }}

                        >
                            <ListItemText primary={text} sx={{ color: '#fff', textAlign: 'center'}} />
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Close 
                onClick={() => onClose(false)}
                sx={{ 
                    fontSize: 35,
                    cursor: 'pointer', 
                    transition: '0.1s ease-in-out', 
                    position: 'absolute', 
                    top: 12, 
                    left: 10, 
                }}
            />
        </Drawer>
    );
};

export default SideBar;
