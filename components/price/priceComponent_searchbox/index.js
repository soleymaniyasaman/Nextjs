import React from 'react'
import style from './priceComponent_searchbox.module.scss'
import { useCallback, useRef, useState } from 'react'
import Link from 'next/link'

export default function PriceComponent_searchbox({ brand }, props) {
    const searchRef = useRef(null)
    const [query, setQuery] = useState('')
    const [active, setActive] = useState(false)
    const [results, setResults] = useState([])

    const searchEndpoint = (query) => `/api/search?q=${query}`
    const onChange = useCallback((e) => {
        const query = e.target.value;
        setQuery(query)
        if (query.length) {
            fetch(searchEndpoint(query))
                .then(res => res.json())
                .then(res => {
                    setResults(res.results)
                })
        } else {
            setResults([])
        }
    }, [])

    const onFocus = useCallback(() => {
        setActive(true)
        window.addEventListener('click', onclick)
    }, [])

    const onClick = useCallback((e) => {
        if (searchRef.current && !searchRef.current.contains(e.target)) {
            setActive(false)
            window.removeEventListener('click', onclick)
        }
    }, [])

    const LiveIcon = () => {
        if (brand === "AllBrand") {
            return (
                <div className={`col d-flex justify-content-center  mt-2 `}>
                    <div className={`d-flex  align-items-center `}>
                        <div className="d-flex align-items-center">
                            <img src="/images/Account-logo.png" />
                            <div className={`${style.priceComponent_search_live_icon} `}>
                                <div className="d-flex justify-content-end">
                                    <p className={`${style.priceComponent_search_live_text} `}>LIVE</p>
                                    <div className={`${style.priceComponent_search_live_Ellipse} `}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className={`col d-flex justify-content-center  mt-2 `}>
                    <div className={`d-flex  align-items-center `}>
                        <div className="d-flex align-items-center">
                            <img src="/images/Account-logo.png" />
                        </div>
                    </div>
                </div>
            )
        }
    }
    return (
        <header className={` w-100 ${style.priceComponent_search_d_rtl} `}>
            <div className=" container-fluid row mt-2 m-0 p-0 d-flex justify-content-around">
                <div className="col "></div>
                <div className=" col d-flex">
                    <div className={`form-group ${style.priceComponent_search}  d-flex justify-content-center  ${style.priceComponent_search_d_ltr} `}>
                        <div >
                            <img className={`${style.priceComponent_search_form_control_feedback} priceComponent_IconSearchBox_${brand}`} src="/images/Search-icon.png" />
                            <input type="text"
                                onChange={onChange}
                                onFocus={onFocus}
                                onClick={onClick}
                                value={query}
                                className={`  ${style.priceComponent_search_size_searchbox} ${style.priceComponent_search_inside_searchbox} priceComponent_searchbox_${brand} ${style.input_text}`}
                                placeholder="جستجو..."
                            />
                            {active && results.length > 0 && (
                                <ul>
                                    {results.map(({ id, title }) => (
                                        <li key={id}>
                                            <Link href="#" >
                                                <a>{title}</a>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}

                        </div>
                    </div>
                </div>
                {LiveIcon()}
            </div>
        </header>
    )
}

