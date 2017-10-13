import React from "react";
import HogItem from "./HogItem";

class HogsList extends React.Component {
  displayHogs() {
    return this.props.hogs.filter(hog => hog.show).map(hog => {
      return (
        <HogItem
          key={hog.id}
          handleHideHog={this.props.handleHideHog}
          hog={hog}
          clickHideHog={this.props.clickHideHog}
        />
      );
    });
  }

  render() {
    return <div className="ui cards">{this.displayHogs()}</div>;
  }
}

export default HogsList;
