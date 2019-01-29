import React from "react";
import { connect } from "react-redux";
import { fetchWeather } from "../actions/actionIndex";
import { listDelete } from "../actions/actionIndex";
import HandleGoogleMap from "./HandleGoogleMap";
import HandleCityResult from "./HandleCityResult";
import "./App.css";

class HandleCitySearch extends React.Component {
  state = {
    term: ""
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({
      term: ""
    });
  };

  render() {
    const { newCity, listDelete, lat, lng } = this.props;
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <h1>How's The Weather Today?</h1>
          <p>
            Type any name of cities and enter to view current weather conditons.
          </p>
          <span>city</span>
          <input
            type="text"
            value={this.state.term}
            onChange={e => this.setState({ term: e.target.value })}
          />
          <button className="search-btn">Search</button>
        </form>
        <HandleGoogleMap lat={lat} lng={lng} term={this.props.term} />
        <HandleCityResult newCity={newCity} listDelete={listDelete} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    newCity: state.reducerIndex,
    lat:
      state.reducerIndex[state.reducerIndex.length - 1] !== undefined
        ? state.reducerIndex[state.reducerIndex.length - 1].coord.lat
        : null,
    lng:
      state.reducerIndex[state.reducerIndex.length - 1] !== undefined
        ? state.reducerIndex[state.reducerIndex.length - 1].coord.lon
        : null
  };
};

export default connect(
  mapStateToProps,
  { fetchWeather, listDelete }
)(HandleCitySearch);
