import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig } from './helpers';
import './styles.css';
const Sales = () => {
  return (
    <div className="sales-container base-card">
      <div className="total-sales-container">
        <h1 className="total-sales">R$ 346.546,00</h1>
        <span className="label-sales">Total de vendas</span>
      </div>
      <div className="pie-chart-container">
        <ReactApexChart
          options={buildPieChartConfig(['Feminino', 'Masculino', 'Outro'], '')}
          type="donut"
          width="280"
          height="280"
          series={[40, 40, 20]}
        />
      </div>
    </div>
  );
};

export default Sales;
