import React from 'react'
import PriceComponent_searchbox from '../priceComponent_searchbox'
import PriceComponent_chartjs from '../priceComponent_chartjs'
import PriceComponent_singleChart from '../priceComponent_singleChart'
import PriceComponent_listBrands from '../priceComponent_listBrands'
import PriceComponent_marquee from '../priceComponent_marquee';
import PriceComponent_table from '../priceComponent_table';
import CardSection from '../priceComponent_cardSection';
import style from './mainComponent.module.scss'

function Index({ brand, brands, changeData, appleProducts, chartdata, cardSectionData, changeTableData, tableData }) {
    return (
        <>
            <div className={`${style.price_body} price_body_${brand}`} >
                <img className={`w-100 ${style.mt_20}`} src="/images/BanneHeader.png" />
                <PriceComponent_searchbox brand={brand} />
                <PriceComponent_listBrands brand={brand} brands={brands} changeData={changeData} />
                <PriceComponent_marquee brand={brand} appleProducts={appleProducts} />
                <div className={`${style.bg_SectionCard} bg_SectionCard_${brand}`}>
                <PriceComponent_chartjs brand={brand} data={chartdata} />
                <CardSection brand={brand} productData={cardSectionData} />
                </div>
                <PriceComponent_table brand={brand} brands={brands} changeTableData={changeTableData} tableData={tableData} />
            </div>

        </>
    )
}

export default Index
