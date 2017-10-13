import React from "react";
import Hogs from "../porkers_data";
import HogsList from "./HogsList";

class HogsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      allHogs: Hogs.map(hog => {
        return Object.assign({}, hog);
      }),
      hogs: [...Hogs],
      sort: "all",
      filter: "all"
    };
  }

  sortFunction(term) {
    let sortedHogs = [...this.state.hogs];
    if (term !== "noSort") {
      return sortedHogs.sort(function(a, b) {
        return a[term] === b[term] ? 0 : a[term] < b[term] ? -1 : 1;
      });
    } else {
      return this.state.allHogs;
    }
  }

  filterFunction(term) {
    let allHogs = [...this.state.hogs2];
    if (term !== "all") {
      return allHogs.filter(function(hog) {
        return term === "greased" ? hog.greased : !hog.greased;
      });
    } else {
      return this.state.hogs;
    }
  }

  handleSort = event => {
    const hogs = this.sortFunction(event.target.value);
    this.setState({ hogs });
  };

  handleFilter = event => {
    const hogs = this.filterFunction(event.target.value);
    this.setState({
      hogs: hogs,
      filter: event.target.value
    });
  };

  hideHog = hogId => {
    const hogIndex = hogs.findIndex(hog => {
      return hog.id === hogId;
    });
    const hog = Object.assign({}, this.state.hogs[hogIndex], (show = true));
    const hogs = [
      ...this.state.hogs.slice(0, hogIndex),
      hog,
      ...this.state.hogs.slice(hogIndex + 1)
    ];
    this.setState({ hogs });
  };

  revealHogs = () => {
    const revealedHogs = this.state.hogs.map(hog => ({ ...hog, show: true }));
    this.setState({
      hogs: revealedHogs
    });
  };

  render() {
    console.log(this.hogDeepCopy);
    return (
      <div className="Hogs-container">
        <select onChange={this.handleSort}>
          <option value="noSort">No Sort</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
        <select onChange={this.handleFilter} value={this.state.filter}>
          <option value="all">All</option>
          <option value="greased">Greased</option>
          <option value="not-greased">Not Greased</option>
        </select>
        <button className="ui basic button" onClick={this.revealHogs}>
          <i className="icon unhide" />
          Show Hidden Hogs
        </button>
        <br />
        <br />
        <HogsList hogs={this.state.hogs} clickHideHog={this.hideHog} />
      </div>
    );
  }
}

export default HogsContainer;
