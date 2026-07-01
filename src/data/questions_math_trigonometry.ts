import { Question } from '../types';

export const mathTrigonometryQuestions: Question[] = [
  {
    id: 1,
    section: 'Math',
    question: 'If tan θ + cot θ = 2, then find the value of tan¹⁰⁰ θ + cot¹⁰⁰ θ.',
    options: ['1', '2', '4', '0'],
    correctAnswer: 'B',
    explanation: 'Put θ = 45° => tan 45° = 1, cot 45° = 1.\nValue: (1)¹⁰⁰ + (1)¹⁰⁰ = 1 + 1 = 2.'
  },
  {
    id: 2,
    section: 'Math',
    question: 'If tan θ + cot θ = 2, then find the value of 3 tan³ θ + 5 cot³ θ.',
    options: ['8', '2', '15', '5'],
    correctAnswer: 'A',
    explanation: 'Put θ = 45° => tan 45° = 1, cot 45° = 1.\nValue: 3(1)³ + 5(1)³ = 3 + 5 = 8.'
  },
  {
    id: 3,
    section: 'Math',
    question: 'If tan θ + cot θ = 2, then find the value of (tan² θ + 5) / (cot² θ + 2).',
    options: ['2', '1', '3', '4'],
    correctAnswer: 'A',
    explanation: 'Put θ = 45°.\nValue: (1² + 5) / (1² + 2) = 6 / 3 = 2.'
  },
  {
    id: 4,
    section: 'Math',
    question: 'If sec θ + tan θ = 3, then find the value of sin θ.',
    options: ['3/5', '4/5', '1/3', '2/5'],
    correctAnswer: 'B',
    explanation: 'We know that sec² θ - tan² θ = 1 => (sec θ + tan θ)(sec θ - tan θ) = 1\nSince sec θ + tan θ = 3 => sec θ - tan θ = 1/3.\n\nAdding these two equations:\n2 sec θ = 3 + 1/3 = 10/3 => sec θ = 5/3 = Hypotenuse / Base.\n\nUsing Pythagorean triplet (3, 4, 5), Perpendicular = 4.\nSo, sin θ = Perpendicular / Hypotenuse = 4/5.'
  },
  {
    id: 5,
    section: 'Math',
    question: 'If sec θ - tan θ = 2, then find the value of sec θ.',
    options: ['5/4', '3/4', '4/5', '2/3'],
    correctAnswer: 'A',
    explanation: 'Since sec θ - tan θ = 2 => sec θ + tan θ = 1/2.\n\nAdding these two equations:\n2 sec θ = 2 + 1/2 = 5/2 => sec θ = 5/4.'
  },
  {
    id: 6,
    section: 'Math',
    question: 'If csc θ + cot θ = 3, then find the value of cos θ.',
    options: ['4/5', '3/5', '5/4', '1/2'],
    correctAnswer: 'B',
    explanation: 'We know that csc² θ - cot² θ = 1 => (csc θ + cot θ)(csc θ - cot θ) = 1\nSince csc θ + cot θ = 3 => csc θ - cot θ = 1/3.\n\nAdding these two equations:\n2 csc θ = 3 + 1/3 = 10/3 => csc θ = 5/3 = Hypotenuse / Perpendicular.\n\nUsing Pythagorean triplet (3, 4, 5), Base = 3.\nSo, cos θ = Base / Hypotenuse = 3/5.'
  },
  {
    id: 7,
    section: 'Math',
    question: 'Evaluate the value of: (tan 20° · tan 70°) / (sin² 40° + sin² 50°).',
    options: ['0', '1', '2', '-1'],
    correctAnswer: 'B',
    explanation: 'Numerator: since 20° + 70° = 90°, tan 70° = cot 20°.\nSo, tan 20° · tan 70° = tan 20° · cot 20° = 1.\n\nDenominator: since 40° + 50° = 90°, sin 50° = cos 40°.\nSo, sin² 40° + sin² 50° = sin² 40° + cos² 40° = 1.\n\nTotal Value = 1 / 1 = 1.'
  },
  {
    id: 8,
    section: 'Math',
    question: 'Find the value of: (2 sin 38°) / cos 52° - tan 18° / cot 72°.',
    options: ['1', '2', '0', '3'],
    correctAnswer: 'A',
    explanation: 'Since 38° + 52° = 90° => cos 52° = sin 38° => (2 sin 38°) / cos 52° = 2.\nSince 18° + 72° = 90° => cot 72° = tan 18° => tan 18° / cot 72° = 1.\n\nTotal Value = 2 - 1 = 1.'
  },
  {
    id: 9,
    section: 'Math',
    question: 'Find the value of: (cos² 25° + cos² 65°) / (sec 35° · csc 55° - tan 35° · cot 55°).',
    options: ['0', '2', '1', '1/2'],
    correctAnswer: 'C',
    explanation: 'Numerator: since 25° + 65° = 90°, cos 65° = sin 25°.\nSo, cos² 25° + cos² 65° = cos² 25° + sin² 25° = 1.\n\nDenominator: Substitute complementary angles:\ncsc 55° = sec 35° and cot 55° = tan 35°.\nSo, sec 35° · csc 55° - tan 35° · cot 55° = sec² 35° - tan² 35° = 1.\n\nTotal Value = 1 / 1 = 1.'
  },
  {
    id: 10,
    section: 'Math',
    question: 'Evaluate: (5 tan 15° · tan 75°) / (2 sin² 33° + 2 sin² 57°).',
    options: ['5/2', '2/5', '1', '5'],
    correctAnswer: 'A',
    explanation: 'Numerator: Since 15° + 75° = 90°, tan 75° = cot 15°.\nSo, 5 tan 15° · tan 75° = 5.\n\nDenominator: Since 33° + 57° = 90°, sin 57° = cos 33°.\nSo, 2 sin² 33° + 2 sin² 57° = 2(sin² 33° + cos² 33°) = 2.\n\nTotal Value = 5/2.'
  }
];
