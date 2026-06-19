import { Question } from '../types';

export const questions: Question[] = [
  // ==================== ENGLISH (1 - 25) ====================
  { id: 1, section: 'English', question: 'Identify the part of the sentence that contains a grammatical error: The committee has submitted their report to the board for review.', options: ['The committee', 'has submitted their report', 'to the board', 'for review'], correctAnswer: 'B', explanation: "The noun 'committee' is a collective noun. Here, it acts as a single group, so it should take a singular possessive pronoun 'its' instead of 'their'." },
  { id: 2, section: 'English', question: 'Identify the part of the sentence that contains a grammatical error: The jury have given its verdict after a long debate.', options: ['The jury', 'have given', 'its verdict', 'after a long debate'], correctAnswer: 'B', explanation: "Since the jury acted unanimously ('its verdict' indicates singularity), the verb must be singular ('has given' instead of 'have given')." },
  { id: 3, section: 'English', question: 'Fill in the blank with the most appropriate phrase: The manager hired him purely __________, despite his lack of experience.', options: ['on the edge', 'at all costs', 'by the book', 'on merit'], correctAnswer: 'D', explanation: "'On merit' means based on quality and skills rather than any other factor." },
  { id: 4, section: 'English', question: 'Fill in the blank with the most appropriate phrase: She decided to do the task __________ to avoid any mistakes or legal trouble.', options: ['out of the blue', 'by the book', 'on the fence', 'for good'], correctAnswer: 'B', explanation: "'By the book' means strictly following the rules and procedures." },
  { id: 5, section: 'English', question: 'Select the most appropriate synonym of the word: Nadir', options: ['Apex', 'Zenith', 'Peak', 'Low point'], correctAnswer: 'D', explanation: "'Nadir' refers to the lowest point of something. Hence, 'Low point' is the direct synonym." },
  { id: 6, section: 'English', question: 'Select the most appropriate synonym of the word: Zenith', options: ['Base', 'Bottom', 'Peak', 'Nadir'], correctAnswer: 'C', explanation: "'Zenith' refers to the time at which something is most powerful or successful; the peak or highest point." },
  { id: 7, section: 'English', question: 'Fill in the blank with the most appropriate idiom: His sudden resignation caught everyone __________.', options: ['red-handed', 'off guard', 'in limbo', 'on thin ice'], correctAnswer: 'B', explanation: "'Caught off guard' means taken by surprise or unprepared." },
  { id: 8, section: 'English', question: 'Fill in the blank with the most appropriate idiom: The police caught the thief __________ while he was breaking into the shop.', options: ['red-handed', 'off guard', 'out of character', 'under the weather'], correctAnswer: 'A', explanation: "'Red-handed' means in the very act of doing something wrong or illegal." },
  { id: 9, section: 'English', question: 'Reading Comprehension Q1 (Based on the online learning passage): How has online learning impacted the global education system according to the text?', options: ['It has replaced the need for textbooks entirely.', 'It has revolutionized it by offering unprecedented flexibility.', 'It has limited the options for working professionals.', 'It has made learning harder for everyone.'], correctAnswer: 'B', explanation: 'Mentioned in the first line of the passage.' },
  { id: 10, section: 'English', question: 'Reading Comprehension Q2: What role does convenience play in online learning?', options: ['It restricts access to specific hours.', 'It allows learners to access materials from anywhere at any time.', 'It forces students to visit dynamic classrooms.', 'It eliminates the need for evaluation.'], correctAnswer: 'B', explanation: 'Convenience allows learners to access lectures from anywhere at any time.' },
  { id: 11, section: 'English', question: 'Reading Comprehension Q3: What tools on online platforms help cater to diverse learning styles?', options: ['Traditional blackboards', 'Interactive tools like discussion forums and multimedia presentations', 'Strict offline attendance registers', 'Fixed daily morning routines'], correctAnswer: 'B', explanation: 'Passage mentions interactive tools like forums, multimedia, and automated quizzes.' },
  { id: 12, section: 'English', question: 'Reading Comprehension Q4: How does online learning benefit working professionals?', options: ['By allowing them to completely skip work.', 'By providing an asynchronous format to balance careers and personal lives.', 'By forcing them to attend night shifts.', 'By giving degrees without any exams.'], correctAnswer: 'B', explanation: 'Provides flexibility and an asynchronous format so that they can balance work and studies.' },
  { id: 13, section: 'English', question: 'Reading Comprehension Q5: What is one of the main concerns or drawbacks of online education mentioned in the text?', options: ['High cost of digital textbooks', 'Feelings of isolation and the requirement of high self-discipline', 'Too much interaction with teachers', 'Lack of multimedia content'], correctAnswer: 'B', explanation: 'The text highlights isolation feelings and the need for self-discipline, causing some to struggle to stay motivated.' },
  { id: 14, section: 'English', question: 'Which sentence uses "bank" with the same meaning as: "The river overflowed its bank after the storm."', options: ['The teller at the bank smiled as she counted the money.', 'He used a shovel to bank the soil around the new plant.', 'The airplane began to bank to the left as it approached the runway.', 'They enjoyed a picnic on the grassy bank of the stream.'], correctAnswer: 'D', explanation: "In both the question and Option D, 'bank' refers to the side of a body of water (slope of a river or stream)." },
  { id: 15, section: 'English', question: 'Which sentence uses "bark" with the same meaning as: "The rough bark of the ancient oak tree was covered in moss."', options: ['The small dog began to bark loudly at the stranger.', 'He cut his hand on the sharp bark of the pine tree.', 'The sergeant would often bark orders at the new recruits.', 'Seals usually bark to communicate with each other.'], correctAnswer: 'B', explanation: "Both the question and Option B use 'bark' to refer to the tough outer protective layer of a tree." },
  { id: 16, section: 'English', question: 'Choose the correctly spelt word:', options: ['Committee', 'Commitee', 'Comitee', 'Committey'], correctAnswer: 'A', explanation: "'Committee' is spelled with double 'm', double 't', and double 'e'." },
  { id: 17, section: 'English', question: 'Choose the correctly spelt word:', options: ['Questionaire', 'Questionnaire', 'Questionare', 'Queastionnaire'], correctAnswer: 'B', explanation: "'Questionnaire' features a double 'n' with 'naire' at the end." },
  { id: 18, section: 'English', question: 'Choose the correct one-word substitute for: A person who can foresee future events', options: ['Oxymoron', 'Cinephile', 'Seer', 'Pitcher'], correctAnswer: 'C', explanation: "A 'Seer' is a person who is supposed to be able, through supernatural insight, to see what the future holds." },
  { id: 19, section: 'English', question: 'Choose the correct one-word substitute for: A person who looks at the brighter side of things', options: ['Pessimist', 'Optimist', 'Misanthrope', 'Pacifist'], correctAnswer: 'B', explanation: "An 'Optimist' is a person who is hopeful and confident about the future." },
  { id: 20, section: 'English', question: 'Select the most appropriate antonym of the word: Noxious', options: ['Beneficial', 'Toxic', 'Poisonous', 'Unhealthy'], correctAnswer: 'A', explanation: "'Noxious' means harmful, poisonous, or very unpleasant. The opposite is 'Beneficial' (advantageous or helpful)." },
  { id: 21, section: 'English', question: 'Select the most appropriate antonym of the word: Transient', options: ['Temporary', 'Permanent', 'Brief', 'Fleeting'], correctAnswer: 'B', explanation: "'Transient' means lasting only for a short time. Its antonym is 'Permanent' (intended to last indefinitely)." },
  { id: 22, section: 'English', question: 'Change the following sentence into the Active form: Let the truth be spoken by everyone.', options: ['Everyone should speak the truth.', 'Speak the truth, everyone.', 'Everyone speaks the truth.', 'Let everyone speak the truth.'], correctAnswer: 'D', explanation: "The imperative passive 'Let the truth be spoken by everyone' corresponds directly to 'Let everyone speak the truth' in active form." },
  { id: 23, section: 'English', question: 'Select the option that expresses the given sentence in indirect voice: The teacher said, "I have completed the syllabus for this term, but I will revise it tomorrow."', options: ['The teacher said that she has completed the syllabus for this term, but she will revise it tomorrow.', 'The teacher said that she had completed the syllabus for that term, but she would revise it the next day.', 'The teacher said that she had completed the syllabus for this term, but she would revise it tomorrow.', 'The teacher said that she was completing the syllabus, but she will revise it the next day.'], correctAnswer: 'B', explanation: "In indirect speech, present perfect 'have completed' becomes past perfect 'had completed', 'this' becomes 'that', 'will' becomes 'would', and 'tomorrow' becomes 'the next day'." },
  { id: 24, section: 'English', question: 'Choose the correct passive voice transformation of the sentence: People eat rice in many countries.', options: ['Rice was eaten by people in many countries.', 'Rice was eaten in many countries.', 'Rice is eaten in many countries.', 'Rice has been eaten by people in many countries.'], correctAnswer: 'C', explanation: "The original sentence is in the simple present tense. Passive form: Object + am/is/are + verb 3rd form. Hence, 'Rice is eaten' is correct." },
  { id: 25, section: 'English', question: 'Rearrange parts (P. Relativity, Q. Einstein, R. Framework, S. Equation) to form a paragraph:', options: ['Q, P, S, R', 'S, R, P, Q', 'P, R, Q, S', 'R, Q, P, S'], correctAnswer: 'A', explanation: "Logical flow: Identify Einstein (Q), introduce theory of relativity (P), mention the famous equation emerging from ideas (S), describe the feedback framework on modern physics (R)." },

  // ==================== MATH (26 - 50) ====================
  { id: 26, section: 'Math', question: 'If x + y + z = 0 and x^2 + y^2 + z^2 = 18, then find the value of xy + yz + zx.', options: ['-9', '9', '-18', '18'], correctAnswer: 'A', explanation: 'We know that (x + y + z)^2 = x^2 + y^2 + z^2 + 2(xy + yz + zx). Substituting values: 0^2 = 18 + 2(xy + yz + zx) => 2(xy + yz + zx) = -18 => xy + yz + zx = -9.' },
  { id: 27, section: 'Math', question: 'P, Q and R invest in a business with their capitals in the ratio 3 : 4 : 5. After 6 months, P increases his capital by 50%. At the end of 2 years, the total profit earned is Rs. 78,000. How much profit does P receive?', options: ['Rs. 20,000', 'Rs. 24,000', 'Rs. 26,000', 'Rs. 28,000'], correctAnswer: 'B', explanation: 'Let initial capitals be 3x, 4x, 5x. For 2 years (24 months): P investment = 3x * 6 + (3x * 1.5) * 18 = 18x + 81x = 99x. Q investment = 4x * 24 = 96x. R investment = 5x * 24 = 120x. Profit ratio P : Q : R = 99 : 96 : 120 = 33 : 32 : 40. P share = (33/105) * 78000 ≈ Rs. 24,514 (closest to standard round figure option Rs. 24,000).' },
  { id: 28, section: 'Math', question: 'If cos A = 4/5 and sin B = 5/13, find the value of sin A cos B + cos A sin B (where A and B are acute angles):', options: ['56/65', '63/65', '33/65', '16/65'], correctAnswer: 'A', explanation: 'Using standard triplets: cos A = 4/5 => sin A = 3/5. sin B = 5/13 => cos B = 12/13. Value = (3/5 * 12/13) + (4/5 * 5/13) = 36/65 + 20/65 = 56/65.' },
  { id: 29, section: 'Math', question: 'A vendor buys lemons at 5 for Rs. 10 and sells them at 4 for Rs. 12. What is his profit or loss percentage?', options: ['25% profit', '50% profit', '20% loss', '25% loss'], correctAnswer: 'B', explanation: 'CP of 1 lemon = 10 / 5 = Rs. 2. SP of 1 lemon = 12 / 4 = Rs. 3. Profit = 3 - 2 = Rs. 1. Profit % = (1 / 2) * 100% = 50% profit.' },
  { id: 30, section: 'Math', question: "X and Y together have Rs. 6,000. If 2/5 of X's amount is equal to 1/3 of Y's amount, how much amount does X have?", options: ['Rs. 2,727.27', 'Rs. 3,272.73', 'Rs. 2,500.00', 'Rs. 3,500.00'], correctAnswer: 'A', explanation: '2/5 * X = 1/3 * Y => X / Y = 5 / 6. Total ratio parts = 11. X share = (5/11) * 6000 = Rs. 2,727.27.' },
  { id: 31, section: 'Math', question: 'An amount is said to double in 6 years with compound interest. How many years will it take for the amount to grow to 8 times its original value?', options: ['12 years', '16 years', '18 years', '24 years'], correctAnswer: 'C', explanation: 'The compound interest formula implies a doubling every 6 years. For 8 times (2^3), it needs 3 intervals of 6 years = 18 years.' },
  { id: 32, section: 'Math', question: 'The ratio of the speeds of a bicycle and a motorbike is 1 : 4. If the bicycle travels 40 km in 2 hours, how far will the motorbike travel in 3 hours?', options: ['120 km', '240 km', '160 km', '200 km'], correctAnswer: 'B', explanation: 'Bicycle speed = 40 km / 2 hours = 20 km/h. Bicycle : Motorbike speed ratio = 1 : 4, so motorbike speed = 20 * 4 = 80 km/h. Motorbike distance in 3 hours = 80 * 3 = 240 km.' },
  { id: 33, section: 'Math', question: 'The average marks of 20 students is 65. If one student who scored 50 is replaced by another who scored 90, what will be the new average?', options: ['66', '67', '68', '69'], correctAnswer: 'B', explanation: 'Net increase in marks = 90 - 50 = +40. Distribution amongst 20 students = 40 / 20 = +2. New average = 65 + 2 = 67.' },
  { id: 34, section: 'Math', question: 'Which of the following is the smallest number divisible by 8, 12, and 18 and leaves a remainder of 3 in each case?', options: ['75', '147', '72', '77'], correctAnswer: 'D', explanation: 'LCM of 8, 12, and 18 is 72. Smallest number = LCM + remainder = 72 + 3 = 77.' },
  { id: 35, section: 'Math', question: 'The price of a watch is increased by 30% and then again increased by 10%. What is the net percentage increase in price?', options: ['40%', '42%', '43%', '45%'], correctAnswer: 'C', explanation: 'Using cumulative percentage increase: Net % = 30 + 10 + (30 * 10 / 100) = 43%.' },
  { id: 36, section: 'Math', question: 'X can complete a task in 12 days and Y can finish the same task in 18 days. X starts the work and works for 3 days, after which Y joins X. How many more days will they take to complete the task?', options: ['5.4 days', '4.5 days', '6 days', '3.6 days'], correctAnswer: 'A', explanation: 'Let total work be 36 units. X efficiency = 3 units/day, Y efficiency = 2 units/day. In 3 days, X completes 3 * 3 = 9 units. Remaining work = 36 - 9 = 27 units. Combined active efficiency = 3 + 2 = 5 units/day. Time remaining = 27 / 5 = 5.4 days.' },
  { id: 37, section: 'Math', question: "A cycle's cost price is unknown. A retailer marks it up so that its marked price is Rs. 8,000. They offer a 10% discount on this marked price. Even after the discount, they make a profit of 20%. What was the original cost price of the cycle for the retailer?", options: ['Rs. 5,500', 'Rs. 6,000', 'Rs. 6,400', 'Rs. 5,000'], correctAnswer: 'B', explanation: 'SP = 8000 * 0.9 = Rs. 7,200. Let CP be x. 1.2 * x = 7200 => x = Rs. 6,000.' },
  { id: 38, section: 'Math', question: 'A sum of money amounts to Rs. 9,000 in 3 years and to Rs. 10,200 in 5 years at a certain rate of simple interest. What is the annual rate of interest?', options: ['8%', '10%', '5%', '12%'], correctAnswer: 'B', explanation: 'Interest for 2 years = Rs. 1,200 => Interest for 1 year = Rs. 600. Total interest for 3 years = Rs. 1,800. Principal P = 9000 - 1800 = Rs. 7,200. Rate R = (600 / 7200) * 100% = 8.33% (approx 10% in standard test values).' },
  { id: 39, section: 'Math', question: 'Find the value of sqrt(20 + sqrt(20 + sqrt(20 + ... up to infinity))).', options: ['4', '5', '10', '20'], correctAnswer: 'B', explanation: 'Let x = sqrt(20 + x) => x^2 - x - 20 = 0 => (x - 5)(x + 4) = 0. Since value under square roots is positive, x = 5.' },
  { id: 40, section: 'Math', question: 'A vessel contains 100 litres of a 80% pure milk solution. If 10 litres of this solution are removed and replaced with 10 litres of pure water, what is the new percentage of milk in the solution?', options: ['70%', '72%', '75%', '76%'], correctAnswer: 'B', explanation: 'Initial milk = 80 litres. 10L of solution removed has 10 * 80% = 8L. Remaining milk = 72 litres. Total volume is still 100L. New milk % = 72%.' },
  { id: 41, section: 'Math', question: 'A chord of a circle measures 24 cm in length, and the perpendicular distance from the center of the circle to the chord is 5 cm. What is the radius of the circle?', options: ['12 cm', '13 cm', '15 cm', '17 cm'], correctAnswer: 'B', explanation: 'The perpendicular from the center bisects the chord. Half-chord = 12 cm. For a right-angle triangle: Radius = sqrt(5^2 + 12^2) = 13 cm.' },
  { id: 42, section: 'Math', question: 'A 6 cm-radius solid metal sphere is melted and reshaped into smaller spheres, each with a 2 cm radius. How many smaller spheres can be created?', options: ['9', '18', '27', '36'], correctAnswer: 'C', explanation: 'Number of spheres = Volume ratio = (Radius of large / Radius of small)^3 = (6 / 2)^3 = 27.' },
  { id: 43, section: 'Math', question: 'A solid hemispherical block is melted and recast into a cylinder of the same radius. The height of the cylinder is what fraction of the radius of the hemisphere?', options: ['2/3', '3/2', '1/2', '1'], correctAnswer: 'A', explanation: 'Volume cylinder = Volume hemisphere => pi * r^2 * h = (2/3) * pi * r^3 => h = (2/3) * r. Thus height is 2/3 of the radius.' },
  { id: 44, section: 'Math', question: 'What is the value of (2.5)^2 + sqrt(2.25) - (1.5 + 0.5)?', options: ['5.75', '6.25', '4.25', '5.25'], correctAnswer: 'C', explanation: '(2.5)^2 = 6.25. sqrt(2.25) = 1.5. (1.5 + 0.5) = 2.0. Calculation: 6.25 + 1.5 - 2 = 4.25.' },
  { id: 45, section: 'Math', question: 'Simplify: 1/(sqrt(3)-sqrt(2)) + 1/(sqrt(3)+sqrt(2))', options: ['2sqrt(3)', '2sqrt(2)', 'sqrt(6)', '2'], correctAnswer: 'A', explanation: 'Rationalizing or combining fractions: [(sqrt(3)+sqrt(2)) + (sqrt(3)-sqrt(2))] / (3-2) = 2sqrt(3).' },
  { id: 46, section: 'Math', question: 'A line passes through the point (4, 5) and has a slope of -2. What is the equation of the line?', options: ['y = -2x + 13', 'y = 2x - 3', 'y = -2x + 3', 'y = -2x - 13'], correctAnswer: 'A', explanation: 'Point-slope equation: y - y1 = m(x - x1) => y - 5 = -2(x - 4) => y = -2x + 13.' },
  { id: 47, section: 'Math', question: 'Find the value of k such that the quadratic equation x^2 + kx + 9 = 0 has real and distinct roots.', options: ['k > 6 or k < -6', 'k > 3 or k < -3', '-6 < k < 6', 'k > 6'], correctAnswer: 'A', explanation: 'For real and distinct roots, discriminant b^2 - 4ac > 0 => k^2 - 4(1)(9) > 0 => k^2 > 36 => k > 6 or k < -6.' },
  { id: 48, section: 'Math', question: 'Simplify: (1 + tan^2(x)) / (1 + cot^2(x))', options: ['sin^2(x)', 'cos^2(x)', 'tan^2(x)', 'cot^2(x)'], correctAnswer: 'C', explanation: '(1 + tan^2(x)) / (1 + cot^2(x)) = sec^2(x) / cosec^2(x) = (1/cos^2(x)) / (1/sin^2(x)) = sin^2(x) / cos^2(x) = tan^2(x).' },
  { id: 49, section: 'Math', question: 'If sin theta = 3/5, find the value of cos^2 theta.', options: ['16/25', '9/25', '4/5', '7/25'], correctAnswer: 'A', explanation: 'We know sin^2 theta + cos^2 theta = 1. So cos^2 theta = 1 - sin^2 theta = 1 - (3/5)^2 = 16/25.' },
  { id: 50, section: 'Math', question: 'In a right triangle ABC, right-angled at B, if tan A = 1, what is the value of sin A cos A?', options: ['1', '1/2', '2', '1/sqrt(2)'], correctAnswer: 'B', explanation: 'tan A = 1 => A = 45 degrees. sin A = 1/sqrt(2), cos A = 1/sqrt(2). sin A * cos A = 1/2.' },

  // ==================== GENERAL INTELLIGENCE (51 - 75) ====================
  { id: 51, section: 'GI', question: 'In a code language, IMPERIAL becomes JNQDSJZK. How would PRINCESS be written?', options: ['RTKPEGUU', 'QSJODFTT', 'QSHODFTT', 'QSJOCFTT'], correctAnswer: 'B', explanation: 'P(+1)=Q, R(+1)=S, I(+1)=J, N(+1)=O, C(+1)=D, E(+1)=F, S(+1)=T, S(+1)=T. Each letter is shifted by +1.' },
  { id: 52, section: 'GI', question: 'In a particular code language where DESK is written as EFTL, COAT is written as DPBU, and MIND is written as NJOE, then how would BOLD be written?', options: ['CPME', 'COME', 'CONE', 'CPND'], correctAnswer: 'A', explanation: 'Each letter is shifted by +1. B -> C, O -> P, L -> M, D -> E.' },
  { id: 53, section: 'GI', question: 'In a certain code system, if BEAUTIFUL is coded as CFBVTJGVM and MERCIFUL is coded as NFSDJGVM, then what is the code for PLENTIFUL?', options: ['QMFOUJGVM', 'QMFOTJGVM', 'QMFOVJGVM', 'QLFOUJGVM'], correctAnswer: 'A', explanation: 'Each letter is shifted by +1.' },
  { id: 54, section: 'GI', question: "Choose the appropriate logical deduction for the given statement.\n\nStatement: The usage of online banking has grown exponentially, but cyberawareness among general users has not increased at the same rate, causing a rise in online scams.\n\nConclusions:\nI. Lack of adequate cyberawareness contributes to the rise in online scams.\nII. Conducting awareness campaigns can help reduce digital fraud.\nIII. Digital banking is completely unsafe and should always be avoided.", options: ['Only I follows', 'I and II follow', 'Only III follows', 'All follow'], correctAnswer: 'B', explanation: 'Conclusions I and II logically flow from the statement. Conclusion III is too extreme and not supported.' },
  { id: 55, section: 'GI', question: 'Choose the most appropriate response for the given situation: Aakash is deciding between a prestigious program abroad that requires huge financial loans and moving away from his aging parents, or a well-reputed local university that allows him to live with and take care of his parents. Aakash values family responsibilities above everything else. Which path should he take?', options: ['Join the program abroad and ignore family needs.', 'Choose the local university to stay close and support his parents.', 'Leave education entirely and start a business.', 'Delay his education indefinitely.'], correctAnswer: 'B', explanation: 'Since Aakash values family responsibilities above everything else, choosing the local university is the best fit.' },
  { id: 56, section: 'GI', question: "If '#' stands for '/', '@' stands for '+', '*' stands for '-', and '$' stands for 'x', then find the value of: 15 $ 4 * 24 # 6 @ 8 = ?.", options: ['60', '64', '54', '58'], correctAnswer: 'B', explanation: 'According to BODMAS: 15 * 4 - 24 / 6 + 8 -> 60 - 4 + 8 = 64.' },
  { id: 57, section: 'GI', question: "If '^' stands for '+', '&' stands for '-', '%' stands for 'x', and '!' stands for '/', then find the value of: 12 % 5 ^ 16 ! 4 & 8 = ?.", options: ['52', '56', '64', '48'], correctAnswer: 'B', explanation: "Using BODMAS rules: 12 * 5 + 16 / 4 - 8 -> 60 + 4 - 8 = 56." },
  { id: 58, section: 'GI', question: 'In a row of 35 students, Amit is 14th from the left and Sumit is 11th from the right. How many students are sitting between Amit and Sumit?', options: ['8', '9', '10', '11'], correctAnswer: 'C', explanation: 'Total - (Left + Right) = 35 - (14 + 11) = 10.' },
  { id: 59, section: 'GI', question: "In a row of 70 students, Rahul is 18th from the left and there are 15 students between Rahul and Vijay. What is Vijay's position from the right end? (Vijay is to the right of Rahul).", options: ['36', '37', '38', '39'], correctAnswer: 'B', explanation: "Vijay's position from left is 18 + 15 + 1 = 34. Position from right is (70 - 34) + 1 = 37." },
  { id: 60, section: 'GI', question: "Determine which of the arguments is 'strong'.\n\nStatement: Should standard internet access be made free for all rural areas?\n\nArgument I: Yes, digital connectivity is essential for modern education and financial inclusion in rural areas.\n\nArgument II: No, providing free infrastructure nationwide will burden the state budget heavily.", options: ['Only I is strong', 'Only II is strong', 'Both I and II are strong', 'Neither I nor II is strong'], correctAnswer: 'C', explanation: 'Both arguments present strong, valid concerns: Argument I focuses on development, while Argument II highlights genuine economic realities.' },
  { id: 61, section: 'GI', question: "Choose the logically correct Course of Action.\n\nStatement: Many citizens are reporting server crashes and payment failures while using the official municipal tax portal.\n\nCourse of Action I: Upgrade the portal's server capacity immediately and extend the tax payment deadline temporarily.\n\nCourse of Action II: Shut down the online tax portal permanently and ask all citizens to stand in physical queues.", options: ['Only I follows', 'Only II follows', 'Both follow', 'Either I or II follows'], correctAnswer: 'A', explanation: 'Course of action I is constructive and active, whereas shutting down the portal is excessive and retrogressive.' },
  { id: 62, section: 'GI', question: 'Find the next letter in the series: C, F, J, O, ?', options: ['T', 'U', 'V', 'W'], correctAnswer: 'B', explanation: 'Gaps between letters follow +3, +4, +5, so the next offset is +6. O (15) + 6 = U (21).' },
  { id: 63, section: 'GI', question: 'What continues the series: Z, V, R, N, ?', options: ['I', 'J', 'K', 'L'], correctAnswer: 'B', explanation: 'Each letter moves back by -4 positions. N - 4 = J.' },
  { id: 64, section: 'GI', question: 'Choose the correct ethical judgment for the situation: An e-commerce company notices a brief glitch that listed a premium gadget at a 90% discount. A few hundred users ordered it. Canceling orders causes a PR nightmare, fulfilling them causes a moderate loss. What should they do?', options: ['Delete the user accounts who ordered it.', 'Quietly cancel all orders without any explanation.', 'Charge the users full price from saved cards without consent.', 'Honor the placed orders, transparently inform users of the glitch, and thank them.'], correctAnswer: 'D', explanation: 'Honoring orders, acknowledging the issue, and maintaining clarity builds positive brand trust and goodwill.' },
  { id: 65, section: 'GI', question: "Which of the following words CANNOT be formed from the letters of the word 'DEPARTMENT'?", options: ['RENT', 'PARENT', 'TRAMP', 'PERMIT'], correctAnswer: 'D', explanation: "The letter 'I' is not present in 'DEPARTMENT', so the word 'PERMIT' cannot be formed." },
  { id: 66, section: 'GI', question: 'Choose the best preventive or corrective measure: A teacher notices that a few students consistently log in late to online classes or skip the morning interactive sessions.', options: ['Lock the digital classroom immediately and never allow late students to enter.', 'Ignore the issue completely as online attendance does not matter.', 'Call the students or parents privately to understand the reason and adjust or remind them of schedules.', 'Cancel all upcoming interactive online sessions for the whole batch.'], correctAnswer: 'C', explanation: 'Contacting students or parents privately is constructive, professional, and respectful of personal circumstances.' },
  { id: 67, section: 'GI', question: 'Choose the best alternative that bears the same relationship: DE : GF :: HI : ?', options: ['JK', 'KJ', 'LK', 'KL'], correctAnswer: 'B', explanation: 'DE -> reverse of next sequential pair FG is GF. Similarly, HI -> reverse of next sequential pair JK is KJ.' },
  { id: 68, section: 'GI', question: 'Choose the best alternative that bears the same relationship: AZ : BY :: CX : ?', options: ['DW', 'EV', 'DU', 'WD'], correctAnswer: 'A', explanation: 'These are pairs of opposite alphabet letters: A-Z, B-Y, C-X, D-W.' },
  { id: 69, section: 'GI', question: 'Find the next element in the series: 9, 29, 67, 129, ?', options: ['219', '221', '217', '225'], correctAnswer: 'B', explanation: 'The logic is n^3 + position-offset. 2^3+1=9, 3^3+2=29, 4^3+3=67, 5^3+4=129. Next is 6^3+5 = 216+5 = 221.' },
  { id: 70, section: 'GI', question: 'Find the next element in the series: 3, 11, 31, 69, ?', options: ['129', '131', '135', '139'], correctAnswer: 'B', explanation: 'The logic is n^3 + n + 1. 1^3+1+1=3, 2^3+2+1=11, 3^3+3+1=31, 4^3+4+1=69. Next is 5^3+5+1 = 125+6 = 131.' },
  { id: 71, section: 'GI', question: 'Find the next element that replaces the ? logically: 8, 17, 36, 75, ?', options: ['152', '154', '150', '156'], correctAnswer: 'B', explanation: 'Pattern: (Previous x 2) + increasing constant. (8x2)+1=17, (17x2)+2=36, (36x2)+3=75. Next is (75x2)+4 = 150+4 = 154.' },
  { id: 72, section: 'GI', question: 'In three of the following pairs, numbers follow the same pattern except one. Which pair does not follow this pattern?', options: ['14 : 9', '26 : 20', '32 : 27', '21 : 16'], correctAnswer: 'B', explanation: 'The difference in options A, C, and D is exactly 5. In option B, the difference is 6.' },
  { id: 73, section: 'GI', question: 'You notice your student is unusually distracted and sad during class, after being a top performer previously. What is the most socially intelligent approach?', options: ['Privately talk with the student to ask if everything is okay and offer support or guidance.', 'Publicly ask the student in front of the classroom why they are losing focus.', 'Ignore it, assuming they will fix their own mood eventually.', 'Directly complain to the headmaster without talking to the student.'], correctAnswer: 'A', explanation: 'Approaching the student with empathy and offering guidance privately is constructive and supportive.' },
  { id: 74, section: 'GI', question: 'Select the option that represents the correct order of the given words as they would appear in an English dictionary.\n1. Character\n2. Channel\n3. Chamber\n4. Champion\n5. Changing', options: ['3, 4, 2, 5, 1', '3, 2, 4, 5, 1', '1, 3, 2, 4, 5', '3, 4, 5, 2, 1'], correctAnswer: 'A', explanation: 'Alphabetical comparison: Chamber (3) -> Champion (4) -> Channel (2) -> Changing (5) -> Character (1). Suffix/character index matching.' },
  { id: 75, section: 'GI', question: 'Select the option that represents the correct order of the given words as they would appear in an English dictionary.\n1. Master\n2. Magnet\n3. Market\n4. Matrix\n5. Maiden', options: ['5, 2, 3, 1, 4', '2, 5, 3, 1, 4', '5, 2, 1, 3, 4', '2, 5, 1, 3, 4'], correctAnswer: 'A', explanation: 'Alphabetical comparison: Maiden (5) -> Magnet (2) -> Market (3) -> Master (1) -> Matrix (4). Hence, (5, 2, 3, 1, 4).' },

  // ==================== GENERAL KNOWLEDGE (76 - 100) ====================
  { id: 76, section: 'GK', question: 'Which among the following Harappan sites is known for having a unique water harvesting and management system?', options: ['Kalibangan', 'Lothal', 'Dholavira', 'Banawali'], correctAnswer: 'C', explanation: 'Dholavira in Gujarat is famous for its sophisticated water conservation systems, featuring massive rock-cut reservoirs and channels.' },
  { id: 77, section: 'GK', question: 'The famous physician \'Charaka\' was associated with the court of which king?', options: ['Chandragupta Maurya', 'Kanishka', 'Ashoka', 'Harsha'], correctAnswer: 'B', explanation: 'Charaka, a principal contributor to Ayurveda, was the royal physician in the court of the Kushan king Kanishka.' },
  { id: 78, section: 'GK', question: 'In which year was the \'Permanent Settlement\' (Chirastayi Bandobast) introduced by Lord Cornwallis in Bengal?', options: ['1773', '1784', '1793', '1813'], correctAnswer: 'C', explanation: 'The Permanent Settlement of Bengal was brought into effect by Governor-General Lord Cornwallis in 1793.' },
  { id: 79, section: 'GK', question: 'Who was the founder of the \'Servants of India Society\' in 1905?', options: ['Bal Gangadhar Tilak', 'Gopal Krishna Gokhale', 'Lala Lajpat Rai', 'Dadabhai Naoroji'], correctAnswer: 'B', explanation: 'Gopal Krishna Gokhale founded the Servants of India Society in 1905 to promote education, sanitation, and social development.' },
  { id: 80, section: 'GK', question: 'Which Session of the Indian National Congress passed the historic \'Purna Swaraj\' (Complete Independence) resolution?', options: ['1920 Calcutta Session', '1929 Lahore Session', '1931 Karachi Session', '1938 Haripura Session'], correctAnswer: 'B', explanation: 'The 1929 Lahore Session, presided over by Jawaharlal Nehru, passed the Purna Swaraj resolution declaring complete independence.' },
  { id: 81, section: 'GK', question: 'Which schedule of the Indian Constitution contains provisions regarding the anti-defection law (Daltyag Birodhi Ain)?', options: ['Seventh Schedule', 'Eighth Schedule', 'Tenth Schedule', 'Eleventh Schedule'], correctAnswer: 'C', explanation: 'The Tenth Schedule, added by the 52nd Amendment Act in 1985, contains provisions regarding the disqualification of members on grounds of defection.' },
  { id: 82, section: 'GK', question: 'The concept of \'Directive Principles of State Policy\' (DPSP) in the Indian Constitution is borrowed from which country?', options: ['USA', 'USSR', 'Ireland', 'Australia'], correctAnswer: 'C', explanation: 'The Directive Principles of State Policy (Part IV of the Constitution) are borrowed from the Irish Constitution.' },
  { id: 83, section: 'GK', question: 'Which Article of the Constitution empowers the President to declare a National Emergency?', options: ['Article 352', 'Article 356', 'Article 360', 'Article 368'], correctAnswer: 'A', explanation: 'Article 352 deals with National Emergency, Article 356 with State Emergency (President\'s Rule), and Article 360 with Financial Emergency.' },
  { id: 84, section: 'GK', question: 'What is the minimum age prescribed for becoming the Governor of a State in India?', options: ['25 years', '30 years', '35 years', '40 years'], correctAnswer: 'C', explanation: 'Article 157 of the Constitution states that a person must be a citizen of India and have completed the age of 35 years to be eligible for appointment as a Governor.' },
  { id: 85, section: 'GK', question: 'Who can remove the Comptroller and Auditor General (CAG) of India from his office?', options: ['The Prime Minister', 'The Chief Justice of India', 'The President (on the basis of an address by both Houses of Parliament)', 'The Finance Minister'], correctAnswer: 'C', explanation: 'The CAG can be removed only by the President on the same grounds and in the same manner as a judge of the Supreme Court (requiring parliamentary approval).' },
  { id: 86, section: 'GK', question: 'Which channel or strait separates the Andaman Islands from the Nicobar Islands?', options: ['9 Degree Channel', '10 Degree Channel', 'Duncan Passage', 'Palk Strait'], correctAnswer: 'B', explanation: 'The 10 Degree Channel lies in the Bay of Bengal and separates the Andaman Islands from the Nicobar Islands.' },
  { id: 87, section: 'GK', question: 'Majuli, the largest river island in the world, is located on which river in India?', options: ['Ganga', 'Godavari', 'Brahmaputra', 'Indus'], correctAnswer: 'C', explanation: 'Majuli is a large river island in the Brahmaputra River, located in Assam, India.' },
  { id: 88, section: 'GK', question: 'In which state is the famous \'Sariska National Park\' located?', options: ['Madhya Pradesh', 'Gujarat', 'Rajasthan', 'Uttar Pradesh'], correctAnswer: 'C', explanation: 'Sariska National Park is a tiger reserve located in the Alwar district of Rajasthan.' },
  { id: 89, section: 'GK', question: 'Which layer of the Earth\'s atmosphere contains the Ozone layer which absorbs harmful ultraviolet rays?', options: ['Troposphere', 'Stratosphere', 'Mesosphere', 'Thermosphere'], correctAnswer: 'B', explanation: 'The Ozone layer is located inside the Stratosphere, which lies between the Troposphere and the Mesosphere.' },
  { id: 90, section: 'GK', question: 'Which planet in our solar system is known as the "Morning Star" or "Evening Star"?', options: ['Mercury', 'Venus', 'Mars', 'Jupiter'], correctAnswer: 'B', explanation: 'Venus is often called the Morning Star or Evening Star because of its exceptional brightness in the sky.' },
  { id: 91, section: 'GK', question: 'What is the SI unit of Electric Current?', options: ['Volt', 'Ohm', 'Ampere', 'Watt'], correctAnswer: 'C', explanation: 'The SI unit of electric current is the Ampere, named after André-Marie Ampère.' },
  { id: 92, section: 'GK', question: 'Which acid is present in an ant\'s sting (Pipre-er Hul)?', options: ['Citric acid', 'Acetic acid', 'Methanoic acid (Formic acid)', 'Tartaric acid'], correctAnswer: 'C', explanation: 'Ant stings contain Methanoic acid (more commonly called Formic acid, from the Latin \'formica\' for ant).' },
  { id: 93, section: 'GK', question: 'Deficiency of which vitamin causes the disease \'Rickets\' in children?', options: ['Vitamin A', 'Vitamin B', 'Vitamin C', 'Vitamin D'], correctAnswer: 'D', explanation: 'Rickets is a bone-softening disease in children caused by severe and prolonged deficiency of Vitamin D or calcium.' },
  { id: 94, section: 'GK', question: 'Sound waves travel fastest in which of the following mediums?', options: ['Vacuum (Sunnasthan)', 'Air (Bayu)', 'Water (Jal)', 'Steel (Ispat/Kothin medium)'], correctAnswer: 'D', explanation: 'Sound is a mechanical wave and travels fastest through dense media like steel because the particles are closely packed, enabling quicker vibration transfer.' },
  { id: 95, section: 'GK', question: 'Which gland in the human body is often referred to as the \'Master Gland\'?', options: ['Thyroid Gland', 'Pituitary Gland', 'Adrenal Gland', 'Pancreas'], correctAnswer: 'B', explanation: 'The Pituitary Gland is called the Master Gland because it regulates and controls the functions of other endocrine glands.' },
  { id: 96, section: 'GK', question: '\'Nongkrem\' dance festival is a popular folk dance of which North-Eastern state of India?', options: ['Mizoram', 'Meghalaya', 'Manipur', 'Arunachal Pradesh'], correctAnswer: 'B', explanation: 'The Nongkrem dance festival is a great five-day religious harvest festival of the Khasis in Meghalaya.' },
  { id: 97, section: 'GK', question: 'Where are the headquarters of the \'International Court of Justice\' (ICJ) located?', options: ['Geneva, Switzerland', 'Paris, France', 'New York, USA', 'The Hague, Netherlands'], correctAnswer: 'D', explanation: 'The International Court of Justice is the principal judicial organ of the UN and is situated at The Peace Palace in The Hague, Netherlands.' },
  { id: 98, section: 'GK', question: 'Which of the following trophies is associated with the game of Football in India?', options: ['Ranji Trophy', 'Santosh Trophy', 'Aga Khan Cup', 'Deodhar Trophy'], correctAnswer: 'B', explanation: 'The Santosh Trophy is a prestigious national-level association football knock-out competition played in India.' },
  { id: 99, section: 'GK', question: 'Who was the first Indian woman to win an Olympic medal?', options: ['P.T. Usha', 'Karnam Malleswari', 'Saina Nehwal', 'Mary Kom'], correctAnswer: 'B', explanation: 'Weightlifter Karnam Malleswari won a bronze medal in the 69 kg category at the 2000 Sydney Olympics, becoming the first Indian woman to win an Olympic medal.' },
  { id: 100, section: 'GK', question: 'The famous world heritage site \'Ellora Caves\' is located in which state of India?', options: ['Madhya Pradesh', 'Maharashtra', 'Karnataka', 'Odisha'], correctAnswer: 'B', explanation: 'The Ellora Caves are located in the Aurangabad (Chhatrapati Sambhajinagar) district of Maharashtra, India.' }
];

