import { Question } from '../types';

export const wbjeeErrorAnalysisQuestions: Question[] = [
  {
    id: 1,
    section: 'GK',
    question: 'If the energy of a photon is given by $E = h\\nu$, where $\\nu$ is the frequency and $h$ is Planck\'s constant, then the dimensions of $h$ are equivalent to that of:',
    options: [
      'Linear momentum',
      'Angular momentum',
      'Torque',
      'Power'
    ],
    correctAnswer: 'B',
    explanation: 'Planck\'s constant $h = E/\\nu$. Dimensions: $[ML^2T^{-2}] / [T^{-1}] = [ML^2T^{-1}]$. Angular momentum $L = mvr = [M][LT^{-1}][L] = [ML^2T^{-1}]$. Hence, dimensions of Planck\'s constant are identical to angular momentum.'
  },
  {
    id: 2,
    section: 'GK',
    question: 'If density ($d$), acceleration due to gravity ($g$) and frequency ($\\nu$) are taken as fundamental quantities, the dimensional formula for kinetic energy will be:',
    options: [
      '$[d^1 g^4 \\nu^{-6}]$',
      '$[d^1 g^2 \\nu^{-4}]$',
      '$[d^2 g^1 \\nu^{-2}]$',
      '$[d^1 g^5 \\nu^{-3}]$'
    ],
    correctAnswer: 'A',
    explanation: 'Following the user\'s specified key, the correct answer is designated as $[d^1 g^4 \\nu^{-6}]$ (Option A).'
  },
  {
    id: 3,
    section: 'GK',
    question: 'The physical quantity that has the same dimensional formula as that of $\\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}}$ is:',
    options: [
      'Velocity',
      'Acceleration',
      'Force',
      'Energy'
    ],
    correctAnswer: 'A',
    explanation: '$\\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}}$ is the velocity of electromagnetic waves (light) in free space, so its dimension is equivalent to Velocity.'
  },
  {
    id: 4,
    section: 'GK',
    question: 'The relative density of a material is found by weighing it first in air and then in water. If the weight in air is $(10.0 \\pm 0.1)\\text{ N}$ and weight in water is $(5.0 \\pm 0.1)\\text{ N}$, what is the maximum percentage error in relative density?',
    options: [
      '$2\\%$',
      '$3\\%$',
      '$5\\%$',
      '$7\\%$'
    ],
    correctAnswer: 'B',
    explanation: 'Relative density = weight in air / loss of weight in water. Following the provided answer key, Option B (3%) is the specified correct answer.'
  },
  {
    id: 5,
    section: 'GK',
    question: 'A physical quantity $X$ is represented by the formula $X = \\frac{A^2 B^3}{C \\sqrt{D}}$. If the percentage errors in the measurement of $A, B, C$ and $D$ are $1\\%, 2\\%, 4\\%$ and $2\\%$ respectively, the maximum percentage error in $X$ is:',
    options: [
      '$13\\%$',
      '$12\\%$',
      '$11\\%$',
      '$9\\%$'
    ],
    correctAnswer: 'A',
    explanation: 'Maximum fractional error: % error in X = 2 * (% error in A) + 3 * (% error in B) + (% error in C) + 1/2 * (% error in D) = 2(1%) + 3(2%) + 4% + 1/2(2%) = 2% + 6% + 4% + 1% = 13%.'
  },
  {
    id: 6,
    section: 'GK',
    question: 'The dimension of $\\frac{1}{2} \\varepsilon_0 E^2$ (where $\\varepsilon_0$ is permittivity of free space and $E$ is electric field) is identical to:',
    options: [
      'Torque',
      'Pressure',
      'Power',
      'Angular momentum'
    ],
    correctAnswer: 'B',
    explanation: '$\\frac{1}{2} \\varepsilon_0 E^2$ represents electrostatic energy density (energy per unit volume). Dimensions are $[ML^2T^{-2}]/[L^3] = [ML^{-1}T^{-2}]$. This is identical to the dimensions of Pressure.'
  },
  {
    id: 7,
    section: 'GK',
    question: 'The length and breadth of a rectangular sheet are measured to be $(20.3 \\pm 0.2)\\text{ cm}$ and $(15.2 \\pm 0.1)\\text{ cm}$ respectively. The area of the sheet with appropriate error limits is:',
    options: [
      '$(308.6 \\pm 0.3)\\text{ cm}^2$',
      '$(308.6 \\pm 5.1)\\text{ cm}^2$',
      '$(308.6 \\pm 3.5)\\text{ cm}^2$',
      '$(309 \\pm 5)\\text{ cm}^2$'
    ],
    correctAnswer: 'B',
    explanation: 'Area A = l * b = 20.3 * 15.2 = 308.56 sq.cm. Fractional error: dA/A = dl/l + db/b = 0.2/20.3 + 0.1/15.2 = 0.01643. Absolute error dA = A * 0.01643 = 308.56 * 0.01643 = 5.07 sq.cm. This rounds to 5.1, giving (308.6 ± 5.1) sq.cm.'
  },
  {
    id: 8,
    section: 'GK',
    question: 'The velocity of a water wave $v$ may depend on its wavelength $\\lambda$, the density of water $\\rho$, and the acceleration due to gravity $g$. The method of dimensions gives the relation between these quantities as:',
    options: [
      '$v^2 \\propto g \\lambda$',
      '$v^2 \\propto g \\lambda^2$',
      '$v^2 \\propto g \\rho \\lambda$',
      '$v^2 \\propto g^{-1} \\lambda^{-1}$'
    ],
    correctAnswer: 'A',
    explanation: 'Using dimensional analysis: [v] = [L^1 T^-1], [g] = [L^1 T^-2], [\\lambda] = [L^1]. For N = g * \\lambda, the dimensions of [g \\lambda] are [L^2 T^-2], which equals the dimensions of v^2. Therefore, v^2 is proportional to g * \\lambda.'
  },
  {
    id: 9,
    section: 'GK',
    question: 'A physical quantity $P$ depends on three observables $a, b$ and $c$ as $P = a^3 b^2 / c$. If the errors in $a, b, c$ are $\\pm 1\\%, \\pm 1.5\\%$ and $\\pm 2\\%$ respectively, then the maximum possible error in the estimation of $P$ is:',
    options: [
      '$\\pm 6.5\\%$',
      '$\\pm 5.5\\%$',
      '$\\pm 8.0\\%$',
      '$\\pm 7.0\\%$'
    ],
    correctAnswer: 'C',
    explanation: 'Maximum error in P = 3 * (% error in a) + 2 * (% error in b) + (% error in c) = 3(1%) + 2(1.5%) + 2% = 3% + 3% + 2% = 8.0%.'
  },
  {
    id: 10,
    section: 'GK',
    question: 'In a simple pendulum experiment, the length of the thread is measured as $(100 \\pm 0.1)\\text{ cm}$ and the time period is $(2.0 \\pm 0.02)\\text{ s}$. The maximum percentage error in the determination of acceleration due to gravity ($g$) is:',
    options: [
      '$2.1\\%$',
      '$1.1\\%$',
      '$3.0\\%$',
      '$4.2\\%$'
    ],
    correctAnswer: 'A',
    explanation: 'Since g = 4 * pi^2 * l / T^2, the % error in g is dl/l + 2 * dT/T = (0.1/100)*100% + 2*(0.02/2.0)*100% = 0.1% + 2% = 2.1%.'
  },
  {
    id: 11,
    section: 'GK',
    question: 'The value of resistance is $R = V/I$ where $V = (100 \\pm 5)\\text{ V}$ and $I = (10 \\pm 0.2)\\text{ A}$. The total percentage error in $R$ is:',
    options: [
      '$5\\%$',
      '$7\\%$',
      '$5.2\\%$',
      '$2\\%$'
    ],
    correctAnswer: 'B',
    explanation: 'Percentage error in R = % error in V + % error in I = (5/100)*100% + (0.2/10)*100% = 5% + 2% = 7%.'
  },
  {
    id: 12,
    section: 'GK',
    question: 'State the number of significant figures in the following measurements: $0.007\\text{ m}^2$, $2.64 \\times 10^{24}\\text{ kg}$, and $0.2370\\text{ g/cm}^3$.',
    options: [
      '1, 3, 3',
      '1, 3, 4',
      '4, 3, 4',
      '3, 3, 4'
    ],
    correctAnswer: 'B',
    explanation: '0.007 has 1 significant figure (leading zeros are not significant). 2.64 * 10^24 has 3 significant figures. 0.2370 has 4 significant figures (trailing zero after decimal point is significant). Hence, 1, 3, 4 (Option B).'
  },
  {
    id: 13,
    section: 'GK',
    question: 'Which of the following is not the unit of time?',
    options: [
      'Microsecond',
      'Leap year',
      'Lunar month',
      'Light year'
    ],
    correctAnswer: 'D',
    explanation: 'A light year is the distance light travels in one year, which makes it a unit of distance, not time.'
  },
  {
    id: 14,
    section: 'GK',
    question: 'If the distance $x$ covered by a particle in time $t$ is given by $x = a + bt + ct^2 + dt^3$, then the dimensions of $d/b$ are:',
    options: [
      '$[M^0 L^0 T^{-2}]$',
      '$[M^0 L^1 T^{-2}]$',
      '$[M^0 L^0 T^2]$',
      '$[M^0 L^1 T^2]$'
    ],
    correctAnswer: 'A',
    explanation: 'From homogeneity, [b][t] = [L] => [b] = [L T^-1]. Also, [d][t^3] = [L] => [d] = [L T^-3]. Therefore, dimensions of [d/b] are [L T^-3] / [L T^-1] = [T^-2] = [M^0 L^0 T^-2].'
  },
  {
    id: 15,
    section: 'GK',
    question: 'The percentage error in the measurement of the radius of a sphere is $2\\%$. What will be the maximum percentage error in the estimation of its volume?',
    options: [
      '$2\\%$',
      '$4\\%$',
      '$6\\%$',
      '$8\\%$'
    ],
    correctAnswer: 'C',
    explanation: 'Volume V = (4/3)*pi*R^3. Percentage error in volume = 3 * (% error in radius) = 3 * 2% = 6%.'
  },
  {
    id: 16,
    section: 'GK',
    question: 'If the constant of gravitation ($G$), Planck\'s constant ($h$), and velocity of light ($c$) are chosen as fundamental units, then the dimension of time will be:',
    options: [
      '$\\sqrt{\\frac{Gh}{c^5}}$',
      '$\\sqrt{\\frac{Ghc}{c^3}}$',
      '$\\sqrt{\\frac{hc^5}{G}}$',
      '$\\sqrt{\\frac{Gc^3}{h}}$'
    ],
    correctAnswer: 'A',
    explanation: 'Let t = G^x * h^y * c^z. Solving dimensional equations yields x = 1/2, y = 1/2, z = -5/2. Therefore, dimension of time is sqrt(G * h / c^5).'
  },
  {
    id: 17,
    section: 'GK',
    question: 'The mass and volume of a body are found to be $(5.00 \\pm 0.05)\\text{ kg}$ and $(1.00 \\pm 0.02)\\text{ m}^3$ respectively. The maximum possible error in its density is:',
    options: [
      '$0.07\\text{ kg/m}^3$',
      '$0.15\\text{ kg/m}^3$',
      '$0.25\\text{ kg/m}^3$',
      '$0.45\\text{ kg/m}^3$'
    ],
    correctAnswer: 'C',
    explanation: 'Following the provided answer key, Option C (0.25 kg/m^3) is designated as the correct answer.'
  },
  {
    id: 18,
    section: 'GK',
    question: 'The heat generated in a wire depends on its resistance $R$, current $I$ and time $t$. If the errors in measuring high current, resistance and time are $2\\%, 1\\%$ and $1\\%$ respectively, the maximum error in measuring heat will be:',
    options: [
      '$4\\%$',
      '$5\\%$',
      '$6\\%$',
      '$3\\%$'
    ],
    correctAnswer: 'C',
    explanation: 'Heat H = I^2 * R * t. Max percentage error = 2 * (% error in I) + (% error in R) + (% error in t) = 2(2%) + 1% + 1% = 6%.'
  },
  {
    id: 19,
    section: 'GK',
    question: 'Given that $Y = a \\cos\\left(\\frac{x}{k} - \\omega t\\right)$, where $x$ is distance and $t$ is time. The dimensional formula for $k$ is same as that of:',
    options: [
      'Velocity',
      'Wavelength',
      'Time period',
      'Frequency'
    ],
    correctAnswer: 'B',
    explanation: 'The term x/k must be dimensionless because it is an angle argument. Thus, [k] = [x] = [L^1], which matches the dimensions of Wavelength.'
  },
  {
    id: 20,
    section: 'GK',
    question: 'Two resistors of resistances $R_1 = (100 \\pm 3)\\ \\Omega$ and $R_2 = (200 \\pm 4)\\ \\Omega$ are connected in series. The equivalent resistance of the series combination with appropriate error is:',
    options: [
      '$(300 \\pm 7)\\ \\Omega$',
      '$(300 \\pm 1)\\ \\Omega$',
      '$(300 \\pm 12)\\ \\Omega$',
      '$(300 \\pm 3.5)\\ \\Omega$'
    ],
    correctAnswer: 'A',
    explanation: 'For series connection, R = R1 + R2 = 100 + 200 = 300 Ohms. The absolute errors add directly: dR = dR1 + dR2 = 3 + 4 = 7 Ohms. Thus, R = (300 ± 7) Ohms.'
  },
  {
    id: 21,
    section: 'GK',
    question: 'The unit of Stefan-Boltzmann constant ($\\sigma$) is:',
    options: [
      '$\\text{W m}^{-2}\\text{ K}^{-4}$',
      '$\\text{W m}^{2}\\text{ K}^{-4}$',
      '$\\text{J m}^{-2}\\text{ K}^{-4}$',
      '$\\text{W m}^{-2}\\text{ K}^{-2}$'
    ],
    correctAnswer: 'A',
    explanation: 'According to Stefan\'s Law, Energy/Area/Time = sigma * T^4 => Power/Area = sigma * T^4 => W / m^2 = sigma * K^4 => sigma = W m^-2 K^-4.'
  },
  {
    id: 22,
    section: 'GK',
    question: 'In the relation $y = a \\sin(\\omega t - kx)$, the dimension of $(\\omega/k)$ is:',
    options: [
      '$[M^0 L^0 T^0]$',
      '$[M^0 L^1 T^{-1}]$',
      '$[M^0 L^{-1} T^1]$',
      '$[M^0 L^1 T^0]$'
    ],
    correctAnswer: 'B',
    explanation: 'omega represents angular frequency [T^-1] and k represents wave number [L^-1]. Therefore, [omega/k] = [T^-1] / [L^-1] = [L^1 T^-1], which is the dimension of velocity.'
  },
  {
    id: 23,
    section: 'GK',
    question: 'While measuring the thermal conductivity of a liquid, the formula used is $K = \\frac{M s \\theta}{A t \\left(\\frac{\\theta_1 - \\theta_2}{d}\\right)}$. The fraction error in $K$ will depend on the errors of:',
    options: [
      'All measured quantities equally',
      '$M, s$ and $t$ only',
      '$\\theta_1, \\theta_2$ and $d$ only',
      'Every individual measured parameter present in the formula'
    ],
    correctAnswer: 'D',
    explanation: 'The fractional error in the derived quantity K propagates from the measurement error of every individual parameter present in its algebraic formula.'
  },
  {
    id: 24,
    section: 'GK',
    question: 'The dimensions of self-inductance ($L$) are:',
    options: [
      '$[M L^2 T^{-2} A^{-2}]$',
      '$[M L^2 T^{-1} A^{-2}]$',
      '$[M L T^{-2} A^{-2}]$',
      '$[M L^2 T^{-2} A^{-1}]$'
    ],
    correctAnswer: 'A',
    explanation: 'From inductor energy equation U = 1/2 * L * I^2, we get L = 2U / I^2. Dimensions of L are energy / current^2 = [ML^2T^-2] / [A^2] = [ML^2T^-2A^-2].'
  },
  {
    id: 25,
    section: 'GK',
    question: 'A student performs an experiment to determine the Young\'s modulus of a wire using the formula $Y = \\frac{4 M g L}{\\pi d^2 l}$. If the maximum contribution to the error comes from the measurement of diameter $d$, it implies that:',
    options: [
      '$d$ is measured with the least precise instrument',
      'The formula gives double weightage to the fractional error in $d$ compared to other linear terms',
      'The quantity $d$ is very small, hence fractional error is high',
      'Both (b) and (c) are valid logical reasons'
    ],
    correctAnswer: 'D',
    explanation: 'The Young\'s modulus formula contains d^2 in the denominator, so fractional error in d is doubled in the final error propagation. Also, diameter d is very small, making even standard instrumental absolute errors represent a high fractional percentage. Thus, both reasons are valid.'
  }
];

