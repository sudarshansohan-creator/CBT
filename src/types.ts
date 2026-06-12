export type Section = 'English' | 'Math' | 'GI' | 'GK';

export type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation?: string;
  section: Section;
};
