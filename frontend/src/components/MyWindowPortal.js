import React from "react";
import ReactDOM from "react-dom";

export default class MyWindowPortal extends React.PureComponent {
  constructor(props) {
    super(props);
    // STEP 1: create a container <div>
    this.containerEl = document.createElement("div");
    this.externalWindow = null;
  }

  componentDidMount() {
    const width = this.props.width || 600;
    const height = this.props.height || 400;
    this.externalWindow = window.open(
      "",
      "",
      `width=${width},height=${height},left=200,top=200`
    );
    this.externalWindow.document.body.appendChild(this.containerEl);
  }

  componentWillUnmount() {
    this.externalWindow.close();
  }

  render() {
    // STEP 2: append props.children to the container <div> that isn't mounted anywhere yet
    return ReactDOM.createPortal(this.props.children, this.containerEl);
  }
}
