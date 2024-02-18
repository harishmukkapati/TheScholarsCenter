// pages/page.js
"use client";
// pages/index.js
import React from 'react';
import NavBar from '/Users/harish/ggs/src/app/pages/NavBar.js';
import styles from '/Users/harish/ggs/src/app/pages/index.css'; // Import CSS file


const IndexPage = () => {
  const downloadPDF = () => {
    // Define the path to the PDF file in your project folder
    const pdfPath = '/Users/harish/Downloads/MT1.pdf';
    
    // Create an anchor element
    const link = document.createElement('a');
    
    // Set the href attribute to the path of the PDF file
    link.href = '/Users/harish/Downloads/MT1.pdf';
    
    // Set the download attribute to force download the file
    link.download = 'Introduction_To_Matrices_And_Systems_Of_Linear_Equations_Practice.pdf';
    
    // Trigger a click event on the anchor element to start the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="container">
      <NavBar />
      <main>
        <section>
          <h3>1.1 Introduction to Matrices and Systems of linear eq.</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/jm-fOJH0nTk?si=or7Wmxm_ckorn5V2"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <div className="button-container">
            <button className="upvote-button">&#9650;</button>
            <button className="downvote-button">&#9660;</button>
          </div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/NNmiOoWt86M?si=kVT_4HzaASgKPfmA"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <div className="button-container">
            <button className="upvote-button">&#9650;</button>
            <button className="downvote-button">&#9660;</button>
          </div>
          <button className="generate" onClick={downloadPDF}>Generate learning check</button>
        </section>
        <section>
          <h3>1.2 Echelon Form and Guassian-Jordan Elimination</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/eYSASx8_nyg?si=X-6Oibalcx_IKiZ9"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <div className="button-container">
            <button className="upvote-button">&#9650;</button>
            <button className="downvote-button">&#9660;</button>
          </div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/4F5z6ipcid8?si=r5JbuFKYkinJcX-F"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <div className="button-container">
            <button className="upvote-button">&#9650;</button>
            <button className="downvote-button">&#9660;</button>
          </div>
          <button className="generate" onClick={downloadPDF}>Generate learning check</button>
        </section>
        <section>
          <h3>1.3 Consistent Systems of Linear Equations And Variables</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Wwwe4rC2yTs?si=lOlWzc1g7ugSDB69" title="YouTube video player"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <div className="button-container">
            <button className="upvote-button">&#9650;</button>
            <button className="downvote-button">&#9660;</button>
          </div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/sSjB7ccnM_I?si=bVrxbDw0i_GL2nL7"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <div className="button-container">
            <button className="upvote-button">&#9650;</button>
            <button className="downvote-button">&#9660;</button>
          </div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/DmBMK-DePmI?si=lI_OyvlrXq5U-2Lv" title="YouTube video player"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <div className="button-container">
            <button className="upvote-button">&#9650;</button>
            <button className="downvote-button">&#9660;</button>
          </div>
          <button className="generate" onClick={downloadPDF}>Generate learning check</button>
        </section>
      </main>
    </div>
  );
};

export default IndexPage;