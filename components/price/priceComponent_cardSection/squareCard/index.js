import style from './priceComponent_cardSection_squareCard.module.scss'
import React from 'react'
import PriceComponent_singleChart from '../../priceComponent_singleChart'

const SquareCard = (props) => {
    const numDiscriminant = (input) => {
        return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "/");
    }
    const priceMarginColorize = (input) => {
        if (input === 0) {
            return (
                <p className={`${style.pPriceMargin} cardSectionPriceMargin_gray`}>
                    +{numDiscriminant(input)}
                </p>
            )
        } else if (input >= 0) {
            return (
                <p className={`${style.pPriceMargin} cardSectionPriceMargin_green`}>
                    +{numDiscriminant(input)}
                </p>
            )
        } else {
            return (
                <p className={`${style.pPriceMargin} cardSectionPriceMargin_red`}>
                    {numDiscriminant(input)}
                </p>
            )
        }
    }
    const detector = () => {
        if (props.dataBottom) {
            return (
                <React.Fragment>
                    <a className={style.divTopContainer} href={props.dataTop.url}>
                        <p className={style.pFaTitle}>
                            {props.dataTop.persianTitle}
                        </p>
                        <p className={style.pEnTitle}>
                            {props.dataTop.enTitle}
                        </p>
                        <div className={style.divChartContainer}>
                            <PriceComponent_singleChart id={props.id} data={props.dataTop.cahrtData[0]} color={props.dataTop.cahrtData[1]}/>
                        </div>
                        {priceMarginColorize(props.dataTop.priceMargin)}
                        <p className={style.pPrice}>
                            {numDiscriminant(props.dataTop.price)}
                        </p>
                    </a>
                    <a className={style.divBottomContainer} href={props.dataBottom.url}>
                        <p className={style.pFaTitle}>
                            {props.dataBottom.persianTitle}
                        </p>
                        <p className={style.pEnTitle}>
                            {props.dataBottom.enTitle}
                        </p>
                        <div className={style.divChartContainer}>
                        <PriceComponent_singleChart data={props.dataBottom.cahrtData[0]} id={props.id} color={props.dataBottom.cahrtData[1]}/>

                        </div>                        
                        {priceMarginColorize(props.dataBottom.priceMargin)}
                        <p className={style.pPrice}>
                            {numDiscriminant(props.dataBottom.price)}
                        </p>
                    </a>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <a className={style.divTopContainer} href={props.dataTop.url}>
                        <p className={style.pFaTitle}>
                            {props.dataTop.persianTitle}
                        </p>
                        <p className={style.pEnTitle}>
                            {props.dataTop.enTitle}
                        </p>
                        <div className={style.divChartContainer}>
                        <PriceComponent_singleChart data={props.dataTop.cahrtData[0]} id={props.id} color={props.dataTop.cahrtData[1]}/>

                        </div>
                        {priceMarginColorize(props.dataTop.priceMargin)}
                        <p className={style.pPrice}>
                            {numDiscriminant(props.dataTop.price)}
                        </p>
                    </a>
                </React.Fragment>
            )
        }
    }
    return (
        <div className={style.priceComponent_cardSection_squareCard_MainContainer}>
            {detector()}
        </div>
    )
}
export default SquareCard