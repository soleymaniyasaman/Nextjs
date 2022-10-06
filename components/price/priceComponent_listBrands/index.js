import { useRouter } from 'next/router'
import styles from './priceComponent_listBrands.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClone } from '@fortawesome/free-solid-svg-icons';
// import './listBrand.css'
function PriceComponent_listBrands({ brands, changeData }) {
  const router = useRouter()
  return (
    <nav className={`mb-3 mt-4 mx-5 d-flex   `}>
      <div className={styles.priceComponent_listBrands_shape}></div>
      <div className={`${styles.priceComponent_listBrands_container} ${styles.overflow_ba} `}>
        <div className={`d-flex  align-items-center`}>
          <a className="" style={{ textDecoration: "none" }}
            onClick={() => {
              changeData("all")
              router.push('/قیمت-گوشی-موبایل')
            }}>


              <FontAwesomeIcon
                      icon={faClone}
                      className={`${styles.img_size} ${styles.icon_all_brands} me-3`}
                    />
            {/* <p>{brands[0].name}</p> */}
          </a>
          <a className="me-2"
            onClick={() => {
              changeData("apple")
              router.push('/قیمت-گوشی-اپل')
            }} >
            <img src={brands[1].url} className={styles.img_size} alt="apple" />
          </a>
          <a className="me-3"
            onClick={() => {
              changeData("samsung")
              router.push('/قیمت-گوشی-سامسونگ')
            }}>
            <img src={brands[2].url} className={styles.img_size} alt="samsung" />
          </a>
          <a className="me-3"
            onClick={() => {
              changeData("huawei")
              router.push('/قیمت-گوشی-هوآوی')
            }}>
            <img src={brands[3].url} className={styles.img_size} alt="huawei" />
          </a>
          <a className="me-3"
            onClick={() => {
              changeData("mi")
              router.push('/قیمت-گوشی-شیاومی')
            }}>
            <img src={brands[4].url} className={styles.img_size} alt="mi" />
          </a>
          <a className="me-3"
            onClick={() => {
              changeData("nokia")
              router.push('/قیمت-گوشی-نوکیا')
            }}>
            <img src={brands[5].url} className={styles.img_size} alt="nokia" />
          </a>
          <a className=""
            onClick={() => {
              changeData("honor")
              router.push('/قیمت-گوشی-آنر')
            }}>
            <img src={brands[6].url} className={styles.img_size} alt="honor" />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default PriceComponent_listBrands
