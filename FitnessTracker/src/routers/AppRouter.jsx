import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import ActivityDetailPage from '../pages/ActivityDetailPage';
import FilterPage from '../pages/FilterPage';
import StatsPage from '../pages/StatsPage';

const AppRouter = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities/:id" element={<ActivityDetailPage />} />
        <Route path="/filter" element={<FilterPage />} />
        <Route path="/stats" element={<StatsPage />} />
      </Routes>
    </MainLayout>
  );
};

export default AppRouter;
