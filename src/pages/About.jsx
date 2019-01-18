import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Helmet from 'react-helmet';
import { siteMetadata } from '../../gatsby-config';
import Navbar from "../components/Navbar";
import PageLinks from "../data/PageLinks";
import Footer from "../components/Footer";
import Media from "../components/Media";


export default () => {
  return (
    <div id="root">
      {/** id=root */}
      <Helmet>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes"></meta>
        <title>{siteMetadata.title}</title>
        <meta name="author" content={siteMetadata.contact.name} />
        <meta property="og:description" content={siteMetadata.description} />
        <meta property="og:image" content="favicon.svg" />
        <meta property="og:title" content={siteMetadata.title} />
      </Helmet>
      <Navbar />

      <PageLinks />

      <article id="Page" className="container col-10 bg-secondary px-2">
        {/** This template uses two containers to create a multi-tiered layout. Page is a regular container, but Main is a container-fluid, meaning Main will use as much space as needed */}
        <h1 className="text-light">About Me</h1>

        <div id="main" className="container-fluid bg-light shadow-lg">
          <img className="img-fluid mb-2" src="/static/1909d923ae1d1a7119c63d5c78c1d794/8484e/WeddingSiblings.jpg" alt="Family" />
          <p> I started this website as a way to gain experience in website development and programming. My goal is to provide insight, tutorials and opinions on various technologies and topics. </p>

          <h2>Education</h2>
          <p>
            I'm originally from Omaha, NE, went to Missouri State University in
            Springfield, MO and moved to Kansas City after graduating in December
          2015 with a <b>B.S. in Finance and a Minor in Accounting</b>.
        </p>
          <h2>Work</h2>
          <p>
            My background since graduating has primarily been focused on business
            operations, first in the call center at Waddell & Reed, then in Mutual
            Fund Operations at State Street and most recently in the FoodService
            Industry with Reinhart FoodService.
        </p>
          <p>
            During my time with State Street, I identified the dependence on
            Microsoft Excel and decided to learn everything that I could about the
            software. Using Microsoft OneNote, I created documentation for
            formulas, keyboard shortcuts and general notes to help improve my
            skills. This did not go unnoticed, and a few months later I applied
            and accepted a role as the Purchasing Assistant for Reinhart
            Foodservice.
        </p>
          <blockquote className="blockquote border-left px-2">
            <p>
              I identified the dependence on Microsoft Excel and decided to learn
              everything that I could about the software.
          </p>
          </blockquote>
          <p>
            At Reinhart I continued to advance my Excel skills, starting with VBA
            Macros to automate daily and weekly tasks. When I learned about Power
            Queries I started mixing and matching between the two - using VBA
            primarily for formatting and Power Queries for analysis.
        </p>
          <p>
            As I dove deeper into Power Query I also stumbled upon the free,
            desktop version of Power BI. Since it used the familiar Power Pivot
            features I had previously learned, the learning curve came naturally
            and I immediately preferred Power Bi's canvas, data and relationship
            views for creating models.
        </p>
          <p>
            After parting ways with Reinhart in late February I realized that the
            skills that I had developed were great, but they were only a subset of
            the bigger picture. Power BI opened my eyes to the fact that you can
            literally get data from anywhere.
        </p>

        </div>
      </article>

      <Footer />
    </div >
  );
};
