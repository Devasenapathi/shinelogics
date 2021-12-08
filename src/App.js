import './App.css';
import Company from './components/Company/Company';
import { Header } from './components/Header';
import TopContainer from './components/TopContainer/TopContainer';
import Service from './components/Service/Service';
import Product from './components/Product/Product';
import About from './components/About/About';
import Carrers from './components/Carrers/Carrers';
import Consultant from './components/Consultant/Consultant';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//import Experience from './components/Experience/Experience';
import Form from './components/Form/Form';
import Experience from './components/Experience/Experience';
function App() {
  return (
    <div className="App">
      <Header />
      <TopContainer />
      <Company />
      <Service />
      <Product />
      <Carrers />
     {/*      <Router>
            <Routes>
          <Route path="/apply" component={Form} />
          <Route path="/join" component={Experience} />
          </Routes>
     </Router>
       */}
       <Form/>
       <Experience/>
      <Consultant />
      <About />
    </div>
  );
}

export default App;
