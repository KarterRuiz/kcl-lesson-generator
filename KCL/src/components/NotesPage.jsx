// src/components/NotesPage.jsx
import React from "react";
import "./NotesPage.css";

/**
 * KCL Notes Page Template
 * -------------------------------------------------
 * This mirrors your landscape Cornell-style notes:
 * - Header row: Name / Date / Class
 * - Word bank strip
 * - Left column: Main Ideas / Questions
 * - Right column: Notes / Examples
 *
 * All content is passed in via props so later an AI
 * backend can fill these slots automatically.
 */

function NotesPage({
  lessonTitle = "What is Place Value?",
  grade = "Grade 3",
  standards = ["3.NBT.A.1"],
  wordBank = [],
  sections = [],
  reflectionPrompt = "Write 1–2 sentences explaining what you learned today.",
}) {
  return (
    <div className="npc-page">
      {/* Top meta bar */}
      <header className="npc-meta-row">
        <div className="npc-meta-field">
          <span className="npc-meta-label">Name:</span>
        </div>
        <div className="npc-meta-field">
          <span className="npc-meta-label">Date:</span>
        </div>
        <div className="npc-meta-field">
          <span className="npc-meta-label">Class:</span>
        </div>
      </header>

      {/* Title + standards row */}
      <div className="npc-title-row">
        <div>
          <h1 className="npc-lesson-title">{lessonTitle}</h1>
          <p className="npc-lesson-subtitle">
            {grade} • Standards: {standards.join(", ")}
          </p>
        </div>
      </div>

      {/* Word bank */}
      <div className="npc-wordbank-row">
        <span className="npc-wordbank-label">word bank:</span>
        <div className="npc-wordbank-items">
          {wordBank.map((word) => (
            <span key={word} className="npc-wordbank-item">
              {word}
            </span>
          ))}
        </div>
      </div>

      {/* Two-column Cornell layout */}
      <div className="npc-main-grid">
        {/* Left column: main ideas / questions */}
        <div className="npc-left-column">
          <div className="npc-column-header">Main Ideas / Questions</div>
          <ul className="npc-main-idea-list">
            {sections.map((sec, idx) => (
              <li key={idx} className="npc-main-idea-item">
                {sec.prompt}
              </li>
            ))}
          </ul>
        </div>

        {/* Right column: notes / examples */}
        <div className="npc-right-column">
          <div className="npc-column-header">Notes / Examples</div>
          {sections.map((sec, idx) => (
            <section key={idx} className="npc-section">
              {sec.heading && (
                <h2 className="npc-section-heading">{sec.heading}</h2>
              )}
              {sec.body && <p className="npc-section-body">{sec.body}</p>}
              {sec.examples && sec.examples.length > 0 && (
                <ul className="npc-examples-list">
                  {sec.examples.map((ex, i) => (
                    <li key={i}>{ex}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>

      {/* Reflection / summary row at bottom */}
      <footer className="npc-reflection-row">
        <div className="npc-reflection-label">Summary / Reflection:</div>
        <div className="npc-reflection-prompt">{reflectionPrompt}</div>
      </footer>
    </div>
  );
}

export default NotesPage;
