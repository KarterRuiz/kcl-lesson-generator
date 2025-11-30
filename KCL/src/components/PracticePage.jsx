// src/components/PracticePage.jsx
import React from "react";
import "./PracticePage.css";

/**
 * KCL Practice Page Template
 * -----------------------------------------------
 * Landscape worksheet for guided & independent practice.
 * Flexible enough to handle:
 *  - Warm-up
 *  - Main practice problems
 *  - Challenge / Riddle
 *
 * All content is passed in via props so AI can fill later.
 */

function PracticePage({
  lessonTitle = "What is Place Value?",
  grade = "Grade 3",
  standards = ["3.NBT.A.1"],
  instructions = "Solve each problem. Show your thinking.",
  sections = [],
}) {
  return (
    <div className="pp-page">
      {/* Meta header */}
      <header className="pp-meta-row">
        <div className="pp-meta-field">
          <span className="pp-meta-label">Name:</span>
        </div>
        <div className="pp-meta-field">
          <span className="pp-meta-label">Date:</span>
        </div>
        <div className="pp-meta-field">
          <span className="pp-meta-label">Class:</span>
        </div>
      </header>

      {/* Title and standards */}
      <div className="pp-title-row">
        <div>
          <h1 className="pp-lesson-title">{lessonTitle}</h1>
          <p className="pp-lesson-subtitle">
            {grade} • Standards: {standards.join(", ")}
          </p>
        </div>
      </div>

      {/* General directions */}
      <div className="pp-directions">
        <span className="pp-directions-label">Directions:</span>
        <span className="pp-directions-text">{instructions}</span>
      </div>

      {/* Main sections (warm-up, practice, challenge, etc.) */}
      <div className="pp-sections-grid">
        {sections.map((section, idx) => (
          <section key={idx} className="pp-section">
            <div className="pp-section-header">
              <h2 className="pp-section-title">{section.title}</h2>
              {section.subtitle && (
                <p className="pp-section-subtitle">{section.subtitle}</p>
              )}
            </div>

            <div className="pp-problems">
              {section.problems.map((prob, i) => (
                <div key={i} className="pp-problem">
                  <span className="pp-problem-number">{i + 1}.</span>
                  <span className="pp-problem-text">{prob}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default PracticePage;
