// src/App.jsx
import React, { useState } from "react";

import GradeGrid from "./components/GradeGrid";
import GradePage from "./components/GradePage";
import LessonGenerator from "./components/LessonGenerator";

import NotesPage from "./components/NotesPage";
import PracticePage from "./components/PracticePage";
import IndependentPage from "./components/IndependentPage";
import ExitTicketPage from "./components/ExitTicketPage";
import TaskCardsPage from "./components/TaskCardsPage";
import TeacherScriptPage from "./components/TeacherScriptPage";
import AnswerKeyPage from "./components/AnswerKeyPage";

import { curriculum } from "./data/curriculumData";
import { lessonMaterials } from "./data/lessonMaterials";

import "./App.css";

function App() {
  // app navigation
  const [page, setPage] = useState("grid"); // grid | grade | generator | print

  // grade + curriculum navigation
  const [selectedGradeId, setSelectedGradeId] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState("math");
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);

  // printing view state
  const [printView, setPrintView] = useState("notes"); // notes | practice | ...

  // -------- NAVIGATION ACTIONS --------
  const openGrade = (gradeId) => {
    setSelectedGradeId(gradeId);
    setSelectedUnit(null);
    setSelectedLesson(null);
    setPage("grade");
  };

  const openLessonGenerator = (lesson) => {
    setSelectedLesson(lesson);
    setPage("generator");
  };

  const openPrintView = () => {
    setPage("print");
  };

  const goBackToGrade = () => setPage("grade");
  const goBackToGrid = () => setPage("grid");

  // -------- BUILD LESSON KEY --------
  const buildLessonKey = () => {
    if (!selectedGradeId || !selectedLesson || !selectedUnit) return null;

    const grade = Number(selectedGradeId);
    const subjectKey = selectedSubject;
    const unitSlug = selectedUnit.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-");

    const lessonSlug = selectedLesson.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-");

    return `${grade}-${subjectKey}-${unitSlug}-${lessonSlug}`;
  };

  const lessonKey = buildLessonKey();
  const lesson = lessonMaterials[lessonKey];

  // -------- PAGE RENDERING --------
  if (page === "grid") {
    return <GradeGrid curriculum={curriculum} onGradeClick={openGrade} />;
  }

  if (page === "grade") {
    return (
      <GradePage
        gradeId={selectedGradeId}
        grade={curriculum[selectedGradeId]}
        selectedSubject={selectedSubject}
        onSubjectChange={setSelectedSubject}
        onBack={goBackToGrid}
        onUnitClick={(unit) => setSelectedUnit(unit)}
        onLessonClick={openLessonGenerator}
        selectedUnit={selectedUnit}
      />
    );
  }

  if (page === "generator") {
    return (
      <LessonGenerator
        gradeId={selectedGradeId}
        grade={curriculum[selectedGradeId]}
        subjectKey={selectedSubject}
        unit={selectedUnit}
        lesson={selectedLesson}
        onBack={goBackToGrade}
        onPrint={openPrintView}
      />
    );
  }

  if (page === "print") {
    if (!lesson) {
      return <h2 style={{ padding: 40 }}>Lesson not found.</h2>;
    }

    return (
      <div className="app-root">
        <div className="app-toolbar">
          <button className="app-print-btn" onClick={() => window.print()}>
            Print / Download PDF
          </button>

          <button
            className={printView === "notes" ? "primary-button" : "material-chip"}
            onClick={() => setPrintView("notes")}
          >
            Notes
          </button>

          <button
            className={printView === "practice" ? "primary-button" : "material-chip"}
            onClick={() => setPrintView("practice")}
          >
            Practice
          </button>

          <button
            className={printView === "independent" ? "primary-button" : "material-chip"}
            onClick={() => setPrintView("independent")}
          >
            Independent
          </button>

          <button
            className={printView === "exitTicket" ? "primary-button" : "material-chip"}
            onClick={() => setPrintView("exitTicket")}
          >
            Exit Ticket
          </button>

          <button
            className={printView === "taskCards" ? "primary-button" : "material-chip"}
            onClick={() => setPrintView("taskCards")}
          >
            Task Cards
          </button>

          <button
            className={printView === "teacherScript" ? "primary-button" : "material-chip"}
            onClick={() => setPrintView("teacherScript")}
          >
            Teacher Script
          </button>

          <button
            className={printView === "answerKey" ? "primary-button" : "material-chip"}
            onClick={() => setPrintView("answerKey")}
          >
            Answer Key
          </button>
        </div>

        <div className="app-page-wrapper">
          {printView === "notes" && <NotesPage {...lesson.notes} />}
          {printView === "practice" && <PracticePage {...lesson.practice} />}
          {printView === "independent" && (
            <IndependentPage {...lesson.independent} />
          )}
          {printView === "exitTicket" && (
            <ExitTicketPage {...lesson.exitTicket} />
          )}
          {printView === "taskCards" && <TaskCardsPage {...lesson.taskCards} />}
          {printView === "teacherScript" && (
            <TeacherScriptPage {...lesson.teacherScript} />
          )}
          {printView === "answerKey" &&
            (lesson.answerKey ? (
              <AnswerKeyPage {...lesson.answerKey} />
            ) : (
              <div className="app-placeholder">
                Answer key coming soon for this lesson.
              </div>
            ))}
        </div>
      </div>
    );
  }

  return null;
}

export default App;
