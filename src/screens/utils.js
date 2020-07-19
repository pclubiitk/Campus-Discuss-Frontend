// @flow
import * as React from "react";
import { useRouteMatch } from "react-router";
import { useSelector } from "react-redux";
import { streamById } from "../redux/selectors";
import Topbar from "../components/Topbar";
import Sidebar from "../components/sidebar";
import { type Stream } from "../types";

type Props = {|
  title: string,
  renderMain: () => React$Node,
|};

export const Screen = (props: Props) => {
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

/**
 * USE ONLY WHEN YOU KNOW A STREAM IS OPEN
 *
 * Gets the stream ID from current route path and
 * returns corresponding stream object from Redux store
 */
export const useOpenStream = () => {
  const match = useRouteMatch();
  const streamId = match.params.id;
  const stream = ((useSelector(streamById(streamId)): any): Stream);
  return stream;
};
