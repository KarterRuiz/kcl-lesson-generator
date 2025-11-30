// src/data/g3MathMaterials.js
// All Grade 3 Math lesson materials live here for now.

export const g3MathMaterials = {
  "3-math-place-value-what-is-place-value": {
    notes: {
      lessonTitle: "What is Place Value?",
      grade: "Grade 3",
      standards: ["3.NBT.A.1"],
      wordBank: [
        "digit",
        "place",
        "value",
        "ones",
        "tens",
        "hundreds",
        "thousands",
      ],
      sections: [
        {
          prompt: "What is place value?",
          heading: "What is Place Value?",
          body:
            "Place value tells us how much a digit is worth based on where it is in the number.",
          examples: ["345 → 3 hundreds, 4 tens, 5 ones"],
        },
        {
          prompt: "How can I break apart a number?",
          heading: "Expanded Form",
          body: "We can show a number as the sum of each digit’s value.",
          examples: ["345 = 300 + 40 + 5"],
        },
      ],
      reflectionPrompt:
        "In your own words, explain what place value means and give one example.",
    },

    practice: {
      lessonTitle: "What is Place Value?",
      grade: "Grade 3",
      standards: ["3.NBT.A.1"],
      instructions:
        "Solve each problem. Show your thinking using models, numbers, or words.",
      sections: [
        {
          title: "Warm-Up",
          subtitle: "Write the value of the underlined digit.",
          problems: [
            "3 4 5   (the 3 is underlined)",
            "7 2 9   (the 2 is underlined)",
            "6 8 1   (the 8 is underlined)",
            "4 0 3   (the 4 is underlined)",
          ],
        },
        {
          title: "Compare & Explain",
          subtitle:
            "Use >, <, or = to compare. Then explain how you know.",
          problems: [
            "345 ___ 354",
            "708 ___ 780",
            "629 ___ 692",
            "530 ___ 503",
          ],
        },
      ],
    },

    independent: {
      lessonTitle: "What is Place Value?",
      grade: "Grade 3",
      standards: ["3.NBT.A.1"],
      directions:
        "Solve each problem. Use place value and expanded form to show your thinking.",
      problems: [
        "Write 4 different numbers that have a 7 in the tens place.",
        "Write 382 in expanded form. Then draw a quick sketch to show the hundreds, tens, and ones.",
        "Maria says 540 has 4 tens. Is she correct? Explain how you know.",
        "Write a number that is 100 more than 345 and a number that is 100 less than 345.",
        "Which number has a 6 in the hundreds place: 462 or 624? Explain your thinking.",
      ],
    },

    exitTicket: {
      lessonTitle: "What is Place Value?",
      grade: "Grade 3",
      standards: ["3.NBT.A.1"],
      directions:
        "Answer each question. Use place value to explain your thinking.",
      problems: [
        "Write 342 in expanded form. How do you know your answer is correct?",
        "Circle the digit that shows the tens place in 579. Explain what that digit means.",
        "Which number has a greater value: 408 or 480? Explain how you know.",
      ],
    },

    taskCards: {
      lessonTitle: "What is Place Value?",
      grade: "Grade 3",
      standards: ["3.NBT.A.1"],
      cards: [
        {
          label: "Card 1",
          prompt:
            "Write three different numbers that have a 6 in the tens place.",
        },
        {
          label: "Card 2",
          prompt:
            "Draw a quick sketch to show 241 using hundreds, tens, and ones. Then write it in expanded form.",
        },
        {
          label: "Card 3",
          prompt:
            "Which number has a 5 in the hundreds place: 528 or 852? Explain how you know.",
        },
        {
          label: "Card 4",
          prompt:
            "Write a number that is 100 more than 367 and a number that is 10 less than 367.",
        },
      ],
    },

    teacherScript: {
      lessonTitle: "What is Place Value?",
      grade: "Grade 3",
      standards: ["3.NBT.A.1"],
      objective:
        "Students will explain that each digit in a three-digit number represents hundreds, tens, or ones, and use place value to read, write, and compare numbers.",
      materials: [
        "Base-ten blocks or place value disks",
        "Whiteboards and markers",
        "Student notes page",
        "Practice page and independent page",
        "Exit ticket",
      ],
      iDo: [
        "Show a three-digit number (e.g., 345) with base-ten blocks or disks.",
        "Think aloud: “This digit is in the hundreds place, so it shows how many hundreds there are.”",
        "Write 345 on the board and label each digit with H, T, and O.",
        "Model writing 345 in expanded form: 300 + 40 + 5.",
      ],
      weDo: [
        "Choose a new number (e.g., 278) and ask students to build it with you.",
        "Ask: “Which digit is in the tens place? How many tens is that?”",
        "Together, write the number in expanded form and label hundreds, tens, and ones.",
      ],
      youDo: [
        "Students complete the guided practice section on the Notes/Practice pages.",
        "Circulate and listen for accurate use of the words hundreds, tens, and ones.",
        "Invite 1–2 students to share how they broke apart a number.",
      ],
      exitTicketNotes: [
        "Have students complete the exit ticket independently.",
        "Collect quickly and sort into: secure, almost there, and needs support.",
      ],
      differentiation: [
        "For students needing support, provide number cards and place value mats.",
        "For students ready for a challenge, ask them to create their own number and write two different explanations using place value.",
        "Pre-teach or review the vocabulary digit, place, and value as needed.",
      ],
    },
  },
};
