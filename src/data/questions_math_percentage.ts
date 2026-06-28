import { Question } from '../types';

export const mathPercentageQuestions: Question[] = [
  {
    id: 1,
    section: 'Math',
    question: '40% of a number is 750. What is 60% of that number?',
    options: ['1000', '1125', '1250', '1375'],
    correctAnswer: 'B',
    explanation: '40% of x = 750\nx = 750 * 100 / 40 = 1875\n60% of 1875 = 1875 * 0.6 = 1125\n\nসংক্ষেপে:\n60% এর মান = 750 × (60 / 40) = 750 × 1.5 = 1125'
  },
  {
    id: 2,
    section: 'Math',
    question: '15% of 150% of ? = 45% of 45',
    options: ['80', '85', '90', '95'],
    correctAnswer: 'C',
    explanation: 'ধরি, অজানা সংখ্যাটি x\n0.15 × 1.50 × x = 0.45 × 45\n0.225 × x = 20.25\nx = 20.25 / 0.225 = 90'
  },
  {
    id: 3,
    section: 'Math',
    question: 'What is the value of 10% of 110% of 110?',
    options: ['11', '12.1', '13.2', '14.1'],
    correctAnswer: 'B',
    explanation: '10% of (110% of 110)\n= 0.10 × (1.10 × 110)\n= 0.10 × 121 = 12.1'
  },
  {
    id: 4,
    section: 'Math',
    question: 'Simplify the following: 30% of [{(820% of 40) - 28}] % of 600',
    options: ['500', '520', '540', '560'],
    correctAnswer: 'C',
    explanation: '820% of 40 = 8.2 × 40 = 328\n328 - 28 = 300\n30% of 300 = 90\nএখন, 90% of 600 = 0.90 × 600 = 540'
  },
  {
    id: 5,
    section: 'Math',
    question: 'Find the value of x, if x + 15% of x = 29.9',
    options: ['24', '25', '26', '27'],
    correctAnswer: 'C',
    explanation: 'x + 0.15x = 29.9\n1.15x = 29.9\nx = 29.9 / 1.15 = 26'
  },
  {
    id: 6,
    section: 'Math',
    question: 'Simplify: 5% of 40 + 20% of 80 - 10% of 100 ÷ 5% of 50',
    options: ['12', '14', '16', '18'],
    correctAnswer: 'B',
    explanation: '5% of 40 = 2\n20% of 80 = 16\n10% of 100 = 10\n5% of 50 = 2.5\n\nসরলমান = 2 + 16 - 10 ÷ 2.5\n= 18 - 4 = 14'
  },
  {
    id: 7,
    section: 'Math',
    question: 'What is the value of (42% of 7200) - (12% of 4800)?',
    options: ['2248', '2348', '2448', '2548'],
    correctAnswer: 'C',
    explanation: '42% of 7200 = 42 × 72 = 3024\n12% of 4800 = 12 × 48 = 576\nবিয়োগফল = 3024 - 576 = 2448'
  },
  {
    id: 8,
    section: 'Math',
    question: 'Find the value of k, if 18% of 450 = 30% of k.',
    options: ['250', '260', '270', '280'],
    correctAnswer: 'C',
    explanation: '18% of 450 = 0.18 × 450 = 81\n30% of k = 81\nk = 81 / 0.30 = 270'
  },
  {
    id: 9,
    section: 'Math',
    question: 'If 280% of 160 - 25% of 720 = y% of 200, what is the value of y?',
    options: ['124', '134', '144', '154'],
    correctAnswer: 'B',
    explanation: '280% of 160 = 2.8 × 160 = 448\n25% of 720 = 0.25 × 720 = 180\n448 - 180 = 268\n\ny% of 200 = y × 2 = 268\ny = 268 / 2 = 134'
  },
  {
    id: 10,
    section: 'Math',
    question: '150% of 15 + 75% of 75 = ?',
    options: ['76.75', '77.75', '78.75', '79.75'],
    correctAnswer: 'C',
    explanation: '150% of 15 = 1.5 × 15 = 22.5\n75% of 75 = 0.75 × 75 = 56.25\nযোগফল = 22.5 + 56.25 = 78.75'
  }
];
