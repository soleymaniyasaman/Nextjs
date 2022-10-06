import React from 'react';
import {Bar} from 'react-chartjs-2';
import styles from './priceComponent_tableChart.module.scss';


function PriceComponent_tableChart({dataChart}) {

    const data = {
        labels: [,'اسفند' ,'بهمن' ,'دی','فروردین', 'اردیبهشت', 'خرداد', 'تیر','مرداد' , 'شهریور','مهر', 'آبان', 'آذر'],
        datasets: [{
          data: dataChart,
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          borderWidth: 1
        }]
      }
    return (
        <div className={styles.PriceComponent_tableChart}>
        <Bar
          data={data}
          options={{
            maintainAspectRatio: false,
            cutoutPercentage: 60,
            responsive:true,
            legend:{
                display:false,
            },
            layout: {
              padding: {
                  // right: 40,
                  // left:40,
                  // top:40,
                  // bottom:40
              }
          }, 
            tooltips:{
                position:'average',
                mode: 'index',
                intersect: false,
                backgroundColor:"red",
                titleFontSize: 8,
                bodyFontSize: 8,
                titleMarginBottom:1,
                bodySpacing:1,
                yPadding:2

                
            },
            scales:{
                xAxes: [{
                    display: false, //this will remove all the x-axis grid lines
                    offset:true,
                }],
                yAxes: [{
                    display: false, //this will remove all the x-axis grid lines

                }]
            }
          }}
        />
      </div> 
    )
}

export default PriceComponent_tableChart