import React, { useEffect, useRef, useState } from "react";
import style from './priceComponent_chartjs.module.scss';
import Chartjs from 'chart.js';
import PriceComponent_news from './priceComponent_news'
import PriceComponent_mainChart from './priceComponent_mainChart'


const PriceComponent_chartjs = (props) => {

    const mainChart =()=>{
        return(
            <PriceComponent_mainChart data={props.data.chartdata} brand={props.brand}/>
        )
    }
    return (
        <>
            <div className={`d-flex  ${style.priceComponent_chartjs_body_chart} mt-2 `}>
                <div className="container-fluid row w-100 m-auto mb-3">
                    {mainChart()}
                    <PriceComponent_news brand={props.brand}/>
                </div>
            </div>
        </>
    )
};
export default PriceComponent_chartjs;
