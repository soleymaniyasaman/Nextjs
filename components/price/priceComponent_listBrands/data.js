// import { useRouter } from 'next/router'
// import styles from './priceComponent_listBrands.module.scss'

// function PriceComponent_listBrands({ brands, changeData }) {
//     const router = useRouter()
//     return (
//         <nav className={styles.priceComponent_listBrands_nav}>
//             <div className={styles.priceComponent_listBrands_shape}></div>
//             <div className={`${styles.priceComponent_listBrands_container} container`}>
//                 <div className="row">
//                     <a className="col-sm" style={{ textDecoration: "none" }}
//                         onClick={() => {
//                             changeData(brands[0].clickChange)
//                             router.push(brands[0].routing)
//                         }}>
//                         <p>{brands[0].name}</p>
//                     </a>
//                     {brands.map((brand) => (
                        
//                             <a className="col-sm"
//                                 onClick={() => {
//                                     changeData(brand.clickChange)
//                                     router.push(brand.routing)
//                                 }}>
//                                 <img src={brand.url} className={styles.priceComponent_listBrandsImg} />
//                             </a>
//                     ))}
//                 </div>
//             </div>
//         </nav>
//     )
// }
// export default PriceComponent_listBrands
