import React from "react";

function GradeGrid({ curriculum, onGradeClick }) {
  const entries = Object.entries(curriculum).sort(
    ([aKey], [bKey]) => Number(aKey) - Number(bKey)
  );

  return (
    <section>
      <h2 className="section-title">Choose a Grade</h2>
      <p className="section-subtitle">
        Click a grade to explore its Math and ELA curriculum.
      </p>
      <div className="grade-grid">
        {entries.map(([gradeId, grade]) => (
          <button
            key={gradeId}
            className="grade-card"
            onClick={() => onGradeClick(gradeId)}
          >
            <div className="grade-label">Grade {gradeId}</div>
            <div className="grade-subjects">Math • ELA</div>
          </button>
        ))}
      </div>
    </section>
  );
}

export default GradeGrid;