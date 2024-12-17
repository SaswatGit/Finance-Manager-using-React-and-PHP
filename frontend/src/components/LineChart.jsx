import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js/auto'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const LineChart = ({labels, pricedata, type}) => {
    const options = {}
    const data = {
      labels: labels,
      datasets: [
          {
              label: type,
              data: pricedata,
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
      ],
  };
  
  return (
    <div>
        <Line options={options} data={data} />
    </div>
  )
}

export default LineChart