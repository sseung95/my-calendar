import { Route, Routes } from 'react-router';
import Layout from './components/layout/Layout';
import AddTask from './pages/AddTask';
import MonthCalendar from './pages/MonthCalendar';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MonthCalendar />} />
        <Route path="/add" element={<AddTask />} />
      </Routes>
    </Layout>
  );
}

export default App;
