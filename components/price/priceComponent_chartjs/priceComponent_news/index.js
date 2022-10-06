import React from 'react'
import style from './priceComponent_news.module.scss';


function PriceComponent_news(props) {
    return (
        <>
            <div className={`${style.priceComponent_chartjs_left_chartbox} ${style.box_hidden} priceComponent_news_${props.brand} col-md col-sm  mt-3 col-lg`}></div>

        </>
    )
}

export default PriceComponent_news