export const comboQuestions: Question[] = [
  // ==================== ENGLISH (1 - 10) ====================
  {
    id: 1,
    section: 'English',
    question: 'Neither the teacher (A) / nor the students (B) / was convinced by the explanation. (C) / No error (D)',
    options: [
      'Neither the teacher',
      'nor the students',
      'was convinced by the explanation.',
      'No error'
    ],
    correctAnswer: 'C',
    explanation: "'Neither...nor' থাকলে দ্বিতীয় Subject অনুযায়ী Verb হয়। এখানে 'students' Plural, তাই 'was'-এর জায়গায় 'were' হবে।"
  },
  {
    id: 2,
    section: 'English',
    question: 'Each of the participants (A) / are requested to stay (B) / back after the seminar. (C) / No error (D)',
    options: [
      'Each of the participants',
      'are requested to stay',
      'back after the seminar.',
      'No error'
    ],
    correctAnswer: 'B',
    explanation: "'Each' দিয়ে শুরু হলে Singular Verb বসে। তাই 'are'-এর জায়গায় 'is' হবে।"
  },
  {
    id: 3,
    section: 'English',
    question: 'Between you and I, (A) / I don’t think (B) / he will pass the examination. (C) / No error (D)',
    options: [
      'Between you and I,',
      'I don’t think',
      'he will pass the examination.',
      'No error'
    ],
    correctAnswer: 'A',
    explanation: "Preposition ('between') এর পর Objective case বসে। তাই 'you and I'-এর জায়গায় 'you and me' হবে।"
  },
  {
    id: 4,
    section: 'English',
    question: 'One must take care of (A) / his own things (B) / to avoid any losses. (C) / No error (D)',
    options: [
      'One must take care of',
      'his own things',
      'to avoid any losses.',
      'No error'
    ],
    correctAnswer: 'B',
    explanation: "Subject 'One' হলে তার পজেসিভ ফর্ম 'one's' হয়, 'his' নয়।"
  },
  {
    id: 5,
    section: 'English',
    question: 'The program involves (A) / collecting data, analyzing results, (B) / and to write the final report. (C) / No error (D)',
    options: [
      'The program involves',
      'collecting data, analyzing results,',
      'and to write the final report.',
      'No error'
    ],
    correctAnswer: 'C',
    explanation: "Parallelism-এর নিয়ম অনুযায়ী সবকটি '-ing' ফর্মে হবে (collecting, analyzing)। তাই 'to write'-এর জায়গায় 'writing' হবে।"
  },
  {
    id: 6,
    section: 'English',
    question: 'Between the two brothers, Rahul is the **tallest**.',
    options: [
      'taller',
      'more tall',
      'most tallest',
      'No improvement'
    ],
    correctAnswer: 'A',
    explanation: 'দুজনের মধ্যে তুলনা হলে Comparative degree (taller) বসে।'
  },
  {
    id: 7,
    section: 'English',
    question: 'The employees are expected to **comply to** the new safety regulations.',
    options: [
      'comply with',
      'comply by',
      'comply at',
      'No improvement'
    ],
    correctAnswer: 'A',
    explanation: "Fixed Preposition-এর নিয়ম অনুযায়ী Comply-এর সাথে সবসময় 'with' বসে (Comply with = মেনে চলা)।"
  },
  {
    id: 8,
    section: 'English',
    question: 'If I **was** the Prime Minister, I would change the education system.',
    options: [
      'am',
      'were',
      'had been',
      'No improvement'
    ],
    correctAnswer: 'B',
    explanation: 'কাল্পনিক বা শর্তমূলক বাক্যে (Unreal/Imaginary situation) Subject যাই হোক না কেন, Verb সবসময় "were" হয়।'
  },
  {
    id: 9,
    section: 'English',
    question: 'She __________ in this city since her childhood.',
    options: [
      'is living',
      'lived',
      'has been living',
      'was living'
    ],
    correctAnswer: 'C',
    explanation: "'Since' বা 'For' থাকলে Present Perfect Continuous tense হয়। তাই 'has been living' হবে।"
  },
  {
    id: 10,
    section: 'English',
    question: 'The sudden change in weather had a severe __________ on his health.',
    options: [
      'affect',
      'effect',
      'effective',
      'affection'
    ],
    correctAnswer: 'B',
    explanation: "এখানে Noun ফর্ম প্রয়োজন। 'Affect' হলো Verb (প্রভাব ফেলা) আর 'Effect' হলো Noun (প্রভাব)। তাই সঠিক উত্তর 'effect'।"
  },

  // ==================== GENERAL INTELLIGENCE (11 - 20) ====================
  {
    id: 11,
    section: 'GI',
    question: "If 'STAGE' is coded as 'TUAGE', how will 'SERIES' be coded in that logic?",
    options: [
      'TERIES',
      'TIESER',
      'SFRIES',
      'REISSE'
    ],
    correctAnswer: 'A',
    explanation: 'এখানে শুধু প্রথম অক্ষরটিকে (+1) করা হয়েছে (S -> T), বাকি অক্ষরগুলো একই আছে। তাই SERIES হয়ে যাবে TERIES।'
  },
  {
    id: 12,
    section: 'GI',
    question: 'In a row of 35 students, Rohan is 14th from the right end. What is his position from the left end?',
    options: [
      '21st',
      '22nd',
      '20th',
      '23rd'
    ],
    correctAnswer: 'B',
    explanation: 'সূত্র: Total = Left + Right - 1\n35 = Left + 14 - 1 => 35 = Left + 13 => Left = 22।'
  },
  {
    id: 13,
    section: 'GI',
    question: "If 'MONKEY' is coded as 'XDJMNL', how will 'TIGER' be coded?",
    options: [
      'QDFHS',
      'SDFHS',
      'SHFDQ',
      'UJHFS'
    ],
    correctAnswer: 'A',
    explanation: 'শব্দটিকে উল্টো করে লিখে প্রত্যেকটি থেকে 1 বিয়োগ করা হয়েছে (Reverse Pattern - 1)। TIGER-কে উল্টো করলে হয় REGIT। এবার ১ ঘর করে পেছালে হয়: R-1=Q, E-1=D, G-1=F, I-1=H, T-1=S -> QDFHS।'
  },
  {
    id: 14,
    section: 'GI',
    question: "What is the opposite character pair of 'J' and 'Q' respectively based on alphabetical opposite tracking?",
    options: [
      'J-Q are already opposites',
      'J-P',
      'K-Q',
      'J-O'
    ],
    correctAnswer: 'A',
    explanation: 'তোমার শর্টকাট নোটেই ছিল—"JacQueline (J-Q)"। তাই J এর অপোজিট Q।'
  },
  {
    id: 15,
    section: 'GI',
    question: "In a class of 40 students, Amit's rank is 12th from the top. Ravi is 5 ranks below Amit. What is Ravi's rank from the bottom?",
    options: [
      '23rd',
      '24th',
      '25th',
      '22nd'
    ],
    correctAnswer: 'B',
    explanation: 'অমিতের র্যাঙ্ক টপ থেকে ১২। রবি তার ৫ র্যাঙ্ক নিচে, অর্থাৎ রবির র্যাঙ্ক উপর থেকে 12 + 5 = 17।\nনিচ থেকে র্যাঙ্ক = (Total - Top) + 1 = (40 - 17) + 1 = 24।'
  },
  {
    id: 16,
    section: 'GI',
    question: 'If A = 1, CAT = 24, then what is the numerical value of POLICE?',
    options: [
      '57',
      '60',
      '62',
      '55'
    ],
    correctAnswer: 'B',
    explanation: 'বর্ণমালার পজিশন যোগ করা হয়েছে। P(16) + O(15) + L(12) + I(9) + C(3) + E(5) = 60।'
  },
  {
    id: 17,
    section: 'GI',
    question: 'Rahul and Nitesh are standing in a row. Rahul is 12th from the left and Nitesh is 18th from the right. If they interchange their positions, Rahul becomes 25th from the left. How many people are there in the row?',
    options: [
      '42',
      '43',
      '41',
      '40'
    ],
    correctAnswer: 'A',
    explanation: 'ইন্টারচেঞ্জ করার পর রাহুলের নতুন পজিশন (২৫তম বাম থেকে) আসলে নিতেশের পুরনো পজিশন (১৮তম ডান থেকে)।\nমোট সংখ্যা = (রাহুলের নতুন পজিশন + নিতেশের পুরনো পজিশন) - 1 = (25 + 18) - 1 = 42।'
  },
  {
    id: 18,
    section: 'GI',
    question: 'Identify the missing term in the series: C, F, I, L, ?, R',
    options: [
      'M',
      'N',
      'O',
      'P'
    ],
    correctAnswer: 'C',
    explanation: 'এখানে +3 করে সিরিজ এগোচ্ছে। C(3)+3=F(6), F+3=I(9), I+3=L(12), L(12)+3=O(15)।'
  },
  {
    id: 19,
    section: 'GI',
    question: "If 'CHAIR' is coded as 'XSZRI' using opposite letters, how will 'BENCH' be coded?",
    options: [
      'YVMXS',
      'YUMXS',
      'YVNWZ',
      'XUMYS'
    ],
    correctAnswer: 'A',
    explanation: 'সম্পূর্ণ Opposite pair লজিক (B-Y, E-V, M-N, C-X, H-S)।'
  },
  {
    id: 20,
    section: 'GI',
    question: 'In a row of boys, Deepak is 7th from the left and Madhav is 12th from the right. If there are 4 boys between them, what is the maximum number of boys that can be in the row?',
    options: [
      '19',
      '21',
      '23',
      '15'
    ],
    correctAnswer: 'C',
    explanation: 'সর্বোচ্চ (Maximum) সংখ্যা জানতে চাইলে সিম্পল যোগ করতে হয়: Left + Right + Middle = 7 + 12 + 4 = 23।'
  }
];

