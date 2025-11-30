// src/components/PrintableLayout.jsx
import React from "react";
import "./PrintableLayout.css";

function PrintableLayout({ title, grade, standards = [], children }) {
  return (
    <div className="pl-page">
      <header className="pl-meta-row">
        <div className="pl-meta-field">
          <span className="pl-meta-label">Name:</span>
        </div>
        <div className="pl-meta-field">
          <span className="pl-meta-label">Date:</span>
        </div>
        <div className="pl-meta-field">
          <span className="pl-meta-label">Class:</span>
        </div>
      </header>

      <div className="pl-title-row">
        <div>
          <h1 className="pl-lesson-title">{title}</h1>
          <p className="pl-lesson-subtitle">
            {grade} • Standards: {standards.join(", ")}
          </p>
        </div>
      </div>

      <div className="pl-content">{children}</div>
    </div>
  );
}

export default PrintableLayout;
