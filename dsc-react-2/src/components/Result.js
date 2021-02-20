import React, {Fragment,useState, useEffect} from "react";
import { useSelector, shallowEqual } from "react-redux";
// import '../css/Result.css';
import { connect } from "react-redux";
import DATA from '../shared/data';
import Counter from './Counter'
const Result=()=>{
  
  const [result, setResult]=useState({});
    const setResults=(index)=>{
      const nextData=DATA.filter((data)=>data.id===index);
      setResult(nextData[0]);
    };
    const{LiberalArts,  SocialSciences,NaturalScience,Engineering,Music,ArtAndDesign,Education,BusinessAdminitration,
          ScienceAndIndustry, Medicine, Nursing, Pharmacy, Scranton, Hokma 
        }=useSelector(
          state=>({
            LiberalArts:state.counter.LiberalArts,
            SocialSciences:state.counter.SocialSciences,
            NaturalScience:state.counter.NaturalScience,
            Engineering:state.counter.Engineering,
            Music:state.counter.Music,
            ArtAndDesign:state.counter.ArtAndDesign,
            Education:state.counter.Education,
            BusinessAdminitration:state.counter.BusinessAdminitration,
            ScienceAndIndustry:state.counter.ScienceAndIndustry,
            Medicine:state.counter.Medicine,
            Nursing: state.counter.Nursing,
            Pharmacy: state.counter.Pharmacy,
            Scranton: state.counter.Scranton,
            Hokma: state.counter.Hokma,
         }),
          shallowEqual
        );
    const list=[LiberalArts, Medicine];
    const max=Math.max.apply(null, list);
    let index=0;
    for (let i=0; i<list.length;i++){
      if (max===list[i]) {
        index=i;
      }
    }
    useEffect(()=>{
      setResults(index);
    })
    return(
    <Fragment>
      {/* top bar */}
      <div className="top-bar">
        <div className="ewha-logo-img-box"
          style={{
            "background-image": `url(./imgs/ewha_logo.png)`,
          }}>
        </div>
        <p className="top-bar-txt">EWHA MBTI</p>
      </div>
      <div className="resultWrapper">
        <div className="header">
            당신에게<br />
            잘 어울리는<br />
            <strong>단대</strong>는?
        </div>    

        <div className="colName">
          {result.colName} <br />
          {result.nickname}
        </div>

        <div className="picture">

        </div>

        <div className="title">
            소개
        </div>
        <div className="content">
          {result.intro}
        </div>

        <div className="title">
            교육목표
        </div>
        <div className="content">
          {result.goal}
        </div>
        <div className="title">
            소속 학과
        </div>
        <div className="content">
          {result.major}
        </div>
        <div className="trybtn">
            <button type="button">다시하기</button>
        </div>

      </div>
        {/* developer info */}
        <div className="bottom-bar">
            <div className="developer-logo-img-box" 
            style={{"background-image": `url(./imgs/dsc_logo.png)`,}}>
        </div>
        <p>@dsc_react_team2</p>
      </div>
      </Fragment>
    );

}
export default Result;