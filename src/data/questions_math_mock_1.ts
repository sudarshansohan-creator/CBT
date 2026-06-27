import { Question } from '../types';

export const mathMock1Questions: Question[] = [
  {
    id: 1,
    section: 'Math',
    question: 'Find the value of 3/5 × 4/7 ÷ 2/5',
    options: ['6/7', '5/7', '6/5', '3/7'],
    correctAnswer: 'A',
    explanation: '6/7'
  },
  {
    id: 2,
    section: 'Math',
    question: 'If x + 1/x = 3, Find the value of x² + 1/x²',
    options: ['6', '7', '5', '9'],
    correctAnswer: 'B',
    explanation: '7 (x² + 1/x² = (x + 1/x)² - 2 = 3² - 2 = 7)'
  },
  {
    id: 3,
    section: 'Math',
    question: 'A and B started a business with ₹ 12000 and ₹ 18000. B left after 4 months. Find their profit ratio after 1 year.',
    options: ['2:1', '3:2', '1:1', '4:3'],
    correctAnswer: 'A',
    explanation: '2:1 (A invests for 12 months, B for 4 months. Ratio = 12000*12 : 18000*4 = 144000 : 72000 = 2:1)'
  },
  {
    id: 4,
    section: 'Math',
    question: 'The ratio of the ages of A and B is 4:5. After 6 years, the ratio becomes 5:6. What is A\'s present age?',
    options: ['36', '30', '24', '40'],
    correctAnswer: 'C',
    explanation: '24 (Let ages be 4x and 5x. (4x+6)/(5x+6) = 5/6 => 24x + 36 = 25x + 30 => x = 6. A\'s age = 4*6 = 24)'
  },
  {
    id: 5,
    section: 'Math',
    question: 'The average of 3, 5, 7 is increased by 2. What is the new average?',
    options: ['9', '7', '5', '6'],
    correctAnswer: 'B',
    explanation: '7 (Original avg = 5. Increased by 2 = 7)'
  },
  {
    id: 6,
    section: 'Math',
    question: 'A price drops from Rs. 200 to Rs. 150. What is the percentage decrease?',
    options: ['20%', '25%', '30%', '35%'],
    correctAnswer: 'B',
    explanation: '25% (Drop = 50. % drop = 50/200 * 100 = 25%)'
  },
  {
    id: 7,
    section: 'Math',
    question: 'A\'s income is 40% less than B\'s. By what percent is B\'s income more than A\'s?',
    options: ['66.67%', '60%', '50%', '40%'],
    correctAnswer: 'A',
    explanation: '66.67% (If B=100, A=60. B is more by 40. % more = 40/60 * 100 = 66.67%)'
  },
  {
    id: 8,
    section: 'Math',
    question: 'A man bought a watch for ₹ 1500 and sold it at a loss of 8%. What is the selling price?',
    options: ['₹ 1380', '₹ 1400', '₹ 1420', '₹ 1440'],
    correctAnswer: 'A',
    explanation: '₹ 1380 (SP = 1500 * 0.92 = 1380)'
  },
  {
    id: 9,
    section: 'Math',
    question: 'A person sells two products for ₹ 500 each. He makes a 20% profit on one and incurs a 20% loss on the other. What is his net gain or loss?',
    options: ['4% gain', '4% loss', 'No profit no loss', '2% gain'],
    correctAnswer: 'B',
    explanation: '4% loss (Net loss % = x²/100 = 20²/100 = 4% loss)'
  },
  {
    id: 10,
    section: 'Math',
    question: 'An article marked at Rs. 1600 is sold for Rs. 1360. Find the discount percentage.',
    options: ['12%', '14%', '15%', '17%'],
    correctAnswer: 'C',
    explanation: '15% (Discount = 240. % discount = 240/1600 * 100 = 15%)'
  },
  {
    id: 11,
    section: 'Math',
    question: '40 liters of a mixture contains acid and water in the ratio 7:3. How much acid must be added to make the ratio 4:1?',
    options: ['12 L', '14 L', '16 L', '20 L'],
    correctAnswer: 'D',
    explanation: '20 L (Initial: Acid=28, Water=12. New ratio 4:1 => (28+x)/12 = 4/1 => 28+x = 48 => x = 20)'
  },
  {
    id: 12,
    section: 'Math',
    question: 'Find the ratio of volumes of a sphere to its hemisphere of same radius.',
    options: ['2:1', '3:2', '1:2', '4:3'],
    correctAnswer: 'A',
    explanation: '2:1 (Volume of sphere is twice that of a hemisphere)'
  },
  {
    id: 13,
    section: 'Math',
    question: 'A regular octagon is paved inside a circular traffic junction. What is the sum of all internal angles?',
    options: ['1320°', '1260°', '1080°', '1440°'],
    correctAnswer: 'C',
    explanation: '1080° (Sum = (n-2)*180 = (8-2)*180 = 6*180 = 1080°)'
  },
  {
    id: 14,
    section: 'Math',
    question: 'In a biochip, DNA sensors are arranged in a regular pentagon. Find the measure of each interior angle.',
    options: ['110°', '100°', '120°', '108°'],
    correctAnswer: 'D',
    explanation: '108° (Sum = (5-2)*180 = 540. Each angle = 540/5 = 108°)'
  },
  {
    id: 15,
    section: 'Math',
    question: 'A solid metal cone of height 24 cm and base radius 3.5 cm is melted and recast into small spherical balls of radius 1 cm. How many balls are formed?',
    options: ['72', '73', '75', '80'],
    correctAnswer: 'C',
    explanation: '75'
  },
  {
    id: 16,
    section: 'Math',
    question: 'A can manufacturer wants to paste a label around a cylindrical can of radius 5 cm and height 12 cm. What is the area of the label?',
    options: ['60 cm²', '75 cm²', '120π cm²', '100 cm²'],
    correctAnswer: 'C',
    explanation: '120π cm² (Lateral Surface Area = 2πrh = 2*π*5*12 = 120π cm²)'
  },
  {
    id: 17,
    section: 'Math',
    question: 'A sheet metal roof in the shape of a right triangular prism (sides 6, 8, 10 cm and length 12 cm) needs painting on its top and lateral surfaces. Find the area.',
    options: ['360 cm²', '288 cm²', '312 cm²', '336 cm²'],
    correctAnswer: 'C',
    explanation: '312 cm²'
  },
  {
    id: 18,
    section: 'Math',
    question: 'A spherical tank holds 36π cubic meters of treated water. What is the radius?',
    options: ['3 m', '6 m', '4 m', '2.9 m'],
    correctAnswer: 'A',
    explanation: '3 m ((4/3)πr³ = 36π => r³ = 27 => r = 3)'
  },
  {
    id: 19,
    section: 'Math',
    question: 'A player\'s average score is 12.252525... where \'25\' repeats. What is this as a simplified fraction?',
    options: ['1211/99', '1213/99', '1210/99', '485/40'],
    correctAnswer: 'B',
    explanation: '1213/99 (12 + 25/99 = (1188+25)/99 = 1213/99)'
  },
  {
    id: 20,
    section: 'Math',
    question: 'In a roof truss, one beam makes an angle θ and the other (90° - θ). If sinθ = 0.6, what is sin²θ + cos²(90° - θ)? (Note: assuming standard trig identity properties as given)',
    options: ['0.6', '0.72', '1', '0.36'],
    correctAnswer: 'B',
    explanation: '0.72 (Since cos(90°-θ) = sinθ, it becomes 2sin²θ = 2*(0.6)² = 0.72)'
  },
  {
    id: 21,
    section: 'Math',
    question: 'The number of perfect square numbers between 50 and 1000 is?',
    options: ['21', '22', '23', '24'],
    correctAnswer: 'D',
    explanation: '24 (Squares from 8²=64 to 31²=961. 31 - 8 + 1 = 24)'
  },
  {
    id: 22,
    section: 'Math',
    question: 'A man invests ₹ 5,000 at 6% simple interest per annum. Total amount after 3 years?',
    options: ['₹ 5,500', '₹ 5,400', '₹ 6,000', '₹ 5,900'],
    correctAnswer: 'D',
    explanation: '₹ 5,900 (SI = 5000*6*3/100 = 900. Amount = 5000 + 900 = 5900)'
  },
  {
    id: 23,
    section: 'Math',
    question: 'Simplified value of expression: ((999+1)² + (999-1)²)/(999²+1)',
    options: ['570', '1', '2', '1,000,000'],
    correctAnswer: 'C',
    explanation: '2 (((a+b)² + (a-b)²)/(a²+b²) = 2(a²+b²)/(a²+b²) = 2)'
  },
  {
    id: 24,
    section: 'Math',
    question: 'Calculate the sum: 1+2+3+...+40+41+40+...+3+2+1.',
    options: ['1531', '1621', '1618', '1681'],
    correctAnswer: 'D',
    explanation: '1681 (Sum = n² where n is the middle number. 41² = 1681)'
  },
  {
    id: 25,
    section: 'Math',
    question: 'Simplify: (1 + sin x)/cos x + cos x/(1 + sin x)',
    options: ['cosec(x) + tan(x)', '2 sec x', 'cot(x)', '1'],
    correctAnswer: 'B',
    explanation: '2 sec x (((1+sinx)² + cos²x)/(cosx(1+sinx)) = (1+sin²x+2sinx+cos²x)/... = (2+2sinx)/... = 2/cosx = 2 sec x)'
  }
];
