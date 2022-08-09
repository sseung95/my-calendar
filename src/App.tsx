import { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import Layout from './components/Layout/Layout';
import AddTask from './pages/AddTask';
import EditTask from './pages/EditTask';
import MonthCalendar from './pages/MonthCalendar';
import WeekCalendar from './pages/WeekCalendar';

function App() {
  const setScreenSize = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  useEffect(() => {
    setScreenSize();
    window.addEventListener('resize', setScreenSize);
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MonthCalendar />} />
        <Route path="/:year/:month/:date" element={<WeekCalendar />} />
        <Route path="/add" element={<AddTask />} />
        <Route path="/add/:year/:month/:date" element={<AddTask />} />
        <Route path="/edit/:taskId" element={<EditTask />} />
      </Routes>
    </Layout>
  );
}

export default App;
