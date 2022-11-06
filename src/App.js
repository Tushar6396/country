import React from 'react'
import Countries from './Components/Countries';
import Filter from './Components/Filter';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Country from './Components/Country';
import Favourites from './Components/Favourites';

function App() {
  return (
    <Router>
      <Filter />
      <Routes>
      <Route path='/' element={<Countries />}>
      </Route>
      <Route path='/countries/:name' element = {<Country />} ></Route>
      <Route path='/favourites' element = {<Favourites />} />
      </Routes>
    </Router>
  );
}

export default App;
