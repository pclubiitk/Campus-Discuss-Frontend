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
            <li>{this.props.streamName}</li>
        )
    }
}
class Sidebar extends React.Component {
    CreateStreamsList(streams) {
        let list = new Array();
        console.log(streams);
        console.log(streams[1]);
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
                        <ul className="sidenav">
                            {streamsList}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}


ReactDOM.render(
    <Sidebar name="John Doe" streams={["Stream1", "Stream Two"]}/>,
    document.getElementById('root')
);