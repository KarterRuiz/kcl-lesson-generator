// src/components/LessonGenerator.jsx
import React, { useState, useMemo } from "react";
import { MATERIAL_TYPES, buildPromptForLesson } from "../data/promptTemplates";

function LessonGenerator({ gradeId, grade, subjectKey, unit, lesson, onBack }) {
  // Guard against missing data so the app doesn't crash
  if (!grade || !subjectKey || !unit || !lesson) {
    return (
      <section>
        <button className="link-button" onClick={onBack}>
          ← Back to grades
        </button>
        <p>Lesson data is missing. Please go back and choose a lesson again.</p>
      </section>
    );
  }

  const subject = grade.subjects?.[subjectKey];

  const [selectedTypes, setSelectedTypes] = useState(
    MATERIAL_TYPES.map((m) => m.id)
  );

  const handleToggleType = (id) => {
    setSelectedTypes((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  const promptText = useMemo(
    () =>
      buildPromptForLesson({
        gradeId,
        gradeLabel: grade.label,
        subjectKey,
        subjectLabel: subject?.label ?? subjectKey.toUpperCase(),
        unitTitle: unit.title,
        lessonTitle: lesson.title,
        standards: lesson.standards || [],
        selectedTypes,
      }),
    [gradeId, grade, subject, subjectKey, unit, lesson, selectedTypes]
  );

  return (
    <section>
      <button className="link-button" onClick={onBack}>
        ← Back to Grade {gradeId}
      </button>

      <h2 className="section-title">KCL Lesson Generator</h2>
      <p className="section-subtitle">
        Grade {gradeId} • {subject?.label ?? subjectKey.toUpperCase()} •{" "}
        {unit.title}
      </p>

      <div className="lesson-header-card">
        <div className="lesson-header-main">{lesson.title}</div>
        <div className="lesson-header-standards">
          Standards: {(lesson.standards || []).join(", ")}
        </div>
      </div>

      <div className="material-section">
        <h3>Materials to Generate</h3>
        <p className="helper-text">
          Select the resource types you want the AI to create for this lesson.
        </p>
        <div className="material-grid">
          {MATERIAL_TYPES.map((type) => {
            const active = selectedTypes.includes(type.id);
            return (
              <button
                key={type.id}
                type="button"
                className={`material-chip ${
                  active ? "material-chip--active" : ""
                }`}
                onClick={() => handleToggleType(type.id)}
              >
                <span className="material-chip-label">{type.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="prompt-section">
        <h3>Generated KCL Prompt</h3>
        <p className="helper-text">
          Copy this prompt into ChatGPT/Claude to generate your lesson
          materials, then paste the output into your KCL Canva templates.
        </p>
        <textarea
          className="prompt-textarea"
          value={promptText}
          readOnly
          rows={14}
        />
      </div>
    </section>
  );
}

export default LessonGenerator;
