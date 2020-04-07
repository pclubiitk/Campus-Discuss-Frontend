import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <div className="profile">

                </div>
                <div className="streams-list">
                    
                </div>
            </div>
        )
    }
}
ReactDOM.render(
    <Sidebar />,
    document.getElementById('root')
);
