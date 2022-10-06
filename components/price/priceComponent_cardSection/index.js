import style from './priceComponent_cardSection.module.scss'
import TallCard from './tallCard'
import SquareCard from './squareCard'

const CardSection = (props) => {
    const CardsCreator = () => {
        let counter = 1
        return props.productData.map((item, index) => {
            if (index === 0 || index%3 === 0) {
                counter = index + 1
                return (
                    <TallCard key={index} id={index} data={item} />
                );
            } else if (counter === index ) {
                if (props.productData[index+1]) {
                    return (
                        <SquareCard key={index} id={index} dataTop={props.productData[index]} dataBottom={props.productData[index+1]}/>
                    );
                } else {
                    return (
                        <SquareCard key={index} id={index} dataTop={props.productData[index]} />
                    );
                }
            }
        })
    }
    return (
        <div className={style.priceComponent_cardSection_fullWidthContainer}>
            <div className={`${style.priceComponent_cardSection_mainContainer} `}>
                {CardsCreator()}
            </div>
        </div>
    )
}
export default CardSection