import React from "react";
import LinkGroup from "../components/SocialMedia";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageLinks from '../data/PageLinks';


export default () => {
  return (
    <div id="root">
      {/** id=root */}
      <Navbar />

      <PageLinks />

      <article id="Page" className="container bg-light px-5">
        {/** This template uses two containers to create a multi-tiered layout. Page is a regular container, but Main is a container-fluid, meaning Main will use as much space as needed */}

        <section id="greeting" className="flex-row">
          <h1>About Me</h1>
          <p> I started this website as a way to gain experience in website development and programming. My goal is to provide insight, tutorials and opinions on various technologies and topics. </p>
        </section>

        <section className="flex-row border-bottom">
          <h1>Interests:</h1>
          <h4>Finance, Web Development, Business Intelligence </h4>
        </section>

        <h2>Background</h2>
        <p>
          I'm originally from Omaha, NE, went to Missouri State University in
          Springfield, MO and moved to Kansas City after graduating in December
          2015 with a B.S. in Finance and a Minor in Accounting.
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
        <blockquote><i>
          "I identified the dependence on Microsoft Excel and decided to learn
          everything that I could about the software."</i>
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
      </article>

      <Footer />
    </div >
  );
};


{/**  
    <!-- 2.0 Framework - needs to be implemented -->
    <article id="Page" className="container bg-secondary text-light my-1 p-2">

      <section id="greeting" className="flex-row">
        <h1>About Me</h1>
        <p> I started this website as a way to gain experience in website development and programming. My goal is to provide insight, tutorials and opinions on various technologies and topics. </p>
      </section>

      <section id="main" className="flex-row">
        <h1>Interests:</h1>
        <h3>| Finance | Web Development | Business Intelligence |</h3>
      </section>

      <section id="Contact" className="flex-row">
        <h2>Contact Information:</h2>
        <LinkGroup />
      </section>

    </article>

<!-- Original About Me -->
        <h2>Background</h2>
        <p>
          I'm originally from Omaha, NE, went to Missouri State University in
          Springfield, MO and moved to Kansas City after graduating in December
          2015 with a B.S. in Finance and a Minor in Accounting.
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
        <h3>
          "I identified the dependence on Microsoft Excel and decided to learn
          everything that I could about the software."
        </h3>
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
*/}
