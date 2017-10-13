import React from "react";

class HogItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayDescription: false
    };
  }

  handleClick = () => {
    this.setState({
      displayDescription: !this.state.displayDescription
    });
  };

  hideClick = () => {
    this.props.clickHideHog(this.props.hog.id);
  };

  render() {
    return (
      <div className="ui card">
        <div className="content">
          <div className="header">{this.props.hog.name}</div>
          <p>Weight: {this.props.hog["weight"]}</p>
          <img
            src={require(`../hog-imgs/${this.props.hog.name
              .toLowerCase()
              .split(" ")
              .join("_")}.jpg`)}
          />
          {this.state.displayDescription && (
            <div className="description">
              <p>
                Specialty: {this.props.hog.specialty}
                <br />
                Greased: {this.props.hog.greased ? "Yes" : "No"}
                <br />
                Highest Medal Achieved:{" "}
                {this.props.hog["highest medal achieved"]}
                <br />
              </p>
            </div>
          )}
        </div>
        <button className="ui basic green button" onClick={this.handleClick}>
          {this.state.displayDescription ? "Hide" : "Show"} Details
        </button>
        <button className="ui basic button" onClick={this.hideClick}>
          <i className="icon hide" />
          Hide {this.props.hog.name}
        </button>
      </div>
    );
  }
}

export default HogItem;
