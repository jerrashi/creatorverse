import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import AddCreator from './pages/AddCreator';  // Assuming you have an AddCreator page

const App = () => {
  return (
    <Router>
      <div className='app-container'>
        <Routes>
          <Route exact path='/' element={<ShowCreators/>} />
          <Route path='/creator/add' element={<AddCreator/>} />
          <Route path='/creator/:id/edit' element={<EditCreator/>} />
          <Route path='/creator/:id' element={<ViewCreator/>} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;