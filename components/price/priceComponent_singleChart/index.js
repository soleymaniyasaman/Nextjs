import React, { useEffect, useRef, useState } from "react";
import Chartjs from 'chart.js';
import style from './priceComponent_singleChart.module.scss';

const PriceComponent_singleChart  = (props) => {
   
    var Data = {
        type: 'line',
        data: {
            labels: [],
            datasets: [
                {
                    fill: 'start',
                    label: "iphone",
                    data: [],
                    borderWidth: 2,
                    pointRadius: 0,
                }, {
                    fill: 'start',
                    data: [],
                    pointRadius: 0,
                    borderDash: [2, 2],
                    fill: false,
                    borderWidth: 1,
                }
            ]
        },
        options: {
            tooltips: {
                enabled: false
            },
            responsive: true,
            layout: {
                padding: {
                    left: -10,
                    right: 0,
                    top: 1
    
                }
            },
            responsive: true,
            legend: {
                display: false,
                position: 'bottom',
                labels: {
                    filter: function (legendItem, data) {
                        return legendItem.index != 1
                    }
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        display: false,
                        beginAtZero: false,
                    },
                    gridLines: {
                        color: "#35353500",
                        lineWidth: 0,
                        zeroLineColor: '#35353500'
                    }
                }], xAxes: [{
                    gridLines: {
                        color: "#35353500",
                        lineWidth: 0
                    },
                    gridLines: {
                        color: "#35353500",
                        drawBorder: false,
                        display: false,
                    },
                    ticks: {
                        display: false,
                        padding: 0
                    }
                }],
            }
        }
    }
    var key = props.id
    var sum = 0;
    var labels = [];
    var averageArrey = [];
    for (var i = 0; i < props.data.length; i++) {
        sum += props.data[i]
        labels.push(i);
    }
    const dataAverage = sum / props.data.length;
    for (var i = 0; i < props.data.length; i++) {
        averageArrey.push(dataAverage)
    }
    useEffect(() => {
        var ctxL = document.getElementById(`chart${key}`).getContext('2d');

        var gradientGreen = ctxL.createLinearGradient(0, 0, 0, 20);
        gradientGreen.addColorStop(0, "rgba(103, 210, 99, 1)");
        gradientGreen.addColorStop(0.1, "rgba(103, 210, 99, 0.8)");
        gradientGreen.addColorStop(1, "rgba(103, 210, 99, 0)");

        var gradientRed = ctxL.createLinearGradient(0, 0, 0, 20);
        gradientRed.addColorStop(0, "rgba(190, 65, 98,1)");
        gradientRed.addColorStop(0.1, "rgba(190, 65, 98,0.8)");
        gradientRed.addColorStop(1, "rgba(190, 65, 98,0)");

        var gradientGray = ctxL.createLinearGradient(0, 0, 0, 20);
        gradientGray.addColorStop(0, "rgba(255, 255, 255,1)");
        gradientGray.addColorStop(0.1, "rgba(255, 255, 255,0.8)");
        gradientGray.addColorStop(1, "rgba(255, 255, 255,0)");


        if (props.color === "green") {
            Data = {
                ...Data,
                data: {
                    ...Data.data,
                    labels: labels,
                    datasets: [
                        { ...Data.data.datasets[0], data: props.data, backgroundColor: gradientGreen, borderColor: ["rgba(103, 210, 99, 1)"] },
                        { ...Data.data.datasets[1], data: averageArrey, borderColor: ["rgba(103, 210, 99, 1)"] }
                    ]
                }
            } 
        } else if (props.color === "red") {
            Data = {
                ...Data,
                data: {
                    ...Data.data,
                    labels: labels,
                    datasets: [
                        { ...Data.data.datasets[0], data: props.data, backgroundColor: gradientRed, borderColor: ["rgba(190, 65, 98, 1)"] },
                        { ...Data.data.datasets[1], data: averageArrey, borderColor: ["rgba(190, 65, 98, 1)"] }
                    ]
                }
            }
        } else if (props.color === "gray") {            
            Data = {
                ...Data,
                data: {
                    ...Data.data,
                    labels: labels,
                    datasets: [
                        { ...Data.data.datasets[0], data: props.data, backgroundColor: gradientGray, borderColor: ["rgba(255, 255, 255, 1)"] },
                        { ...Data.data.datasets[1], data: averageArrey, borderColor: ["rgba(255, 255, 255, 1)"] }
                    ]
                }
            }
            
        }
        new Chartjs(ctxL, {
            ...Data
        });
            },[])
    return (
            <canvas id={`chart${key}`} context="2d"  height={33} width={111} />
    );
};

export default PriceComponent_singleChart;

