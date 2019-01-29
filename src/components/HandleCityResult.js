import React from "react";

class HandleCityResult extends React.Component {
  HandleSearchResult = () => {
    const { newCity } = this.props;
    console.log(newCity);
    return newCity.map(city => (
      <div key={city.id} className="cityInfo">
        <div className="city-name">City : {city.name}</div>
        <div>Current Condition : {city.weather[0].description}</div>
        <div>Temperature : {city.main.temp}°c</div>
        <div>Humidity : {city.main.humidity}</div>
        <button
          onClick={() => this.props.listDelete(city.id)}
          className="del-btn"
        >
          X
        </button>
      </div>
    ));
  };

  render() {
    return <div> {!this.props.newCity ? null : this.HandleSearchResult()}</div>;
  }
}

export default HandleCityResult;
