import { Question } from '../types';

export const giMock3Questions: Question[] = [
  {
    id: 1,
    section: 'GI',
    question: 'Anita\'s daughter\'s son\'s sister\'s mother\'s husband is Vikram. How is Vikram related to Anita?',
    options: ['Son-in-law', 'Husband', 'Brother', 'Father'],
    correctAnswer: 'A',
    explanation: 'Son-in-law'
  },
  {
    id: 2,
    section: 'GI',
    question: 'A is the son of P. Q is the brother of A. D is the mother of Q. R is the father of D. How is P related to R?',
    options: ['Daughter-in-law', 'Daughter', 'Son-in-law', 'Son'],
    correctAnswer: 'C',
    explanation: 'Son-in-law'
  },
  {
    id: 3,
    section: 'GI',
    question: 'A company\'s profit in 1st quarter was ₹ 1,20,000. In 2nd quarter, profit decreased by 15%. What was the profit in 2nd quarter?',
    options: ['₹ 1,02,000', '₹ 1,05,000', '₹ 1,08,000', '₹ 1,10,000'],
    correctAnswer: 'A',
    explanation: '₹ 1,02,000'
  },
  {
    id: 4,
    section: 'GI',
    question: 'Ratio of boys to girls is 3:2. If there are 18 boys, total students?',
    options: ['24', '30', '36', '40'],
    correctAnswer: 'B',
    explanation: '30 (Boys = 3x = 18 => x=6. Total students = 5x = 30)'
  },
  {
    id: 5,
    section: 'GI',
    question: 'A takes 10 days, B takes 15 days to complete work. If they work together?',
    options: ['5 days', '6 days', '8 days', '12 days'],
    correctAnswer: 'B',
    explanation: '6 days (1/10 + 1/15 = 5/30 = 1/6)'
  },
  {
    id: 6,
    section: 'GI',
    question: 'Pattern: B, F, J, N, ?',
    options: ['P', 'Q', 'R', 'S'],
    correctAnswer: 'C',
    explanation: 'R (Gap of 4 letters: B->F->J->N->R)'
  },
  {
    id: 7,
    section: 'GI',
    question: 'A city has traffic jams due to poorly timed signals. Immediate practical step?',
    options: ['Charge tolls', 'Ban vehicles', 'Build new roads', 'Synchronize signals based on peak patterns'],
    correctAnswer: 'D',
    explanation: 'Synchronize signals based on peak patterns'
  },
  {
    id: 8,
    section: 'GI',
    question: 'Equation: 5 + 3 x 2 - 11 = 12. Correct interchange?',
    options: ['3 and 2', '5 and 11', '+ and -', 'x and +'],
    correctAnswer: 'B',
    explanation: '5 and 11 (11 + 3 x 2 - 5 = 11 + 6 - 5 = 12)'
  },
  {
    id: 9,
    section: 'GI',
    question: 'Analogy: 5:25:125 :: 6:36:216 :: ?',
    options: ['3:9:30', '4:16:48', '9:81:648', '11:121:1331'],
    correctAnswer: 'D',
    explanation: '11:121:1331 (x : x^2 : x^3)'
  },
  {
    id: 10,
    section: 'GI',
    question: 'Missing number: 41, 43, 47, 53, 59, ?, 67',
    options: ['60', '61', '62', '63'],
    correctAnswer: 'B',
    explanation: '61 (Prime numbers series)'
  },
  {
    id: 11,
    section: 'GI',
    question: 'Related letter: JODA: KQEC :: GIUS: ?',
    options: ['HKVU', 'HLXT', 'IJVT', 'IKWU'],
    correctAnswer: 'A',
    explanation: 'HKVU'
  },
  {
    id: 12,
    section: 'GI',
    question: 'Related letter: ENGLISH: HENGLIS :: BENGALI: ?',
    options: ['KENGAL', 'BENGAL', 'IBENGAL', 'FBENGAL'],
    correctAnswer: 'C',
    explanation: 'IBENGAL (Move last letter to the first position)'
  },
  {
    id: 13,
    section: 'GI',
    question: 'Syllogism (Statements: All Hilux are Truck, Some Truck are Flat, Only Flat are Fit)',
    options: ['Only I follows', 'Only II follows', 'Both I and II follow', 'Neither follows'],
    correctAnswer: 'C',
    explanation: 'Both follow'
  },
  {
    id: 14,
    section: 'GI',
    question: 'Replication: Geneva, Switzerland: October 24th, 1945 (UN Day).',
    options: ['Geneva, Switzerland: October 24th, 1945 (UN Day).', 'Geneva, Switzerland: Octorber 24th, 1945 (UN Day).', 'Geneva, Swizerland: October 24th, 1945 (UN Day).', 'Geneva, Switzerland: October 24, 1945 (UN Day).'],
    correctAnswer: 'A',
    explanation: 'Geneva, Switzerland: October 24th, 1945 (UN Day).'
  },
  {
    id: 15,
    section: 'GI',
    question: 'Series: ZSG, EVL, JYQ, ___, TEA',
    options: ['OBV', 'NCV', 'OCU', 'NBV'],
    correctAnswer: 'A',
    explanation: 'OBV'
  },
  {
    id: 16,
    section: 'GI',
    question: 'Circular table (5 persons: A, B, C, D, E). Who is sitting 3rd to right of C?',
    options: ['B', 'A', 'D', 'E'],
    correctAnswer: 'B',
    explanation: 'A'
  },
  {
    id: 17,
    section: 'GI',
    question: 'W turned 7 times right, 6 times left. Final walking direction: North. Started walking?',
    options: ['South', 'North', 'West', 'East'],
    correctAnswer: 'C',
    explanation: 'West (7R + 6L = 1R. If after 1R he is facing North, he started facing West)'
  },
  {
    id: 18,
    section: 'GI',
    question: 'M cycles 64m straight, takes 16 right turns. Facing west. Started cycling?',
    options: ['South', 'West', 'North', 'East'],
    correctAnswer: 'B',
    explanation: 'West (16 right turns = 4 full circles = 0 net change. So starting direction is West)'
  },
  {
    id: 19,
    section: 'GI',
    question: 'R walks 32m East, left 8m, right 26m, right 8m. Position from start?',
    options: ['58, east', '62, east', '58, west', '62, west'],
    correctAnswer: 'A',
    explanation: '58, east (32m East + 26m East = 58m East)'
  },
  {
    id: 20,
    section: 'GI',
    question: 'Operations: ?: 4925 :: 33:203 :: 45:275',
    options: ['820', '827', '822', '812'],
    correctAnswer: 'A',
    explanation: '820'
  },
  {
    id: 21,
    section: 'GI',
    question: 'Coding (A=+, B=-, C=÷, D=x): Check which eq is correct (I or II).',
    options: ['Only I', 'Only II', 'Both I and II', 'Neither'],
    correctAnswer: 'C',
    explanation: 'Both I and II'
  },
  {
    id: 22,
    section: 'GI',
    question: 'Coding: \'DESK\' = 451911, \'TEST\' = 2051920. \'COVER\' = ?',
    options: ['15322518', '22153518', '31522518', '31522185'],
    correctAnswer: 'C',
    explanation: '31522518 (Numerical values of letters: C=3, O=15, V=22, E=5, R=18)'
  },
  {
    id: 23,
    section: 'GI',
    question: 'Coding: \'SHARKS\' = OGNWDO, \'BALLER\' = NAHHWX. \'BESTIR\' = ?',
    options: ['LEPOYZ', 'PGQQYY', 'OEQPAV', 'NEPOAX'],
    correctAnswer: 'D',
    explanation: 'NEPOAX'
  },
  {
    id: 24,
    section: 'GI',
    question: 'Coding: \'ANNUAL\' = WVQHIF, \'EVOLVE\' = AQHIQY. \'AFFECT\' = ?',
    options: ['UXCZCM', 'UYZZZP', 'VZZXBO', 'WXAZAN'],
    correctAnswer: 'D',
    explanation: 'WXAZAN'
  },
  {
    id: 25,
    section: 'GI',
    question: 'Cannot be formed: HOSPITALITY',
    options: ['HASTY', 'POSIT', 'HOST', 'HOTEL'],
    correctAnswer: 'D',
    explanation: 'HOTEL (There is no \'E\' in HOSPITALITY)'
  }
];