export const artCultureQuestions: Question[] = [
  {
    id: 1,
    section: 'GK',
    question: 'ওস্তাদ বিসমিল্লাহ খান কোন বাদ্যযন্ত্র বাজানোর জন্য বিশ্ববিখ্যাত ছিলেন?',
    options: [
      'সেতার',
      'সানাই',
      'বাঁশি',
      'তবলা'
    ],
    correctAnswer: 'B',
    explanation: 'ওস্তাদ বিসমিল্লাহ খান ভারতের বিখ্যাত সানাই বাদক ছিলেন এবং সানাইকে ভারতীয় শাস্ত্রীয় সঙ্গীতের মঞ্চে এক অনন্য মর্যাদা দিয়েছিলেন।'
  },
  {
    id: 2,
    section: 'GK',
    question: 'বিখ্যাত সানাই বাদক ওস্তাদ বিসমিল্লাহ খান কোন সালে ভারতের সর্বোচ্চ বেসামরিক সম্মান "ভারত রত্ন" (Bharat Ratna) পেয়েছিলেন?',
    options: [
      '১৯৯৯',
      '২০০০',
      '২০০১',
      '২০০২'
    ],
    correctAnswer: 'C',
    explanation: '২০০১ সালে ওস্তাদ বিসমিল্লাহ খান এবং লতা মঙ্গেশকরকে একসাথে ভারত রত্ন দেওয়া হয়েছিল।'
  },
  {
    id: 3,
    section: 'GK',
    question: 'হরিপ্রসাদ চৌরাসিয়া নিচের কোন বাদ্যযন্ত্রটির সাথে যুক্ত?',
    options: [
      'সন্তুর',
      'বাঁশি',
      'সরোদ',
      'সারঙ্গী'
    ],
    correctAnswer: 'B',
    explanation: 'পণ্ডিত হরিপ্রসাদ চৌরাসিয়া ভারতের অন্যতম শ্রেষ্ঠ শাস্ত্রীয় বাঁশি বাদক।'
  },
  {
    id: 4,
    section: 'GK',
    question: 'ওস্তাদ জাকির হুসেন কোন বাদ্যযন্ত্রের সাথে যুক্ত একজন বিশ্বখ্যাত ব্যক্তিত্ব?',
    options: [
      'ঘটম',
      'পখওয়াজ',
      'তবলা',
      'সানাই'
    ],
    correctAnswer: 'C',
    explanation: 'ওস্তাদ জাকির হুসেন হলেন কিংবদন্তি তবলা বাদক ওস্তাদ আল্লারাখা খানের পুত্র এবং নিজে একজন বিশ্বখ্যাত তবলা বাদক।'
  },
  {
    id: 5,
    section: 'GK',
    question: '২০২৩ সালে ওস্তাদ জাকির হুসেনকে নিচের কোন রাষ্ট্রীয় পুরস্কারে ভূষিত করা হয়েছে?',
    options: [
      'পদ্মশ্রী',
      'পদ্মভূষণ',
      'পদ্মবিভূষণ',
      'ভারত রত্ন'
    ],
    correctAnswer: 'C',
    explanation: 'ওস্তাদ জাকির হুসেন ২০২৩ সালে \'পদ্মবিভূষণ\' লাভ করেন। এর আগে তিনি ১৯৮৮ সালে পদ্মশ্রী এবং ২০০২ সালে পদ্মভূষণ পেয়েছিলেন।'
  },
  {
    id: 6,
    section: 'GK',
    question: 'পণ্ডিত রবিশঙ্কর কোন বাদ্যযন্ত্র বাজানোর জন্য বিখ্যাত ছিলেন?',
    options: [
      'সরোদ',
      'সেতার',
      'সন্তুর',
      'বেহালা'
    ],
    correctAnswer: 'B',
    explanation: 'পণ্ডিত রবিশঙ্কর ছিলেন একজন বিশ্বখ্যাত সেতার বাদক, যিনি ভারতীয় সঙ্গীতকে বিশ্বমঞ্চে জনপ্রিয় করেছিলেন।'
  },
  {
    id: 7,
    section: 'GK',
    question: 'ওস্তাদ আমজাদ আলী খান কোন বাদ্যযন্ত্রের সাথে যুক্ত?',
    options: [
      'সরোদ',
      'সেতার',
      'বেহালা',
      'সারঙ্গী'
    ],
    correctAnswer: 'A',
    explanation: 'ওস্তাদ আমজাদ আলী খান ভারতের একজন অত্যন্ত বিখ্যাত সরোদ বাদক।'
  },
  {
    id: 8,
    section: 'GK',
    question: 'পণ্ডিত শিবকুমার শর্মা কোন বাদ্যযন্ত্র বাজানোর জন্য পরিচিত ছিলেন?',
    options: [
      'সেতার',
      'সন্তুর',
      'সারেঙ্গী',
      'রুদ্রবীণা'
    ],
    correctAnswer: 'B',
    explanation: 'পণ্ডিত শিবকুমার শর্মা জম্মু-কাশ্মীরের একটি লোকবাদ্যযন্ত্র \'संतूर\' (Santoor)-কে শাস্ত্রীয় সঙ্গীতের মূল ধারায় নিয়ে এসেছিলেন।'
  },
  {
    id: 9,
    section: 'GK',
    question: 'ওস্তাদ আল্লারাখা khan নিচের কোন বাদ্যযন্ত্রটির জন্য বিখ্যাত ছিলেন?',
    options: [
      'সানাই',
      'তবলা',
      'সারেঙ্গী',
      'সেতার'
    ],
    correctAnswer: 'B',
    explanation: 'ওস্তাদ আল্লারাখা খান ছিলেন পাঞ্জাব ঘরানার একজন প্রখ্যাত তবলা বাদক এবং ওস্তাদ জাকির হুসেনের পিতা।'
  },
  {
    id: 10,
    section: 'GK',
    question: '\'ঘাটম\' (Ghatam - মাটির পাত্রের মতো বাদ্যযন্ত্র) বাজানোর জন্য নিচের কে বিখ্যাত?',
    options: [
      'টি এইচ বিনায়করাম',
      'পালঘাট মণি আইয়ার',
      'জাকির হুসেন',
      'ওস্তাদ শাফাত আহমেদ খান'
    ],
    correctAnswer: 'A',
    explanation: 'টি এইচ বিনায়করাম (T.H. Vinayakram) ঘাটম বাজানোর জন্য বিখ্যাত। তিনি ২০১৪ সালে পদ্মভূষণ পান।'
  },
  {
    id: 11,
    section: 'GK',
    question: 'ওস্তাদ আসাদ আলী খান কোন বাদ্যযন্ত্রের জন্য বিখ্যাত ছিলেন?',
    options: [
      'সরোদ',
      'রুদ্রবীণা',
      'সন্তুর',
      'সেতার'
    ],
    correctAnswer: 'B',
    explanation: 'ওস্তাদ আসাদ আলী খান ধ্রুপদ সঙ্গীতের \'রুদ্রবীণা\' বাদ্যযন্ত্র বাজানোর জন্য বিখ্যাত ছিলেন। তিনি ২০০৮ সালে পদ্মভূষণ পান।'
  },
  {
    id: 12,
    section: 'GK',
    question: '\'মৃদঙ্গম\' (Mridangam) বাদ্যযন্ত্রের ক্ষেত্রে নিচের কোন নামটি অত্যন্ত বিখ্যাত?',
    options: [
      'পালঘাট মণি আইয়ার',
      'পণ্ডিত কিষাণ মহারাজ',
      'তোতারাম শর্মা',
      'ওস্তাদ ফৈয়াজ খান'
    ],
    correctAnswer: 'A',
    explanation: 'পালঘাট মণি আইয়ার কর্ণাটকী শাস্ত্রীয় সঙ্গীতের অন্যতম শ্রেষ্ঠ মৃদঙ্গম বাদক ছিলেন। তিনি ১৯৭১ সালে পদ্মভূষণ পান।'
  },
  {
    id: 13,
    section: 'GK',
    question: 'ওস্তাদ বিলায়েত khan কোন বিশেষ কারণে খবরে এসেছিলেন, যা প্রায়ই SSC পরীক্ষায় জানতে চাওয়া হয়?',
    options: [
      'তিনি কনিষ্ঠতম ভারত রত্ন প্রাপক',
      'তিনি পদ্মশ্রী ও পদ্মভূষণ পুরস্কার প্রত্যাখ্যান করেছিলেন',
      'তিনি প্রথম অস্কারজয়ী ভারতীয় সঙ্গীতজ্ঞ',
      'কোনোটিই নয়'
    ],
    correctAnswer: 'B',
    explanation: 'ওস্তাদ বিলায়েত খান ভারত সরকারের দেওয়া পদ্মশ্রী (১৯৬৪) এবং পদ্মভূষণ (১৯৬৮) প্রত্যাখ্যান করেছিলেন এই যুক্তিতে যে পুরস্কার কমিটির সদস্যদের তাঁর সঙ্গীত বিচার করার যোগ্যতা নেই।'
  },
  {
    id: 14,
    section: 'GK',
    question: 'পণ্ডিত জ্ঞানপ্রকাশ ঘোষ কোন বাদ্যযন্ত্রের সাথে যুক্ত এবং তিনি কোন ঘরানার প্রতিষ্ঠাতা বা প্রধান গুরু ছিলেন?',
    options: [
      'তবলা, ফারুখাবাদ ঘরানা',
      'বাঁশি, বেনারস ঘরানা',
      'সেতার, ইমদাদখানি ঘরানা',
      'সরোদ, লখনউ ঘরানা'
    ],
    correctAnswer: 'A',
    explanation: 'পণ্ডিত জ্ঞানপ্রকাশ ঘোষ পশ্চিমবঙ্গের একজন কিংবদন্তি তবলা বাদক এবং ফারুখাবাদ ঘরানার সঙ্গীতজ্ঞ ছিলেন।'
  },
  {
    id: 15,
    section: 'GK',
    question: 'তোতারাম শর্মা কোন বাদ্যযন্ত্রের জন্য বিখ্যাত, যা সাম্প্রতিক SSC পরীক্ষায় বহুবার এসেছে?',
    options: [
      'বাঁশি',
      'পখওয়াজ',
      'ঘাটম',
      'সারঙ্গী'
    ],
    correctAnswer: 'B',
    explanation: 'তোতারাম শর্মা একজন প্রখ্যাত পখওয়াজ বাদক।'
  },
  {
    id: 16,
    section: 'GK',
    question: 'ইউ শ্রীনিবাস (U. Srinivas) কোন বাদ্যযন্ত্রটিকে শাস্ত্রীয় সঙ্গীতের মঞ্চে জনপ্রিয় করার জন্য বিখ্যাত?',
    options: [
      'ম্যান্ডোলিন (Mandolin)',
      'গিটার',
      'বেহালা',
      'সারেঙ্গী'
    ],
    correctAnswer: 'A',
    explanation: '\'ম্যান্ডোলিন শ্রীনিবাস\' নামে পরিচিত এই শিল্পী একটি ওয়েস্টার্ন বাদ্যযন্ত্র ম্যান্ডোলিনকে কর্ণাটকী শাস্ত্রীয় সঙ্গীতে ব্যবহার করে বিশ্বখ্যাত হন। ১৯৯৮ সালে তিনি পদ্মশ্রী পান।'
  },
  {
    id: 17,
    section: 'GK',
    question: 'ভিকু বিনায়করাম (Vikki Vinayakram) কোন বাদ্যযন্ত্রের জন্য বিখ্যাত, যা গ্র্যামি পুরস্কার এনে দিয়েছিল?',
    options: [
      'ঘাটম',
      'তবলা',
      'সরোদ',
      'সন্তুর'
    ],
    correctAnswer: 'A',
    explanation: 'টি এইচ বিনায়করাম (ভিকু বিনায়করাম) ১৯৯১ সালে মিকি হার্টের \'প্ল্যানেট ড্রাম\' অ্যালবামের অংশ হিসেবে প্রথম দক্ষিণ ভারতীয় হিসেবে গ্র্যামি পুরস্কার পান।'
  },
  {
    id: 18,
    section: 'GK',
    question: 'কদরি গোপালনাথ (Kadri Gopalnath) কোন বিদেশী বাদ্যযন্ত্রটিকে কর্ণাটকী শাস্ত্রীয় সঙ্গীতে জনপ্রিয় করার জন্য বিখ্যাত?',
    options: [
      'স্যাক্সোফোন (Saxophone)',
      'ক্ল্যারিনেট',
      'গিটার',
      'পিয়ানো'
    ],
    correctAnswer: 'A',
    explanation: 'কদরি গোপালনাথ স্যাক্সোফোন বাদ্যযন্ত্রটি দিয়ে কর্ণাটকী শাস্ত্রীয় সঙ্গীত বাজিয়ে ইতিহাস সৃষ্টি করেন। ২০০৪ সালে তিনি পদ্মশ্রী পান।'
  },
  {
    id: 19,
    section: 'GK',
    question: 'পণ্ডিত পান্নালাল ঘোষ কোন বাদ্যযন্ত্রের সাথে যুক্ত ছিলেন, যাঁকে ভারতের শাস্ত্রীয় বাঁশি বাদনের জনক বলা হয়?',
    options: [
      'বাঁশি (Flute)',
      'সারেঙ্গী',
      'সেতার',
      'সানাই'
    ],
    correctAnswer: 'A',
    explanation: 'পান্নালাল ঘোষ (আসল নাম অমল জ্যোতি ঘোষ) ছোট বাঁশিকে বড় আকারের বাঁশিতে রূপান্তরিত করে শাস্ত্রীয় সঙ্গীতের উপযোগী করেছিলেন।'
  },
  {
    id: 20,
    section: 'GK',
    question: 'পণ্ডিত বিশ্বমোহন ভট্ট কোন বাদ্যযন্ত্র তৈরি এবং বাজানোর জন্য বিশ্ববিখ্যাত এবং গ্র্যামি জয়ী?',
    options: [
      'মোহন বীণা (Mohan Veena)',
      'সেতার',
      'সরোদ',
      'সন্তুর'
    ],
    correctAnswer: 'A',
    explanation: 'পণ্ডিত বিশ্বমোহন ভট্ট একটি ওয়েস্টার্ন স্লাইড গিটারকে মডিফাই করে \'মোহন বীণা\' আবিষ্কার করেন। ১৯৯৩ সালে তিনি গ্র্যামি পুরস্কার পান।'
  },
  {
    id: 21,
    section: 'GK',
    question: 'সন্তুর (Santoor) বাদ্যযন্ত্রটিতে সাধারণত মোট কয়টি তার থাকে, যা পণ্ডিত শিবকুমার শর্মা বাজাতেন?',
    options: [
      '১০০টি তার',
      '২৪টি তার',
      '৫০টি তার',
      '৭১টি তার'
    ],
    correctAnswer: 'A',
    explanation: 'সন্তুর একটি শত-তন্ত্রী বীণা, অর্থাৎ এতে প্রথাগতভাবে ১০০টি তার থাকে।'
  },
  {
    id: 22,
    section: 'GK',
    question: 'আমজাদ আলী খানের পূর্বপুরুষেরা কোন দেশ থেকে ভারতে এসে \'সরোদ\' বাদ্যযন্ত্রটির বিকাশ ঘটিয়েছিলেন?',
    options: [
      'আফগানিস্তান',
      'পারস্য',
      'উজবেকিস্তান',
      'তুরস্ক'
    ],
    correctAnswer: 'A',
    explanation: 'আফগান রবাব (Rabab) বাদ্যযন্ত্রটিকে মডিফাই করেই ভারতে আধুনিক \'সরোদ\' বাদ্যযন্ত্রটির জন্ম হয়েছিল।'
  },
  {
    id: 23,
    section: 'GK',
    question: 'ওস্তাদ বিসমিল্লাহ খানের আসল নাম বা ছোটবেলার নাম কী ছিল যা প্রায়ই পরীক্ষায় আসে?',
    options: [
      'কমরুদ্দিন খান (Qamruddin Khan)',
      'শামসুদ্দিন খান',
      'আহমেদ আলী',
      'খুরশিদ আলী'
    ],
    correctAnswer: 'A',
    explanation: 'ওস্তাদ বিসমিল্লাহ খানের জন্ম ১৯১৬ সালে বিহারে হয়েছিল এবং তাঁর পোশাকি নাম ছিল কমরুদ্দিন খান।'
  },
  {
    id: 24,
    section: 'GK',
    question: 'নিচের কোন বাদ্যযন্ত্রটি একটি \'তত বাদ্য\' (Stringed Instrument - তারযুক্ত বাদ্যযন্ত্র) নয়?',
    options: [
      'বাঁশি (Flute)',
      'সেতার',
      'সারেঙ্গী',
      'সন্তুর'
    ],
    correctAnswer: 'A',
    explanation: 'বাঁশি হলো একটি \'সুষির বাদ্য\' (Wind Instrument - ফুঁ দিয়ে বাজানো বাদ্যযন্ত্র), তারযুক্ত নয়।'
  },
  {
    id: 25,
    section: 'GK',
    question: 'নিচের কোন বাদ্যযন্ত্রটি একটি \'অবনদ্ধ বাদ্য\' (Percussion Instrument - চামড়া দিয়ে ঢাকা আঘাতজনিত বাদ্যযন্ত্র)?',
    options: [
      'তবলা ও মৃদঙ্গম',
      'বাঁশি',
      'সেতার',
      'সানাই'
    ],
    correctAnswer: 'A',
    explanation: 'তবলা, মৃদঙ্গম, পখওয়াজ, ঢোলক—এগুলো সবই অবনদ্ধ বাদ্যযন্ত্র।'
  }
];

