import React from "react";
import { connect } from "react-redux";

class Counter extends React.Component {
  render() {
    return (
      <div>
        <h3>LiberalArts: {this.props.LiberalArts}</h3>
        <h3>SocialSciences: {this.props.SocialSciences}</h3>
        <h3>NaturalScience: {this.props.NaturalScience}</h3>
        <h3>Engineering: {this.props.Engineering}</h3>
        <h3>Music: {this.props.Music}</h3>
        <h3>ArtAndDesign: {this.props.ArtAndDesign}</h3>
        <h3>Education: {this.props.Education}</h3>
        <h3>BusinessAdministration: {this.props.BusinessAdministration}</h3>
        <h3>ScienceAndIndustry: {this.props.ScienceAndIndustry}</h3>
        <h3>Medicine: {this.props.Medicine}</h3>
        <h3>Nursing: {this.props.Nursing}</h3>
        <h3>Pharmacy: {this.props.Pharmacy}</h3>
        <h3>Scranton: {this.props.Scranton}</h3>
        <h3>Hokma: {this.props.Hokma}</h3>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    LiberalArts: state.counter.LiberalArts,
    SocialSciences: state.counter.SocialSciences,
    NaturalScience: state.counter.NaturalScience,
    Engineering: state.counter.Engineering,
    Music: state.counter.Music,
    ArtAndDesign: state.counter.ArtAndDesign,
    Education: state.counter.Education,
    BusinessAdministration: state.counter.BusinessAdministration,
    ScienceAndIndustry: state.counter.ScienceAndIndustry,
    Medicine: state.counter.Medicine,
    Nursing: state.counter.Nursing,
    Pharmacy: state.counter.Pharmacy,
    Scranton: state.counter.Scranton,
    Hokma: state.counter.Hokma,
  };
};

Counter = connect(mapStateToProps)(Counter);

export default Counter;
