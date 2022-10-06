import React, { useEffect, useRef, useState, useCallback } from "react";
import style from './priceComponent_mainChart.module.scss';
import Chartjs from 'chart.js';

function PriceComponent_mainChart(props) {
    var chart = {
        type: "line",
        data: {
            labels: props.data.label,
            datasets: [
                {
                    label: "IPHONE",
                    fill: false,
                    data: props.data.apple,
                    borderColor: [
                        "rgba(176, 176, 176, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)"
                    ],
                    borderWidth: 3,

                }, {
                    label: 'SAMSUNG',
                    fill: false,
                    data: props.data.sam,
                    borderColor: [
                        'rgba(49, 123, 253, 0.6)',
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)"
                    ],
                    borderWidth: 3
                }, {
                    label: 'HUAWEI',
                    fill: false,
                    data: props.data.huawei,
                    borderColor: [
                        'rgba(239, 35, 16, 0.6)',
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)"
                    ],
                    borderWidth: 3
                }, {
                    label: 'XIAOMI',
                    fill: false,
                    data: props.data.xiaomi,
                    borderColor: [
                        'rgba(239, 105, 16, 0.6)',
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)"
                    ],
                    borderWidth: 3
                }, {
                    label: 'NOKIA',
                    fill: false,
                    data: props.data.nokia,
                    borderColor: [
                        'rgba(0, 165, 84, 0.6)',
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)"
                    ],
                    borderWidth: 3
                }, {
                    label: 'HONOR',
                    fill: false,
                    data: props.data.honor,
                    borderColor: [
                        'rgba(255, 181, 0, 0.6)',
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)"
                    ],
                    borderWidth: 3
                }
            ]
        },
        options: {
            responsive: true,

            legend: {
                display: false,
                position: 'bottom',
                labels: {
                    fontColor: 'white',
                    fontSize: 20,
                    filter: function (legendItem, data) {
                        return legendItem.index != 1
                    }


                }
            },
            scales: {
                yAxes: [{
                    gridLines: {
                        drawBorder: true,
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            pan: {
                enabled: true,
                mode: "x",
                speed: 10,
                threshold: 10
            },
            zoom: {
                enabled: true,
                drag: false,
                mode: "xy",
                limits: {
                    max: 10,
                    min: 0.5
                }


            }
        }
    };
    const chartData = useRef(null);
    const [chartInstance, setChartInstance] = useState(null);
    var selectedChart = {
        isAppleSelected: true,
        isSamsungSelected: true,
        isHuaweiSelected: true,
        isMiSelected: true,
        isNokiaSelected: true,
        isHonorSelected: true,
    } 
    const onCheckBoxClickHandler = (input) => {
        if (input === "AppleBrand") {
            selectedChart = {...selectedChart, isAppleSelected: !selectedChart.isAppleSelected}
        } else if (input === "SamsungBrand") {
            selectedChart = {...selectedChart, isSamsungSelected: !selectedChart.isSamsungSelected}
        } else if (input === "HuaweiBrand") {
            selectedChart = {...selectedChart, isHuaweiSelected: !selectedChart.isHuaweiSelected}
        } else if (input === "MiBrand") {
            selectedChart = {...selectedChart, isMiSelected: !selectedChart.isMiSelected}
        } else if (input === "NokiaBrand") {
            selectedChart = {...selectedChart, isNokiaSelected: !selectedChart.isNokiaSelected}
        } else if (input === "HonorBrand") {
            selectedChart = {...selectedChart, isHonorSelected: !selectedChart.isHonorSelected}
        }
        chartDataGenerator();        
    }
    const chartDataGenerator = () => {
        (selectedChart.isAppleSelected) ? chartInstance.data.datasets[0].data = props.data.apple : chartInstance.data.datasets[0].data = [],
        (selectedChart.isSamsungSelected) ? chartInstance.data.datasets[1].data = props.data.sam : chartInstance.data.datasets[1].data = [],
        (selectedChart.isHuaweiSelected) ? chartInstance.data.datasets[2].data = props.data.huawei : chartInstance.data.datasets[2].data = [],
        (selectedChart.isMiSelected) ? chartInstance.data.datasets[3].data = props.data.xiaomi : chartInstance.data.datasets[3].data = [],
        (selectedChart.isNokiaSelected) ? chartInstance.data.datasets[4].data = props.data.nokia : chartInstance.data.datasets[4].data = [],
        (selectedChart.isHonorSelected) ? chartInstance.data.datasets[5].data = props.data.honor : chartInstance.data.datasets[5].data = [],
        chartInstance.update();
    } 
    const checkBox = () => {  
        if (props.brand === "AllBrand") {
            return (
                <div className={`d-flex align-items-center  ${style.priceComponent_chartjs_d_ltr} col-md-12 col-sm-12 col-lg-12 mt-2 mb-3`} >
                    <div className="d-flex">
                    <div className={`  d-flex align-items-center ${style.priceComponent_chartjs_margin_right} `} >
                        <input className={`form-check-input ${style.priceComponent_chartjs_form_check} priceMainChartCheckboxColor_AppleBrand`} 
                            type="checkbox" 
                            onClick={() => {
                                onCheckBoxClickHandler("AppleBrand")
                            }} 
                            defaultChecked={selectedChart.isAppleSelected}
                            
                             />
                        <img src="/images/AppleBrand-chart.png" className={`form-check-label mx-1 ${style.priceComponent_chartjs_widthApple}`} />
                    </div>

                    <div id="sam" className={` d-flex align-items-center ${style.priceComponent_chartjs_margin_right}`}>
                        <input className={`form-check-input ${style.priceComponent_chartjs_form_check} priceMainChartCheckboxColor_SamsungBrand`} 
                            type="checkbox" 
                            onClick={() => {
                                onCheckBoxClickHandler("SamsungBrand");
                            }}  
                            defaultChecked={selectedChart.isSamsungSelected}
                            
                            />
                        <img src="/images/SamsungBrand-chart.png" className={`form-check-label mx-1 ${style.priceComponent_chartjs_widthSamsung}`} />
                    </div>
                    <div id="huawei" className={` d-flex align-items-center ${style.priceComponent_chartjs_margin_right}`}>
                        <input className={`form-check-input ${style.priceComponent_chartjs_form_check} priceMainChartCheckboxColor_HuaweiBrand`} 
                            type="checkbox"
                            onClick={() => {
                                onCheckBoxClickHandler("HuaweiBrand");
                            }}  
                            defaultChecked={selectedChart.isHuaweiSelected}
                             />
                        <img src="/images/HuaweiBrand-chart.png" className={`form-check-label mx-1 ${style.priceComponent_chartjs_widthHuawei}`} />
                    </div>
                    <div id="xiaomi" className={` d-flex align-items-center ${style.priceComponent_chartjs_margin_right}`}>
                        <input className={`form-check-input ${style.priceComponent_chartjs_form_check} priceMainChartCheckboxColor_MiBrand`} 
                            type="checkbox" 
                            onClick={() => {
                                onCheckBoxClickHandler("MiBrand");
                            }}  
                            defaultChecked={selectedChart.isMiSelected}
                             />
                        <img src="/images/MiBrand-chart.png" className={`form-check-label mx-1 ${style.priceComponent_chartjs_widthMi}`} />
                    </div>
                    <div id="nokia" className={` d-flex align-items-center ${style.priceComponent_chartjs_margin_right}`}>
                        <input className={`form-check-input ${style.priceComponent_chartjs_form_check} priceMainChartCheckboxColor_NokiaBrand`} 
                            type="checkbox"
                            onClick={() => {
                                onCheckBoxClickHandler("NokiaBrand");
                            }} 
                            defaultChecked={selectedChart.isNokiaSelected}
                             />
                        <img src="/images/NokiaBrand-chart.png" className={`form-check-label mx-1 ${style.priceComponent_chartjs_widthNokia}`} />
                    </div>
                    <div id="honor" className={` d-flex align-items-center `}>
                        <input className={`form-check-input ${style.priceComponent_chartjs_form_check} priceMainChartCheckboxColor_HonorBrand`} 
                            type="checkbox"
                            onClick={() => {
                                onCheckBoxClickHandler("HonorBrand");
                            }} 
                            defaultChecked={selectedChart.isHonorSelected}
                             />
                        <img src="/images/HonorBrand-chart.png" className={`form-check-label mx-1 ${style.priceComponent_chartjs_widthHonor}`} />
                    </div>
                    </div>
                    
                </div>
            )
        } else {
            return (
                <div className={`d-flex align-items-center  ${style.priceComponent_chartjs_d_ltr} col-md-12 col-sm-12 col-lg-12 mt-2 mb-3`} >
                    <div className="  d-flex align-items-center mx-1 mb-3" >
                        <div className={`form-check-input ${style.priceComponent_chartjs_form_check} priceMainChartCheckboxColor_${props.brand}`}   />
                        <img src={`/images/${props.brand}-singleChart.png`} className="form-check-label mx-2 "  />
                    </div>
                </div>
            )
        }
    }

    useEffect(() => {
        const newChartInstance = new Chartjs(chartData.current, chart);
        setChartInstance(newChartInstance);
    }, [])
    useEffect(() => {
        if (props.brand === "AllBrand") {
            selectedChart={
                isAppleSelected: true,
                isSamsungSelected: true,
                isHuaweiSelected: true,
                isMiSelected: true,
                isNokiaSelected: true,
                isHonorSelected: true,
            }
        } else if (props.brand === "AppleBrand") {
            
            selectedChart={
            isAppleSelected: true,
            isSamsungSelected: false,
            isHuaweiSelected: false,
            isMiSelected: false,
            isNokiaSelected: false,
            isHonorSelected: false,
        }
            
        
        } else if (props.brand === "SamsungBrand") {
            selectedChart={
                isAppleSelected: false,
                isSamsungSelected: true,
                isHuaweiSelected: false,
                isMiSelected: false,
                isNokiaSelected: false,
                isHonorSelected: false,
            }
        } else if (props.brand === "HuaweiBrand") {
            selectedChart={
                isAppleSelected: false,
                isSamsungSelected: false,
                isHuaweiSelected: true,
                isMiSelected: false,
                isNokiaSelected: false,
                isHonorSelected: false,
            }
        } else if (props.brand === "MiBrand") {
            selectedChart={
                isAppleSelected: false,
                isSamsungSelected: false,
                isHuaweiSelected: false,
                isMiSelected: true,
                isNokiaSelected: false,
                isHonorSelected: false,  
            }
        } else if (props.brand === "NokiaBrand") {
            selectedChart= {
                isAppleSelected: false,
                isSamsungSelected: false,
                isHuaweiSelected: false,
                isMiSelected: false,
                isNokiaSelected: true,
                isHonorSelected: false,
            }
        } else if (props.brand === "HonorBrand") {
            selectedChart={
                isAppleSelected: false,
                isSamsungSelected: false,
                isHuaweiSelected: false,
                isMiSelected: false,
                isNokiaSelected: false,
                isHonorSelected: true,
            }
        }
        if(chartInstance){
            chartDataGenerator();
        }        
    })
    
    return (
        <>
            <div className={`${style.priceComponent_chartjs_right_chartbox} priceComponent_mainChart_${props.brand} mt-3 col-md ${style.col_box} col-lg-7`}>
                <div className={`mt-3`} >
                    <div>
                    <canvas ref={chartData} className={`${style.priceComponent_chartjs_size_chart} `} />
                    {checkBox()}
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default PriceComponent_mainChart
