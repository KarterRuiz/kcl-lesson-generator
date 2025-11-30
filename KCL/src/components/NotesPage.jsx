// src/components/NotesPage.jsx
import React from "react";
import "./NotesPage.css";

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
      <header className="npc-meta-row">
        {["Name", "Date", "Class"].map((label) => (
          <div key={label} className="npc-meta-field">
            <span className="npc-meta-label">{label}:</span>
            <span className="npc-meta-line" aria-hidden="true" />
          </div>
        ))}
      </header>

      <div className="npc-title-row">
        <div>
          <h1 className="npc-lesson-title">{lessonTitle}</h1>
          <p className="npc-lesson-subtitle">
            {grade} • Standards: {standards.join(", ")}
          </p>
        </div>
      </div>

      <div className="npc-wordbank-row">
        <span className="npc-wordbank-label">word bank:</span>
        <div className="npc-wordbank-items">
          {wordBank.length > 0 ? (
            wordBank.map((word) => (
              <span key={word} className="npc-wordbank-item">
                {word}
              </span>
            ))
          ) : (
            <span className="npc-wordbank-placeholder">Add vocabulary here</span>
          )}
        </div>
      </div>

      <div className="npc-main-grid" role="table" aria-label="Cornell notes layout">
        <div className="npc-grid-header" role="rowgroup">
          <div className="npc-grid-cell npc-grid-label" role="columnheader">
            Main Ideas / Questions
          </div>
          <div className="npc-grid-cell npc-grid-label" role="columnheader">
            Notes / Examples
          </div>
        </div>

        <div className="npc-grid-body" role="rowgroup">
          <div className="npc-left-column" role="row">
            <ul className="npc-main-idea-list">
              {sections.map((sec, idx) => (
                <li key={idx} className="npc-main-idea-item">
                  <span className="npc-main-idea-index">{idx + 1}.</span>
                  <span className="npc-main-idea-text">{sec.prompt}</span>
                </li>
              ))}
              {sections.length === 0 && (
                <li className="npc-main-idea-item npc-main-idea-empty">
                  Add prompts for students to consider.
                </li>
              )}
            </ul>
          </div>

          <div className="npc-right-column" role="row">
            {sections.map((sec, idx) => (
              <section key={idx} className="npc-section">
                {sec.heading && (
                  <div className="npc-section-heading">
                    <span className="npc-section-index">{idx + 1}</span>
                    <span className="npc-section-title">{sec.heading}</span>
                  </div>
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
            {sections.length === 0 && (
              <div className="npc-section npc-section-empty">
                Start adding lesson content, definitions, or worked examples.
              </div>
            )}
          </div>
        </div>
      </div>

      <footer className="npc-reflection-row">
        <div className="npc-reflection-label">Summary / Reflection</div>
        <div className="npc-reflection-prompt">{reflectionPrompt}</div>
      </footer>
    </div>
  );
}

export default NotesPage;
