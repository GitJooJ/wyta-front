import {
  BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title,
  Tooltip
} from 'chart.js';
import { useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import globalStyles from './Input.module.css';
import { ResultContext, ResultContextType } from './ResultProvider';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


export function ResultsPage() {
  const { state } = useContext(ResultContext) as ResultContextType;
  if (!state.results) {
    return <div>Carregando...</div>;
  }
  const labels = state.results.top_words.map((word) => word.word);

  const results = state.results.top_words.map((word) => word.count);

 const data = {
  labels,
  datasets: [
    {
      label: 'Número de Usos',
      data: results,
      backgroundColor: 'rgba(33, 255, 132, 0.5)',
    },
  ]
};

 const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'As 20 Palavras mais utilizadas',
    },
  },
};


  return (
    <div className={globalStyles.appContainer}>
      <div className={globalStyles.wytaContainer}>
        <h1>WYTA - Resultados</h1>
        <Bar options={options} data={data} />
      </div>
    </div>
  )
}