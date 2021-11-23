import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
export default function Header() {
    return (

        <div className="App-header">
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => console.log("Open menu")}
                className="row1 item1"
            >
                <MenuIcon />
            </IconButton>
            <Typography className="row1 item2" color="inherit" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                News
            </Typography>
            <div className="row2 item2 buttonBar">
                <IconButton
                    size="large"
                    sx={{ mr: 2 }}
                    color="inherit"
                    onClick={() => console.log("Open menu")}
                    className="row1 item1"
                >
                    <HomeIcon />
                </IconButton>
                <IconButton
                    size="large"
                    sx={{ mr: 2 }}
                    color="inherit"
                    onClick={() => console.log("Open menu")}
                    className="row1 item1"
                >
                    <MenuIcon />
                </IconButton>
            </div>
            <Button className="row1 item3" color="inherit">Login</Button>
        </div>

    );
}