export const curriculum = {
  3: {
    label: "Grade 3",
    subjects: {
      math: {
        key: "math",
        label: "Math",
        units: [
          {
            id: "g3m-u1",
            title: "Place Value & Number Sense",
            standards: ["3.NBT.A.1", "3.NBT.A.2"],
            lessons: [
              {
                id: "g3m-u1-l1",
                title: "What is Place Value?",
                standards: ["3.NBT.A.1"],
              },
              
              {
                id: "g3m-u1-l2",
                title: "Read & Write Numbers in Multiple Forms",
                standards: ["3.NBT.A.2"],
              },
              {
                id: "g3m-u1-l3",
                title: "Compare Numbers (>, <, =)",
                standards: ["3.NBT.A.1"],
              },
              {
                id: "g3m-u1-l4",
                title: "Round to Nearest 10",
                standards: ["3.NBT.A.1"],
              },
              {
                id: "g3m-u1-l5",
                title: "Round to Nearest 100",
                standards: ["3.NBT.A.1"],
              },
              {
                id: "g3m-u1-l6",
                title: "Real-Life Place Value",
                standards: ["3.NBT.A.1", "3.NBT.A.2"],
              },
            ],
          },
          {
            id: "g3m-u2",
            title: "Multiplication Foundations",
            standards: ["3.OA.A.1", "3.OA.A.3", "3.OA.B.5", "3.OA.C.7"],
            lessons: [
              { id: "g3m-u2-l1", title: "Multiplication as Equal Groups", standards: ["3.OA.A.1"] },
              { id: "g3m-u2-l2", title: "Arrays & Repeated Addition", standards: ["3.OA.A.1", "3.OA.A.3"] },
              { id: "g3m-u2-l3", title: "Multiplication on a Number Line", standards: ["3.OA.A.1"] },
              { id: "g3m-u2-l4", title: "Properties of Multiplication", standards: ["3.OA.B.5"] },
              { id: "g3m-u2-l5", title: "Multiplication Facts 0–5", standards: ["3.OA.C.7"] },
              { id: "g3m-u2-l6", title: "Multiplication Facts 6–10", standards: ["3.OA.C.7"] },
              { id: "g3m-u2-l7", title: "Multiplication Word Problems", standards: ["3.OA.A.3"] },
            ],
          },
        ],
      },
      ela: {
        key: "ela",
        label: "ELA",
        units: [
          {
            id: "g3e-u1",
            title: "Reading Foundations & Comprehension",
            standards: ["RL.3.1", "RL.3.2", "RI.3.2"],
            lessons: [
              {
                id: "g3e-u1-l1",
                title: "Asking & Answering Questions",
                standards: ["RL.3.1", "RI.3.1"],
              },
              {
                id: "g3e-u1-l2",
                title: "Main Idea & Supporting Details",
                standards: ["RI.3.2"],
              },
              {
                id: "g3e-u1-l3",
                title: "Summarizing with SWBST",
                standards: ["RL.3.2"],
              },
            ],
          },
        ],
      },
    },
  },

  // Stubs for other grades – fill later
  2: { label: "Grade 2", subjects: { math: { key: "math", label: "Math", units: [] }, ela: { key: "ela", label: "ELA", units: [] } } },
  4: { label: "Grade 4", subjects: { math: { key: "math", label: "Math", units: [] }, ela: { key: "ela", label: "ELA", units: [] } } },
  5: { label: "Grade 5", subjects: { math: { key: "math", label: "Math", units: [] }, ela: { key: "ela", label: "ELA", units: [] } } },
  1: { label: "Grade 1", subjects: { math: { key: "math", label: "Math", units: [] }, ela: { key: "ela", label: "ELA", units: [] } } },
  6: { label: "Grade 6", subjects: { math: { key: "math", label: "Math", units: [] }, ela: { key: "ela", label: "ELA", units: [] } } },
  7: { label: "Grade 7", subjects: { math: { key: "math", label: "Math", units: [] }, ela: { key: "ela", label: "ELA", units: [] } } },
  8: { label: "Grade 8", subjects: { math: { key: "math", label: "Math", units: [] }, ela: { key: "ela", label: "ELA", units: [] } } },
  K: { label: "Kindergarten", subjects: { math: { key: "math", label: "Math", units: [] }, ela: { key: "ela", label: "ELA", units: [] } } },
};