import globalStyles from './App.module.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = [
  'Palavra 1',
  'Palavra 2',
  'Palavra 3',
  'Palavra 4',
  'Palavra 5',
  'Palavra 6',
  'Palavra 7',
  'Palavra 8',
  'Palavra 9',
  'Palavra 10',
];
const results = [
  //10 random numbers
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
];

export const data = {
  labels,
  datasets: [
    {
      label: 'Número de Usos',
      data: results,
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ]
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'As 10 Palavras mais utilizadas',
    },
  },
};

export function ResultsPage() {

  return (
    <div className={globalStyles.appContainer}>
      <div className={globalStyles.wytaContainer}>
        <h1>WYTA - Resultados</h1>
        <Bar options={options} data={data} />
      </div>
    </div>
  )
}