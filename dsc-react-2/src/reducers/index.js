import {
  INCREMENT,
  ASTEP_ONE,
  ASTEP_TWO,
  ASTEP_THREE,
  ASTEP_FOUR,
  ASTEP_FIVE,
  ASTEP_SIX,
  ASTEP_SEVEN,
  ASTEP_EIGHT,
  ASTEP_NINE,
  ASTEP_TEN,
  ASTEP_TENONE,
  ASTEP_TENTWO,
  BSTEP_ONE,
  BSTEP_TWO,
  BSTEP_THREE,
  BSTEP_FOUR,
  BSTEP_FIVE,
  BSTEP_SIX,
  BSTEP_SEVEN,
  BSTEP_EIGHT,
  BSTEP_NINE,
  BSTEP_TEN,
  BSTEP_TENONE,
  BSTEP_TENTWO,
} from "../actions";
import { combineReducers } from "redux";

const counterInitialState = {
  LiberalArts: 0,
  SocialSciences: 0,
  NaturalScience: 0,
  Engineering: 0,
  Music: 0,
  ArtAndDesign: 0,
  Education: 0,
  BusinessAdministration: 0,
  ScienceAndIndustry: 0,
  Medicine: 0,
  Nursing: 0,
  Pharmacy: 0,
  Scranton: 0,
  Hokma: 0,
  diff: 1,
};

