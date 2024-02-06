import React from 'react'
import { Bar, Pie } from 'react-chartjs-2'
import { CanvasJSChart } from 'canvasjs-react-charts';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Title,
    BarElement,
    Tooltip,
} from 'chart.js';
import { useEffect } from 'react';
function Statics() {

 ChartJS.register(CategoryScale, LinearScale, Title, BarElement, Tooltip);

//  useEffect(() => {
//     // Clean up the existing chart before unmounting
//     return () => {
//         ChartJS.helpers.each(ChartJS.instances, (instance) => {
//             instance.destroy();
//         });
//     };
// }, []);

 const state = {
    labels: [
        'JUNE',
        'JULY',
        'AUGUST',
        'SEPTEMBER',
        'OCTOBER',
        'NOVEMBER',
        'DECEMBER',
    ],
    // datasets  stored in an array of objects
    datasets: [
        {

            // you can set individual colors for each bar
            backgroundColor: ['red', 'green', 'pink', 'orange', 'yellow', 'lime'],
            hoverBackgroundColor: 'lightblue',
            borderRadius: 8,
            data: [40, 40, 50, 60, 80, 90, 70],
            
        },
    ],
};

const piestate = {
    labels: [
        'JUNE',
        'JULY',
        'AUGUST',
        'SEPTEMBER',

    ],
    // datasets is an array of objects
    datasets: [
        {
            // you can set individual colors for each pie
            backgroundColor: ['purple', 'green', 'yellow', 'orange'],
            hoverBackgroundColor: 'lightblue',
            data: [40, 40, 50, 60],
        },
    ],
};


const chartOptions = {
    // maintainAspectRatio: false, // Set to false to allow custom height and width
    // responsive: true,
    height: 100, // Specify the height
    width: 100,
};







  return (

    <div>
        
        {/* <div style={{backgroundColor:"yellow"}}> */}
            {/* <h1 className='font-extrabold'>Pie chart representation of Sales from June-September</h1> */}
            {/* <div style={{ width: '40%' }}> */}
                {/* <Pie data={piestate} /> */}
                {/* <Pie data={piestate} id="piechart"/> */}
            {/* </div> */}
        {/* </div> */}
        
    <div style={{backgroundColor:"white"}}>
     <div>
            <h1 className="font-extrabold">sales for the month of JUNE-DECEMBER</h1>
           
          <Bar data={state} options={chartOptions} id='barchart' />
        </div>
    </div>
    </div>
  )
}

export default Statics
