import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Sidebar from './components/sidebar'
import * as serviceWorker from './serviceWorker';
function Profile(props) {
+    return (
+        <Button className="contained">{props.name}
+
+        </Button>
+    );
+}
+class StreamsList extends React.Component {
+
+    render() {
+        return (
+            <div class="mdc-menu mdc-menu-surface">
+                <ul class="mdc-list" role="menu" aria-hidden="false" aria-orientation="horizontal" tabindex="-1">
+                    <uli class="mdc-list-item" role="menuitem">
+                        <span class="mdc-list-item__text"></span>
+
+
+
+                        <Button className="contained" color="primary" onClick={() => alert("clicked " + this.props.streamName)}>
+                            {this.props.streamName}
+                        </Button>
+                                                                     
+                     </uli>
+
+
+
+                </ul>
+            </div>
+        )
+    }
+}
+class Sidebar extends React.Component {
+    CreateStreamsList(streams) {
+        let list = new Array();
+        console.log(streams);
+        console.log(streams[1]);
+        for (let i = 0; i < streams.length; i++) {
+            list.push(<StreamsList streamName={streams[i]} />);
+        }
+        return list;
+    }
+    render() {
+        const streamsList = this.CreateStreamsList(this.props.streams);
+        return (
+
+            <nav>
+                <div className="sidebar">
+                    <div className="profile">
+                        <Profile name={this.props.name} />
+                    </div>
+                    <div className="streams-list">
+                        <ul className="sidenav">
+                            {streamsList}
+                        </ul>
+                    </div>
+                </div>
+            </nav>
+        )
+    }
+}
+
+
ReactDOM.render(
  <React.StrictMode>
    <Sidebar name="John Doe" streams={["Stream1", "Stream Two"]}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
