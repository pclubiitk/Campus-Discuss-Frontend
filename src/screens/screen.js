// @flow
import * as React from "react";
import Topbar from "../components/Topbar";
import Sidebar from "../components/sidebar";

type Props = {|
  title: string,
  renderMain: () => React$Node,
|};

const Screen = (props: Props) => {
  return (
    <>
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="main-body">
        <div className="topbar-container">
          <Topbar title={props.title} />
        </div>
        <div className="main-container">{props.renderMain()}</div>
      </div>
    </>
  );
};

export default Screen;
