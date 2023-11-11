import './App.css';
import {React} from "react";
import Layout from "./components/Layout/Layout.js";
import {ThemeProvider } from "@mui/material/styles";
import { Routes, Route} from "react-router-dom";
import Gallery from './pages/Gallery';
import NotFound from './pages/NotFound'
import Shoes from './pages/Shoes';
import Contact from './pages/Contact';
import About from './pages/About';
import theme from "./theme";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route  path='/' exact element={<Gallery />}></Route>
          <Route  path='/gallery' excact element={<Gallery/>}></Route>
          <Route  path='/shoes' excact element={<Shoes />}></Route>
          <Route  path='/contact' excact element={<Contact />}></Route>
          <Route  path='/about' excact element={<About />}></Route>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Layout>
      </ThemeProvider>
  );
}

export default App;
