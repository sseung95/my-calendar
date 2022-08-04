import { Route, Routes } from 'react-router';
import Layout from './components/layout/Layout';
import AddTask from './pages/AddTask';
import EditTask from './pages/EditTask';
import MonthCalendar from './pages/MonthCalendar';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MonthCalendar />} />
        <Route path="/task" element={<AddTask />} />
        <Route path="/task/:taskId" element={<EditTask />} />
      </Routes>
    </Layout>
  );
}

export default App;
