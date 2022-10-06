import React, { useEffect, useState } from 'react'
import { useRouter} from 'next/router'
import MainComponent from '../../components/price/mainComponent-price'

function Price() {
    var allPrice ="/%D9%82%DB%8C%D9%85%D8%AA-%DA%AF%D9%88%D8%B4%DB%8C-%D9%85%D9%88%D8%A8%D8%A7%DB%8C%D9%84"
    var applePrice="/%D9%82%DB%8C%D9%85%D8%AA-%DA%AF%D9%88%D8%B4%DB%8C-%D8%A7%D9%BE%D9%84"
    var samsungPrice="/%D9%82%DB%8C%D9%85%D8%AA-%DA%AF%D9%88%D8%B4%DB%8C-%D8%B3%D8%A7%D9%85%D8%B3%D9%88%D9%86%DA%AF"
    var huaweiPrice="/%D9%82%DB%8C%D9%85%D8%AA-%DA%AF%D9%88%D8%B4%DB%8C-%D9%87%D9%88%D8%A2%D9%88%DB%8C"
    var miPrice ="/%D9%82%DB%8C%D9%85%D8%AA-%DA%AF%D9%88%D8%B4%DB%8C-%D8%B4%DB%8C%D8%A7%D9%88%D9%85%DB%8C"
    var nokiaPrice="/%D9%82%DB%8C%D9%85%D8%AA-%DA%AF%D9%88%D8%B4%DB%8C-%D9%86%D9%88%DA%A9%DB%8C%D8%A7"
    var honorPrice="/%D9%82%DB%8C%D9%85%D8%AA-%DA%AF%D9%88%D8%B4%DB%8C-%D8%A2%D9%86%D8%B1"

    //brand_menu Data
    const [brands,setBrands] = useState([
            {
                id: "0",
                name: "همه برندها",
                routing:'/قیمت-گوشی-موبایل',
                clickChange:"all"
            },
            {
                id: "1",
                url: "/images/apple.png",
                routing:'/قیمت-گوشی-اپل',
                clickChange:"apple"
            },
            {
                id: "2",
                url: "/images/Samsung.png",
                routing:'/قیمت-گوشی-سامسونگ',
                clickChange: "samsung",
            },
            {
                id: "3",
                url: "/images/Huawei.png",
                routing:'/قیمت-گوشی-هوآوی',
                clickChange: "huawei",
            },
            {
                id: "4",
                url: "/images/xiaomi.png",
                routing:'/قیمت-گوشی-شیاومی',
                clickChange: "mi",
            },
            {
                id: "5",
                url: "/images/nokia.png",
                routing:'/قیمت-گوشی-نوکیا',
                clickChange: "nokia",
            },
            {
                id: "6",
                url: "/images/honor.png",
                routing:'/قیمت-گوشی-آنر',
                clickChange: "honor",
            }
        ])
    const [selectedBrands, setSelectedBrands] = useState("");
    const [selectedTableBrands, setSelectedTableBrands] = useState("")
    const [data,setData] = useState([]);
    const [tableData,setTableData] = useState([
        { 
            id: "iphon12progreen",
            name:{ "persianName" :"آيفون۱۲پرو", "englishName" : "iPhone 12 Pro"},
            price:{ "price" :10000000, "changePrice" :2000},
            picture: "/images/Top.png",
            tag: "green",
            logo: "/images/apple.png", 
            ram:"۱۲۸/۶ گیگ" ,
            garantee: "۱۸ ماهه پارسه",
            comment: "رام‌چینی",
            backColor:["#B0B0B0","#FFFFFF","#353535","#B0B0B0","#FFFFFF"],
            chartData:[12, 19, 10, 12, 9, 17,12, 9, 17,15,13,16]
        },
        { 
            id: "iphon12prored",
            name:{"persianName":"آيفون۱۲پرو","englishName": "iPhone 12 Pro"},
            price:{ "price" :13000000, "changePrice" :-2000},
            picture: "/images/Down.png",
            tag: "red",
            logo: "/images/Apple_logo_list.png",
            ram:"۱۲۸/۶ گیگ" ,
            garantee: "۱۸ ماهه پارسه",
            comment: "رام‌چینی",
            backColor:["#B0B0B0","#FFFFFF","#353535"],
            chartData:[16, 19, 10, 12, 10, 17,12, 9, 17,15,15,16]

        },
        { 
            id: "iphon12progray",
            name:{"persianName":"آيفون۱۲پرو","englishName": "iPhone 12 Pro"},
            price:{ "price" :11000000, "changePrice" :0},
            picture: "/images/Box.png",
            tag: "gray",
            logo: "/images/Apple_logo_list.png",
            ram:"۱۲۸/۶ گیگ" ,
            garantee: "۱۸ ماهه پارسه",
            comment: "رام‌چینی",
            backColor:["#B0B0B0","#FFFFFF"],
            chartData:[16, 19, 10, 12, 10, 17,12, 9, 17,15,15,16]

        },
    ]);

    const [appleProducts,setAppleProducts] = useState([
        { 
            id: "iphon12progreen",
            name:{ "persianName" :"آيفون۱۲پرو", "englishName" : "iPhone 12 Pro"},
            price:{ "price" :12000000, "changePrice" :2000},
            picture: "/images/Top.png",
            tag: "green",
            logo: "/images/Apple_logo_list.png", 
            ram:"۱۲۸/۶ گیگ" ,
            garantee: "۱۸ ماهه پارسه",
            comment: "رام‌چینی",
            backColor:["#B0B0B0","#FFFFFF","#353535","#B0B0B0","#FFFFFF"],
            chartData:[12, 19, 10, 12, 9, 17,12, 9, 17,15,13,16]
        },
        { 
            id: "iphon12prored",
            name:{"persianName":"آيفون۱۲پرو","englishName": "iPhone 12 Pro"},
            price:{ "price" :12000000, "changePrice" :-2000},
            picture: "/images/Down.png",
            tag: "red",
            logo: "/images/Apple_logo_list.png",
            ram:"۱۲۸/۶ گیگ" ,
            garantee: "۱۸ ماهه پارسه",
            comment: "رام‌چینی",
            backColor:["#B0B0B0","#FFFFFF","#353535"],
            chartData:[16, 19, 10, 12, 10, 17,12, 9, 17,15,15,16]

        },
        { 
            id: "iphon12progray",
            name:{"persianName":"آيفون۱۲پرو","englishName": "iPhone 12 Pro"},
            price:{ "price" :12000000, "changePrice" :0},
            picture: "/images/Box.png",
            tag: "gray",
            logo: "/images/Apple_logo_list.png",
            ram:"۱۲۸/۶ گیگ" ,
            garantee: "۱۸ ماهه پارسه",
            comment: "رام‌چینی",
            backColor:["#B0B0B0","#FFFFFF"],
            chartData:[16, 19, 10, 12, 10, 17,12, 9, 17,15,15,16]

        },
        { 
            id: "iphon12progray",
            name:{"persianName":"آيفون۱۲پرو","englishName": "iPhone 12 Pro"},
            price:{ "price" :12000000, "changePrice" :2000},
            picture: "/images/Top.png",
            tag: "green",
            logo: "/images/Apple_logo_list.png",
            ram:"۱۲۸/۶ گیگ",
            garantee: "۱۸ ماهه پارسه",
        },
        { 
            id: "iphon12progray",
            name:{"persianName":"آيفون۱۲پرو","englishName": "iPhone 12 Pro"},
            price:{ "price" :12000000, "changePrice" :-2000},
            picture: "/images/Down.png",
            tag: "red",
            logo: "/images/Apple_logo_list.png",
            ram:"۱۲۸/۶ گیگ",
            garantee: "۱۸ ماهه پارسه",
        },
        { 
            id: "iphon12progray",
            name:{"persianName":"آيفون۱۲پرو","englishName": "iPhone 12 Pro"},
            price:{ "price" :12000000, "changePrice" :0},
            picture: "/images/Box.png",
            tag: "gray",
            logo: "/images/Apple_logo_list.png",
            ram:"۱۲۸/۶ گیگ" 
        },
        { 
            id: "iphon12progray",
            name:{"persianName":"آيفون۱۲پرو","englishName": "iPhone 12 Pro"},
            price:{ "price" :12000000, "changePrice" :2200},
            picture: "/images/Top.png",
            tag: "green",
            logo: "/images/Apple_logo_list.png",
            ram:"۱۲۸/۶ گیگ" 
        },
        { 
            id: "iphon12progray",
            name:{"persianName":"آيفون۱۲پرو","englishName": "iPhone 12 Pro"},
            price:{ "price" :12000000, "changePrice" :-2000},
            picture: "/images/Down.png",
            tag: "red",
            logo: "/images/Apple_logo_list.png",
            ram:"۱۲۸/۶ گیگ" 
        },
        { 
            id: "iphon12progray",
            name:{"persianName":"آيفون۱۲پرو","englishName": "iPhone 12 Pro"},
            price:{ "price" :12000000, "changePrice" :-2000},
            picture: "/images/Down.png",
            tag: "red",
            logo: "/images/Apple_logo_list.png",
            ram:"۱۲۸/۶ گیگ" 
        },
        { 
            id: "iphon12progray",
            name:{"persianName":"آيفون۱۲پرو","englishName": "iPhone 12 Pro"},
            price:{ "price" :12000000, "changePrice" :-2000},
            picture: "/images/Down.png",
            tag: "red",
            logo: "/images/Apple_logo_list.png",
            ram:"۱۲۸/۶ گیگ" 
        },
        { 
            id: "iphon12progray",
            name:{"persianName":"آيفون۱۲پرو","englishName": "iPhone 12 Pro"},
            price:{ "price" :12000000, "changePrice" :-2000},
            picture: "/images/Down.png",
            tag: "red",
            logo: "/images/Apple_logo_list.png",
            ram:"۱۲۸/۶ گیگ" 
        },
        { 
            id: "iphon12progray",
            name:{"persianName":"آيفون۱۲پرو","englishName": "iPhone 12 Pro"},
            price:{ "price" :12000000, "changePrice" :-2000},
            picture: "/images/Down.png",
            tag: "red",
            logo: "/images/Apple_logo_list.png",
            ram:"۱۲۸/۶ گیگ" 
        },
    ]);
    const [samsungProducts,setSamsungProducts] = useState([
        { 
            id: "samsungs20",
            name:{ "persianName" :"سامسونگ S20", "englishName" : "Samsung S20"},
            price:{ "price" :22000000, "changePrice" :+2000},
            picture: "/images/Top.png",
            tag: "green",
            logo: "/images/Apple_logo_list.png", 
            ram:"۱۲۸/۶ گیگ" ,
            garantee: "۱۸ ماهه پارسه",
            comment: "رام‌چینی",
            backColor:["#B0B0B0","#FFFFFF","#353535","#B0B0B0","#FFFFFF"],
            chartData:[12, 19, 10, 12, 9, 17,12, 9, 17,15,13,16]
        },
        { 
            id: "samsungs20",
            name:{ "persianName" :"سامسونگ S20", "englishName" : "Samsung S20"},
            price:{ "price" :12000000, "changePrice" :-2000},
            picture: "/images/Down.png",
            tag: "red",
            logo: "/images/Apple_logo_list.png",
            ram:"۱۲۸/۶ گیگ" ,
            garantee: "۱۸ ماهه پارسه",
            comment: "رام‌چینی",
            backColor:["#B0B0B0","#FFFFFF","#353535","#B0B0B0","#FFFFFF"],
            chartData:[12, 19, 10, 10, 9, 17,12, 9, 17,7,13,10]

        },
        { 
            id: "samsungs20",
            name:{ "persianName" :"سامسونگ S20", "englishName" : "Samsung S20"},
            price:{ "price" :12000000, "changePrice" :+0},
            picture: "/images/Box.png",
            tag: "gray",
            logo: "/images/Apple_logo_list.png",
            ram:"۱۲۸/۶ گیگ" ,
            garantee: "۱۸ ماهه پارسه",
            comment: "رام‌چینی",
            backColor:["#B0B0B0","#FFFFFF","#353535","#B0B0B0","#FFFFFF"],
            chartData:[16, 19, 10, 12, 10, 17,12, 9, 17,15,15,16]

        },
        {
            id: "samsungs20",
            name: "سامسونگ S20",
            englishName: "Samsung S20",
            changePrice: "+۰",
            price: "۲۲٫۰۰۰٫۰۰۰" ,
            picture: "/images/iphone-image.png",  
        }
    ]);

    const [allProduct, setAllProduct] = useState([
        { 
            id: "iphon12",
            name: "آیفون۱۲پرو",
            englishName: "iphone 12 Pro",
            changePrice: "+۲٫۰۰۰",
            price: "۱۲٫۰۰۰٫۰۰۰",
            picture: "/images/iphone-image.png",
            
        },
        {
            id: "samsungs20",
            name: "سامسونگ S20",
            englishName: "Samsung S20",
            changePrice: "+۰",
            price: "۲۲٫۰۰۰٫۰۰۰" ,
            picture: "/images/iphone-image.png",  
        }
    ]);
    const [hasAppleUpdate,setHasAppleUpdate] = useState(false);
    const [hasSamsungUpdate,setHasSamsungUpdate] = useState(false);
    const [hasMiUpdate,setHasMiUpdate] = useState(false);
    const [hasAllUpdate,setHasAllUpdate] = useState(false);

    const changeData = (value) => {
        setSelectedBrands(value);
    }

  

    useEffect(() => {
        if (selectedBrands === "apple" && !hasAppleUpdate) {
            setHasAppleUpdate(true)
            setData(appleProducts)
            setTableData(appleProducts)
            console.log("I am apple")
        } else if(selectedBrands === "apple" && hasAppleUpdate){
            setData(appleProducts)
            setTableData(appleProducts)
            console.log("I am apple plus")
        } else if(selectedBrands === "samsung" && !hasSamsungUpdate){
            setHasSamsungUpdate(true)
            setData(samsungProducts)
            setTableData(samsungProducts)
            console.log("I am samsung")
        } else if(selectedBrands === "samsung" && hasSamsungUpdate){
            setData(samsungProducts)
            setTableData(samsungProducts)
            console.log("I am samsung plus")
        }
    },[changeData])

    const changeTableData = (value) => {
        setSelectedTableBrands(value);
    }

    useEffect(() => {
        if (selectedTableBrands === "apple" && !hasAppleUpdate) {
            setHasAppleUpdate(true)
            setTableData(appleProducts)
            console.log("I am apple")
        } else if(selectedTableBrands === "apple" && hasAppleUpdate){
            setTableData(appleProducts)
            console.log("I am apple plus")
        } else if(selectedTableBrands === "samsung" && !hasSamsungUpdate){
            setHasSamsungUpdate(true)
            setTableData(samsungProducts)
            console.log("I am samsung")
        } else if(selectedTableBrands === "samsung"){
            setTableData(samsungProducts)
            console.log("I am samsung plus")
        }
    },[changeTableData,changeData])


const [chartdata ,setchartdata]=useState({
    chartdata:{
        label:[15,17, 20,30 ,40,50],
        apple:[0, 5, 30, 33, 52, 40],
        sam:[10, 13, 20, 40, 30, 35],
        huawei:[15, 20, 25, 30, 35, 40],
        xiaomi:[20, 25, 30, 35, 40, 45],
        nokia:[25, 30, 35, 40, 45, 50],
        honor:[30, 35, 40, 45, 50, 55]
    }

})
const [cardSectionData, setCardSectionData] = useState(
    [
        {
            id: "1",
            imgUrl: "/images/iphone-image.png",
            persianTitle: "آیفون ۱۲ پرو",
            enTitle: "iphone 12 Pro",
            cahrtData: [[40,15,20,40,0,40,30],"green"],
            priceMargin: +2000,
            price: 12000000,
            url: "https://alaedingroup.ir/product/iphone-گوشی-آیفون-12pro/",
        },
        {
            id: "2",
            imgUrl: "/images/iphone-image.png",
            persianTitle: "آیفون ۱۲",
            enTitle: "iphone 12",
            cahrtData: [[12.1,12.15,12.2,12.5,12.1,11.5,12],"red"],
            priceMargin: -2000,
            price: 12500000,
            url: "https://alaedingroup.ir/product/iphone-گوشی-آیفون-12pro/",
        },
        {
            id: "3",
            imgUrl: "/images/iphone-image.png",
            persianTitle: "آیفون ۱۲",
            enTitle: "iphone 12",
            cahrtData: [[12.1,12.15,12.2,12.5,12.1,11.5,12],"red"],
            priceMargin: -2000,
            price: 12500000,
            url: "https://alaedingroup.ir/product/iphone-گوشی-آیفون-12pro/",
        },
        {
            id: "4",
            imgUrl: "/images/iphone-image.png",
            persianTitle: "سامسونگ S20",
            enTitle: "samsung S20",
            cahrtData: [[22.1,22.15,19.5,19.7,22,22,22],"gray"],
            priceMargin: 0,
            price: 22000000,
            url: "https://alaedingroup.ir/product/iphone-گوشی-آیفون-12pro/",
        },
        {
            id: "5",
            persianTitle: "آیفون ۱۲ پرو",
            enTitle: "iphone 12 Pro",
            cahrtData: [[12.1,12.15,12.2,12.5,12.1,11.5,12],"green"],
            priceMargin: 2000,
            price: 12000000,
            url: "https://alaedingroup.ir/product/iphone-گوشی-آیفون-12pro/",
        }
    ]
)
const [brand,setBrand] = useState({})
const { asPath } = useRouter()
const [path, setPath] = useState()
useEffect(() => {
    setPath(asPath)
    if (path === miPrice) {
        setBrand("MiBrand")
    } else if (path === allPrice) {
        setBrand("AllBrand")
    }else if (path === applePrice) {
        setBrand("AppleBrand")
    }else if (path === samsungPrice) {
        setBrand("SamsungBrand")
    }else if (path === huaweiPrice) {
        setBrand("HuaweiBrand")
    }else if (path === nokiaPrice) {
        setBrand("NokiaBrand")
    }else if (path === honorPrice) {
        setBrand("HonorBrand")
    }
}

, [asPath,path,brand])

    return (
    <>
            <MainComponent 
            brand={brand} 
            allPrice={allPrice} 
            brands={brands} 
            changeData={changeData} 
            appleProducts={appleProducts} 
            chartdata={chartdata} 
            cardSectionData={cardSectionData} 
            changeTableData={changeTableData} 
            tableData={tableData}/>
    </>
    )
}

export default Price
