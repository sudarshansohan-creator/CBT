import { Question } from '../types';

export const mathBodmasQuestions: Question[] = [
  {
    id: 1,
    section: 'Math',
    question: '45 - [38 - {80 ÷ 4 - (8 - 12 ÷ 3) ÷ 4}] এর মান কত?',
    options: ['24', '26', '28', '30'],
    correctAnswer: 'B',
    explanation: '45 - [38 - {80 ÷ 4 - (8 - 12 ÷ 3) ÷ 4}]\n= 45 - [38 - {20 - (8 - 4) ÷ 4}]\n= 45 - [38 - {20 - 4 ÷ 4}]\n= 45 - [38 - {20 - 1}]\n= 45 - [38 - 19]\n= 45 - 19 = 26'
  },
  {
    id: 2,
    section: 'Math',
    question: '17 × 8 - 6 + [(27 - 3) ÷ 6 - 4] এর মান কত?',
    options: ['120', '125', '130', '135'],
    correctAnswer: 'C',
    explanation: '17 × 8 - 6 + [(27 - 3) ÷ 6 - 4]\n= 136 - 6 + [24 ÷ 6 - 4]\n= 130 + [4 - 4]\n= 130 + 0 = 130'
  },
  {
    id: 3,
    section: 'Math',
    question: '(12 - 6 ÷ 2 + 4) / (3² × 3 - 7 + 6) এর মান কত?',
    options: ['1/2', '1/3', '2', '3'],
    correctAnswer: 'A',
    explanation: 'লব (Numerator) = 12 - 3 + 4 = 13\nহর (Denominator) = 9 × 3 - 7 + 6 = 27 - 7 + 6 = 26\nভগ্নাংশ = 13 / 26 = 1/2'
  },
  {
    id: 4,
    section: 'Math',
    question: '5 × [6 × 2{3 × 7 ÷ (5 × 3)}] এর মান কত?',
    options: ['80', '82', '84', '86'],
    correctAnswer: 'C',
    explanation: '5 × [6 × 2{21 ÷ 15}]\n= 5 × [6 × 2 * 1.4]\n= 5 × [6 × 2.8]\n= 5 × 16.8 = 84'
  },
  {
    id: 5,
    section: 'Math',
    question: '2.06 - 3.16 + 4.59 - 1.79  এর মান কত?',
    options: ['1.50', '1.60', '1.70', '1.80'],
    correctAnswer: 'C',
    explanation: '2.06 + 4.59 - 3.16 - 1.79\n= 6.65 - 4.95 = 1.70'
  },
  {
    id: 6,
    section: 'Math',
    question: '24 + 7.2 ÷ 8 - 3 × 2.3 + 5 এর মান কত?',
    options: ['21', '22', '23', '24'],
    correctAnswer: 'C',
    explanation: '24 + 0.9 - 6.9 + 5\n= 24.9 - 6.9 + 5\n= 18 + 5 = 23'
  },
  {
    id: 7,
    section: 'Math',
    question: '186 - 7 × (63 - 39) + 25 ÷ 5 এর মান কত?',
    options: ['21', '22', '23', '24'],
    correctAnswer: 'C',
    explanation: '186 - 7 × 24 + 5\n= 186 - 168 + 5\n= 18 + 5 = 23'
  },
  {
    id: 8,
    section: 'Math',
    question: '25 + 15.5 × 1/2 of 10 - [50 ÷ 10 - 5] এর মান কত?',
    options: ['100.5', '101.5', '102.5', '103.5'],
    correctAnswer: 'C',
    explanation: '25 + 15.5 × (1/2 of 10) - [5 - 5]\n= 25 + 15.5 × 5 - 0\n= 25 + 77.5 = 102.5'
  },
  {
    id: 9,
    section: 'Math',
    question: '(44 - 13 + 17 - 21 + 45 - 24) / (12 of 4 - 3 × 4 - 6 × 2) এর মান কত?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 'B',
    explanation: 'লব = 44 - 13 + 17 - 21 + 45 - 24 = 48\nহর = 12 of 4 - 3 × 4 - 6 × 2 = 48 - 12 - 12 = 24\nমান = 48 ÷ 24 = 2'
  },
  {
    id: 10,
    section: 'Math',
    question: '20 - [12 - \{14 - (12 - (16 - 10))\}] এর মান কত?',
    options: ['14', '15', '16', '17'],
    correctAnswer: 'C',
    explanation: 'এখানে রেখা বন্ধনী (vinculum) (16-10) সবার আগে হবে:\n20 - [12 - {14 - (12 - 6)}]\n= 20 - [12 - {14 - 6}]\n= 20 - [12 - 8]\n= 20 - 4 = 16'
  }
];
