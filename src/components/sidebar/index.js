import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import './style.css';

function Profile(props) {
    return (
        <Button className="contained">{props.name}</Button>
    );
}

class StreamsList extends React.Component {
    render() {
        return (
            <li>
                <Button color="primary" onClick={() => alert("clicked " + this.props.streamName)}>
                    {this.props.streamName}
                </Button>                                                                
            </li>
        )
    }
}
class Sidebar extends React.Component {
    CreateStreamsList(streams) {
        let list = new Array();

        for (let i = 0; i < streams.length; i++) {
            list.push(<StreamsList streamName={streams[i]} />);
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
                    <div className="streams-list">
                        <ul className="sidenav" style={{listStyleType: "none"}}>
                            {streamsList}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Sidebar;