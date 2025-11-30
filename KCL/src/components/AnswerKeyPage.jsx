// src/components/AnswerKeyPage.jsx
import React from "react";
import PrintableLayout from "./PrintableLayout";
import "./AnswerKeyPage.css";

function AnswerKeyPage({ lessonTitle, grade, standards = [], items = [] }) {
  const hasItems = Array.isArray(items) && items.length > 0;

  return (
    <PrintableLayout title={lessonTitle} grade={grade} standards={standards}>
      <div className="ak-wrapper">
        <header className="ak-header">
          <h1 className="ak-title">Answer Key</h1>
          <p className="ak-meta">{lessonTitle}</p>
        </header>

        {hasItems ? (
          <div className="ak-items">
            {items.map((item, idx) => (
              <section key={idx} className="ak-section">
                <h2 className="ak-section-title">{item.label}</h2>
                <ol className="ak-answers">
                  {(item.answers || []).map((answer, i) => (
                    <li key={i}>{answer}</li>
                  ))}
                </ol>
              </section>
            ))}
          </div>
        ) : (
          <p className="ak-placeholder">Answer key coming soon for this lesson.</p>
        )}
      </div>
    </PrintableLayout>
  );
}

export default AnswerKeyPage;
