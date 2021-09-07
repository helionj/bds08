import { useState } from 'react';
import './App.css';
import Filter from './components/Filter';
import Header from './components/Header';
import Sales from './components/Sales';
import { FilterData } from './types';

const App = () => {
  const [filterData, setFilterData] = useState<FilterData>();
  const onFilterChange = (filterData: FilterData) => {
    setFilterData(filterData);
  };
  return (
    <div>
      <Header />
      <div className="app-container">
        <Filter onSubmitFilter={onFilterChange} />
        <Sales />
      </div>
    </div>
  );
};

export default App;
