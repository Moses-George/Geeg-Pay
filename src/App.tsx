import { useContext, useEffect } from 'react';
import './App.css'
import ChartCard from './components/ChartCard';
import DashboardLayout from './components/DashboardLayout';
import Orders from './components/Orders';
import SalesTrends from './components/SalesTrends';
import TopPlatForm from './components/TopPlatform';
import Context from './store/context';
import { chartCards } from './components';

function App() {

  const { darkMode } = useContext(Context);

  const body = document.querySelector("body") as any;

  useEffect(() => {
    if (darkMode) {
      body.style.backgroundColor = "#09251f";
    } else {
      body.style.backgroundColor = "#eeeff5";
    }
  }, [darkMode]);

  return (
    <DashboardLayout>
      <div className="lg:mx- space-y-6 w-full">
        <section className='grid grid-cols-1 lg:grid-cols-[5.7fr_4.3fr] gap-5 w-full'>
          <SalesTrends />
          <div className='flex flex-wrap gap-5 w-ful'>
            {chartCards.map(card =>
              <ChartCard
                key={card.id}
                title={card.title}
                amount={card.amount}
                color={card.color}
                image={card.image}
                icon={card.icon} />)}
          </div>
        </section>
        <section className='grid grid-cols-1 lg:grid-cols-[5.7fr_4.3fr] gap-5 w-full'>
          <Orders />
          <TopPlatForm />
        </section>
      </div>
    </DashboardLayout>
  )
}

export default App
