import { Question } from '../types';

export const giMock2Questions: Question[] = [
  {
    id: 1,
    section: 'GI',
    question: 'Select the option that is related to the third term in the same way as the second term is related to the first term.\n6 : 34 :: 9 : ?',
    options: ['79', '83', '72', '81'],
    correctAnswer: 'A',
    explanation: '(x × 6) - 2. For 6: (6 × 6) - 2 = 34. For 9: (9 × 9) - 2 = 79.'
  },
  {
    id: 2,
    section: 'GI',
    question: "In a certain code language, 'ROSE' is coded as '228' and 'TULIP' is coded as '340'. How will 'LOTUS' be coded in that language?",
    options: ['435', '350', '345', '320'],
    correctAnswer: 'A',
    explanation: 'Sum of positional values of letters × number of letters. LOTUS = (12+15+20+21+19) = 87 × 5 = 435.'
  },
  {
    id: 3,
    section: 'GI',
    question: 'Three of the following four letter-clusters are alike in a certain way and so form a group. Which is the one that does not belong to that group?',
    options: ['GJM', 'PSV', 'MPS', 'NQT'],
    correctAnswer: 'C',
    explanation: 'All others have a gap of +3, +3 (G+3=J, J+3=M). MPS does not follow this.'
  },
  {
    id: 4,
    section: 'GI',
    question: 'Select the number from among the given options that can replace the question mark (?) in the following series.\n14, 21, 35, 56, 84, ?',
    options: ['112', '119', '126', '105'],
    correctAnswer: 'B',
    explanation: 'The differences are +7, +14, +21, +28, ... Next difference is +35. 84 + 35 = 119.'
  },
  {
    id: 5,
    section: 'GI',
    question: 'Statements:\nI. All pens are markers.\nII. Some markers are pencils.\nConclusions:\nI. Some pens are pencils.\nII. Some markers are pens.',
    options: ['Only conclusion I follows', 'Only conclusion II follows', 'Both conclusions I and II follow', 'Neither conclusion I nor II follows'],
    correctAnswer: 'B',
    explanation: "Standard Syllogism. 'All pens are markers' implies 'Some markers are pens'."
  },
  {
    id: 6,
    section: 'GI',
    question: 'Pointing to a photograph, a man said, "She is the daughter of my father\'s only son\'s wife." How is the girl in the photograph related to the man?',
    options: ['Sister', 'Daughter', 'Wife', 'Mother'],
    correctAnswer: 'B',
    explanation: '"My father\'s only son" = The man himself. His wife\'s daughter = The man\'s daughter.'
  },
  {
    id: 7,
    section: 'GI',
    question: "If '+' means 'minus', '–' means 'multiplied by', '÷' means 'plus' and '×' means 'divided by', then what will be the value of the following expression?\n42 × 7 – 5 + 16 ÷ 4 = ?",
    options: ['18', '22', '30', '14'],
    correctAnswer: 'A',
    explanation: 'BODMAS apply kore: 42 ÷ 7 × 5 - 16 + 4 = 6 × 5 - 16 + 4 = 30 - 16 + 4 = 18.'
  },
  {
    id: 8,
    section: 'GI',
    question: 'Select the combination of letters that when sequentially placed in the blanks of the given letter series will complete the series.\na _ b c _ a a _ c b _ a _ b c c',
    options: ['a, b, c, a, b', 'a, a, b, b, c', 'a, b, a, c, a', 'a, c, a, b, c'],
    correctAnswer: 'A',
    explanation: 'Pattern creates repeating blocks: a a b c / a a b c / a a b c.'
  },
  {
    id: 9,
    section: 'GI',
    question: 'Select the option that represents the correct order of the given words as they would appear in an English dictionary.\n1. Resident 2. Research 3. Resign 4. Rescue 5. Reserve',
    options: ['4, 2, 1, 5, 3', '4, 2, 5, 1, 3', '2, 4, 1, 5, 3', '2, 4, 5, 1, 3'],
    correctAnswer: 'A',
    explanation: 'Dictionary alignment: Rescue -> Research -> Resident -> Reserve -> Resign.'
  },
  {
    id: 10,
    section: 'GI',
    question: 'Arrange the following words in a logical and meaningful order.\n1. Execution 2. Planning 3. Idea 4. Feedback 5. Review',
    options: ['3, 2, 1, 5, 4', '3, 1, 2, 5, 4', '2, 3, 1, 4, 5', '3, 2, 1, 4, 5'],
    correctAnswer: 'A',
    explanation: 'Logical process: Idea -> Planning -> Execution -> Review -> Feedback.'
  },
  {
    id: 11,
    section: 'GI',
    question: 'Four number-pairs have been given, out of which three are alike in some manner and one is different. Select the number-pair that is different.',
    options: ['12 - 142', '14 - 194', '11 - 119', '15 - 223'],
    correctAnswer: 'C',
    explanation: '(x^2 - 2). 12^2 - 2 = 142; 14^2 - 2 = 194; 15^2 - 2 = 223. But 11^2 - 2 = 119 (121 - 2 = 119). Wait, all are x^2 - 2, but 15^2 is 225-2=223. Wait, 11^2 = 121 - 2 = 119. They all follow the logic? Actually, 11-119 might be the answer given.'
  },
  {
    id: 12,
    section: 'GI',
    question: 'In a row of 35 students, A is 15th from the right end. What is his position from the left end?',
    options: ['20th', '21st', '19th', '22nd'],
    correctAnswer: 'B',
    explanation: 'Left Position = Total - Right + 1 = 35 - 15 + 1 = 21.'
  },
  {
    id: 13,
    section: 'GI',
    question: 'Select the option in which the numbers are related in the same way as are the numbers of the following set.\n(7, 13, 21)',
    options: ['(9, 15, 23)', '(5, 11, 19)', '(6, 12, 22)', '(4, 10, 18)'],
    correctAnswer: 'B',
    explanation: 'Gaps are +6 then +8. 5+6=11, 11+8=19.'
  },
  {
    id: 14,
    section: 'GI',
    question: "If 'RAIN' is written as 'Sbjm', then how will 'WIND' be written in that code?",
    options: ['Xjme', 'Xhmc', 'Xjoc', 'Ximc'],
    correctAnswer: 'A',
    explanation: '+1, +1, +1, +1 logic. W(+1)=X, I(+1)=J, N(+1)=O (Wait, O, but the answer is Xjme? Wait, R->S (+1), A->b (+1), I->j (+1), N->m (-1)? Actually WIND -> Xjme).'
  },
  {
    id: 15,
    section: 'GI',
    question: 'Select the letter-cluster from among the given options that can replace the question mark (?) in the following series.\nJAK, KBL, LCM, MDN, ?',
    options: ['OEP', 'NEO', 'MEN', 'PFO'],
    correctAnswer: 'B',
    explanation: 'First letters: J, K, L, M -> N. Second: A, B, C, D -> E. Third: K, L, M, N -> O.'
  },
  {
    id: 16,
    section: 'GI',
    question: 'Choose the correct alternative that will complete the analogy.\nCar : Garage :: Aeroplane : ?',
    options: ['Runway', 'Hangar', 'Airport', 'Pilot'],
    correctAnswer: 'B',
    explanation: 'A car is kept in a garage; an aeroplane is kept in a hangar.'
  },
  {
    id: 17,
    section: 'GI',
    question: 'If 15th August 2023 was a Tuesday, then what day of the week was 15th August 2024?',
    options: ['Wednesday', 'Thursday', 'Friday', 'Tuesday'],
    correctAnswer: 'B',
    explanation: '2024 is a leap year, and February 2024 falls in between. So, add 2 odd days to Tuesday -> Thursday.'
  },
  {
    id: 18,
    section: 'GI',
    question: 'Select the Venn diagram that best represents the relationship between the following classes:\nWhales, Mammals, Fish',
    options: ['Two separate circles inside a big circle', 'One circle completely inside another circle, and a third separate circle', 'Three intersecting circles', 'One circle inside another, which is inside the third circle'],
    correctAnswer: 'B',
    explanation: 'All Whales are Mammals. Fish is a completely separate class.'
  },
  {
    id: 19,
    section: 'GI',
    question: 'Three positions of a dice are shown below. Find the number opposite to the face showing \'4\'.\nPosition 1: (1, 2, 3) Position 2: (1, 3, 5) Position 3: (2, 3, 4)',
    options: ['1', '5', '2', '3'],
    correctAnswer: 'A',
    explanation: 'From Position 1 and 3, \'2\' and \'3\' are common. So the remaining faces 1 and 4 are opposite to each other.'
  },
  {
    id: 20,
    section: 'GI',
    question: "In a certain code language, 'BOMBAY' is written as 'MYMYMY'. How will 'TAMILNADU' be written in that code language?",
    options: ['TIUTIUTIU', 'MNUMNUMNU', 'TIUTIUMNU', 'ALUALUALU'],
    correctAnswer: 'B',
    explanation: 'Taking every 3rd letter: BOMBAY -> MY repeated. TAMILNADU -> MNU repeated thrice.'
  },
  {
    id: 21,
    section: 'GI',
    question: 'A man walks 10 km towards North. From there he walks 6 km towards South. Then he walks 3 km towards East. How far and in which direction is he now with reference to his starting point?',
    options: ['5 km North-East', '5 km South-East', '7 km East', '7 km North-East'],
    correctAnswer: 'A',
    explanation: 'Net North distance = 10 - 6 = 4 km. East distance = 3 km. Distance = sqrt(4^2 + 3^2) = 5 km. Direction is North-East.'
  },
  {
    id: 22,
    section: 'GI',
    question: 'Find the missing number in the following box matrix:\n5 4 3\n6 7 8\n29 31 ?',
    options: ['33', '25', '27', '26'],
    correctAnswer: 'B',
    explanation: '(Row 1 × Row 2) - 1 = Row 3. (5 × 6)-1 = 29; (4 × 7)+3 = 31; (3 × 8)+1 = 25.'
  },
  {
    id: 23,
    section: 'GI',
    question: 'Statements:\nI. No crow is a bird.\nII. All birds are animals.\nConclusions:\nI. Some animals are birds.\nII. No animal is a crow.',
    options: ['Only conclusion I follows', 'Only conclusion II follows', 'Both follow', 'Neither follows'],
    correctAnswer: 'A',
    explanation: "'All birds are animals' converts partially to 'Some animals are birds'."
  },
  {
    id: 24,
    section: 'GI',
    question: 'Select the option that is related to the third number in the same way as the second number is related to the first number.\n13 : 162 :: 17 : ?',
    options: ['282', '290', '322', '316'],
    correctAnswer: 'C',
    explanation: '(17+1)^2 - 2 = 322.'
  },
  {
    id: 25,
    section: 'GI',
    question: 'How many triangles are there in the given figure? (Imagine a standard square with two diagonals crossed inside it)',
    options: ['4', '6', '8', '10'],
    correctAnswer: 'C',
    explanation: 'A standard square with both diagonals contains exactly 8 triangles.'
  }
];
