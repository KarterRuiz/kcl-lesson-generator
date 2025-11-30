// src/components/ExitTicketPage.jsx
import React from "react";
import "./ExitTicketPage.css";

/**
 * KCL Exit Ticket
 * -------------------------
 * Small, quick CFU page for the end of a lesson.
 */

function ExitTicketPage({
  lessonTitle = "What is Place Value?",
  grade = "Grade 3",
  standards = ["3.NBT.A.1"],
  directions = "Answer each question. Show your thinking.",
  prompts = [],
}) {
  return (
    <div className="et-page">
      {/* Header row */}
      <header className="et-meta-row">
        <div className="et-meta-field">
          <span className="et-meta-label">Name:</span>
        </div>
        <div className="et-meta-field">
          <span className="et-meta-label">Date:</span>
        </div>
      </header>

      {/* Title */}
      <div className="et-title-block">
        <h1 className="et-title">Exit Ticket – {lessonTitle}</h1>
        <p className="et-subtitle">
          {grade} • Standards: {standards.join(", ")}
        </p>
      </div>

      {/* Directions */}
      <div className="et-directions">
        <span className="et-directions-label">Directions:</span>{" "}
        <span className="et-directions-text">{directions}</span>
      </div>

      {/* Prompts */}
      <div className="et-prompts">
        {prompts.map((prompt, index) => (
          <div key={index} className="et-prompt">
            <div className="et-prompt-text">
              <span className="et-prompt-number">{index + 1}.</span>{" "}
              {prompt}
            </div>
            <div className="et-work-lines">
              <div className="et-work-line" />
              <div className="et-work-line" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExitTicketPage;
