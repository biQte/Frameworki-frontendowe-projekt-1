import { Routes, Route, Navigate } from 'react-router';
import { useReducer } from 'react';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Lab1 from './pages/Lab1';
import Lab2 from './pages/Lab2';
import Lab3Page from './pages/Lab3Page';
import Lab4Page from './pages/Lab4Page';
import FormAdd from './pages/FormAdd';
import FormEdit from './pages/FormEdit';
import NotFound from './pages/NotFound';
import { data } from './data/module-data';
import AppReducer from './data/AppReducer';
import AppContext from './data/AppContext';

function App() {
  const [state, dispatch] = useReducer(AppReducer, data);

  return (
    <AppContext.Provider value={{ items: state, dispatch: dispatch }}>
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
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
