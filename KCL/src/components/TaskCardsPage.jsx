// src/components/TaskCardsPage.jsx
import React from "react";
import "./TaskCardsPage.css";

/**
 * KCL Task Cards (4 per page)
 * ---------------------------------
 * Prints as a single 8.5x11 page with 4 cards laid out 2x2.
 */

function TaskCardsPage({
  lessonTitle = "What is Place Value?",
  grade = "Grade 3",
  standards = ["3.NBT.A.1"],
  cards = [],
}) {
  // Ensure exactly 4 slots (pad with blanks if fewer)
  const paddedCards = [...cards];
  while (paddedCards.length < 4) {
    paddedCards.push({ label: "", prompt: "" });
  }

  return (
    <div className="tc-page">
      {/* Optional small header strip at top (for teacher reference only) */}
      <header className="tc-header">
        <div className="tc-header-title">{lessonTitle}</div>
        <div className="tc-header-meta">
          {grade} • Standards: {standards.join(", ")}
        </div>
      </header>

      <div className="tc-grid">
        {paddedCards.map((card, index) => (
          <div key={index} className="tc-card">
            <div className="tc-card-inner">
              <div className="tc-card-number">
                {card.label || `Card ${index + 1}`}
              </div>
              <div className="tc-card-prompt">{card.prompt}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskCardsPage;
