import { useEffect } from 'react';
import styles from './priceComponent_marquee.module.scss';

function PriceComponent_marquee({ appleProducts ,brand}) {
    const numDiscriminant = (input) => {
        return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "/");
    }
    const priceMarginColorize = (input) => {
        if (input === 0) {
            return (
                <p className={`${styles.pPriceMargin} cardSectionPriceMargin_gray`}>
                    +{numDiscriminant(input)}
                </p>
            )
        } else if (input >= 0) {
            return (
                <p className={`${styles.pPriceMargin} cardSectionPriceMargin_green`}>
                    +{numDiscriminant(input)}
                </p>
            )
        } else {
            return (
                <p className={`${styles.pPriceMargin} cardSectionPriceMargin_red`}>
                    {numDiscriminant(input)}
                </p>
            )
        }
    }
    return (
        <div className={`${styles.priceComponent_marqueeWrapper} priceComponent_marqueeWrapper_${brand} ${styles.display_marquee}`}>
            <div className={styles.priceComponent_marqueeContainer}>
                <div className={styles.marquee_block}>
                    <div className={styles.marquee_inner}>
                        <span>
                            {appleProducts.map((item, index) => (
                                <div key={index} className={`${styles.priceComponent_marqueeBox} priceComponent_marqueeBox_color_${brand} `}>
                                    <div >
                                        { item.tag === "green" ? <div className={styles.greenTag}></div> : (item.tag === "red" ? <div className={styles.redTag}></div> : <div className={styles.grayTag}></div>)
                                        }
                                    </div>
                                    <div className={styles.priceComponent_marqueeContent}>
                                        <h6 className={`${styles.PriceComponent_marqueePersianName} PriceComponent_marqueepPrice_PersianName_${brand}`}>{item.name.persianName}</h6>
                                        <p className={`${styles.PriceComponent_marqueeEnglishName} PriceComponent_marqueepPrice_EnglishName_${brand}`}>{item.name.englishName}</p>
                                        <div className={`${styles.pPrice} PriceComponent_marqueepPrice_${brand}`}>{numDiscriminant(item.price.price)}</div>
                                        <div>{priceMarginColorize(item.price.changePrice)}</div>
                                    </div>
                                    <div className={styles.shape}></div>

                                </div>
                            )
                            )}
                        </span>
                        <span>
                            {appleProducts.map((item, index) => (
                                <div key={index} className={`${styles.priceComponent_marqueeBox} priceComponent_marqueeBox_color_${brand} `}>
                                <div >
                                        { item.tag === "green" ? <div className={styles.greenTag}></div> : (item.tag === "red" ? <div className={styles.redTag}></div> : <div className={styles.grayTag}></div>)
                                        }
                                    </div>
                                    <div className={styles.priceComponent_marqueeContent}>
                                        <h6 className={`${styles.PriceComponent_marqueePersianName} PriceComponent_marqueepPrice_PersianName_${brand}`}>{item.name.persianName}</h6>
                                        <p className={`${styles.PriceComponent_marqueeEnglishName} PriceComponent_marqueepPrice_EnglishName_${brand}`}>{item.name.englishName}</p>
                                        <div className={`${styles.pPrice} PriceComponent_marqueepPrice_${brand}`}>{numDiscriminant(item.price.price)}</div>
                                        <div>{priceMarginColorize(item.price.changePrice)}</div>
                                    </div>
                                    <div className={styles.shape}></div>

                                </div>
                            )
                            )}
                        </span>
                    </div>
                </div>
            </div>
        </div>

    )
}

// PriceComponent_marquee.getInitialProps = ({ appleProducts }) => {
//     return {
//         appleProducts: appleProducts,
//     }
// }

export default PriceComponent_marquee
