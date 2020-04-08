import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './style.css';

function Profile(props) {
    return (
        <Button color="primary" startIcon={<AccountCircleIcon />}>{props.name}</Button>
    );
}

class StreamsList extends React.Component {
    render() {
        return (
                <ListItem button onClick={() => alert("clicked " + this.props.streamName)}>
                    {this.props.streamName}
                </ListItem>                                                                
        )
    }
}
class Sidebar extends React.Component {
    CreateStreamsList(streams) {
        let list = new Array();
        for (let stream of streams) {
            list.push(<StreamsList streamName={stream} />);
        }
        return list;
    }
    render() {
        const streamsList=this.CreateStreamsList(this.props.streams);
        return (
            <nav>
                <div className="sidebar">
                    <div className="profile">
                        <Profile name={this.props.name} />
                    </div>
                    <div className="streams-list-wrapper">
                        <List component="nav" className="streams-list">
                            {streamsList}
                        </List>
                    </div>   
                </div>    
            </nav>    
        )         
    }    
}    

class Home extends React.Component {
    constructor(props){
       super(props);
       this.state = {
       open: false
	   }
	 }
    toggleSidebar(flag) {
        if (flag) {
            this.setState({
                open: true,
            });
        }
        else {
            this.setState({
                open: false,
            });
        }
        
     }

    render() {
       return(
       <div>
           <Button onClick={() => this.toggleSidebar(true)}>Hamburger</Button>
           <Drawer anchor = "left" open = {this.state.open} onClose= {() => this.toggleSidebar(false)}>
             <Sidebar name={this.props.name} streams={this.props.streams}/>
           </Drawer>
        </div> 
         )
	} 
}

export default Home;