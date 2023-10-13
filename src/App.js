// App.js
import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <main>
        <Home />
      </main>
    </div>
  );
};

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <span>
            <i className="fas fa-tachometer-alt"></i>
          </span>{' '}
          Dashboard
        </li>
        <li>
          <span>
            <i className="fas fa-cube"></i>
          </span>{' '}
          Products
        </li>
        <li>
          <span>
            <i className="fas fa-users"></i>
          </span>{' '}
          Customers
        </li>
        <li>
          <span>
            <i className="fas fa-money-bill-wave"></i>
          </span>{' '}
          Income
        </li>
        <li>
          <span>
            <i className="fas fa-bullhorn"></i>
          </span>{' '}
          Promote
        </li>
        <li>
          <span>
            <i className="fas fa-question-circle"></i>
          </span>{' '}
          Help
        </li>
      </ul>
    </aside>
  );
};

const Home = () => {
  return (
    <div className="home">
      <h1>Hello Shahrukh 👋</h1>
      <div className="card-container">
        <Card title="Earnings" content="$198K 37.8% this month" />
        <Card title="Orders" content="$2.4K 2% this month" />
        <Card title="Balance" content="$2.4K 2% this month" />
        <Card title="Total Sales" content="$89K 11% this month" />
      </div>
      <div className="home-bar-cust">
        <Card title="Overview" content={<MonthlyBarGraph />} />
        <Card title="Customers" content={<PieChart />} />
      </div>
    </div>
  );
};

const MonthlyBarGraph = () => {
  const barHeights = [80, 60, 90, 40, 70, 50, 30, 65, 45, 75, 55, 85];

  return (
    <div className="diagram-content">
      {barHeights.map((height, index) => (
        <div
          key={index}
          className="bar"
          style={{
            height: `${height}%`,
            backgroundColor: index % 2 === 0 ? '#3498db' : '#2ecc71',
          }}
        ></div>
      ))}
    </div>
  );
};

const PieChart = () => {
  return (
    <div className="pie-chart">
      <div className="slice" data-value="10"></div>
      <div className="slice" data-value="10"></div>
      <div className="slice" data-value="10"></div>
      <div className="slice" data-value="10"></div>
    </div>
  );
};

const Card = ({ title, content }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default App;
