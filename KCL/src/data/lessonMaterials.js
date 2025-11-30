// src/data/lessonMaterials.js
// All printable template data lives here, keyed by a lesson key string.
// Pattern: "<grade>-<subject>-<unitSlug>-<lessonSlug>"

export const lessonMaterials = {
  // -------------------------------------------
  // GRADE 3 • MATH • UNIT 1 • LESSON 1
  // What is Place Value?
  // -------------------------------------------
  "3-math-place-value-what-is-place-value": {
    notes: {
      lessonTitle: "What is Place Value?",
      grade: "Grade 3",
      standards: ["3.NBT.A.1"],
      wordBank: ["digit", "place", "value", "ones", "tens", "hundreds", "thousands"],
      sections: [
        {
          prompt: "What is place value?",
          heading: "What is Place Value?",
          body: "Place value tells us how much a digit is worth based on where it is in the number.",
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
      instructions: "Solve each problem. Show your thinking using models, numbers, or words.",
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
          subtitle: "Use >, <, or = to compare. Then explain how you know.",
          problems: ["345 ___ 354", "708 ___ 780", "629 ___ 692", "530 ___ 503"],
        },
      ],
    },

    independent: {
      lessonTitle: "What is Place Value?",
      grade: "Grade 3",
      standards: ["3.NBT.A.1"],
      directions: "Solve each problem. Use place value and expanded form to show your thinking.",
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
      directions: "Answer each question. Use place value to explain your thinking.",
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
          prompt: "Write three different numbers that have a 6 in the tens place.",
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
          prompt: "Write a number that is 100 more than 367 and a number that is 10 less than 367.",
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

    answerKey: {
      lessonTitle: "What is Place Value?",
      grade: "Grade 3",
      standards: ["3.NBT.A.1"],
      items: [
        {
          label: "Notes / Key Ideas",
          answers: [
            "Place value tells how much a digit is worth based on its place.",
            "Expanded form shows a number as the sum of each digit’s value.",
          ],
        },
        {
          label: "Practice – Warm-Up",
          answers: [
            "345: 3 hundreds = 300",
            "729: 2 tens = 20",
            "681: 8 tens = 80",
            "403: 4 hundreds = 400",
          ],
        },
        {
          label: "Compare & Explain",
          answers: [
            "345 < 354 because 40 tens is less than 50 tens.",
            "708 > 780 is false; 780 is greater because it has more tens.",
            "629 < 692 since the tens place (2 vs. 9) decides after equal hundreds.",
            "530 > 503 because 3 tens is greater than 0 tens when hundreds match.",
          ],
        },
      ],
    },
  },

  // -------------------------------------------
  // GRADE 3 • MATH • UNIT 1 • LESSON 2
  // Read & Write Numbers in Multiple Forms
  // -------------------------------------------
  "3-math-place-value-read-write-numbers": {
    notes: {
      lessonTitle: "Read & Write Numbers in Multiple Forms",
      grade: "Grade 3",
      standards: ["3.NBT.A.2"],
      wordBank: [
        "standard form",
        "expanded form",
        "word form",
        "base-ten blocks",
        "digit",
        "hundreds",
        "tens",
        "ones",
      ],
      sections: [
        {
          prompt: "How can I show the same number in different ways?",
          heading: "Three Forms of a Number",
          body:
            "We can show a number in standard form (digits), expanded form (as a sum), and word form (written in words).",
          examples: [
            "Standard form: 324",
            "Expanded form: 300 + 20 + 4",
            "Word form: three hundred twenty-four",
          ],
        },
        {
          prompt: "How does place value help us read numbers?",
          heading: "Using Place Value to Read Numbers",
          body:
            "Each digit has a value based on its place. We read from left to right using hundreds, tens, and ones.",
          examples: ["571 = 5 hundreds, 7 tens, 1 one"],
        },
      ],
      reflectionPrompt:
        "Choose a three-digit number and write it in standard form, expanded form, and word form.",
    },

    practice: {
      lessonTitle: "Read & Write Numbers in Multiple Forms",
      grade: "Grade 3",
      standards: ["3.NBT.A.2"],
      instructions:
        "Write each number in the form described. Show your thinking using place value.",
      sections: [
        {
          title: "Part A – Standard to Expanded",
          subtitle: "Write each number in expanded form.",
          problems: ["1. 426", "2. 309", "3. 781", "4. 650"],
        },
        {
          title: "Part B – Expanded to Standard",
          subtitle: "Write each number in standard form.",
          problems: [
            "5. 300 + 40 + 2",
            "6. 500 + 6",
            "7. 200 + 80 + 9",
            "8. 700 + 10 + 3",
          ],
        },
        {
          title: "Part C – Word Form",
          subtitle: "Write each number in word form.",
          problems: ["9. 518", "10. 204"],
        },
      ],
    },

    independent: {
      lessonTitle: "Read & Write Numbers in Multiple Forms",
      grade: "Grade 3",
      standards: ["3.NBT.A.2"],
      directions:
        "Complete each problem. Use place value language to explain your thinking.",
      problems: [
        "1. Write 643 in expanded form and in word form.",
        "2. A number is written as 500 + 20 + 7. What is the number in standard form and word form?",
        "3. Write a number that has 3 hundreds, 0 tens, and 9 ones. Show it in all three forms.",
        "4. Explain how you know that 400 + 60 + 2 and 462 represent the same number.",
        "5. Create your own three-digit number and write it in standard, expanded, and word form.",
      ],
    },

    exitTicket: {
      lessonTitle: "Read & Write Numbers in Multiple Forms",
      grade: "Grade 3",
      standards: ["3.NBT.A.2"],
      directions:
        "Answer each question. Show the number in the form described.",
      problems: [
        "1. Write 358 in expanded form.",
        "2. Write 702 in word form.",
        "3. A number is written as 400 + 50 + 9. What is the number in standard form?",
      ],
    },

    taskCards: {
      lessonTitle: "Read & Write Numbers in Multiple Forms",
      grade: "Grade 3",
      standards: ["3.NBT.A.2"],
      cards: [
        {
          label: "Card 1",
          prompt: "Write 639 in standard form, expanded form, and word form.",
        },
        {
          label: "Card 2",
          prompt: "A number is 300 + 8. Write the number in standard form and word form.",
        },
        {
          label: "Card 3",
          prompt:
            "Create a three-digit number where the digit in the tens place is 0. Write it in all three forms.",
        },
        {
          label: "Card 4",
          prompt:
            "Your friend wrote “four hundred twenty-one.” Show this number in standard and expanded form.",
        },
      ],
    },

    teacherScript: {
      lessonTitle: "Read & Write Numbers in Multiple Forms",
      grade: "Grade 3",
      standards: ["3.NBT.A.2"],
      objective:
        "Students will read and write three-digit numbers in standard form, expanded form, and word form using place value understanding.",
      materials: [
        "Base-ten blocks or place value disks",
        "Place value chart",
        "Student notes page",
        "Practice and independent pages",
        "Exit ticket",
      ],
      iDo: [
        "Show 324 with base-ten blocks. Ask: “What do you notice?”",
        "Write 324 and model how to read it: “three hundred twenty-four.”",
        "Write 324 in expanded form: 300 + 20 + 4.",
        "Label each part using hundreds, tens, and ones.",
      ],
      weDo: [
        "Build 571 together with base-ten blocks or a place value chart.",
        "Write 571 in standard form, expanded form, and word form as a class.",
        "Have students turn and talk: How does place value help you read this number?",
      ],
      youDo: [
        "Students complete the practice page, moving between standard, expanded, and word forms.",
        "Circulate and listen for correct use of hundreds, tens, and ones language.",
      ],
      exitTicketNotes: [
        "Have students complete the exit ticket independently.",
        "Sort responses into: solid, almost there, and needs more support with forms.",
      ],
      differentiation: [
        "Provide number cards and a place value chart for students who need concrete support.",
        "For a challenge, ask students to write a number in two different ways using expanded form.",
        "Offer sentence stems for word form, such as “___ hundred ___-___.”",
      ],
    },

    answerKey: {
      lessonTitle: "Read & Write Numbers in Multiple Forms",
      grade: "Grade 3",
      standards: ["3.NBT.A.2"],
      items: [
        {
          label: "Notes / Key Ideas",
          answers: [
            "Standard form uses digits, expanded form shows the value of each place, and word form uses words.",
            "Place value language (hundreds, tens, ones) helps translate between forms.",
          ],
        },
        {
          label: "Practice – Part A",
          answers: ["426 = 400 + 20 + 6", "309 = 300 + 0 + 9", "781 = 700 + 80 + 1", "650 = 600 + 50 + 0"],
        },
        {
          label: "Practice – Part B",
          answers: ["342", "506", "289", "713"],
        },
        {
          label: "Practice – Part C",
          answers: ["five hundred eighteen", "two hundred four"],
        },
        {
          label: "Exit Ticket",
          answers: ["358 = 300 + 50 + 8", "seven hundred two", "459"],
        },
      ],
    },
  },
};