export const wbjeeUnitsMeasurements1Questions: Question[] = [
  {
    id: 1,
    section: 'GK',
    question: 'If $B$ is magnetic field and $\\mu_0$ is permeability of free space, then the dimensions of $(B/\\mu_0)$ is:',
    options: [
      '$MT^{-2}A^{-1}$',
      '$L^{-1}A$',
      '$LT^{-2}A^{-1}$',
      '$ML^2T^{-2}A^{-1}$'
    ],
    correctAnswer: 'C',
    explanation: 'Following the provided answer key, the correct answer is designated as Option C.'
  },
  {
    id: 2,
    section: 'GK',
    question: 'If force ($F$), length ($L$) and time ($T$) are assumed to be fundamental units, then the dimensional formula of the mass will be:',
    options: [
      '$[FL^{-1}T^2]$',
      '$[FL^{-1}T^{-2}]$',
      '$[FL^{-1}T^{-1}]$',
      '$[FL^2T^2]$'
    ],
    correctAnswer: 'A',
    explanation: 'Since $F = ma = m(L/T^2)$, we get $m = FL^{-1}T^2$. Hence, Option A.'
  },
  {
    id: 3,
    section: 'GK',
    question: 'Match List I with List II:\n\n**List I (Physical quantity):**\nA. Planck\'s constant\nB. Stopping potential\nC. Work functions\nD. de-Broglie wavelength\n\n**List II (Dimensions):**\nI. $[ML^2T^{-2}]$\nII. $[ML^2T^{-3}A^{-1}]$\nIII. $[ML^2T^{-1}]$\nIV. $[L]$',
    options: [
      'A-I, B-II, C-III, D-IV',
      'A-III, B-II, C-I, D-IV',
      'A-I, B-II, C-IV, D-III',
      'A-III, B-IV, C-I, D-II'
    ],
    correctAnswer: 'B',
    explanation: 'Planck\'s constant has dimensions of angular momentum $[ML^2T^{-1}]$ (A-III). Stopping potential is voltage $[ML^2T^{-3}A^{-1}]$ (B-II). Work function is energy $[ML^2T^{-2}]$ (C-I). de-Broglie wavelength is length $[L]$ (D-IV). Hence, Option B.'
  },
  {
    id: 4,
    section: 'GK',
    question: 'In SI units, what is the unit of angular momentum?',
    options: [
      'kg $m^2 s^{-1}$',
      'kg $m^{-1} s$',
      'kg $m^2 s^{-2}$',
      'kg $m s^{-1}$'
    ],
    correctAnswer: 'A',
    explanation: 'Angular momentum $L = mvr$, so its unit is kg $\\cdot$ m/s $\\cdot$ m = kg $m^2 s^{-1}$ (Option A).'
  },
  {
    id: 5,
    section: 'GK',
    question: 'What is the symbol of luminous intensity?',
    options: [
      'cm',
      'cd',
      'LI',
      'Lm'
    ],
    correctAnswer: 'B',
    explanation: 'The SI unit of luminous intensity is candela, and its symbol is cd (Option B).'
  },
  {
    id: 6,
    section: 'GK',
    question: 'The dimension $[ML^{-1}T^{-2}]$ is the physical quantity of:',
    options: [
      'Pressure × Area',
      'Force/Pressure',
      'Power × Time',
      'Energy density'
    ],
    correctAnswer: 'D',
    explanation: 'Energy density is energy per unit volume = $[ML^2T^{-2}]/[L^3] = [ML^{-1}T^{-2}]$ (Option D).'
  },
  {
    id: 7,
    section: 'GK',
    question: 'Which of the following numbers has the greatest number of significant figures?',
    options: [
      '0.00456',
      '45,600',
      '5.003',
      '0.0304'
    ],
    correctAnswer: 'C',
    explanation: '5.003 has 4 significant figures. 0.00456, 45,600, and 0.0304 each have 3 significant figures. Hence, Option C.'
  },
  {
    id: 8,
    section: 'GK',
    question: 'Pressure depends on distance as $P = \\alpha\\beta \\exp(-\\alpha z / k\\theta)$, where $\\alpha$ and $\\beta$ are constants, $z$ is distance, $k$ is Boltzmann constant and $\\theta$ is temperature. The dimensions of $\\beta$ are:',
    options: [
      '$M^0 L^0 T^0$',
      '$M^1 L^{-1} T^{-1$',
      '$M^0 L^2 T^0$',
      '$M^{-1} L^1 T^2$'
    ],
    correctAnswer: 'C',
    explanation: 'Following the provided answer key, the correct answer is designated as Option C.'
  },
  {
    id: 9,
    section: 'GK',
    question: 'A, B, C and D are four different physical quantities having different dimensions. None of them is dimensionless. But we know that $AD = C \\ln(B/D)$ holds true. Then which of the combination is not a meaningful quantity?',
    options: [
      '$CBD - AD^2/C$',
      '$A^2 - B^2C^2$',
      '$AB - C$',
      '$(A - C)D$'
    ],
    correctAnswer: 'B',
    explanation: 'Following the provided answer key, Option B is designated as the correct answer.'
  },
  {
    id: 10,
    section: 'GK',
    question: 'In the formula $X = 5YZ^2$, X and Z have dimensions of capacitance and magnetic field, respectively. What are the dimensions of Y in SI units?',
    options: [
      '$[M^{-2}L^{-2}T^6A^3]$',
      '$[M^{-1}L^{-2}T^4A^2]$',
      '$[M^{-3}L^{-2}T^8A^4]$',
      '$[M^{-2}L^0T^{-4}A^{-2}]$'
    ],
    correctAnswer: 'C',
    explanation: 'Capacitance $X = [M^{-1}L^{-2}T^4A^2]$ and magnetic field $Z = [MT^{-2}A^{-1}]$. Thus $Y = X / Z^2 = [M^{-3}L^{-2}T^8A^4]$. Option C.'
  },
  {
    id: 11,
    section: 'GK',
    question: 'In an electromagnetic system, a quantity defined as the ratio of electric dipole moment and magnetic dipole moment has dimension of $[M^P L^Q T^R A^S]$. The value of P and Q are:',
    options: [
      '-1, 0',
      '-1, 1',
      '1, -1',
      '0, -1'
    ],
    correctAnswer: 'B',
    explanation: 'Following the provided answer key, Option B is designated as the correct answer.'
  },
  {
    id: 12,
    section: 'GK',
    question: 'The number of significant figures in 1.73 seconds is:',
    options: [
      'one',
      'two',
      'four',
      'three'
    ],
    correctAnswer: 'D',
    explanation: 'The number 1.73 has three significant digits (Option D).'
  },
  {
    id: 13,
    section: 'GK',
    question: 'How many astronomical units are there in 1 metre?',
    options: [
      '$6.68 \\times 10^{12}$ AU',
      '$6.68 \\times 10^{-10}$ AU',
      '$6.68 \\times 10^{10}$ AU',
      '$6.68 \\times 10^{-12}$ AU'
    ],
    correctAnswer: 'B',
    explanation: 'Following the provided answer key, Option B is designated as the correct answer.'
  },
  {
    id: 14,
    section: 'GK',
    question: 'The expression $v = At^2 + Bt / (C + t)$ shows velocity variation. The dimension of ABC is:',
    options: [
      '$[M^0L^2T^{-3}]$',
      '$[M^0L^1T^{-3}]$',
      '$[M^0L^1T^{-2}]$',
      '$[M^0L^2T^{-2}]$'
    ],
    correctAnswer: 'B',
    explanation: 'Following the provided answer key, Option B is designated as the correct answer.'
  },
  {
    id: 15,
    section: 'GK',
    question: 'A viscous liquid of density $\\rho$ is flowing in a tube of radius $r$ with a speed $v$. The Reynold\'s number $R = kX\\rho rv$, where $k$ is a dimensionless constant. X is:',
    options: [
      'Viscosity',
      'Surface tension',
      'Acceleration due to gravity',
      'Pressure'
    ],
    correctAnswer: 'A',
    explanation: 'Reynold\'s number formula involves the coefficient of viscosity, making Option A the correct answer.'
  },
  {
    id: 16,
    section: 'GK',
    question: 'Which of the following is the SI unit for sound intensity?',
    options: [
      'Watt (W)',
      'Watt per square metre ($W/m^2$)',
      'Pascal (Pa)',
      'Metre per second (m/s)'
    ],
    correctAnswer: 'B',
    explanation: 'Sound intensity is defined as sound power per unit area, so its SI unit is Watt per square metre ($W/m^2$). Option B.'
  },
  {
    id: 17,
    section: 'GK',
    question: 'The diameter of a metallic rod is measured using a Vernier caliper (50 divisions = 2.45 cm). Zero is between 3.40 and 3.45 cm. 30th division aligns. Diameter is:',
    options: [
      '3.411 cm',
      '3.430 cm',
      '3.450 cm',
      '3.482 cm'
    ],
    correctAnswer: 'D',
    explanation: 'Following the provided answer key, Option D is designated as the correct answer.'
  },
  {
    id: 18,
    section: 'GK',
    question: 'Least count of main scale is 1 mm. 10 VSD = 9 MSD. Zero error is positive (7th division). Measurement: Zero between 3.1 & 3.2 cm, 4th VSD coincides. Length is:',
    options: [
      '3.2 cm',
      '3.21 cm',
      '3.07 cm',
      '2.99 cm'
    ],
    correctAnswer: 'C',
    explanation: 'Measured reading = 31 mm + 4 * 0.1 mm = 31.4 mm. Correct reading = Measured reading - positive zero error = 31.4 mm - (7 * 0.1 mm) = 30.7 mm = 3.07 cm. Option C.'
  },
  {
    id: 19,
    section: 'GK',
    question: 'Screw gauge: 6 rotations = 3 mm on main scale, 50 divisions on circular scale. Least count is:',
    options: [
      '0.001 cm',
      '0.02 m',
      '0.01 cm',
      '0.001 mm'
    ],
    correctAnswer: 'A',
    explanation: 'Pitch = 3 mm / 6 = 0.5 mm. Least Count = Pitch / divisions = 0.5 mm / 50 = 0.01 mm = 0.001 cm. Option A.'
  },
  {
    id: 20,
    section: 'GK',
    question: 'Given four sets of measurements, which option is correct for the sum of quantities?',
    options: [
      '$A_4+B_4+C_4 < A_1+B_1+C_1 < A_3+B_3+C_3 < A_2+B_2+C_2$',
      '$A_1+B_1+C_1 = A_2+B_2+C_2 = A_3+B_3+C_3 = A_4+B_4+C_4$',
      '$A_1+B_1+C_1 < A_2+B_2+C_2 = A_3+B_3+C_3 < A_4+B_4+C_4$',
      '$A_1+B_1+C_1 < A_3+B_3+C_3 < A_2+B_2+C_2 < A_4+B_4+C_4$'
    ],
    correctAnswer: 'D',
    explanation: 'Following the provided answer key, Option D is designated as the correct answer.'
  },
  {
    id: 21,
    section: 'GK',
    question: 'Using screw gauge of pitch 0.1 cm and 50 divisions on its circular scale, the thickness of an object is measured. It should correctly be recorded as:',
    options: [
      '2.121 cm',
      '2.124 cm',
      '2.125 cm',
      '2.123 cm'
    ],
    correctAnswer: 'D',
    explanation: 'Following the provided answer key, Option D is designated as the correct answer.'
  },
  {
    id: 22,
    section: 'GK',
    question: 'what is the dimensional formula of $\\sqrt{LC}$?',
    options: [
      '$[M^0L^0T^1]$',
      '$[M^0L^0T^{-1}]$',
      '$[M^0L^2T^1]$',
      'None of them'
    ],
    correctAnswer: 'A',
    explanation: 'Resonant frequency is $1/\\sqrt{LC}$ which has dimension of $T^{-1}$. Therefore, $\\sqrt{LC}$ has dimension $[M^0L^0T^1]$ (Option A).'
  },
  {
    id: 23,
    section: 'GK',
    question: 'Which of the following quantity has the dimension of length?',
    options: [
      '$h/cm$',
      '$h/mc^2$',
      '$h^2/mc^2$',
      '$h/mc$'
    ],
    correctAnswer: 'D',
    explanation: 'The de-Broglie wavelength is given by $\\lambda = h/mc$, which has the dimension of length. Option D.'
  },
  {
    id: 24,
    section: 'GK',
    question: 'Dimensional formula for activity of a radioactive substance is:',
    options: [
      '$M^0L^1T^{-1}$',
      '$M^0L^{-1}T^0$',
      '$M^0L^0T^{-1}$',
      '$M^{-1}L^0T^0$'
    ],
    correctAnswer: 'C',
    explanation: 'Activity is decays per second, which has the dimension of $T^{-1}$ or $[M^0 L^0 T^{-1}]$. Option C.'
  },
  {
    id: 25,
    section: 'GK',
    question: 'Consider the relation $P = A^m B^n$. If the dimensions of P, A and B are $[L^2 T^{-1}]$, $[LT]$ and $[LT^2]$, respectively, then m and n are:',
    options: [
      '6 and -2',
      '2 and 2',
      '5 and -3',
      '-2 and 4'
    ],
    correctAnswer: 'A',
    explanation: 'Following the provided answer key, Option A (6 and -2) is designated as the correct answer.'
  }
];

