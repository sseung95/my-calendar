import { Route, Routes } from 'react-router';
import Layout from './components/layout/Layout';
import AddTask from './pages/AddTask';
import EditTask from './pages/EditTask';
import MonthCalendar from './pages/MonthCalendar';
import WeekCalendar from './pages/WeekCalendar';

function App() {
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
