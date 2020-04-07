import React from 'react' ;
import './style.css' ;

        /*with Material UI*/

import { AppBar } from '@material-ui/core' ;
import { Toolbar } from '@material-ui/core' ;
import { IconButton } from '@material-ui/core' ;
import MenuIcon from '@material-ui/icons/Menu' ;
import Search from '@material-ui/icons/Search' ;
import { Typography } from '@material-ui/core' ;

console.log("Opened !")

class Topbar extends React.Component {
    render() {
        console.log("in render function")
        return (
            <AppBar position="static">
            <div class="topbar">
                <div>
                <Toolbar>
                    <IconButton onClick={() => console.log("menu clicked")} edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" >
                    { this.props.title }
                    </Typography>
                </Toolbar>
                </div>
                <div>
                <Toolbar>
                    <IconButton onClick={() => console.log("search clicked")} edge="start" color="inherit" aria-label="menu">
                    <Search />
                    </IconButton>
                </Toolbar>
                </div>
            </div>
            </AppBar>
        )
    }
}

export default Topbar