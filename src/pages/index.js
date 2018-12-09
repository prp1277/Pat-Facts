import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { siteMetadata } from '../../gatsby-config'
import Navbar from "../components/Navbar";
import PageLinks from "../data/PageLinks";
import Footer from "../components/Footer";
import Introduction from '../components/Introduction';

class App extends React.Component {
  render() {
    return (
      <div className="App" id="root">
        <Navbar />
        <PageLinks />

        <section id="Page" className="container p-3 bg-secondary">

          <section id="HolidayGreeting" className="card my-2">
            <h1 className="card-header text-white">Happy Holidays!</h1>
          </section>
          {/* <br /> */}

          <Introduction />

        </section> {/** */}

        <Footer />

      </div>
    );
  }
}

export default App;