const counter = (state = counterInitialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
        LiberalArts: state.LiberalArts + 1,
        SocialSciences: state.SocialSciences + 2,
        NaturalScience: state.NaturalScience + 3,
        Engineering: state.Engineering + 4,
        Music: state.Music + 5,
        ArtAndDesign: state.ArtAndDesign + 6,
        Education: state.Education + 7,
        BusinessAdministration: state.BusinessAdministration + 8,
        ScienceAndIndustry: state.ScienceAndIndustry + 9,
        Medicine: state.Medicine + 10,
        Nursing: state.Nursing + 11,
        Pharmacy: state.Pharmacy + 12,
        Scranton: state.Scranton + 13,
        Hokma: state.Hokma + 14,
      });
    case ASTEP_ONE:
      return Object.assign({}, state, {
        LiberalArts: state.LiberalArts + 4,
        SocialSciences: state.SocialSciences + 5,
        NaturalScience: state.NaturalScience + 6,
        Engineering: state.Engineering + 11,
        Music: state.Music + 10,
        ArtAndDesign: state.ArtAndDesign + 9,
        Education: state.Education + 7,
        BusinessAdministration: state.BusinessAdministration + 8,
        ScienceAndIndustry: state.ScienceAndIndustry + 3,
        Medicine: state.Medicine + 14,
        Nursing: state.Nursing + 12,
        Pharmacy: state.Pharmacy + 13,
        Scranton: state.Scranton + 2,
        Hokma: state.Hokma + 1,
      });
    case ASTEP_TWO:
      return Object.assign({}, state, {
        LiberalArts: state.LiberalArts + 13,
        SocialSciences: state.SocialSciences + 10,
        NaturalScience: state.NaturalScience + 11,
        Engineering: state.Engineering + 14,
        Music: state.Music + 8,
        ArtAndDesign: state.ArtAndDesign + 7,
        Education: state.Education + 9,
        BusinessAdministration: state.BusinessAdministration + 12,
        ScienceAndIndustry: state.ScienceAndIndustry + 6,
        Medicine: state.Medicine + 1,
        Nursing: state.Nursing + 4,
        Pharmacy: state.Pharmacy + 2,
        Scranton: state.Scranton + 5,
        Hokma: state.Hokma + 3,
      });
    case ASTEP_THREE:
      return Object.assign({}, state, {
        LiberalArts: state.LiberalArts + 6,
        SocialSciences: state.SocialSciences + 4,
        NaturalScience: state.NaturalScience + 11,
        Engineering: state.Engineering + 14,
        Music: state.Music + 8,
        ArtAndDesign: state.ArtAndDesign + 10,
        Education: state.Education + 7,
        BusinessAdministration: state.BusinessAdministration + 2,
        ScienceAndIndustry: state.ScienceAndIndustry + 5,
        Medicine: state.Medicine + 13,
        Nursing: state.Nursing + 9,
        Pharmacy: state.Pharmacy + 12,
        Scranton: state.Scranton + 1,
        Hokma: state.Hokma + 3,
      });
    case ASTEP_FOUR:
      return Object.assign({}, state, {
        LiberalArts: state.LiberalArts + 13,
        SocialSciences: state.SocialSciences + 8,
        NaturalScience: state.NaturalScience + 3,
        Engineering: state.Engineering + 1,
        Music: state.Music + 6,
        ArtAndDesign: state.ArtAndDesign + 4,
        Education: state.Education + 9,
        BusinessAdministration: state.BusinessAdministration + 7,
        ScienceAndIndustry: state.ScienceAndIndustry + 11,
        Medicine: state.Medicine + 2,
        Nursing: state.Nursing + 5,
        Pharmacy: state.Pharmacy + 10,
        Scranton: state.Scranton + 12,
        Hokma: state.Hokma + 14,
      });
    case ASTEP_FIVE:
      return Object.assign({}, state, {
        LiberalArts: state.LiberalArts + 10,
        SocialSciences: state.SocialSciences + 4,
        NaturalScience: state.NaturalScience + 3,
        Engineering: state.Engineering + 1,
        Music: state.Music + 5,
        ArtAndDesign: state.ArtAndDesign + 14,
        Education: state.Education + 7,
        BusinessAdministration: state.BusinessAdministration + 11,
        ScienceAndIndustry: state.ScienceAndIndustry + 6,
        Medicine: state.Medicine + 9,
        Nursing: state.Nursing + 8,
        Pharmacy: state.Pharmacy + 13,
        Scranton: state.Scranton + 12,
        Hokma: state.Hokma + 2,
      });
    case ASTEP_SIX:
      return Object.assign({}, state, {
        LiberalArts: state.LiberalArts + 7,
        SocialSciences: state.SocialSciences + 4,
        NaturalScience: state.NaturalScience + 8,
        Engineering: state.Engineering + 2,
        Music: state.Music + 9,
        ArtAndDesign: state.ArtAndDesign + 1,
        Education: state.Education + 11,
        BusinessAdministration: state.BusinessAdministration + 5,
        ScienceAndIndustry: state.ScienceAndIndustry + 14,
        Medicine: state.Medicine + 6,
        Nursing: state.Nursing + 10,
        Pharmacy: state.Pharmacy + 13,
        Scranton: state.Scranton + 12,
        Hokma: state.Hokma + 3,
      });
    case ASTEP_SEVEN:
      return Object.assign({}, state, {
        LiberalArts: state.LiberalArts + 7,
        SocialSciences: state.SocialSciences + 9,
        NaturalScience: state.NaturalScience + 14,
        Engineering: state.Engineering + 5,
        Music: state.Music + 11,
        ArtAndDesign: state.ArtAndDesign + 13,
        Education: state.Education + 2,
        BusinessAdministration: state.BusinessAdministration + 3,
        ScienceAndIndustry: state.ScienceAndIndustry + 6,
        Medicine: state.Medicine + 12,
        Nursing: state.Nursing + 10,
        Pharmacy: state.Pharmacy + 4,
        Scranton: state.Scranton + 8,
        Hokma: state.Hokma + 1,
      });
    case ASTEP_EIGHT:
      return Object.assign({}, state, {
        LiberalArts: state.LiberalArts + 6,
        SocialSciences: state.SocialSciences + 4,
        NaturalScience: state.NaturalScience + 11,
        Engineering: state.Engineering + 8,
        Music: state.Music + 12,
        ArtAndDesign: state.ArtAndDesign + 7,
        Education: state.Education + 10,
        BusinessAdministration: state.BusinessAdministration + 2,
        ScienceAndIndustry: state.ScienceAndIndustry + 1,
        Medicine: state.Medicine + 14,
        Nursing: state.Nursing + 13,
        Pharmacy: state.Pharmacy + 9,
        Scranton: state.Scranton + 3,
        Hokma: state.Hokma + 5,
      });
    case ASTEP_NINE:
      return Object.assign({}, state, {
        LiberalArts: state.LiberalArts + 3,
        SocialSciences: state.SocialSciences + 4,
        NaturalScience: state.NaturalScience + 2,
        Engineering: state.Engineering + 13,
        Music: state.Music + 1,
        ArtAndDesign: state.ArtAndDesign + 12,
        Education: state.Education + 9,
        BusinessAdministration: state.BusinessAdministration + 8,
        ScienceAndIndustry: state.ScienceAndIndustry + 7,
        Medicine: state.Medicine + 14,
        Nursing: state.Nursing + 11,
        Pharmacy: state.Pharmacy + 10,
        Scranton: state.Scranton + 5,
        Hokma: state.Hokma + 6,
      });
    case ASTEP_TEN:
      return Object.assign({}, state, {
        LiberalArts: state.LiberalArts + 3,
        SocialSciences: state.SocialSciences + 4,
        NaturalScience: state.NaturalScience + 2,
        Engineering: state.Engineering + 13,
        Music: state.Music + 1,
        ArtAndDesign: state.ArtAndDesign + 12,
        Education: state.Education + 9,
        BusinessAdministration: state.BusinessAdministration + 8,
        ScienceAndIndustry: state.ScienceAndIndustry + 7,
        Medicine: state.Medicine + 14,
        Nursing: state.Nursing + 11,
        Pharmacy: state.Pharmacy + 10,
        Scranton: state.Scranton + 5,
        Hokma: state.Hokma + 6,
      });
    case ASTEP_TENONE:
      return Object.assign({}, state, {
        LiberalArts: state.LiberalArts + 13,
        SocialSciences: state.SocialSciences + 12,
        NaturalScience: state.NaturalScience + 4,
        Engineering: state.Engineering + 11,
        Music: state.Music + 3,
        ArtAndDesign: state.ArtAndDesign + 5,
        Education: state.Education + 10,
        BusinessAdministration: state.BusinessAdministration + 14,
        ScienceAndIndustry: state.ScienceAndIndustry + 7,
        Medicine: state.Medicine + 1,
        Nursing: state.Nursing + 6,
        Pharmacy: state.Pharmacy + 2,
        Scranton: state.Scranton + 8,
        Hokma: state.Hokma + 9,
      });
    case ASTEP_TENTWO:
      return Object.assign({}, state, {
        LiberalArts: state.LiberalArts + 14,
        SocialSciences: state.SocialSciences + 13,
        NaturalScience: state.NaturalScience + 8,
        Engineering: state.Engineering + 6,
        Music: state.Music + 1,
        ArtAndDesign: state.ArtAndDesign + 2,
        Education: state.Education + 4,
        BusinessAdministration: state.BusinessAdministration + 12,
        ScienceAndIndustry: state.ScienceAndIndustry + 5,
        Medicine: state.Medicine + 9,
        Nursing: state.Nursing + 7,
        Pharmacy: state.Pharmacy + 3,
        Scranton: state.Scranton + 10,
        Hokma: state.Hokma + 11,
      });
    case BSTEP_ONE:
      return Object.assign({}, state, {
        LiberalArts: state.LiberalArts + 11,
        SocialSciences: state.SocialSciences + 10,
        NaturalScience: state.NaturalScience + 9,
        Engineering: state.Engineering + 4,
        Music: state.Music + 5,
        ArtAndDesign: state.ArtAndDesign + 6,
        Education: state.Education + 8,
        BusinessAdministration: state.BusinessAdministration + 7,
        ScienceAndIndustry: state.ScienceAndIndustry + 12,
        Medicine: state.Medicine + 1,
        Nursing: state.Nursing + 3,
        Pharmacy: state.Pharmacy + 2,
        Scranton: state.Scranton + 13,
        Hokma: state.Hokma + 14,
      });
    case BSTEP_TWO:
      return Object.assign({}, state, {
        LiberalArts: state.LiberalArts + 2,
        SocialSciences: state.SocialSciences + 5,
        NaturalScience: state.NaturalScience + 4,
        Engineering: state.Engineering + 1,
        Music: state.Music + 7,
        ArtAndDesign: state.ArtAndDesign + 8,
        Education: state.Education + 6,
        BusinessAdministration: state.BusinessAdministration + 3,
        ScienceAndIndustry: state.ScienceAndIndustry + 9,
        Medicine: state.Medicine + 14,
        Nursing: state.Nursing + 11,
        Pharmacy: state.Pharmacy + 13,
        Scranton: state.Scranton + 10,
        Hokma: state.Hokma + 12,
      });
    case BSTEP_THREE:
      return Object.assign({}, state, {
        LiberalArts: state.LiberalArts + 9,
        SocialSciences: state.SocialSciences + 11,
        NaturalScience: state.NaturalScience + 4,
        Engineering: state.Engineering + 1,
        Music: state.Music + 7,
        ArtAndDesign: state.ArtAndDesign + 5,
        Education: state.Education + 8,
        BusinessAdministration: state.BusinessAdministration + 13,
        ScienceAndIndustry: state.ScienceAndIndustry + 10,
        Medicine: state.Medicine + 2,
        Nursing: state.Nursing + 6,
        Pharmacy: state.Pharmacy + 3,
        Scranton: state.Scranton + 14,
        Hokma: state.Hokma + 12,
      });
    case BSTEP_FOUR:
      return Object.assign({}, state, {
        LiberalArts: state.LiberalArts + 2,
        SocialSciences: state.SocialSciences + 7,
        NaturalScience: state.NaturalScience + 12,
        Engineering: state.Engineering + 14,
        Music: state.Music + 9,
        ArtAndDesign: state.ArtAndDesign + 11,
        Education: state.Education + 6,
        BusinessAdministration: state.BusinessAdministration + 8,
        ScienceAndIndustry: state.ScienceAndIndustry + 4,
        Medicine: state.Medicine + 13,
        Nursing: state.Nursing + 10,
        Pharmacy: state.Pharmacy + 5,
        Scranton: state.Scranton + 3,
        Hokma: state.Hokma + 1,
      });
    case BSTEP_FIVE:
      return Object.assign({}, state, {
        LiberalArts: state.LiberalArts + 5,
        SocialSciences: state.SocialSciences + 11,
        NaturalScience: state.NaturalScience + 12,
        Engineering: state.Engineering + 14,
        Music: state.Music + 10,
        ArtAndDesign: state.ArtAndDesign + 1,
        Education: state.Education + 8,
        BusinessAdministration: state.BusinessAdministration + 4,
        ScienceAndIndustry: state.ScienceAndIndustry + 9,
        Medicine: state.Medicine + 6,
        Nursing: state.Nursing + 7,
        Pharmacy: state.Pharmacy + 2,
        Scranton: state.Scranton + 3,
        Hokma: state.Hokma + 13,
      });
    case BSTEP_SIX:
      return Object.assign({}, state, {
        LiberalArts: state.LiberalArts + 8,
        SocialSciences: state.SocialSciences + 11,
        NaturalScience: state.NaturalScience + 7,
        Engineering: state.Engineering + 13,
        Music: state.Music + 6,
        ArtAndDesign: state.ArtAndDesign + 14,
        Education: state.Education + 4,
        BusinessAdministration: state.BusinessAdministration + 10,
        ScienceAndIndustry: state.ScienceAndIndustry + 1,
        Medicine: state.Medicine + 9,
        Nursing: state.Nursing + 5,
        Pharmacy: state.Pharmacy + 2,
        Scranton: state.Scranton + 3,
        Hokma: state.Hokma + 12,
      });
    case BSTEP_SEVEN:
      return Object.assign({}, state, {
        LiberalArts: state.LiberalArts + 8,
        SocialSciences: state.SocialSciences + 6,
        NaturalScience: state.NaturalScience + 1,
        Engineering: state.Engineering + 10,
        Music: state.Music + 4,
        ArtAndDesign: state.ArtAndDesign + 2,
        Education: state.Education + 13,
        BusinessAdministration: state.BusinessAdministration + 12,
        ScienceAndIndustry: state.ScienceAndIndustry + 9,
        Medicine: state.Medicine + 3,
        Nursing: state.Nursing + 5,
        Pharmacy: state.Pharmacy + 11,
        Scranton: state.Scranton + 7,
        Hokma: state.Hokma + 14,
      });
    case BSTEP_EIGHT:
      return Object.assign({}, state, {
        LiberalArts: state.LiberalArts + 9,
        SocialSciences: state.SocialSciences + 11,
        NaturalScience: state.NaturalScience + 4,
        Engineering: state.Engineering + 7,
        Music: state.Music + 3,
        ArtAndDesign: state.ArtAndDesign + 8,
        Education: state.Education + 5,
        BusinessAdministration: state.BusinessAdministration + 13,
        ScienceAndIndustry: state.ScienceAndIndustry + 14,
        Medicine: state.Medicine + 1,
        Nursing: state.Nursing + 2,
        Pharmacy: state.Pharmacy + 6,
        Scranton: state.Scranton + 12,
        Hokma: state.Hokma + 10,
      });
    case BSTEP_NINE:
      return Object.assign({}, state, {
        LiberalArts: state.LiberalArts + 12,
        SocialSciences: state.SocialSciences + 11,
        NaturalScience: state.NaturalScience + 13,
        Engineering: state.Engineering + 2,
        Music: state.Music + 14,
        ArtAndDesign: state.ArtAndDesign + 3,
        Education: state.Education + 6,
        BusinessAdministration: state.BusinessAdministration + 7,
        ScienceAndIndustry: state.ScienceAndIndustry + 8,
        Medicine: state.Medicine + 1,
        Nursing: state.Nursing + 4,
        Pharmacy: state.Pharmacy + 5,
        Scranton: state.Scranton + 10,
        Hokma: state.Hokma + 9,
      });
    case BSTEP_TEN:
      return Object.assign({}, state, {
        LiberalArts: state.LiberalArts + 12,
        SocialSciences: state.SocialSciences + 11,
        NaturalScience: state.NaturalScience + 13,
        Engineering: state.Engineering + 2,
        Music: state.Music + 14,
        ArtAndDesign: state.ArtAndDesign + 3,
        Education: state.Education + 6,
        BusinessAdministration: state.BusinessAdministration + 7,
        ScienceAndIndustry: state.ScienceAndIndustry + 8,
        Medicine: state.Medicine + 1,
        Nursing: state.Nursing + 4,
        Pharmacy: state.Pharmacy + 5,
        Scranton: state.Scranton + 10,
        Hokma: state.Hokma + 9,
      });
    case BSTEP_TENONE:
      return Object.assign({}, state, {
        LiberalArts: state.LiberalArts + 2,
        SocialSciences: state.SocialSciences + 3,
        NaturalScience: state.NaturalScience + 11,
        Engineering: state.Engineering + 4,
        Music: state.Music + 12,
        ArtAndDesign: state.ArtAndDesign + 10,
        Education: state.Education + 5,
        BusinessAdministration: state.BusinessAdministration + 1,
        ScienceAndIndustry: state.ScienceAndIndustry + 8,
        Medicine: state.Medicine + 14,
        Nursing: state.Nursing + 9,
        Pharmacy: state.Pharmacy + 13,
        Scranton: state.Scranton + 7,
        Hokma: state.Hokma + 6,
      });
    case BSTEP_TENTWO:
      return Object.assign({}, state, {
        LiberalArts: state.LiberalArts + 1,
        SocialSciences: state.SocialSciences + 2,
        NaturalScience: state.NaturalScience + 7,
        Engineering: state.Engineering + 9,
        Music: state.Music + 14,
        ArtAndDesign: state.ArtAndDesign + 13,
        Education: state.Education + 11,
        BusinessAdministration: state.BusinessAdministration + 3,
        ScienceAndIndustry: state.ScienceAndIndustry + 10,
        Medicine: state.Medicine + 6,
        Nursing: state.Nursing + 8,
        Pharmacy: state.Pharmacy + 12,
        Scranton: state.Scranton + 5,
        Hokma: state.Hokma + 4,
      });
    default:
      return state;
  }
};

const counterApp = combineReducers({
  counter,
});

export default counterApp;
