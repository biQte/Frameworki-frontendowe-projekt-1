import { Routes, Route, Navigate } from 'react-router';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Lab1 from './pages/Lab1';
import Lab2 from './pages/Lab2';
import Lab3Page from './pages/Lab3Page';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="lab1" element={<Lab1 />} />
        <Route path="lab2/:id?" element={<Lab2 />} />
        <Route path="lab3" element={<Lab3Page />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
