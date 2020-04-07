import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Sidebar extends React.component {
    render() {
        return (
            <div classname="sidebar">
                <div classname="profile">

                </div>
                <div classname="streams-list">
                    
                </div>
            </div>
        )
    }
}
ReactDOM.render(
    <Sidebar />,
    document.getElementById('root')
);