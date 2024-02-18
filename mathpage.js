// pages/mathpage.js

import React from 'react';
import Link from 'next/link';

// YouTube video component
const YouTubeVideo = () => (
  <div>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/orycf6MAb_w"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
    <div>
      {/* Upvote and downvote buttons */}
      <button>Upvote</button>
      <button>Downvote</button>
    </div>
  </div>
);

const MathPage = () => {
  return (
    <div>
      {/* Navigation bar */}
      <nav>
        <div>
          {/* Scholar Space button */}
          <Link href="/">
            <a>Scholar Space</a>
          </Link>
        </div>
        <div>
          {/* OSU logo */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Ohio_State_Buckeyes_logo.svg"
            alt="OSU logo"
            style={{ width: '100px', height: '100px' }}
          />
        </div>
        <div>
          {/* MATH 2568 - Linear Algebra */}
          <p>MATH 2568 - Linear Algebra</p>
        </div>
        <div>
          {/* Linear Algebra Professor button */}
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            Linear Algebra Professor
          </a>
        </div>
      </nav>

      {/* Part 1 */}
      <section>
        <h2>Part 1</h2>
        <ul>
          <li>1.1 Introduction to Matrices and Systems of linear equations</li>
          <li>1.2 Echelon Form and Guassian-Jordan Elimination</li>
          <li>1.3 Consistent Systems of Linear Equations</li>
          <li>1.5 Matrix Operations</li>
          <li>1.6 Algebraic Properties of Matrix Operations</li>
          <li>1.7 Linear Independence and Nonsingular Matrices</li>
          <li>1.9 Matrix Inverses and Their Properties</li>
        </ul>
        <YouTubeVideo />
        <YouTubeVideo />
        <YouTubeVideo />
        <button>Generate learning check</button>
      </section>

      {/* Part 2 */}
      <section>
        <h2>Part 2</h2>
        <ul>
          <li>2.1 Vectors in The Plane</li>
          <li>2.2 Vectors in Space</li>
          <li>2.3 The Dot Product and The Cross</li>
          <li>3.1 Introduction</li>
          <li>3.2 Vector Space Properties of R^n</li>
          <li>3.3 Examples of Subspaces</li>
          <li>3.4 Bases for subspaces</li>
        </ul>
        <YouTubeVideo />
        <YouTubeVideo />
        <YouTubeVideo />
        <button>Generate learning check</button>
      </section>
    </div>
  );
};

export default MathPage;
