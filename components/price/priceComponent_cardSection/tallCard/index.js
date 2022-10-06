import style from './priceComponent_cardSection_tallCard.module.scss'
import PriceComponent_singleChart from '../../priceComponent_singleChart'

const TallCard = (props) => {
    const numDiscriminant = (input) => {
        return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "/");
    }
    const priceMarginColorize = (input) => {
        if (input === 0) {
            return (
                <p className={`${style.pPriceMargin} cardSectionPriceMargin_gray`}>
                    +{numDiscriminant(props.data.priceMargin)}
                </p>
            )
        } else if (input >= 0) {
            return (
                <p className={`${style.pPriceMargin} cardSectionPriceMargin_green`}>
                    +{numDiscriminant(props.data.priceMargin)}
                </p>
            )
        } else {
            return (
                <p className={`${style.pPriceMargin} cardSectionPriceMargin_red`}>
                    {numDiscriminant(props.data.priceMargin)}
                </p>
            )
        }
    }
    return (
        <a className={`${style.priceComponent_cardSection_tallCard_MainContainer}`} href={props.data.url}>
            <img className={style.img} src={props.data.imgUrl}/>
            <p className={style.pFaTitle}>
                {props.data.persianTitle}
            </p>
            <p className={style.pEnTitle}>
                {props.data.enTitle}
            </p>
            <div className={style.divChartContainer}>
            <PriceComponent_singleChart data={props.data.cahrtData[0]} id={props.id} color={props.data.cahrtData[1]}/>
  
            </div>
            {priceMarginColorize(props.data.priceMargin)}
            <p className={style.pPrice}>
                {numDiscriminant(props.data.price)}
            </p>
        </a>
    )
}
export default TallCard;