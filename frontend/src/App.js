import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import SectionModal from './pages/SectionModal';
import TodoModal from './pages/TodoModal';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="section/:action" element={<SectionModal />} />
          <Route path="section/:action/:idSection" element={<SectionModal />} />
          <Route path="todo/:idTodo/:action" element={<TodoModal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
