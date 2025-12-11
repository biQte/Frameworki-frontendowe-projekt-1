import { Routes, Route, Navigate } from 'react-router';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Lab1 from './pages/Lab1';
import Lab2 from './pages/Lab2';
import Lab3Page from './pages/Lab3Page';
import Lab4Page from './pages/Lab4Page';
import FormAdd from './pages/FormAdd';
import FormEdit from './pages/FormEdit';
import Lab5Page from './pages/Lab5Page';
import Lab5User from './pages/Lab5User';
import Lab5Comments from './pages/Lab5Comments';
import NotFound from './pages/NotFound';
import AppProvider from './components/AppProvider';

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="lab1" element={<Lab1 />} />
          <Route path="lab2/:id?" element={<Lab2 />} />
          <Route path="lab3" element={<Lab3Page />} />
          <Route path="lab4" element={<Lab4Page />} />
          <Route path="lab4/add" element={<FormAdd />} />
          <Route path="lab4/edit/:id" element={<FormEdit />} />
          <Route path="lab5" element={<Lab5Page />} />
          <Route path="lab5/users/:id" element={<Lab5User />} />
          <Route path="lab5/posts/:id/comments" element={<Lab5Comments />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AppProvider>
  );
}

export default App;
