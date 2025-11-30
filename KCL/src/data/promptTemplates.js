export const MATERIAL_TYPES = [
  { id: "notes", label: "Notes Page" },
  { id: "practice", label: "Practice Worksheet" },
  { id: "exitTickets", label: "Exit Tickets (4 per page)" },
  { id: "taskCards", label: "Task Cards (4 per page)" },
  { id: "script", label: "Teacher Script" },
  { id: "answerKey", label: "Answer Key" },
];

export function buildPromptForLesson({
  gradeId,
  gradeLabel,
  subjectKey,
  subjectLabel,
  unitTitle,
  lessonTitle,
  standards,
  selectedTypes,
}) {
  const materialsText = MATERIAL_TYPES.filter((m) =>
    selectedTypes.includes(m.id)
  )
    .map((m) => m.label)
    .join(", ");

  const baseIntro = `You are generating materials for the Karter Content Lab (KCL), a K–8 teacher-facing curriculum system.

Create resources for Grade ${gradeId} (${gradeLabel}), subject: ${subjectLabel}, unit: "${unitTitle}", lesson: "${lessonTitle}". Standards: ${standards.join(
    ", "
  )}.`;

  const lessonStructure =
    subjectKey === "math"
      ? `Follow the KCL math lesson structure:
1. Hook
2. "What is ${lessonTitle}?" in student-friendly language
3. Visual models when helpful (number lines, arrays, diagrams, etc.)
4. Worked examples from easy → medium → challenge
5. Teacher-guided practice
6. Independent practice
7. Real-life application
8. Word bank
9. Exit question checking understanding of the main idea.`
      : `Follow the KCL ELA lesson structure:
1. Hook
2. "What is ${lessonTitle}?" in student-friendly language
3. Short mentor text or model sentence
4. Teacher modeling / annotation
5. Guided practice (We Do)
6. Independent practice (You Do)
7. Reflection or discussion prompt
8. Word bank with 4–8 key terms
9. Exit question that connects back to the skill.`;

  const extraMaterials = [];

  if (selectedTypes.includes("notes")) {
    extraMaterials.push(
      `• A one-page Notes layout: title, essential question, "What is it?" box, 2–3 quick examples, a small visual area, a word bank, and a reflection sentence starter.`
    );
  }

  if (selectedTypes.includes("practice")) {
    extraMaterials.push(
      `• An independent Practice Worksheet: 10–14 mixed problems, 1–2 worked examples at the top, 1 challenge problem, 1 real-world word problem, and 1 reflection question.`
    );
  }

  if (selectedTypes.includes("exitTickets")) {
    extraMaterials.push(
      `• 4 short Exit Ticket prompts: one basic, one medium, one higher-order, and one real-life / explanation question.`
    );
  }

  if (selectedTypes.includes("taskCards")) {
    extraMaterials.push(
      `• 4 Task Cards: Card 1 easy, Card 2 medium, Card 3 word problem, Card 4 challenge. Keep them short and student-friendly.`
    );
  }

  if (selectedTypes.includes("script")) {
    extraMaterials.push(
      `• A Teacher Script in natural teacher language: Hook, I Do, We Do, You Do, quick CFU (check for understanding), and a closing line that reconnects to the learning target.`
    );
  }

  if (selectedTypes.includes("answerKey")) {
    extraMaterials.push(
      `• A simple Answer Key listing correct answers for all practice problems, exit tickets, and task cards.`
    );
  }

  const materialsBlock =
    extraMaterials.length > 0
      ? `\n\nGenerate the following materials in the KCL style (${materialsText}):\n${extraMaterials.join(
          "\n"
        )}`
      : "";

  const closing = `Write everything clearly for 3rd-grade students and teachers. Keep directions short, positive, and kid-friendly. Do not format as HTML—just plain text sections that can be pasted into templates.`;

  return `${baseIntro}\n\n${lessonStructure}${materialsBlock}\n\n${closing}`;
}