import { Question } from '../types';

export const mathDecimalsQuestions: Question[] = [
  {
    id: 1,
    section: 'Math',
    question: '0.63̅ + 0.37̅ এর মান কত?',
    options: ['1.0101...', '1.0202...', '1.0303...', '1.0404...'],
    correctAnswer: 'A',
    explanation: '0.63̅ = 63/99\n0.37̅ = 37/99\nযোগফল = 63/99 + 37/99 = 100/99 = 1.0101...'
  },
  {
    id: 2,
    section: 'Math',
    question: '6 + 66.6 - 6.66 + 666 - 0.66 এর মান কত?',
    options: ['730.28', '731.28', '732.28', '733.28'],
    correctAnswer: 'B',
    explanation: '6 + 66.6 + 666 = 738.6\n- 6.66 - 0.66 = -7.32\n738.6 - 7.32 = 731.28'
  },
  {
    id: 3,
    section: 'Math',
    question: '(12.3 ÷ 0.03) ÷ 2.05 + 2.05 এর মান কত?',
    options: ['200.05', '201.05', '202.05', '203.05'],
    correctAnswer: 'C',
    explanation: '12.3 ÷ 0.03 = 410\n410 ÷ 2.05 = 200\n200 + 2.05 = 202.05'
  },
  {
    id: 4,
    section: 'Math',
    question: '5 × 0.5 × 0.05 × 0.005 × 500 এর মান কত?',
    options: ['0.03125', '0.3125', '3.125', '31.25'],
    correctAnswer: 'B',
    explanation: '5 × 0.5 × 0.05 × 0.005 × 500\n= 5 × 0.5 × 0.05 × 2.5\n= 2.5 × 0.05 × 2.5\n= 0.125 × 2.5 = 0.3125'
  },
  {
    id: 5,
    section: 'Math',
    question: '(0.72 × 0.26 + 0.18 × 0.52) ÷ (0.13 × 0.9) এর মান কত?',
    options: ['2.2', '2.4', '2.6', '2.8'],
    correctAnswer: 'B',
    explanation: 'লব = 0.1872 + 0.0936 = 0.2808\nহর = 0.117\n0.2808 ÷ 0.117 = 2.4'
  },
  {
    id: 6,
    section: 'Math',
    question: '(6.25 - 2.23) × (3.35 - 2.23) + (0.0016 - 2.987) এর মান কত?',
    options: ['1.517', '1.617', '1.717', '1.817'],
    correctAnswer: 'A',
    explanation: '(4.02) × (1.12) + (-2.9854)\n= 4.5024 - 2.9854 = 1.517'
  },
  {
    id: 7,
    section: 'Math',
    question: '[0.5 ÷ (0.5 × 0.5)] / [(0.5 ÷ 0.5) × 0.5] এর মান কত?',
    options: ['2', '3', '4', '5'],
    correctAnswer: 'C',
    explanation: 'লব = 0.5 ÷ 0.25 = 2\nহর = 1 × 0.5 = 0.5\nমান = 2 ÷ 0.5 = 4'
  },
  {
    id: 8,
    section: 'Math',
    question: '1.3 × 2.1 + (6.5 / 0.5) - k × 11.5 = -1.52 হলে k এর মান কত?',
    options: ['1.2', '1.5', '1.8', '2.0'],
    correctAnswer: 'B',
    explanation: '2.73 + 13 - k × 11.5 = -1.52\n15.73 - k × 11.5 = -1.52\nk × 11.5 = 15.73 + 1.52 = 17.25\nk = 17.25 / 11.5 = 1.5'
  },
  {
    id: 9,
    section: 'Math',
    question: '[(40.5 ÷ 13.5) ÷ 1.5] + [(4.6 ÷ 0.23) ÷ 2.5] এর মান কত?',
    options: ['8', '9', '10', '12'],
    correctAnswer: 'C',
    explanation: '[3 ÷ 1.5] + [20 ÷ 2.5]\n= 2 + 8 = 10'
  },
  {
    id: 10,
    section: 'Math',
    question: '499.37 + 1.95 × 4.79 - 2.87 ÷ 19.70 এর মান কত (প্রায়)?',
    options: ['500', '505', '510', '515'],
    correctAnswer: 'C',
    explanation: 'প্রায়িক মান বিবেচনা করে:\n499 + 2 × 5 - 3 ÷ 20\n= 499 + 10 - 0.15\n= 509 - 0.15 ≈ 510'
  }
];
