import React, { useRef, useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const PieChart = ({ expenses }) => {
  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      if (chartInstance) {
        // Destroy the previous chart instance
        chartInstance.destroy();
      }

      const newChartInstance = new Chart(chartContainer.current, {
        type: 'pie',
        data: {
          labels: expenses.map((expense) => expense.name),
          datasets: [
            {
              data: expenses.map((expense) => expense.amount),
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                // Add more colors as needed
              ],
            },
          ],
        },
      });

      setChartInstance(newChartInstance);
    }
  }, [expenses]);

  return (
    <div className="pie-chart">
      <h2>Expense Distribution</h2>
      <canvas ref={chartContainer}></canvas>
    </div>
  );
};

export default PieChart;
