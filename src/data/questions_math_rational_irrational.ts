import { Question } from '../types';

export const mathRationalIrrationalQuestions: Question[] = [
  {
    id: 1,
    section: 'Math',
    question: 'Which of the following is irrational?',
    options: [
      '(√512 - √648) × √8',
      '√0.0064 - √0.0008',
      '√23 × 45 - 194',
      '(2 + √32) × (2 - √16√2)'
    ],
    correctAnswer: 'B',
    explanation: 'Let\'s check the options:\n\n(A) (√512 - √648) × √8 = (16√2 - 18√2) × 2√2 = (-2√2) × 2√2 = -4 × 2 = -8 (Rational)\n\n(B) √0.0064 - √0.0008 = 0.08 - 0.02√2 (Since √0.0008 = √(8/10000) = 2√2/100 = 0.02√2 which is irrational) (Irrational)\n\n(C) √23 × 45 - 194 = √1035 - 194 = √841 = 29 (Rational)\n\n(D) (2 + 4√2) × (2 - 4√2) = 2² - (4√2)² = 4 - 32 = -28 (Rational)'
  },
  {
    id: 2,
    section: 'Math',
    question: 'Which of the following is true for an irrational number?',
    options: [
      'The decimal form is terminating.',
      'The decimal form is non-terminating and non-repeating.',
      'None of these.',
      'The decimal form is non-zero.'
    ],
    correctAnswer: 'B',
    explanation: 'By definition, an irrational number cannot be expressed as a simple fraction, and its decimal representation is non-terminating (goes on forever) and non-repeating (does not establish a repeating pattern).'
  },
  {
    id: 3,
    section: 'Math',
    question: 'What type of number is π/2?',
    options: [
      'Rational',
      'Irrational',
      'Not real',
      'None of these'
    ],
    correctAnswer: 'B',
    explanation: 'π is an irrational number, and dividing an irrational number by a non-zero rational number (like 2) always results in an irrational number.'
  },
  {
    id: 4,
    section: 'Math',
    question: 'Which of the following is not irrational?',
    options: [
      '√10',
      '√24',
      '√35',
      '√121'
    ],
    correctAnswer: 'D',
    explanation: '√121 = 11, which is a perfect integer and hence a rational number. All other options are square roots of non-perfect squares, which are irrational.'
  },
  {
    id: 5,
    section: 'Math',
    question: 'An irrational number between √2 and √3 is',
    options: [
      '√2.5',
      '√6',
      '6 ¼',
      'None of these'
    ],
    correctAnswer: 'A',
    explanation: '√2 ≈ 1.414 and √3 ≈ 1.732.\n√2.5 ≈ 1.581, which lies between 1.414 and 1.732 and is irrational.'
  },
  {
    id: 6,
    section: 'Math',
    question: 'The product of two different irrational numbers can be:',
    options: [
      'rational',
      'irrational',
      'both of above',
      'none of above'
    ],
    correctAnswer: 'C',
    explanation: 'The product of two different irrational numbers can be rational (e.g., √2 × √8 = √16 = 4) or irrational (e.g., √2 × √3 = √6).'
  },
  {
    id: 7,
    section: 'Math',
    question: 'A student listed the following properties of Rational Numbers. Which one/ones is/are correct?\n(a) A rational number includes integers.\n(b) 0 is not a rational number.\n(c) All fractions are rational numbers.',
    options: [
      '(a) and (b)',
      '(b) and (c)',
      '(a) and (c)',
      'All of these'
    ],
    correctAnswer: 'C',
    explanation: 'Statement (a) is correct (integers are rational, e.g. 5 = 5/1).\nStatement (b) is incorrect because 0 is a rational number since 0 = 0/1.\nStatement (c) is correct because all fractions are of the form p/q where p, q are integers and q ≠ 0, hence they are rational.'
  },
  {
    id: 8,
    section: 'Math',
    question: 'The product of which of the following is a rational number?',
    options: [
      '√2 × √3',
      '√9 × √5',
      '√27 × √3',
      'None of these'
    ],
    correctAnswer: 'C',
    explanation: '√27 × √3 = √81 = 9, which is a rational number.'
  },
  {
    id: 9,
    section: 'Math',
    question: 'Which of the following is an irrational number?',
    options: [
      '√1.44',
      '-√0.64',
      '√7 - 8',
      '(√5 + 1)(√5 - 1)'
    ],
    correctAnswer: 'C',
    explanation: 'Let\'s evaluate each:\n(A) √1.44 = 1.2 (Rational)\n(B) -√0.64 = -0.8 (Rational)\n(C) √7 - 8 (Irrational, as √7 is irrational and subtracting 8 keeps it irrational)\n(D) (√5 + 1)(√5 - 1) = (√5)² - 1² = 5 - 1 = 4 (Rational)'
  },
  {
    id: 10,
    section: 'Math',
    question: 'Which of the following statement is incorrect?',
    options: [
      'Between any two rational numbers, there are infinite rational numbers.',
      'Multiplying the rational number -3/5 by 2 is same as taking two jumps of 3/5 to the left of origin on the number line.',
      'Any number of the form p/q, where p and q are integers, is a rational number.',
      'The number 0 is neither a positive nor a negative rational number.'
    ],
    correctAnswer: 'C',
    explanation: 'Statement (C) is incorrect because a rational number must have the condition q ≠ 0. If q = 0, the form p/q is undefined, not a rational number.'
  }
];
