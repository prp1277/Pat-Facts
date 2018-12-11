import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import '../templates/PrismTheme.css';
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

        <article id="Page" className="container p-3">
          {/** */}
          <section className="row flex justify-content-center mx-1" >

            <div id="HolidayGreeting" className="container mb-4 shadow-lg">
              <h1 className="card-header text-white">Happy Holidays!</h1>
            </div>

            <Introduction />

          </section>


        </article> {/** */}

        <Footer />

      </div>
    );
  }
}

export default App;
