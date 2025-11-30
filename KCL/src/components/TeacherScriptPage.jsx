// src/components/TeacherScriptPage.jsx
import React from "react";
import "./TeacherScriptPage.css";

/**
 * KCL Teacher Script Page
 * ---------------------------------
 * Scripted lesson outline in a print-ready format that mirrors
 * your “I Do / We Do / You Do / Exit Ticket / Notes” template.
 */

function TeacherScriptPage({
  lessonTitle = "What is Place Value?",
  grade = "Grade 3",
  standards = ["3.NBT.A.1"],
  objective = "",
  materials = [],
  iDo = [],
  weDo = [],
  youDo = [],
  exitTicketNotes = [],
  differentiation = [],
}) {
  const renderList = (items) =>
    items && items.length ? (
      <ul className="ts-bullet-list">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    ) : (
      <div className="ts-empty">—</div>
    );

  return (
    <div className="ts-page">
      {/* Header Row */}
      <header className="ts-header">
        <div className="ts-header-main">
          <h1 className="ts-title">Teacher Script – {lessonTitle}</h1>
          <p className="ts-subtitle">
            {grade} • Standards: {standards.join(", ")}
          </p>
        </div>
      </header>

      {/* Objective + Materials */}
      <section className="ts-row ts-row--two">
        <div className="ts-box">
          <div className="ts-box-title">Lesson Objective</div>
          <div className="ts-box-body">
            {objective || (
              <span className="ts-placeholder">
                State the learning objective in student-friendly language.
              </span>
            )}
          </div>
        </div>

        <div className="ts-box">
          <div className="ts-box-title">Materials</div>
          <div className="ts-box-body">
            {materials && materials.length ? (
              <ul className="ts-bullet-list">
                {materials.map((m, idx) => (
                  <li key={idx}>{m}</li>
                ))}
              </ul>
            ) : (
              <span className="ts-placeholder">
                List manipulatives, handouts, tech, etc.
              </span>
            )}
          </div>
        </div>
      </section>

      {/* I Do / We Do / You Do */}
      <section className="ts-row ts-row--three">
        <div className="ts-box">
          <div className="ts-box-label ts-box-label--ido">I Do</div>
          <div className="ts-box-body">{renderList(iDo)}</div>
        </div>

        <div className="ts-box">
          <div className="ts-box-label ts-box-label--wedo">We Do</div>
          <div className="ts-box-body">{renderList(weDo)}</div>
        </div>

        <div className="ts-box">
          <div className="ts-box-label ts-box-label--youdo">You Do</div>
          <div className="ts-box-body">{renderList(youDo)}</div>
        </div>
      </section>

      {/* Exit Ticket / Notes + Differentiation */}
      <section className="ts-row ts-row--two">
        <div className="ts-box">
          <div className="ts-box-title">Exit Ticket & Notes</div>
          <div className="ts-box-body">{renderList(exitTicketNotes)}</div>
        </div>

        <div className="ts-box">
          <div className="ts-box-title">Differentiation & Teacher Notes</div>
          <div className="ts-box-body">{renderList(differentiation)}</div>
        </div>
      </section>
    </div>
  );
}

export default TeacherScriptPage;
