// src/components/IndependentPage.jsx
import React from "react";
import "./IndependentPage.css";

/**
 * KCL Independent Practice Page
 * -----------------------------------------------
 * Portrait worksheet for solo practice / homework.
 * One column, lots of room for work.
 */

function IndependentPage({
  lessonTitle = "What is Place Value?",
  grade = "Grade 3",
  standards = ["3.NBT.A.1"],
  directions = "Solve each problem. Show all of your work.",
  problems = [],
}) {
  return (
    <div className="ip-page">
      {/* Meta row */}
      <header className="ip-meta-row">
        <div className="ip-meta-field">
          <span className="ip-meta-label">Name:</span>
        </div>
        <div className="ip-meta-field">
          <span className="ip-meta-label">Date:</span>
        </div>
        <div className="ip-meta-field">
          <span className="ip-meta-label">Class:</span>
        </div>
      </header>

      {/* Title */}
      <div className="ip-title-block">
        <h1 className="ip-lesson-title">{lessonTitle}</h1>
        <p className="ip-lesson-subtitle">
          {grade} • Standards: {standards.join(", ")}
        </p>
      </div>

      {/* Directions */}
      <div className="ip-directions">
        <span className="ip-directions-label">Directions:</span>{" "}
        <span className="ip-directions-text">{directions}</span>
      </div>

      {/* Problems list */}
      <div className="ip-problem-list">
        {problems.map((text, idx) => (
          <div key={idx} className="ip-problem">
            <div className="ip-problem-header">
              <span className="ip-problem-number">{idx + 1}.</span>
              <span className="ip-problem-text">{text}</span>
            </div>
            <div className="ip-work-lines">
              <div className="ip-work-line" />
              <div className="ip-work-line" />
              <div className="ip-work-line" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IndependentPage;
