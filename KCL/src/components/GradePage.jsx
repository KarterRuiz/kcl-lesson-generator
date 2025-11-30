import React from "react";

function GradePage({
  gradeId,
  grade,
  selectedSubject,
  onSubjectChange,
  onBack,
  onUnitClick,
  onLessonClick,
  selectedUnit,
}) {
  const subjectKeys = Object.keys(grade.subjects);
  const currentSubject = grade.subjects[selectedSubject];

  return (
    <section>
      <button className="link-button" onClick={onBack}>
        ← Back to Grades
      </button>

      <h2 className="section-title">Grade {gradeId} Curriculum</h2>
      <p className="section-subtitle">
        Click a lesson to open the KCL Lesson Generator.
      </p>

      <div className="subject-tabs">
        {subjectKeys.map((key) => (
          <button
            key={key}
            className={`subject-tab ${
              key === selectedSubject ? "subject-tab--active" : ""
            }`}
            onClick={() => onSubjectChange(key)}
          >
            {grade.subjects[key].label}
          </button>
        ))}
      </div>

      <div className="unit-list">
        {currentSubject.units.map((unit) => {
          const isOpen = selectedUnit && unit.id === selectedUnit.id;

          return (
            <div key={unit.id} className="unit-card">
              <button
                className="unit-header"
                onClick={() => onUnitClick(isOpen ? null : unit)}
              >
                <div>
                  <div className="unit-title">{unit.title}</div>
                  <div className="unit-meta">
                    Standards: {unit.standards.join(", ")} •{" "}
                    {unit.lessons.length} lessons
                  </div>
                </div>
                <span className="unit-arrow">{isOpen ? "▾" : "▸"}</span>
              </button>

              {isOpen && (
                <ul className="lesson-list">
                  {unit.lessons.map((lesson) => (
                    <li key={lesson.id} className="lesson-item">
                      <div>
                        <div className="lesson-title">{lesson.title}</div>
                        <div className="lesson-standards">
                          {lesson.standards.join(", ")}
                        </div>
                      </div>
                      <button
                        className="primary-button"
                        onClick={() => onLessonClick(lesson)}
                      >
                        Generate Lesson
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default GradePage;