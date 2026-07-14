import React, { useState, useEffect } from 'react';
import { questions, comboQuestions, artCultureQuestions, grammarQuestions, giQuestions } from '../data/questions';
import { fullMock2Questions } from '../data/questions2';
import { wbjeeErrorAnalysisQuestions, wbjeeUnitsMeasurements1Questions } from '../data/questions_wbjee';
import { censusGkQuestions } from '../data/questions_gk';
import { sportsGkQuestions } from '../data/questions_sports_gk';
import { computerQuestions } from '../data/questions_computer';
import { geographyQuestions } from '../data/questions_geography';
import { giMock2Questions } from '../data/questions_gi_2';
import { englishMockQuestions } from '../data/questions_english_mock';
import { englishMock2Questions } from '../data/questions_english_mock_2';
import { giMock3Questions } from '../data/questions_gi_mock_3';
import { mathMock1Questions } from '../data/questions_math_mock_1';
import { gkMock1Questions } from '../data/questions_gk_mock_1';
import { mathBodmasQuestions } from '../data/questions_math_bodmas';
import { mathDecimalsQuestions } from '../data/questions_math_decimals';
import { mathFractionsQuestions } from '../data/questions_math_fractions';
import { mathPercentageQuestions } from '../data/questions_math_percentage';
import { mathRationalIrrationalQuestions } from '../data/questions_math_rational_irrational';
import { mathIntegersQuestions } from '../data/questions_math_integers';
import { gkCensusSportsQuestions } from '../data/questions_gk_census_sports';
import { giAlphabetQuestions } from '../data/questions_gi_alphabet';
import { mathDivisibilityQuestions } from '../data/questions_math_divisibility';
import { mathTrigonometryQuestions } from '../data/questions_math_trigonometry';
import { scienceMathGiQuestions } from '../data/questions_general_science_math_gi';
import { panchayatHistory1Questions } from '../data/questions_panchayat';
import { sscChslGiMock25Questions } from '../data/questions_ssc_chsl_gi_mock_25';
import { Question, Section } from '../types';
import { LatexRenderer } from './LatexRenderer';
import { 
  Clock, 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  Award, 
  BookOpen, 
  RotateCcw, 
  User, 
  Check, 
  Bookmark, 
  Trash2,
  ChevronLeft,
  ChevronRight,
  List,
  Grid,
  FileText,
  Share2,
  Filter,
  ArrowUpDown,
  Maximize2,
  Minimize2,
  Brain,
  Calculator,
  Globe,
  GraduationCap,
  Sparkles,
  Trophy,
  HelpCircle,
  Layers
} from 'lucide-react';

type TestCategory = 'full' | 'subject' | 'topic';

interface TestOption {
  id: 'full_mock_1' | 'full_mock_2' | 'english_gi_combo' | 'indian_art_culture' | 'english_grammar' | 'gi_special' | 'static_gk_census' | 'static_gk_sports' | 'computer_knowledge' | 'geography_knowledge' | 'gi_mock_2' | 'english_mock' | 'english_mock_2' | 'gi_mock_3' | 'math_mock_1' | 'gk_mock_1' | 'math_bodmas_1' | 'math_decimals_1' | 'math_fractions_1' | 'math_percentage_1' | 'math_rational_irrational_1' | 'math_integers_1' | 'gk_census_sports_1' | 'gi_alphabet_1' | 'math_divisibility_1' | 'math_trigonometry_1' | 'science_math_gi_1' | 'wbjee_error_analysis_2' | 'wbjee_units_measurements_1' | 'panchayat_history_1' | 'ssc_chsl_gi_mock_25';
  category: TestCategory;
  title: string;
  badge: string;
  badgeColor: string;
  description: string;
  sections: string;
  questionCount: number;
  totalMarks: number;
  durationMinutes: number;
  createdAt: number;
}

const TEST_OPTIONS: TestOption[] = [
  { id: 'full_mock_2', category: 'full', title: 'Full Mock 2', badge: 'Full Set 2', badgeColor: 'indigo', description: 'সম্পূর্ণ ১০০ টি প্রশ্নের সিবিটি (CBT) মক টেস্ট (নতুন)।', sections: 'Eng, Math, GI, GK', questionCount: 100, totalMarks: 200, durationMinutes: 60, createdAt: 10 },
  { id: 'full_mock_1', category: 'full', title: 'Full Mock 1', badge: 'Full Set 1', badgeColor: 'indigo', description: 'সবকটি সাবজেক্টের সম্পূর্ণ টেস্ট।', sections: 'Eng, Math, GI, GK', questionCount: 100, totalMarks: 200, durationMinutes: 60, createdAt: 1 },
  { id: 'english_gi_combo', category: 'subject', title: 'English + GI Combo', badge: 'Combo', badgeColor: 'rose', description: '৫০টি ইংরেজি এবং ৫০টি জিআই (GI) প্রশ্নের সমন্বয়ে বিশেষ টেস্ট।', sections: 'English, GI', questionCount: 100, totalMarks: 200, durationMinutes: 60, createdAt: 2 },
  { id: 'english_grammar', category: 'subject', title: 'English Grammar', badge: 'Grammar', badgeColor: 'blue', description: 'ইংরেজি গ্রামার এবং ভোকাবুলারির ১০০টি বিশেষ প্রশ্ন।', sections: 'English Section', questionCount: 100, totalMarks: 200, durationMinutes: 60, createdAt: 4 },
  { id: 'gi_special', category: 'subject', title: 'General Intelligence', badge: 'GI Special', badgeColor: 'purple', description: 'জেনারেল ইন্টেলিজেন্স বা জিআই-এর ২৫টি স্পেশাল প্রশ্ন।', sections: 'GI Section', questionCount: 25, totalMarks: 50, durationMinutes: 15, createdAt: 5 },
  { id: 'indian_art_culture', category: 'topic', title: 'Indian Art & Culture', badge: 'Art & Culture', badgeColor: 'amber', description: 'ভারতের শিল্প ও সংস্কৃতি থেকে ২৫টি গুরুত্বপূর্ণ সাধারণ জ্ঞান প্রশ্ন।', sections: 'GK Section', questionCount: 25, totalMarks: 50, durationMinutes: 15, createdAt: 3 },
  { id: 'static_gk_census', category: 'topic', title: 'Census of India', badge: 'Census', badgeColor: 'teal', description: 'ভারতের জনগণনা সম্পর্কিত ২৫টি গুরুত্বপূর্ণ সাধারণ জ্ঞান প্রশ্ন।', sections: 'GK Section', questionCount: 25, totalMarks: 50, durationMinutes: 15, createdAt: 6 },
  { id: 'static_gk_sports', category: 'topic', title: 'Sports GK', badge: 'Sports', badgeColor: 'orange', description: 'খেলাধুলা সম্পর্কিত ২৫টি গুরুত্বপূর্ণ সাধারণ জ্ঞান প্রশ্ন।', sections: 'GK Section', questionCount: 25, totalMarks: 50, durationMinutes: 15, createdAt: 7 },
  { id: 'computer_knowledge', category: 'topic', title: 'Computer Knowledge', badge: 'Computer', badgeColor: 'fuchsia', description: 'কম্পিউটার সম্পর্কিত ২৫টি গুরুত্বপূর্ণ প্রশ্ন।', sections: 'GK Section', questionCount: 25, totalMarks: 50, durationMinutes: 15, createdAt: 8 },
  { id: 'geography_knowledge', category: 'topic', title: 'Rivers & Dams', badge: 'Geography', badgeColor: 'sky', description: 'Geography Practice Quiz: Rivers and Dams of India (25 Q).', sections: 'GK Section', questionCount: 25, totalMarks: 50, durationMinutes: 15, createdAt: 9 },
  { id: 'gi_mock_2', category: 'subject', title: 'General Intelligence 2', badge: 'GI Mock 2', badgeColor: 'purple', description: 'জেনারেল ইন্টেলিজেন্স বা জিআই-এর ২৫টি নতুন স্পেশাল প্রশ্ন।', sections: 'GI Section', questionCount: 25, totalMarks: 50, durationMinutes: 15, createdAt: 11 },
  { id: 'english_mock', category: 'subject', title: 'English Mock Test', badge: 'English', badgeColor: 'blue', description: 'SSC CHSL Full Mock Test: English Language (25 Questions).', sections: 'English Section', questionCount: 25, totalMarks: 50, durationMinutes: 15, createdAt: 12 },
  { id: 'english_mock_2', category: 'subject', title: 'English Mock Test 2', badge: 'English 2', badgeColor: 'blue', description: 'SSC CHSL Full Mock Test 2: English Language (25 Questions).', sections: 'English Section', questionCount: 25, totalMarks: 50, durationMinutes: 15, createdAt: 13 },
  { id: 'gi_mock_3', category: 'subject', title: 'General Intelligence 3', badge: 'GI Mock 3', badgeColor: 'purple', description: 'জেনারেল ইন্টেলিজেন্স বা জিআই-এর ২৫টি নতুন স্পেশাল প্রশ্ন (Set 3)।', sections: 'GI Section', questionCount: 25, totalMarks: 50, durationMinutes: 15, createdAt: 14 },
  { id: 'math_mock_1', category: 'subject', title: 'Math Mock Test 1', badge: 'Math', badgeColor: 'indigo', description: 'Quantitative Aptitude Mock Test 1 (25 Questions).', sections: 'Math Section', questionCount: 25, totalMarks: 50, durationMinutes: 15, createdAt: 15 },
  { id: 'gk_mock_1', category: 'subject', title: 'GK Mock Test 1', badge: 'GK', badgeColor: 'orange', description: 'General Awareness Mock Test 1 (25 Questions).', sections: 'GK Section', questionCount: 25, totalMarks: 50, durationMinutes: 15, createdAt: 16 },
  { id: 'math_bodmas_1', category: 'subject', title: 'SSC CHSL - CT 01: Bodmas Rule', badge: 'Math BODMAS', badgeColor: 'indigo', description: 'SSC CHSL - CT 01: Bodmas Rule (10 Questions).', sections: 'Math Section', questionCount: 10, totalMarks: 20, durationMinutes: 8, createdAt: 17 },
  { id: 'math_decimals_1', category: 'subject', title: 'SSC CHSL - CT 02: Decimals', badge: 'Math Decimals', badgeColor: 'indigo', description: 'SSC CHSL - CT 02: Decimals (10 Questions).', sections: 'Math Section', questionCount: 10, totalMarks: 20, durationMinutes: 8, createdAt: 18 },
  { id: 'math_fractions_1', category: 'subject', title: 'SSC CHSL - CT 03: Fractions', badge: 'Math Fractions', badgeColor: 'indigo', description: 'SSC CHSL - CT 03: Fractions (10 Questions).', sections: 'Math Section', questionCount: 10, totalMarks: 20, durationMinutes: 8, createdAt: 19 },
  { id: 'math_percentage_1', category: 'subject', title: 'SSC CHSL - CT 04: Simplification - Percentage', badge: 'Math Percentage', badgeColor: 'indigo', description: 'SSC CHSL - CT 04: Simplification - Percentage (10 Questions).', sections: 'Math Section', questionCount: 10, totalMarks: 20, durationMinutes: 8, createdAt: 20 },
  { id: 'math_rational_irrational_1', category: 'subject', title: 'SSC CHSL - CT 05: Rational or Irrational Numbers', badge: 'Math Rational', badgeColor: 'indigo', description: 'SSC CHSL - CT 05: Rational or Irrational Numbers (10 Questions).', sections: 'Math Section', questionCount: 10, totalMarks: 20, durationMinutes: 8, createdAt: 21 },
  { id: 'math_integers_1', category: 'subject', title: 'SSC CHSL - CT 06: Integers', badge: 'Math Integers', badgeColor: 'indigo', description: 'SSC CHSL - CT 06: Integers Practice Set (10 Questions).', sections: 'Math Section', questionCount: 10, totalMarks: 20, durationMinutes: 8, createdAt: 22 },
  { id: 'gk_census_sports_1', category: 'subject', title: 'SSC CHSL MOCK TEST: CENSUS 2011 & SPORTS', badge: 'Census & Sports', badgeColor: 'orange', description: 'Census 2011 & Sports Mock Test (25 Questions).', sections: 'GK Section', questionCount: 25, totalMarks: 50, durationMinutes: 15, createdAt: 23 },
  { id: 'gi_alphabet_1', category: 'subject', title: 'SSC CHSL - CT 07: Alphabet & Dictionary Order', badge: 'GI Alphabet', badgeColor: 'purple', description: 'Alphabet & Dictionary Order Practice Set (10 Questions).', sections: 'GI Section', questionCount: 10, totalMarks: 20, durationMinutes: 8, createdAt: 24 },
  { id: 'math_divisibility_1', category: 'subject', title: 'SSC CHSL - CT 08: Divisibility & Remainder', badge: 'Math Divisibility', badgeColor: 'indigo', description: 'Divisibility and Remainder Practice Set (10 Questions).', sections: 'Math Section', questionCount: 10, totalMarks: 20, durationMinutes: 8, createdAt: 25 },
  { id: 'math_trigonometry_1', category: 'subject', title: 'SSC CHSL - CT 09: Trigonometry Basics & Formulas', badge: 'Math Trigonometry', badgeColor: 'indigo', description: 'Trigonometry Basics & Formulas Practice Set (10 Questions).', sections: 'Math Section', questionCount: 10, totalMarks: 20, durationMinutes: 8, createdAt: 26 },
  { id: 'science_math_gi_1', category: 'full', title: 'General Science, Math & GI Mock 1', badge: 'Sci-Math-GI', badgeColor: 'teal', description: 'জেনারেল সায়েন্স, গণিত এবং জেনারেল ইন্টেলিজেন্স-এর ১০০টি বিশেষ প্রশ্নের সম্পূর্ণ CBT মক টেস্ট।', sections: 'Science, Math, GI', questionCount: 100, totalMarks: 200, durationMinutes: 60, createdAt: 27 },
  { id: 'wbjee_error_analysis_2', category: 'topic', title: 'Units, Measurements and Error Analysis - Test 2', badge: 'WBJEE Physics', badgeColor: 'teal', description: 'WBJEE/JEE Main লেভেলের ২৫টি প্রশ্নের বিশেষ সেট (Error Analysis ও পরিমাপের গাণিতিক সমস্যা)।', sections: 'GK Section', questionCount: 25, totalMarks: 50, durationMinutes: 15, createdAt: 28 },
  { id: 'wbjee_units_measurements_1', category: 'topic', title: 'Units and Measurements - Test 1', badge: 'WBJEE Physics', badgeColor: 'teal', description: 'WBJEE/JEE Main লেভেলের ২৫টি প্রশ্নের প্রথম সেট (পরিমাপ, মাত্রা ও বিভিন্ন যন্ত্রের গণনা)।', sections: 'GK Section', questionCount: 25, totalMarks: 50, durationMinutes: 15, createdAt: 29 },
  { id: 'panchayat_history_1', category: 'topic', title: 'West Bengal Panchayat - History Mock 1', badge: 'Panchayat GK', badgeColor: 'emerald', description: 'পশ্চিমবঙ্গ পঞ্চায়েত পরীক্ষার উপযোগী ইতিহাস মক সেট (১০টি গুরুত্বপূর্ণ প্রশ্ন - সিন্ধু সভ্যতা)।', sections: 'GK Section', questionCount: 10, totalMarks: 20, durationMinutes: 8, createdAt: 30 },
  { id: 'ssc_chsl_gi_mock_25', category: 'topic', title: 'SSC CHSL - CT 10: General Intelligence Level Test 1', badge: 'SSC CHSL GI', badgeColor: 'purple', description: 'SSC CHSL লেভেলের ২৫টি বিশেষ প্রশ্নের মক টেস্ট (ইংরেজি ও সাধারণ বুদ্ধি)।', sections: 'GI Section', questionCount: 25, totalMarks: 50, durationMinutes: 15, createdAt: 31 }
];

const COLOR_MAP: Record<string, { borderSelected: string, bgSelected: string, ringSelected: string, badgeBg: string, textMain: string }> = {
  indigo: { borderSelected: 'border-indigo-500', bgSelected: 'bg-indigo-500/15', ringSelected: 'ring-indigo-500/35', badgeBg: 'bg-indigo-600', textMain: 'text-indigo-300' },
  rose: { borderSelected: 'border-rose-500', bgSelected: 'bg-rose-500/15', ringSelected: 'ring-rose-500/35', badgeBg: 'bg-rose-600', textMain: 'text-rose-300' },
  amber: { borderSelected: 'border-amber-500', bgSelected: 'bg-amber-500/15', ringSelected: 'ring-amber-500/35', badgeBg: 'bg-amber-600', textMain: 'text-amber-300' },
  blue: { borderSelected: 'border-blue-500', bgSelected: 'bg-blue-500/15', ringSelected: 'ring-blue-500/35', badgeBg: 'bg-blue-600', textMain: 'text-blue-300' },
  purple: { borderSelected: 'border-purple-500', bgSelected: 'bg-purple-500/15', ringSelected: 'ring-purple-500/35', badgeBg: 'bg-purple-600', textMain: 'text-purple-300' },
  teal: { borderSelected: 'border-teal-500', bgSelected: 'bg-teal-500/15', ringSelected: 'ring-teal-500/35', badgeBg: 'bg-teal-600', textMain: 'text-teal-300' },
  orange: { borderSelected: 'border-orange-500', bgSelected: 'bg-orange-500/15', ringSelected: 'ring-orange-500/35', badgeBg: 'bg-orange-600', textMain: 'text-orange-300' },
  fuchsia: { borderSelected: 'border-fuchsia-500', bgSelected: 'bg-fuchsia-500/15', ringSelected: 'ring-fuchsia-500/35', badgeBg: 'bg-fuchsia-600', textMain: 'text-fuchsia-300' },
  sky: { borderSelected: 'border-sky-500', bgSelected: 'bg-sky-500/15', ringSelected: 'ring-sky-500/35', badgeBg: 'bg-sky-600', textMain: 'text-sky-300' },
  emerald: { borderSelected: 'border-emerald-500', bgSelected: 'bg-emerald-500/15', ringSelected: 'ring-emerald-500/35', badgeBg: 'bg-emerald-600', textMain: 'text-emerald-300' },
};

const toBanglaNumber = (num: number | string): string => {
  const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return num.toString().split('').map(digit => {
    const parsed = parseInt(digit, 10);
    return isNaN(parsed) ? digit : banglaDigits[parsed];
  }).join('');
};

export default function ExamPortal() {
  // Candidate Profile State
  const [candidateName, setCandidateName] = useState('');
  const [nameEntered, setNameEntered] = useState(false);
  const [selectedTest, setSelectedTest] = useState<TestOption['id']>('full_mock_1');
  const [examStarted, setExamStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  // Navigation & View States
  const [activeSection, setActiveSection] = useState<Section>('English');
  const [activeQuestionId, setActiveQuestionId] = useState<number>(1);
  const [viewMode, setViewMode] = useState<'single' | 'list'>('single');
  const [confirmSubmitOpen, setConfirmSubmitOpen] = useState(false);
  const [hasShared, setHasShared] = useState(false);
  const [sharePromptOpen, setSharePromptOpen] = useState(false);

  // Filter & Sort States
  const [filterCategory, setFilterCategory] = useState<'all' | 'full' | 'subject' | 'topic'>('all');
  const [sortBy, setSortBy] = useState<'latest' | 'oldest'>('latest');
  const [searchQuery, setSearchQuery] = useState('');
  const [completedTests, setCompletedTests] = useState<string[]>([]);
  const [chosenExam, setChosenExam] = useState<'ssc' | 'rrb' | 'wbjee' | 'all' | 'mts' | 'panchayat' | 'jeemain' | 'neet' | null>(null);
  const [chosenSubject, setChosenSubject] = useState<'math' | 'gk' | 'gi' | 'english' | 'full' | 'all' | null>(null);

  // Dynamically adapt test options based on selected exam category
  const testOptions = React.useMemo<TestOption[]>(() => {
    return TEST_OPTIONS.map((test) => {
      let title = test.title;
      let badge = test.badge;
      let description = test.description;

      if (chosenExam === 'mts') {
        title = title.replace(/SSC CHSL/gi, 'SSC MTS');
        badge = badge.replace(/SSC CHSL/gi, 'SSC MTS');
        description = description.replace(/SSC CHSL/gi, 'SSC MTS');
      } else if (chosenExam === 'ssc') {
        title = title.replace(/SSC MTS/gi, 'SSC CHSL');
        badge = badge.replace(/SSC MTS/gi, 'SSC CHSL');
        description = description.replace(/SSC MTS/gi, 'SSC CHSL');
      } else if (chosenExam === 'rrb') {
        title = title.replace(/SSC CHSL/gi, 'RRB Railway');
        badge = badge.replace(/SSC CHSL/gi, 'RRB');
        description = description.replace(/SSC CHSL/gi, 'RRB Railway');
      } else if (chosenExam === 'jeemain') {
        title = title.replace(/WBJEE\/JEE Main/gi, 'JEE Main').replace(/WBJEE/gi, 'JEE Main');
        badge = badge.replace(/WBJEE\/JEE Main/gi, 'JEE Main').replace(/WBJEE/gi, 'JEE Main');
        description = description.replace(/WBJEE\/JEE Main/gi, 'JEE Main').replace(/WBJEE/gi, 'JEE Main');
      } else if (chosenExam === 'neet') {
        title = title.replace(/WBJEE\/JEE Main/gi, 'NEET').replace(/WBJEE/gi, 'NEET');
        badge = badge.replace(/WBJEE\/JEE Main/gi, 'NEET').replace(/WBJEE/gi, 'NEET');
        description = description.replace(/WBJEE\/JEE Main/gi, 'NEET').replace(/WBJEE/gi, 'NEET');
      } else if (chosenExam === 'wbjee') {
        title = title.replace(/WBJEE\/JEE Main/gi, 'WBJEE').replace(/JEE Main/gi, 'WBJEE').replace(/NEET/gi, 'WBJEE');
        badge = badge.replace(/WBJEE\/JEE Main/gi, 'WBJEE').replace(/JEE Main/gi, 'WBJEE').replace(/NEET/gi, 'WBJEE');
        description = description.replace(/WBJEE\/JEE Main/gi, 'WBJEE').replace(/JEE Main/gi, 'WBJEE').replace(/NEET/gi, 'WBJEE');
      }

      return {
        ...test,
        title,
        badge,
        description,
      };
    });
  }, [chosenExam]);

  // Paid Batch State
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [joinName, setJoinName] = useState('');
  const [joinAge, setJoinAge] = useState('');
  const [joinAddress, setJoinAddress] = useState('');

  // Exam Response States
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, 'A' | 'B' | 'C' | 'D'>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<number, boolean>>({});
  const [visitedQuestions, setVisitedQuestions] = useState<Record<number, boolean>>({ 1: true });
  
  // Timer State (60 minutes = 3600 seconds)
  const [timeLeft, setTimeLeft] = useState(3600);

  // Fullscreen State & Control
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(
        !!document.fullscreenElement ||
        !!(document as any).webkitFullscreenElement ||
        !!(document as any).mozFullScreenElement ||
        !!(document as any).msFullscreenElement
      );
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  const requestFullscreen = () => {
    const el = document.documentElement as any;
    if (el.requestFullscreen) {
      el.requestFullscreen().catch((err: any) => console.log('Fullscreen request failed:', err));
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    } else if (el.mozRequestFullScreen) {
      el.mozRequestFullScreen();
    } else if (el.msRequestFullscreen) {
      el.msRequestFullscreen();
    }
  };

  const exitFullscreen = () => {
    const doc = document as any;
    if (doc.exitFullscreen) {
      doc.exitFullscreen().catch((err: any) => console.log('Fullscreen exit failed:', err));
    } else if (doc.webkitExitFullscreen) {
      doc.webkitExitFullscreen();
    } else if (doc.mozCancelFullScreen) {
      doc.mozCancelFullScreen();
    } else if (doc.msExitFullscreen) {
      doc.msExitFullscreen();
    }
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      requestFullscreen();
    } else {
      exitFullscreen();
    }
  };

  // Filter for post-exam review (All, Correct, Incorrect, Unattempted)
  const [reviewFilter, setReviewFilter] = useState<'all' | 'correct' | 'incorrect' | 'unattempted'>('all');

  // List of questions for the selected test
  const testQuestions = React.useMemo(() => {
    if (selectedTest === 'english_gi_combo') {
      return comboQuestions;
    }
    if (selectedTest === 'indian_art_culture') {
      return artCultureQuestions;
    }
    if (selectedTest === 'english_grammar') {
      return grammarQuestions;
    }
    if (selectedTest === 'gi_special') {
      return giQuestions;
    }
    if (selectedTest === 'full_mock_2') {
      return fullMock2Questions;
    }
    if (selectedTest === 'static_gk_census') {
      return censusGkQuestions;
    }
    if (selectedTest === 'static_gk_sports') {
      return sportsGkQuestions;
    }
    if (selectedTest === 'computer_knowledge') {
      return computerQuestions;
    }
    if (selectedTest === 'geography_knowledge') {
      return geographyQuestions;
    }
    if (selectedTest === 'gi_mock_2') {
      return giMock2Questions;
    }
    if (selectedTest === 'english_mock') {
      return englishMockQuestions;
    }
    if (selectedTest === 'english_mock_2') {
      return englishMock2Questions;
    }
    if (selectedTest === 'gi_mock_3') {
      return giMock3Questions;
    }
    if (selectedTest === 'math_mock_1') {
      return mathMock1Questions;
    }
    if (selectedTest === 'gk_mock_1') {
      return gkMock1Questions;
    }
    if (selectedTest === 'math_bodmas_1') {
      return mathBodmasQuestions;
    }
    if (selectedTest === 'math_decimals_1') {
      return mathDecimalsQuestions;
    }
    if (selectedTest === 'math_fractions_1') {
      return mathFractionsQuestions;
    }
    if (selectedTest === 'math_percentage_1') {
      return mathPercentageQuestions;
    }
    if (selectedTest === 'math_rational_irrational_1') {
      return mathRationalIrrationalQuestions;
    }
    if (selectedTest === 'math_integers_1') {
      return mathIntegersQuestions;
    }
    if (selectedTest === 'gk_census_sports_1') {
      return gkCensusSportsQuestions;
    }
    if (selectedTest === 'gi_alphabet_1') {
      return giAlphabetQuestions;
    }
    if (selectedTest === 'math_divisibility_1') {
      return mathDivisibilityQuestions;
    }
    if (selectedTest === 'math_trigonometry_1') {
      return mathTrigonometryQuestions;
    }
    if (selectedTest === 'science_math_gi_1') {
      return scienceMathGiQuestions;
    }
    if (selectedTest === 'wbjee_error_analysis_2') {
      return wbjeeErrorAnalysisQuestions;
    }
    if (selectedTest === 'wbjee_units_measurements_1') {
      return wbjeeUnitsMeasurements1Questions;
    }
    if (selectedTest === 'panchayat_history_1') {
      return panchayatHistory1Questions;
    }
    if (selectedTest === 'ssc_chsl_gi_mock_25') {
      return sscChslGiMock25Questions;
    }
    return questions; // 'full_mock_1' uses all 100 questions
  }, [selectedTest]);

  // Loader for currentSections tab option lists
  const currentSections = React.useMemo<Section[]>(() => {
    if (selectedTest === 'english_gi_combo') {
      return ['English', 'GI'];
    }
    if (selectedTest === 'indian_art_culture') {
      return ['GK'];
    }
    if (selectedTest === 'english_grammar') {
      return ['English'];
    }
    if (selectedTest === 'gi_special') {
      return ['GI'];
    }
    if (selectedTest === 'static_gk_census') {
      return ['GK'];
    }
    if (selectedTest === 'static_gk_sports') {
      return ['GK'];
    }
    if (selectedTest === 'computer_knowledge') {
      return ['GK'];
    }
    if (selectedTest === 'geography_knowledge') {
      return ['GK'];
    }
    if (selectedTest === 'gi_mock_2') {
      return ['GI'];
    }
    if (selectedTest === 'english_mock') {
      return ['English'];
    }
    if (selectedTest === 'english_mock_2') {
      return ['English'];
    }
    if (selectedTest === 'gi_mock_3') {
      return ['GI'];
    }
    if (selectedTest === 'math_mock_1') {
      return ['Math'];
    }
    if (selectedTest === 'gk_mock_1') {
      return ['GK'];
    }
    if (selectedTest === 'math_bodmas_1') {
      return ['Math'];
    }
    if (selectedTest === 'math_decimals_1') {
      return ['Math'];
    }
    if (selectedTest === 'math_fractions_1') {
      return ['Math'];
    }
    if (selectedTest === 'math_percentage_1') {
      return ['Math'];
    }
    if (selectedTest === 'math_rational_irrational_1') {
      return ['Math'];
    }
    if (selectedTest === 'math_integers_1') {
      return ['Math'];
    }
    if (selectedTest === 'gk_census_sports_1') {
      return ['GK'];
    }
    if (selectedTest === 'gi_alphabet_1') {
      return ['GI'];
    }
    if (selectedTest === 'math_divisibility_1') {
      return ['Math'];
    }
    if (selectedTest === 'math_trigonometry_1') {
      return ['Math'];
    }
    if (selectedTest === 'science_math_gi_1') {
      return ['Math', 'GI', 'GK'];
    }
    if (selectedTest === 'wbjee_error_analysis_2') {
      return ['GK'];
    }
    if (selectedTest === 'wbjee_units_measurements_1') {
      return ['GK'];
    }
    if (selectedTest === 'panchayat_history_1') {
      return ['GK'];
    }
    if (selectedTest === 'ssc_chsl_gi_mock_25') {
      return ['GI'];
    }
    return ['English', 'Math', 'GI', 'GK'];
  }, [selectedTest]);

  // Load active question list based on section
  const sectionQuestions = testQuestions.filter((q) => q.section === activeSection);

  // Helper to determine custom card background, border, hover, and text colors based on title/category
  const getCardStyle = (test: TestOption, isSelected: boolean) => {
    const titleLower = test.title.toLowerCase();
    const idLower = test.id.toLowerCase();
    const badgeLower = test.badge.toLowerCase();

    const isMath = titleLower.includes('math') || badgeLower.includes('math') || idLower.includes('math') || idLower.includes('trigonometry') || idLower.includes('divisibility') || idLower.includes('percentage') || idLower.includes('fractions') || idLower.includes('decimals') || idLower.includes('bodmas') || idLower.includes('integers') || idLower.includes('rational');
    const isSci = titleLower.includes('science') || idLower.includes('science');
    const isGK = titleLower.includes('gk') || badgeLower.includes('gk') || titleLower.includes('census') || titleLower.includes('culture') || titleLower.includes('computer') || titleLower.includes('rivers') || titleLower.includes('sports') || idLower.includes('gk') || idLower.includes('geography') || idLower.includes('computer') || idLower.includes('census') || idLower.includes('art') || titleLower.includes('dam');
    const isEnglish = titleLower.includes('english') || badgeLower.includes('english') || idLower.includes('english') || titleLower.includes('grammar');
    const isGI = titleLower.includes('gi') || badgeLower.includes('gi') || idLower.includes('gi_') || titleLower.includes('intelligence') || titleLower.includes('alphabet');

    let themeColor = 'indigo'; // Default fallback
    if (isMath) themeColor = 'blue';
    else if (isSci) themeColor = 'teal';
    else if (isGK) themeColor = 'amber';
    else if (isEnglish) themeColor = 'rose';
    else if (isGI) themeColor = 'purple';

    const colors = COLOR_MAP[themeColor] || COLOR_MAP.indigo;

    if (isSelected) {
      // Selected state gets a bright border and glow ring
      return `border-2 ${colors.borderSelected} ${colors.bgSelected} ring-4 ${colors.ringSelected} scale-[1.02] shadow-xl shadow-slate-950/50`;
    } else {
      // Color-coded unselected states with custom subtle background color tint & color indicators
      switch (themeColor) {
        case 'blue': // Math -> Blue
          return 'border-slate-700 bg-blue-950/15 hover:border-blue-500/50 hover:bg-blue-950/25 border-l-4 border-l-blue-500 shadow-sm';
        case 'teal': // Science -> Green/Teal
          return 'border-slate-700 bg-teal-950/15 hover:border-teal-500/50 hover:bg-teal-950/25 border-l-4 border-l-teal-500 shadow-sm';
        case 'amber': // GK -> Yellow/Amber/Orange
          return 'border-slate-700 bg-amber-950/10 hover:border-amber-500/50 hover:bg-amber-950/20 border-l-4 border-l-amber-500 shadow-sm';
        case 'purple': // GI -> Purple
          return 'border-slate-700 bg-purple-950/15 hover:border-purple-500/50 hover:bg-purple-950/25 border-l-4 border-l-purple-500 shadow-sm';
        case 'rose': // English -> Rose/Pink
          return 'border-slate-700 bg-rose-950/15 hover:border-rose-500/50 hover:bg-rose-950/25 border-l-4 border-l-rose-500 shadow-sm';
        default:
          return 'border-slate-700 bg-slate-750/70 hover:border-slate-500 hover:bg-slate-750 border-l-4 border-l-indigo-500 shadow-sm';
      }
    }
  };

  const getBadgeColor = (test: TestOption) => {
    const titleLower = test.title.toLowerCase();
    const idLower = test.id.toLowerCase();
    const badgeLower = test.badge.toLowerCase();

    const isMath = titleLower.includes('math') || badgeLower.includes('math') || idLower.includes('math') || idLower.includes('trigonometry') || idLower.includes('divisibility') || idLower.includes('percentage') || idLower.includes('fractions') || idLower.includes('decimals') || idLower.includes('bodmas') || idLower.includes('integers') || idLower.includes('rational');
    const isSci = titleLower.includes('science') || idLower.includes('science');
    const isGK = titleLower.includes('gk') || badgeLower.includes('gk') || titleLower.includes('census') || titleLower.includes('culture') || titleLower.includes('computer') || titleLower.includes('rivers') || titleLower.includes('sports') || idLower.includes('gk') || idLower.includes('geography') || idLower.includes('computer') || idLower.includes('census') || idLower.includes('art') || titleLower.includes('dam');
    const isEnglish = titleLower.includes('english') || badgeLower.includes('english') || idLower.includes('english') || titleLower.includes('grammar');
    const isGI = titleLower.includes('gi') || badgeLower.includes('gi') || idLower.includes('gi_') || titleLower.includes('intelligence') || titleLower.includes('alphabet');

    if (isMath) return 'bg-blue-600 border border-blue-400/30';
    if (isSci) return 'bg-teal-600 border border-teal-400/30';
    if (isGK) return 'bg-amber-600 border border-amber-400/30';
    if (isEnglish) return 'bg-rose-600 border border-rose-400/30';
    if (isGI) return 'bg-purple-600 border border-purple-400/30';
    return 'bg-indigo-600 border border-indigo-400/30';
  };

  // Auto-load candidate name and completed tests from local storage
  useEffect(() => {
    const storedName = localStorage.getItem('cbt_candidate_name');
    if (storedName) {
      setCandidateName(storedName);
      setNameEntered(true);
    }
    try {
      const storedCompleted = localStorage.getItem('cbt_completed_tests');
      if (storedCompleted) {
        setCompletedTests(JSON.parse(storedCompleted));
      }
    } catch (e) {
      console.error('Error parsing completed tests', e);
    }
  }, []);

  // Timer Effect
  useEffect(() => {
    if (!examStarted || submitted) return;

    if (timeLeft <= 0) {
      handleAutoSubmit();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, examStarted, submitted]);

  // Track visited questions when activeQuestionId changes
  useEffect(() => {
    if (examStarted && !submitted) {
      setVisitedQuestions((prev) => ({ ...prev, [activeQuestionId]: true }));
      // Automatically switch section if question belongs to another section
      const q = testQuestions.find(q => q.id === activeQuestionId);
      if (q && q.section !== activeSection) {
        setActiveSection(q.section);
      }
    }
  }, [activeQuestionId, examStarted, submitted, testQuestions, activeSection]);

  // Actions
  const handleSaveName = (e: React.FormEvent) => {
    e.preventDefault();
    if (!candidateName.trim()) return;
    localStorage.setItem('cbt_candidate_name', candidateName.trim());
    setNameEntered(true);
  };

  const handleJoinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi, I want to join the paid batch.
Name: ${joinName}
Age: ${joinAge}
Address: ${joinAddress}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/+916289658623?text=${encodedText}`, '_blank');
    setJoinModalOpen(false);
    setJoinName('');
    setJoinAge('');
    setJoinAddress('');
  };

  const handleStartExam = () => {
    // Request fullscreen mode for computer and phone
    requestFullscreen();

    setExamStarted(true);
    setSubmitted(false);
    setSelectedAnswers({});
    setMarkedForReview({});
    setVisitedQuestions({ 1: true });
    setActiveQuestionId(1);
    
    const activeTestDef = testOptions.find(t => t.id === selectedTest);
    const initialSection = currentSections[0] || 'English';
    setActiveSection(initialSection);
    
    // Set appropriate timer duration
    setTimeLeft((activeTestDef?.durationMinutes || 60) * 60);
  };

  const handleOptionSelect = (questionId: number, optionKey: 'A' | 'B' | 'C' | 'D') => {
    if (submitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionKey }));
  };

  const handleClearResponse = (questionId: number) => {
    if (submitted) return;
    setSelectedAnswers((prev) => {
      const updated = { ...prev };
      delete updated[questionId];
      return updated;
    });
  };

  const handleToggleReview = (questionId: number) => {
    if (submitted) return;
    setMarkedForReview((prev) => ({ ...prev, [questionId]: !prev[questionId] }));
  };

  const handleNext = () => {
    if (activeQuestionId < testQuestions.length) {
      setActiveQuestionId((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (activeQuestionId > 1) {
      setActiveQuestionId((prev) => prev - 1);
    }
  };

  const handleAutoSubmit = () => {
    exitFullscreen();
    setSubmitted(true);
    setConfirmSubmitOpen(false);
    
    // Save completed test ID to localStorage and state
    try {
      const completedTestsStr = localStorage.getItem('cbt_completed_tests') || '[]';
      const completed = JSON.parse(completedTestsStr) as string[];
      if (!completed.includes(selectedTest)) {
        completed.push(selectedTest);
        localStorage.setItem('cbt_completed_tests', JSON.stringify(completed));
        setCompletedTests(completed);
      }
    } catch (e) {
      console.error('Error saving completed test ID', e);
    }
  };

  const triggerManualSubmit = () => {
    setConfirmSubmitOpen(true);
  };

  const confirmSubmit = () => {
    exitFullscreen();
    setSubmitted(true);
    setConfirmSubmitOpen(false);

    // Save completed test ID to localStorage and state
    try {
      const completedTestsStr = localStorage.getItem('cbt_completed_tests') || '[]';
      const completed = JSON.parse(completedTestsStr) as string[];
      if (!completed.includes(selectedTest)) {
        completed.push(selectedTest);
        localStorage.setItem('cbt_completed_tests', JSON.stringify(completed));
        setCompletedTests(completed);
      }
    } catch (e) {
      console.error('Error saving completed test ID', e);
    }
  };

  const handleRetake = () => {
    if (!hasShared) {
      setSharePromptOpen(true);
      return;
    }
    setExamStarted(false);
    setSubmitted(false);
    setSelectedAnswers({});
    setMarkedForReview({});
    setVisitedQuestions({ 1: true });
    setActiveQuestionId(1);
    setActiveSection(currentSections[0] || 'English');
    setTimeLeft(3600);
  };

  const handleChallengeFriend = () => {
    setHasShared(true);
    const activeTestDef = testOptions.find(t => t.id === selectedTest);
    const testTitle = activeTestDef ? activeTestDef.title : 'Mock Test';

    const totalQuestionsCount = testQuestions.length;
    const maxMarksVal = totalQuestionsCount * 2;

    const textMessage = `*🔥 CHALLENGE ALERT! can you beat my CBT Mock Test score? 🎯*

*👤 Candidate:* ${candidateName}
*📝 Mock Test:* ${testTitle}
*📊 Obtained Score:* ${results.totalMarks.toFixed(1)} / ${maxMarksVal.toFixed(1)} Marks
*🎯 Accuracy:* ${results.accuracy}%
*🏆 Estimated AIR:* ${predData.rankRange}
*📈 Percentile:* ${predData.percentileRange}

👉 Try taking the test now and beat my score! 👇
https://cbt-sudarshan.vercel.app/`;

    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Helper formats
  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs > 0 ? hrs + ':' : ''}${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Score calculations
  const calculateResult = () => {
    let correctCount = 0;
    let incorrectCount = 0;
    let unattemptedCount = 0;

    // Dynamically calculate totals per section
    const englishTotal = testQuestions.filter(q => q.section === 'English').length;
    const mathTotal = testQuestions.filter(q => q.section === 'Math').length;
    const giTotal = testQuestions.filter(q => q.section === 'GI').length;
    const gkTotal = testQuestions.filter(q => q.section === 'GK').length;

    // Section wise states
    const sectionStats: Record<Section, { total: number; attempted: number; correct: number; incorrect: number; marks: number }> = {
      English: { total: englishTotal, attempted: 0, correct: 0, incorrect: 0, marks: 0 },
      Math: { total: mathTotal, attempted: 0, correct: 0, incorrect: 0, marks: 0 },
      GI: { total: giTotal, attempted: 0, correct: 0, incorrect: 0, marks: 0 },
      GK: { total: gkTotal, attempted: 0, correct: 0, incorrect: 0, marks: 0 }
    };

    testQuestions.forEach((q) => {
      const selected = selectedAnswers[q.id];
      const sec = q.section;

      if (!selected) {
        unattemptedCount++;
      } else {
        sectionStats[sec].attempted++;
        if (selected === q.correctAnswer) {
          correctCount++;
          sectionStats[sec].correct++;
          sectionStats[sec].marks += 2;
        } else {
          incorrectCount++;
          sectionStats[sec].incorrect++;
          sectionStats[sec].marks -= 0.5;
        }
      }
    });

    const totalMarks = (correctCount * 2) - (incorrectCount * 0.5);
    const accuracy = correctCount + incorrectCount > 0 
      ? Math.round((correctCount / (correctCount + incorrectCount)) * 100) 
      : 0;
    return {
      totalMarks,
      correctCount,
      incorrectCount,
      unattemptedCount,
      accuracy,
      sectionStats
    };
  };

  const results = calculateResult();

  // Helper to calculate rank, percentile & zone based on total marks out of 200
  const getRankAndPercentile = (score: number) => {
    let zoneName = '';
    let zoneBg = '';
    let zoneColor = '';
    let borderStyle = '';
    let rankRange = '';
    let percentileRange = '';
    let descriptionBengali = '';
    let adviceBengali = '';
    let progressBg = '';
    let relativePosition = 0; // 0 to 100 for visual marker

    if (score >= 185) {
      zoneName = 'টপার জোন (Topper Zone)';
      zoneBg = 'bg-amber-500/15 text-amber-300';
      zoneColor = 'text-amber-400';
      borderStyle = 'border-amber-500/30';
      progressBg = 'bg-gradient-to-r from-amber-500 to-yellow-400';
      rankRange = '1 – 50';
      percentileRange = '99.98% – 100%';
      descriptionBengali = 'সেরা র্যাঙ্ক ও নিশ্চিত সিলেকশন! আপনি আমাদের মেধা তালিকার শীর্ষে আছেন।';
      adviceBengali = 'অসাধারণ ঐতিহাসিক স্কোর! প্রশ্ন খুব সহজ না হলে এই স্তরে পরীক্ষার্থীর সংখ্যা খুবই নগণ্য থাকে। আপনি নিশ্চিতভাবেই নিজের পছন্দের রাজ্য এবং ক্যাটাগরির ডেটা এন্ট্রি কিংবা সেরা মেইন পোস্ট অফার পাবেন।';
      relativePosition = 96;
    } else if (score >= 175) {
      zoneName = 'টপার জোন (Topper Zone)';
      zoneBg = 'bg-yellow-500/15 text-yellow-300';
      zoneColor = 'text-yellow-400';
      borderStyle = 'border-yellow-500/30';
      progressBg = 'bg-yellow-500';
      rankRange = '50 – 500';
      percentileRange = '99.80% – 99.97%';
      descriptionBengali = 'শীর্ষ র্যাঙ্ক জোন। প্রথম পছন্দ অনুযায়ী সেরা মন্ত্রক পাওয়ার সুবর্ণ সুযোগ।';
      adviceBengali = 'চমৎকার পারফরম্যান্স! প্রিলিমিনারি স্তরের এই অসাধারণ স্কোরের মাধ্যমে প্রথম পছন্দ অনুযায়ী সেরা ও হাই-প্রোফাইল মন্ত্রণালয় কিংবা কাস্টম উইং পাওয়ার পথ সুগম হয়ে গেছে।';
      relativePosition = 89;
    } else if (score >= 165) {
      zoneName = 'নিরাপদ জোন (Selection Zone)';
      zoneBg = 'bg-emerald-500/15 text-emerald-300';
      zoneColor = 'text-emerald-400';
      borderStyle = 'border-emerald-500/30';
      progressBg = 'bg-emerald-500';
      rankRange = '500 – 2,500';
      percentileRange = '99.00% – 99.79%';
      descriptionBengali = 'যেকোনো প্রধান ক্যাটাগরির জন্য অত্যন্ত নিরাপদ এবং নিশ্চিত সিলেকশন জোন।';
      adviceBengali = 'অত্যন্ত নিরাপদ স্কোর! সাধারণ প্রার্থী হোন কিংবা ওবিসি/ইডব্লিউএস - যেকোনো স্তরেই আপনার চূড়ান্ত তালিকায় সুযোগ পাওয়ার নিশ্চয়তা অত্যন্ত প্রবল। পরবর্তী লেভেলের মূল মূল ধারাগুলিতে প্রস্তুতি আরও তুঙ্গে রাখুন।';
      relativePosition = 82;
    } else if (score >= 155) {
      zoneName = 'নিরাপদ জোন (Selection Zone)';
      zoneBg = 'bg-teal-500/15 text-teal-300';
      zoneColor = 'text-teal-400';
      borderStyle = 'border-teal-500/30';
      progressBg = 'bg-teal-500';
      rankRange = '2,500 – 8,000';
      percentileRange = '96.80% – 98.99%';
      descriptionBengali = 'স্ট্যান্ডার্ড সিলেকশন জোন। বিগত কয়েক বছরের ট্রেন্ড অনুযায়ী অত্যন্ত নির্ভরযোগ্য স্কোর।';
      adviceBengali = 'আপনার স্কোর বেশ ভালো। পূর্ববর্তী ট্রেন্ড ও রেকর্ড অনুযায়ী এই স্কোরে আপনি স্বাচ্ছন্দ্যে লোয়ার ডিভিশনাল ক্লাসিক পোস্ট বা তার সমমানের মূল পদ পেয়ে যেতে পারেন। সিলেকশন প্রায় নিশ্চিত।';
      relativePosition = 74;
    } else if (score >= 145) {
      zoneName = 'বর্ডারলাইন জোন (Selection Zone)';
      zoneBg = 'bg-blue-500/15 text-blue-300';
      zoneColor = 'text-blue-400';
      borderStyle = 'border-blue-500/30';
      progressBg = 'bg-blue-505';
      rankRange = '8,000 – 20,000';
      percentileRange = '92.00% – 96.79%';
      descriptionBengali = 'সীমান্তবর্তী স্কোর। নরমালাইজেশনে কাট-অফ পরিবর্তন সাপেক্ষে সুযোগ প্রাপ্তি।';
      adviceBengali = 'এটি একটি বর্ডারলাইন বা কাছাকাছি থাকা স্কোর। নরমালাইজেশনে আপনার শিফটের কাঠিন্য অনুযায়ী নম্বর বৃদ্ধি পেলে খুব সহজেই তালিকায় চলে আসবেন, তবে অসাবধানতায় বাদ পড়ার হালকা ঝুঁকিও থাকতে পারে। চূড়ান্ত সিলেবাসে জোর দিলেই এটি ১০০% নিরাপদ করা সম্ভব।';
      relativePosition = 66;
    } else if (score >= 130) {
      zoneName = 'ক্যাটাগরি ভিত্তিক জোন (Qualifying Zone)';
      zoneBg = 'bg-indigo-500/15 text-indigo-300';
      zoneColor = 'text-indigo-400';
      borderStyle = 'border-indigo-500/30';
      progressBg = 'bg-indigo-500';
      rankRange = '20,000 – 40,000';
      percentileRange = '84.00% – 91.99%';
      descriptionBengali = 'সংরক্ষিত ক্যাটাগরিদের জন্য দুর্দান্ত কোয়ালিফাইং স্কোর।';
      adviceBengali = 'সাধারণ বিভাগের জন্য সিলেকশন কঠিন হলেও সংরক্ষিত ও রিজার্ভড ক্যাটাগরির (যেমন- SC/ST বা এক্স-সার্ভিসম্যান) প্রার্থীরা এই স্কোরে খুব চমৎকার র্যাঙ্ক নিয়ে সহজেই পরবর্তী মূল ধাপের জন্য উত্তীর্ণ হয়ে যান। জেনারেল হলে আরো ১৫-২০ নম্বর বৃদ্ধির চেষ্টা করুন।';
      relativePosition = 55;
    } else if (score >= 115) {
      zoneName = 'ক্যাটাগরি ভিত্তিক জোন (Qualifying Zone)';
      zoneBg = 'bg-slate-800 text-slate-350';
      zoneColor = 'text-slate-300';
      borderStyle = 'border-slate-700';
      progressBg = 'bg-slate-500';
      rankRange = '40,000 – 60,000';
      percentileRange = '76.00% – 83.99%';
      descriptionBengali = 'বিশেষ সংরক্ষিত ও প্রতিবন্ধী (PwD) প্রার্থীদের উপযুক্ত স্কোর।';
      adviceBengali = 'বিশেষ সংরক্ষণ বা শারীরিক প্রতিবন্ধী (PwD) প্রার্থীরা এই স্কোরে কাট-অফ ক্লিয়ার করতে সক্ষম হতে পারেন। তবে সাধারণ কিংবা অন্যান্য ক্যাটাগরিদের জন্য এটি অল ইন্ডিয়া র্যাঙ্কের মেধা তালিকা পার করার জন্য বেশ নিচে রয়েছে।';
      relativePosition = 42;
    } else if (score >= 100) {
      zoneName = 'ক্যাটাগরি ভিত্তিক জোন (Qualifying Zone)';
      zoneBg = 'bg-slate-800 text-slate-350';
      zoneColor = 'text-slate-300';
      borderStyle = 'border-slate-705';
      progressBg = 'bg-slate-550';
      rankRange = '60,000 – 80,000';
      percentileRange = '68.00% – 75.99%';
      descriptionBengali = 'ন্যূনতম সুযোগ পাওয়ার চেষ্টা জোন কিন্তু চূড়ান্ত পোস্টের জন্য ঝুঁকিপূর্ণ।';
      adviceBengali = 'অপেক্ষাকৃত কম স্কোর। সাধারণ বা ওবিসি ক্ষেত্রে সুযোগ কম থাকলেও, শুধুমাত্র কিছু নির্দিষ্ট কোটা (যেমন- Ex-Servicemen) বা বিশেষ সাব-ক্যাটাগরির প্রার্থীরা এখানে কাট-অফ ক্লিয়ার করতে পারেন। অন্তত ৫০ নম্বর বাড়ানোর প্রস্তুতি প্রয়োজন।';
      relativePosition = 34;
    } else if (score >= 60) {
      zoneName = 'ডিসকোয়ালিফাইড / নো-হোপ জোন (No-Hope Zone)';
      zoneBg = 'bg-rose-500/10 text-rose-300';
      zoneColor = 'text-rose-400';
      borderStyle = 'border-rose-500/20';
      progressBg = 'bg-rose-600';
      rankRange = '80,000 – 1,50,000+';
      percentileRange = '40.00% – 67.99%';
      descriptionBengali = 'ন্যূনতম পাস নম্বর পেরিয়েছে কিন্তু চূড়ান্ত মেধার দৌড়ে অনেক পেছনে।';
      adviceBengali = 'অল ইন্ডিয়া র্যাঙ্ক মেলালে দেখা যাবে আপনার পজিশন অনেক পেছনে। পরীক্ষার অফিশিয়াল নিয়ম অনুযায়ী উত্তীর্ণ হতে আপনাকে ন্যূনতম ৩০% (অর্থাৎ ২০০ এর মধ্যে ৬০ নম্বর) পেতেই হতো, যা ক্লিয়ার হলেও সিলেকশন অসম্ভব। প্রতিটি প্রশ্নের দুর্বলতা গভীরভাবে বিশ্লেষণ করুন।';
      relativePosition = 18;
    } else {
      zoneName = 'নো-হোপ জোন (No-Hope Zone - Disqualified)';
      zoneBg = 'bg-red-550/10 text-red-300';
      zoneColor = 'text-red-500';
      borderStyle = 'border-red-500/20';
      progressBg = 'bg-red-650';
      rankRange = '2,00,000 – 5,00,000+';
      percentileRange = '0.00% – 39.99%';
      descriptionBengali = 'সরাসরি অনুত্তীর্ণ। প্রচুর নেগেটিভ মার্কিং অথবা অপর্যাপ্ত প্রিপারেশন।';
      adviceBengali = 'আপনার স্কোর অত্যন্ত অপ্রতুল। এর স্পষ্ট কারণ হলো বিপুল পরিমাণ নেগেটিভ মার্কিং অথবা মূল ভাবনার চূড়ান্ত দুর্বলতা। এখনই নতুন কোনো মক টেস্ট দেওয়া স্থগিত করুন, এবং প্রথমে বেসিক সিলেবাস ও সূত্রগুলি পুনরায় গুরুত্ব সহকারে রিভিশন করুন।';
      relativePosition = 6;
    }

    return {
      zoneName,
      zoneBg,
      zoneColor,
      borderStyle,
      progressBg,
      rankRange,
      percentileRange,
      descriptionBengali,
      adviceBengali,
      relativePosition
    };
  };

  const predictorScore = Math.round((results.totalMarks * 100) / testQuestions.length);
  const predData = getRankAndPercentile(predictorScore);

  // Color key getters for Palette
  const getPaletteBtnStyle = (qId: number) => {
    const isSelected = !!selectedAnswers[qId];
    const isMarked = !!markedForReview[qId];
    const isVisited = !!visitedQuestions[qId];
    const isActive = activeQuestionId === qId;

    let base = 'w-10 h-10 rounded-lg flex items-center justify-center font-mono text-sm font-semibold transition border ';

    if (isActive) {
      base += 'ring-4 ring-blue-400 scale-110 ';
    }

    if (isMarked) {
      if (isSelected) {
        base += 'bg-purple-600 text-white border-purple-800 hover:bg-purple-700'; // Marked and answered
      } else {
        base += 'bg-amber-500 text-white border-amber-700 hover:bg-amber-600'; // Marked but unanswered
      }
    } else if (isSelected) {
      base += 'bg-emerald-600 text-white border-emerald-800 hover:bg-emerald-700'; // Answered
    } else if (isVisited) {
      base += 'bg-rose-500 text-white border-rose-700 hover:bg-rose-600'; // Visited but not answered
    } else {
      base += 'bg-gray-100 text-gray-500 border-gray-300 hover:bg-gray-200'; // Not visited
    }

    return base;
  };

  // 1. WELCOME & TEST SELECTION SCREEN
  if (!examStarted) {
    if (!nameEntered) {
      return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 relative">
          
          <button 
            onClick={() => setJoinModalOpen(true)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-400 hover:to-yellow-400 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-transform transform hover:scale-105 flex items-center gap-2 z-10 border border-orange-400/30"
          >
            <span className="hidden sm:inline">Explore our batch</span>
            <span className="sm:hidden">Explore batch</span>
          </button>

          <div className="max-w-xl w-full bg-slate-800 text-white shadow-2xl rounded-2xl p-8 border border-slate-700 relative overflow-hidden">
            {/* Accent decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>

            <div className="text-center mb-8">
              <div className="inline-flex p-3 rounded-full bg-indigo-500/10 text-indigo-400 mb-3 border border-indigo-500/20">
                <Award className="w-10 h-10 animate-pulse" />
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight">CBT Practice Portal</h1>
              <p className="text-slate-400 mt-2">Computer Based Test Mock Engine</p>
            </div>

            <form onSubmit={handleSaveName} className="space-y-6">
              <div>
                <label htmlFor="candidate-name" className="block text-sm font-semibold text-slate-300 mb-2">
                  Please Enter Your Name (আপনার নাম লিখুন)
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
                    <User className="w-5 h-5" />
                  </span>
                  <input
                    id="candidate-name"
                    type="text"
                    required
                    value={candidateName}
                    onChange={(e) => setCandidateName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full bg-slate-750 border border-slate-600 rounded-xl py-3 pl-10 pr-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all font-medium"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-indigo-500/20 transition-all transform active:scale-98 flex items-center justify-center gap-2 text-lg"
              >
                Proceed to Test Selection (পরবর্তী ধাপে যান)
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-slate-700/50 flex flex-col items-center">
              <p className="text-sm text-slate-400 mb-3 font-medium">Join our community for daily practice</p>
              <a
                href="https://whatsapp.com/channel/0029VbB1PecFcow9ajKRDT1g"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white font-bold py-3.5 rounded-xl shadow-lg shadow-[#25D366]/20 transition-all transform active:scale-98 flex items-center justify-center gap-2 text-base"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Join our WhatsApp Channel
              </a>
            </div>
          </div>

          {joinModalOpen && (
            <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 max-w-sm w-full shadow-2xl relative">
                <button 
                  onClick={() => setJoinModalOpen(false)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-white"
                >
                  <XCircle className="w-6 h-6" />
                </button>
                <h3 className="text-xl font-bold text-white mb-2 text-center">Join Paid Batch</h3>
                <p className="text-slate-300 text-sm mb-4 text-center">
                  To get live lecture, suggestion notes, you can join our paid batch for just <span className="font-bold text-emerald-400">100 INR per month</span>.
                </p>
                
                <div className="bg-slate-750/50 border border-slate-700 rounded-lg p-4 mb-6">
                  <h4 className="text-emerald-400 font-semibold text-sm mb-2">Features Included:</h4>
                  <ul className="text-slate-300 text-sm space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" /> Small batch
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" /> Live lecture
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" /> 1 to 1 conversation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" /> Suggestion notes
                    </li>
                  </ul>
                </div>
                
                <form onSubmit={handleJoinSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      required
                      value={joinName}
                      onChange={(e) => setJoinName(e.target.value)}
                      placeholder="Your Name"
                      className="w-full bg-slate-750 border border-slate-600 rounded-lg py-2.5 px-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      required
                      value={joinAge}
                      onChange={(e) => setJoinAge(e.target.value)}
                      placeholder="Your Age"
                      className="w-full bg-slate-750 border border-slate-600 rounded-lg py-2.5 px-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <textarea
                      required
                      value={joinAddress}
                      onChange={(e) => setJoinAddress(e.target.value)}
                      placeholder="Your Address"
                      rows={2}
                      className="w-full bg-slate-750 border border-slate-600 rounded-lg py-2.5 px-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-lg transition-colors mt-2 shadow-lg shadow-emerald-500/20"
                  >
                    Join Now
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      );
    }

    if (chosenExam === null && chosenSubject === null) {
      return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center p-2 sm:p-4">
          <div className="max-w-4xl w-full bg-slate-800 text-white shadow-2xl rounded-2xl p-4 sm:p-8 border border-slate-700 relative overflow-hidden">
            {/* Accent decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>

            <div className="text-center mb-8">
              <div className="inline-flex p-3 rounded-full bg-indigo-500/10 text-indigo-400 mb-3 border border-indigo-500/20">
                <Award className="w-10 h-10 animate-pulse" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-100 tracking-tight">
                স্বাগতম, {candidateName}!
              </h1>
              <p className="text-indigo-400 mt-2 text-sm sm:text-base font-semibold">
                CBT Exam Room • আপনার পরীক্ষার লক্ষ্য অথবা পছন্দের বিষয় বেছে নিন
              </p>
            </div>

            <div className="space-y-8">
              {/* Exam Boards Section */}
              <div className="space-y-4">
                <h2 className="text-base sm:text-lg font-black text-slate-200 border-l-4 border-l-indigo-500 pl-3 flex items-center gap-2">
                  <span className="text-indigo-400">🏫</span> 
                  <span>১. পরীক্ষা অনুযায়ী ক্যাটাগরি (Choose Your Exam Board):</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {/* SSC CHSL Card */}
                  <div 
                    onClick={() => setChosenExam('ssc')}
                    className="cursor-pointer rounded-2xl p-5 bg-gradient-to-br from-blue-950/20 to-indigo-950/20 border border-blue-500/30 hover:border-blue-400 hover:bg-blue-950/40 hover:scale-[1.02] shadow-lg group transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20 mb-3 group-hover:bg-blue-500/20 transition-all">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <h3 className="font-extrabold text-base sm:text-lg text-white">SSC CHSL</h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      CHSL ও জেনারেল পরীক্ষার জন্য স্পেশাল মক সেট
                    </p>
                  </div>

                  {/* SSC MTS Card */}
                  <div 
                    onClick={() => setChosenExam('mts')}
                    className="cursor-pointer rounded-2xl p-5 bg-gradient-to-br from-blue-950/20 to-cyan-950/20 border border-blue-500/30 hover:border-blue-400 hover:bg-blue-950/40 hover:scale-[1.02] shadow-lg group transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-cyan-400 border border-blue-500/20 mb-3 group-hover:bg-blue-500/20 transition-all">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <h3 className="font-extrabold text-base sm:text-lg text-white">SSC MTS</h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      কেন্দ্রীয় দপ্তরের গ্রুপ-সি (Group C) পরীক্ষার প্রস্তুতি
                    </p>
                  </div>

                  {/* RRB Card */}
                  <div 
                    onClick={() => setChosenExam('rrb')}
                    className="cursor-pointer rounded-2xl p-5 bg-gradient-to-br from-teal-950/20 to-emerald-950/20 border border-teal-500/30 hover:border-teal-400 hover:bg-teal-950/40 hover:scale-[1.02] shadow-lg group transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 border border-teal-500/20 mb-3 group-hover:bg-teal-500/20 transition-all">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <h3 className="font-extrabold text-base sm:text-lg text-white">RRB / রেলওয়ে</h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      রেলওয়ের ALP, Tech এবং Group D স্পেশাল প্রস্তুতি
                    </p>
                  </div>

                  {/* Panchayat Exam Card */}
                  <div 
                    onClick={() => setChosenExam('panchayat')}
                    className="cursor-pointer rounded-2xl p-5 bg-gradient-to-br from-emerald-950/20 to-lime-950/20 border border-emerald-500/30 hover:border-emerald-400 hover:bg-emerald-950/40 hover:scale-[1.02] shadow-lg group transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20 mb-3 group-hover:bg-emerald-500/20 transition-all">
                      <Award className="w-5 h-5" />
                    </div>
                    <h3 className="font-extrabold text-base sm:text-lg text-white">Panchayat Exam</h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      পশ্চিমবঙ্গ গ্রাম পঞ্চায়েত কর্মী ও অন্যান্য পরীক্ষার প্রস্তুতি
                    </p>
                  </div>

                  {/* WBJEE Card */}
                  <div 
                    onClick={() => setChosenExam('wbjee')}
                    className="cursor-pointer rounded-2xl p-5 bg-gradient-to-br from-amber-950/20 to-orange-950/20 border border-amber-500/30 hover:border-amber-400 hover:bg-amber-950/40 hover:scale-[1.02] shadow-lg group transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 border border-amber-500/20 mb-3 group-hover:bg-amber-500/20 transition-all">
                      <Globe className="w-5 h-5" />
                    </div>
                    <h3 className="font-extrabold text-base sm:text-lg text-white">WBJEE</h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      পশ্চিমবঙ্গ জয়েন্ট (WBJEE) পরীক্ষা প্রস্তুতি মক
                    </p>
                  </div>

                  {/* JEE Main Card */}
                  <div 
                    onClick={() => setChosenExam('jeemain')}
                    className="cursor-pointer rounded-2xl p-5 bg-gradient-to-br from-indigo-950/20 to-cyan-950/20 border border-indigo-500/30 hover:border-indigo-400 hover:bg-indigo-950/40 hover:scale-[1.02] shadow-lg group transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20 mb-3 group-hover:bg-indigo-500/20 transition-all">
                      <Calculator className="w-5 h-5" />
                    </div>
                    <h3 className="font-extrabold text-base sm:text-lg text-white">JEE Main</h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      সর্বভারতীয় ইঞ্জিনিয়ারিং প্রবেশিকা (NTA JEE) স্পেশাল
                    </p>
                  </div>

                  {/* NEET Card */}
                  <div 
                    onClick={() => setChosenExam('neet')}
                    className="cursor-pointer rounded-2xl p-5 bg-gradient-to-br from-rose-950/20 to-red-950/20 border border-rose-500/30 hover:border-rose-400 hover:bg-rose-950/40 hover:scale-[1.02] shadow-lg group transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-400 border border-rose-500/20 mb-3 group-hover:bg-rose-500/20 transition-all">
                      <Brain className="w-5 h-5" />
                    </div>
                    <h3 className="font-extrabold text-base sm:text-lg text-white">NEET (UG)</h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      জাতীয় স্তরের মেডিকেল প্রবেশিকা পরীক্ষা প্রস্তুতি
                    </p>
                  </div>

                  {/* All Exams Card */}
                  <div 
                    onClick={() => setChosenExam('all')}
                    className="cursor-pointer rounded-2xl p-5 bg-gradient-to-br from-slate-800/30 to-slate-700/20 border-slate-600/50 hover:border-slate-400 hover:bg-slate-800/50 hover:scale-[1.02] shadow-lg group transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-500/10 flex items-center justify-center text-slate-400 border border-slate-600/30 mb-3 group-hover:bg-slate-500/20 transition-all">
                      <Layers className="w-5 h-5" />
                    </div>
                    <h3 className="font-extrabold text-base sm:text-lg text-white">All Mocks (সব)</h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      সব ক্যাটাগরির মক টেস্ট একত্রে দেখতে ক্লিক করুন
                    </p>
                  </div>
                </div>
              </div>

              {/* Subjects Section */}
              <div className="space-y-4">
                <h2 className="text-base sm:text-lg font-black text-slate-200 border-l-4 border-l-indigo-500 pl-3 flex items-center gap-2">
                  <span className="text-indigo-400">📚</span> 
                  <span>অথবা ২. বিষয় অনুযায়ী মক টেস্ট (Or Choose Your Subject):</span>
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3.5">
                  {/* Mathematics Card */}
                  <div 
                    onClick={() => setChosenSubject('math')}
                    className="cursor-pointer rounded-2xl p-4 bg-gradient-to-br from-blue-950/20 to-blue-900/10 border border-blue-500/30 hover:border-blue-400 hover:bg-blue-950/30 hover:scale-[1.02] shadow-md group flex flex-col justify-between min-h-[120px] transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-3 group-hover:bg-blue-500/20 transition-all">
                      <Calculator className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-sm text-white">গণিত (Math)</h3>
                      <p className="text-[10px] text-slate-400 mt-0.5 leading-tight">Quantitative Aptitude</p>
                    </div>
                  </div>

                  {/* GI Card */}
                  <div 
                    onClick={() => setChosenSubject('gi')}
                    className="cursor-pointer rounded-2xl p-4 bg-gradient-to-br from-purple-950/20 to-purple-900/10 border border-purple-500/30 hover:border-purple-400 hover:bg-purple-950/30 hover:scale-[1.02] shadow-md group flex flex-col justify-between min-h-[120px] transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-3 group-hover:bg-purple-500/20 transition-all">
                      <Brain className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-sm text-white">রিজনিং / GI</h3>
                      <p className="text-[10px] text-slate-400 mt-0.5 leading-tight">Reasoning & Intelligence</p>
                    </div>
                  </div>

                  {/* GK Card */}
                  <div 
                    onClick={() => setChosenSubject('gk')}
                    className="cursor-pointer rounded-2xl p-4 bg-gradient-to-br from-amber-950/20 to-amber-900/10 border border-amber-500/30 hover:border-amber-400 hover:bg-amber-950/30 hover:scale-[1.02] shadow-md group flex flex-col justify-between min-h-[120px] transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-3 group-hover:bg-amber-500/20 transition-all">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-sm text-white">সাধারণ জ্ঞান (GK)</h3>
                      <p className="text-[10px] text-slate-400 mt-0.5 leading-tight">GK & Current Affairs</p>
                    </div>
                  </div>

                  {/* English Card */}
                  <div 
                    onClick={() => setChosenSubject('english')}
                    className="cursor-pointer rounded-2xl p-4 bg-gradient-to-br from-rose-950/20 to-rose-900/10 border-rose-500/30 hover:border-rose-400 hover:bg-rose-950/30 hover:scale-[1.02] shadow-md group flex flex-col justify-between min-h-[120px] transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-400 mb-3 group-hover:bg-rose-500/20 transition-all">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-sm text-white">ইংরেজি (English)</h3>
                      <p className="text-[10px] text-slate-400 mt-0.5 leading-tight">Grammar & Vocabulary</p>
                    </div>
                  </div>

                  {/* Full Mock Card */}
                  <div 
                    onClick={() => setChosenSubject('full')}
                    className="cursor-pointer rounded-2xl p-4 bg-gradient-to-br from-indigo-950/20 to-indigo-900/10 border-indigo-500/30 hover:border-indigo-400 hover:bg-indigo-950/30 hover:scale-[1.02] shadow-md group flex flex-col justify-between min-h-[120px] col-span-2 sm:col-span-1 transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-3 group-hover:bg-indigo-500/20 transition-all">
                      <Trophy className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-sm text-white">পূর্ণাঙ্গ মক টেস্ট</h3>
                      <p className="text-[10px] text-slate-400 mt-0.5 leading-tight">100 Qs Full Exams</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-700/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
              <button
                type="button"
                onClick={() => setNameEntered(false)}
                className="text-slate-400 hover:text-slate-200 font-bold transition flex items-center gap-1.5 cursor-pointer"
              >
                ← নাম পরিবর্তন করুন (Change Name)
              </button>

              <button
                type="button"
                onClick={() => setJoinModalOpen(true)}
                className="text-amber-400 hover:text-amber-300 font-bold transition flex items-center gap-1.5 cursor-pointer"
              >
                🔥 জয়েন করুন আমাদের পেইড ব্যাচে (Join Paid Batch)
              </button>
            </div>
          </div>
          {joinModalOpen && (
            <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 max-w-sm w-full shadow-2xl relative">
                <button 
                  onClick={() => setJoinModalOpen(false)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-white"
                >
                  <XCircle className="w-6 h-6" />
                </button>
                <h3 className="text-xl font-bold text-white mb-2 text-center">Join Paid Batch</h3>
                <p className="text-slate-300 text-sm mb-4 text-center">
                  To get live lecture, suggestion notes, you can join our paid batch for just <span className="font-bold text-emerald-400">100 INR per month</span>.
                </p>
                
                <div className="bg-slate-755/50 border border-slate-700 rounded-lg p-4 mb-6">
                  <h4 className="text-emerald-400 font-semibold text-sm mb-2">Features Included:</h4>
                  <ul className="text-slate-300 text-sm space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" /> Small batch
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" /> Live lecture
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" /> 1 to 1 conversation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" /> Suggestion notes
                    </li>
                  </ul>
                </div>
                
                <form onSubmit={handleJoinSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      required
                      value={joinName}
                      onChange={(e) => setJoinName(e.target.value)}
                      placeholder="Your Name"
                      className="w-full bg-slate-750 border border-slate-600 rounded-lg py-2.5 px-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      required
                      value={joinAge}
                      onChange={(e) => setJoinAge(e.target.value)}
                      placeholder="Your Age"
                      className="w-full bg-slate-750 border border-slate-600 rounded-lg py-2.5 px-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <textarea
                      required
                      value={joinAddress}
                      onChange={(e) => setJoinAddress(e.target.value)}
                      placeholder="Your Address"
                      rows={2}
                      className="w-full bg-slate-750 border border-slate-600 rounded-lg py-2.5 px-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-lg transition-colors mt-2 shadow-lg shadow-emerald-500/20"
                  >
                    Join Now
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-2 sm:p-4">
        <div className="max-w-4xl w-full bg-slate-800 text-white shadow-2xl rounded-2xl p-4 sm:p-8 border border-slate-700 relative overflow-hidden">
          {/* Accent decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>

          <div className="text-center mb-6">
            <h1 className="text-xl sm:text-2xl font-black text-slate-100">সিবিটি মক টেস্ট পোর্টাল</h1>
            <p className="text-indigo-400 mt-1 font-semibold text-xs sm:text-sm">CBT Exam Room • Candidate: {candidateName}</p>
          </div>

          <div className="space-y-4">
            {/* Category Filter Banner */}
            <div className="bg-slate-900/60 border border-slate-700/80 p-4 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div>
                <span className="text-[10px] uppercase font-black tracking-widest text-indigo-400">Selected Path (পছন্দের বিষয়)</span>
                <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 mt-0.5">
                  <span className="text-indigo-400">🎯</span>
                  <span>
                    {chosenExam === 'ssc' && "SSC CHSL মক সিরিজ"}
                    {chosenExam === 'rrb' && "RRB / রেলওয়ে প্রস্তুতি সিরিজ"}
                    {chosenExam === 'wbjee' && "WBJEE জয়েন্ট প্রস্তুতি মক"}
                    {chosenExam === 'mts' && "SSC MTS প্রস্তুতি মক"}
                    {chosenExam === 'panchayat' && "WB Gram Panchayat প্রস্তুতি মক"}
                    {chosenExam === 'jeemain' && "JEE Main জয়েন্ট প্রস্তুতি মক"}
                    {chosenExam === 'neet' && "NEET প্রবেশিকা প্রস্তুতি মক"}
                    {chosenExam === 'all' && "সম্পূর্ণ মক টেস্ট লিস্ট"}
                    {chosenSubject === 'math' && "Mathematics (গণিত) স্পেশাল মক"}
                    {chosenSubject === 'gi' && "General Intelligence (রিজনিং) মক"}
                    {chosenSubject === 'gk' && "GK & General Science (সাধারণ জ্ঞান) মক"}
                    {chosenSubject === 'english' && "English Language (ইংরেজি) মক সেট"}
                    {chosenSubject === 'full' && "সম্পূর্ণ ১০০ প্রশ্নের ফুল মকস"}
                    {chosenSubject === 'all' && "সব বিষয়ের মকস"}
                  </span>
                </h2>
              </div>
              <button
                type="button"
                onClick={() => {
                  setChosenExam(null);
                  setChosenSubject(null);
                }}
                className="px-3 py-1.5 bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer border border-indigo-500/20"
              >
                ← অন্য বিষয় বেছে নিন (Change category)
              </button>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 bg-slate-800/40 p-4 rounded-xl border border-slate-700/60">
              <h2 className="text-sm sm:text-lg font-bold text-slate-200 flex items-center gap-2">
                <span className="text-indigo-400">📝</span> সিলেক্ট করুন কোন টেস্টটি দিতে চান:
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                {/* Search Input Bar */}
                <div className="relative bg-slate-750 border border-slate-600 rounded-xl flex items-center px-3 focus-within:ring-2 focus-within:ring-indigo-500 w-full sm:w-64">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-400 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="মক টেস্ট সার্চ করুন (Search tests...)"
                    className="bg-transparent text-xs sm:text-sm text-slate-100 placeholder-slate-500 outline-none w-full py-2"
                  />
                  {searchQuery && (
                    <button type="button" onClick={() => setSearchQuery('')} className="text-slate-400 hover:text-slate-200 ml-1">
                      <XCircle className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <div className="flex gap-2 w-full sm:w-auto">
                  <div className="flex-1 sm:flex-none relative bg-slate-750 border border-slate-600 rounded-xl flex items-center px-2.5 focus-within:ring-2 focus-within:ring-indigo-500">
                    <Filter className="w-4 h-4 text-slate-400 mr-2" />
                    <select 
                      value={filterCategory} 
                      onChange={(e) => setFilterCategory(e.target.value as any)}
                      className="bg-transparent text-xs sm:text-sm text-slate-200 outline-none w-full py-2 appearance-none cursor-pointer pr-4"
                    >
                      <option value="all" className="bg-slate-800">All Topics</option>
                      <option value="full" className="bg-slate-800">Full Mocks</option>
                      <option value="subject" className="bg-slate-800">Subject Mocks</option>
                      <option value="topic" className="bg-slate-800">Topic Mocks</option>
                    </select>
                  </div>
                  
                  <div className="flex-1 sm:flex-none relative bg-slate-750 border border-slate-600 rounded-xl flex items-center px-2.5 focus-within:ring-2 focus-within:ring-indigo-500">
                    <ArrowUpDown className="w-4 h-4 text-slate-400 mr-2" />
                    <select 
                      value={sortBy} 
                      onChange={(e) => setSortBy(e.target.value as any)}
                      className="bg-transparent text-xs sm:text-sm text-slate-200 outline-none w-full py-2 appearance-none cursor-pointer pr-4"
                    >
                      <option value="latest" className="bg-slate-800">Latest</option>
                      <option value="oldest" className="bg-slate-800">Oldest</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            
            {(() => {
              const filteredTests = testOptions
                .filter(test => {
                  const matchesCategory = filterCategory === 'all' || test.category === filterCategory;
                  const matchesSearch = searchQuery.trim() === '' || 
                    test.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                    test.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    test.badge.toLowerCase().includes(searchQuery.toLowerCase());
                  
                  if (!matchesCategory || !matchesSearch) return false;

                  // Apply chosenExam filter if any
                  if (chosenExam) {
                    if (chosenExam === 'all') return true;
                    
                    const titleLower = test.title.toLowerCase();
                    const idLower = test.id.toLowerCase();
                    const badgeLower = test.badge.toLowerCase();
                    const descLower = test.description.toLowerCase();

                    if (chosenExam === 'ssc') {
                      return !titleLower.includes('wbjee') && !idLower.includes('wbjee') && !titleLower.includes('railway') && !titleLower.includes('rrb') && test.id !== 'science_math_gi_1' && !idLower.includes('panchayat');
                    }
                    if (chosenExam === 'rrb') {
                      const rrbKeywords = ['railway', 'rrb', 'science', 'computer', 'sports', 'census', 'river', 'dam', 'geography', 'bodmas', 'decimals', 'fractions', 'percentage', 'divisibility', 'integers', 'rational', 'gi', 'general intelligence', 'math mock', 'gk mock'];
                      return rrbKeywords.some(kw => titleLower.includes(kw) || idLower.includes(kw) || descLower.includes(kw) || badgeLower.includes(kw));
                    }
                    if (chosenExam === 'wbjee' || chosenExam === 'jeemain' || chosenExam === 'neet') {
                      return idLower.includes('wbjee');
                    }
                    if (chosenExam === 'panchayat') {
                      return idLower.includes('panchayat');
                    }
                    if (chosenExam === 'mts') {
                      const isSsc = !titleLower.includes('wbjee') && !idLower.includes('wbjee') && !titleLower.includes('railway') && !titleLower.includes('rrb') && test.id !== 'science_math_gi_1' && !idLower.includes('panchayat');
                      return isSsc && (test.category === 'subject' || test.category === 'topic');
                    }
                  }

                  // Apply chosenSubject filter if any
                  if (chosenSubject) {
                    if (chosenSubject === 'all') return true;

                    const titleLower = test.title.toLowerCase();
                    const idLower = test.id.toLowerCase();
                    const badgeLower = test.badge.toLowerCase();

                    const isMath = titleLower.includes('math') || badgeLower.includes('math') || idLower.includes('math') || idLower.includes('trigonometry') || idLower.includes('divisibility') || idLower.includes('percentage') || idLower.includes('fractions') || idLower.includes('decimals') || idLower.includes('bodmas') || idLower.includes('integers') || idLower.includes('rational');
                    const isSci = titleLower.includes('science') || idLower.includes('science');
                    const isGK = titleLower.includes('gk') || badgeLower.includes('gk') || titleLower.includes('census') || titleLower.includes('culture') || titleLower.includes('computer') || titleLower.includes('rivers') || titleLower.includes('sports') || idLower.includes('gk') || idLower.includes('geography') || idLower.includes('computer') || idLower.includes('census') || idLower.includes('art') || titleLower.includes('dam');
                    const isEnglish = titleLower.includes('english') || badgeLower.includes('english') || idLower.includes('english') || titleLower.includes('grammar');
                    const isGI = titleLower.includes('gi') || badgeLower.includes('gi') || idLower.includes('gi_') || titleLower.includes('intelligence') || titleLower.includes('alphabet');

                    if (chosenSubject === 'math') return isMath;
                    if (chosenSubject === 'gk') return isGK || isSci;
                    if (chosenSubject === 'gi') return isGI;
                    if (chosenSubject === 'english') return isEnglish;
                    if (chosenSubject === 'full') return test.category === 'full';
                  }

                  return true;
                })
                .sort((a, b) => sortBy === 'latest' ? b.createdAt - a.createdAt : a.createdAt - b.createdAt);

              if (filteredTests.length === 0) {
                const getEmptyMsg = () => {
                  if (chosenExam === 'mts') {
                    return {
                      title: 'SSC MTS (Multi Tasking Staff)',
                      desc: 'এটি স্টাফ সিলেকশন কমিশনের (SSC) দ্বারা পরিচালিত একটি সর্বভারতীয় পরীক্ষা। কেন্দ্রীয় সরকারের বিভিন্ন মন্ত্রক ও দপ্তরে ‘গ্রুপ-সি’ (Group C) নন-গেজেটেড, নন-মিনিস্ট্রিয়াল পদে কর্মী নিয়োগের জন্য এই পরীক্ষা নেওয়া হয়। সাধারণত মাধ্যমিক পাশের যোগ্যতায় এই পরীক্ষায় বসা যায়। এর প্রস্তুতি মক সেট শীঘ্রই যুক্ত করা হবে।',
                      engDesc: 'Staff Selection Commission - Multi Tasking Staff mock tests are coming soon.'
                    };
                  }
                  if (chosenExam === 'panchayat') {
                    return {
                      title: 'Panchayat Exam (West Bengal)',
                      desc: 'এটি পশ্চিমবঙ্গ সরকারের পঞ্চায়েত ও গ্রামীণ উন্নয়ন দপ্তরের অধীনে বিভিন্ন প্রশাসনিক ও প্রযুক্তিগত পদে নিয়োগের জন্য পরিচালিত পরীক্ষা। এর মাধ্যমে গ্রাম পঞ্চায়েত কর্মী, ক্লার্ক, ডেটা এন্ট্রি অপারেটর (DEO), এক্সিকিউティブ অ্যাসিস্ট্যান্ট ইত্যাদি পদে কর্মী নিয়োগ করা হয়। নিয়োগ প্রক্রিয়াটি সাধারণত রাজ্য সরকারের নিজস্ব পোর্টাল (যেমন: WBPRMS) দ্বারা পরিচালিত হয়। প্রস্তুতি সেট শীঘ্রই যুক্ত করা হবে।',
                      engDesc: 'West Bengal Gram Panchayat Recruitment mock tests are coming soon.'
                    };
                  }
                  if (chosenExam === 'jeemain') {
                    return {
                      title: 'JEE Main (Joint Entrance Examination)',
                      desc: 'এটি ভারতের জাতীয় স্তরের ইঞ্জিনিয়ারিং প্রবেশিকা পরীক্ষা, যা ন্যাশনাল টেস্টিং এজেন্সি (NTA) দ্বারা পরিচালিত হয়। বিভিন্ন NIT, IIIT, GFTI এবং অন্যান্য সরকারি ও বেসরকারি ইঞ্জিনিয়ারিং কলেজে বি.টেক (B.Tech) বা বি.ই (B.E) কোর্সে ভর্তির জন্য এই পরীক্ষা দিতে হয়। এছাড়া, এটি JEE Advanced পরীক্ষার জন্য যোগ্যতামান নির্ধারণী পরীক্ষা হিসেবেও কাজ করে। প্রস্তুতি সেট শীঘ্রই আসছে।',
                      engDesc: 'JEE Main Engineering Entrance Exam practice tests are coming soon.'
                    };
                  }
                  if (chosenExam === 'neet') {
                    return {
                      title: 'NEET (National Eligibility cum Entrance Test)',
                      desc: 'এটি ভারতের সর্ববৃহৎ মেডিকেল প্রবেশিকা পরীক্ষা, যা NTA দ্বারা পরিচালিত হয়। দেশের বিভিন্ন সরকারি ও বেসরকারি মেডিকেল কলেজে এমবিবিএস (MBBS), বিডিএস (BDS) এবং অন্যান্য আয়ুষ (AYUSH) কোর্সে ভর্তির জন্য এই পরীক্ষাটি বাধ্যতামূলক। প্রস্তুতি মক টেস্ট শীঘ্রই আসবে।',
                      engDesc: 'NEET Medical Entrance Exam mock tests are coming soon.'
                    };
                  }
                  if (chosenExam === 'wbjee') {
                    return {
                      title: 'WBJEE',
                      desc: 'এই বিভাগে বর্তমানে কোনো পরীক্ষা উপলব্ধ নেই।',
                      engDesc: 'Currently no exams available in this category.'
                    };
                  }
                  return {
                    title: 'কোনো মক টেস্ট খুঁজে পাওয়া যায়নি',
                    desc: 'আপনার খোঁজা ফিল্টার বা কি-ওয়ার্ডের জন্য কোনো ম্যাচ পাওয়া যায়নি।',
                    engDesc: 'No matching tests found for your filters.'
                  };
                };

                const msg = getEmptyMsg();

                return (
                  <div className="text-center py-10 px-6 sm:px-8 bg-slate-850 rounded-2xl border border-slate-750 flex flex-col items-center justify-center max-w-2xl mx-auto shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
                    <div className="inline-flex p-3 rounded-full bg-indigo-500/10 text-indigo-400 mb-4 border border-indigo-500/20">
                      <Sparkles className="w-8 h-8 animate-pulse" />
                    </div>
                    <h3 className="font-extrabold text-lg sm:text-xl text-white mb-2 tracking-tight">{msg.title}</h3>
                    <p className="text-slate-300 text-sm mb-2 leading-relaxed max-w-lg">{msg.desc}</p>
                    <p className="text-slate-500 text-xs italic leading-relaxed">{msg.engDesc}</p>
                    {(!['mts', 'panchayat', 'jeemain', 'neet'].includes(chosenExam || '')) && (
                      <button 
                        type="button"
                        onClick={() => { setSearchQuery(''); setFilterCategory('all'); }} 
                        className="text-xs text-indigo-400 hover:text-indigo-300 font-bold underline mt-5 cursor-pointer"
                      >
                        ফিল্টার রিসেট করুন (Reset filters)
                      </button>
                    )}
                  </div>
                );
              }

              return (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {filteredTests.map((test) => {
                    const colors = COLOR_MAP[test.badgeColor] || COLOR_MAP.indigo;
                    const isSelected = selectedTest === test.id;
                    const cardClass = getCardStyle(test, isSelected);
                    const badgeClass = getBadgeColor(test);
                    
                    return (
                      <div
                        key={test.id}
                        onClick={() => setSelectedTest(test.id)}
                        className={`cursor-pointer rounded-2xl p-4 sm:p-5 border transition-all relative flex flex-col justify-between min-h-[190px] ${cardClass}`}
                      >
                        {/* Completed progress badge */}
                        {completedTests.includes(test.id) && (
                          <div className="absolute top-2.5 left-2.5 flex items-center gap-1 bg-emerald-600 text-white text-[9px] sm:text-[10px] font-black px-2 py-0.5 rounded-md shadow-md shadow-emerald-950/20 z-10">
                            <Check className="w-2.5 h-2.5 stroke-[3px]" /> Attempted
                          </div>
                        )}

                        <span className={`absolute top-2.5 right-2.5 text-[9px] sm:text-xs text-white font-bold px-2 py-0.5 rounded-full z-10 ${badgeClass}`}>
                          {test.badge}
                        </span>

                        <div className="pt-4">
                          <h3 className="font-black text-sm sm:text-[17px] text-white tracking-tight leading-tight mb-1.5 mt-2">
                            {test.title}
                          </h3>
                          <p className="text-[10px] sm:text-xs text-slate-300 mt-1 line-clamp-2 h-7 sm:h-9 leading-relaxed">
                            {test.description}
                          </p>
                        </div>

                        <div className="mt-3 pt-3 border-t border-slate-700/50 space-y-3">
                          <div className="flex justify-between items-center text-[10px] sm:text-xs font-semibold text-slate-400">
                            <div className="truncate text-slate-400">
                              <span>{test.sections}</span>
                            </div>
                            <div className="flex gap-2.5 text-slate-300 shrink-0">
                              <span>Q: {test.questionCount}</span>
                              <span>M: {test.totalMarks}</span>
                            </div>
                          </div>

                          <div className="flex justify-between items-center">
                            <div className={`text-[10px] sm:text-xs font-semibold truncate ${colors.textMain}`}>
                              ⏳ {toBanglaNumber(test.durationMinutes)} মিনিট ({test.durationMinutes}m)
                            </div>
                          </div>

                          {/* Action Select/Trigger Button */}
                          <div className="pt-1">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedTest(test.id);
                              }}
                              className={`w-full py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                                isSelected
                                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-900/10'
                                  : 'bg-slate-700/80 hover:bg-slate-700 text-slate-200'
                              }`}
                            >
                              {isSelected ? (
                                <>
                                  <CheckCircle className="w-3.5 h-3.5 text-white" />
                                  <span>সিলেক্ট করা হয়েছে (Selected ✓)</span>
                                </>
                              ) : (
                                <span>পরীক্ষা সিলেক্ট করুন (Select Test)</span>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })()}

            <div className="bg-slate-755 p-4 rounded-xl border border-slate-700/50 text-xs text-slate-300 leading-relaxed">
              <strong className="text-yellow-400 block mb-1">গুরুত্বপূর্ণ নিয়ম ও মার্কিং স্কিম:</strong>
              • প্রতিটি সঠিক উত্তরের জন্য পাবেন <span className="text-emerald-400 font-bold">+২.০ নম্বর</span>।<br />
              • ভুল উত্তরের জন্য ডিক্ট করা হবে <span className="text-rose-400 font-bold">-০.৫ নম্বর</span> নেগেটিভ মার্কিং।<br />
              • পরীক্ষা শুরু হওয়ার সাথে সাথেই ওয়েবসাইটটি ফুল স্ক্রিন মোডে চলে যাবে (Toggle Fullscreen বা Esc প্রেস করে বের হতে পারবেন)।<br />
              • নির্ধারিত সময় শেষ হলে পরীক্ষা স্বয়ংক্রিয়ভাবে সেভ ও সাবমিট হয়ে যাবে।
            </div>

            <div className="mt-4 pt-4 border-t border-slate-700/50 flex justify-center">
              <a
                href="https://whatsapp.com/channel/0029VbB1PecFcow9ajKRDT1g"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-[#25D366] hover:bg-[#1DA851] text-white font-bold rounded-xl shadow-lg shadow-[#25D366]/20 transition-all flex items-center justify-center gap-2 text-sm"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Join our WhatsApp Channel
              </a>
            </div>
            
            <div className="h-24 sm:h-32 w-full"></div>

            <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900 border-t border-slate-800 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.5)] px-4 py-3 sm:px-6 sm:py-4">
              <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => setNameEntered(false)}
                  className="order-2 sm:order-1 flex-1 py-3 sm:py-3.5 border border-slate-600 hover:bg-slate-750 rounded-xl font-bold transition text-slate-300 text-center"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  onClick={handleStartExam}
                  className="order-1 sm:order-2 flex-[2] bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black py-3 sm:py-3.5 rounded-xl shadow-lg shadow-emerald-500/20 transition-all text-center text-lg uppercase tracking-wider animate-pulse"
                >
                  পরীক্ষা শুরু করুন (Start Exam)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. EXAM SUBMITTED - RESULTS DASHBOARD
  if (submitted) {
    const maxPossibleMarks = testQuestions.length * 2;
    const scorePercentage = (results.totalMarks / maxPossibleMarks) * 100;
    const isWin = results.totalMarks >= (maxPossibleMarks / 2); // pass score is 50%

    return (
      <div className="min-h-screen bg-slate-950 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Congratulations Block */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
            
            <div className="space-y-4 text-center md:text-left z-10 flex-1">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-semibold border border-emerald-500/20">
                <CheckCircle className="w-4 h-4" /> Exam Completed Safely
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-white">
                Mock Test Report: {candidateName}
              </h2>
              <p className="text-slate-400 max-w-xl">
                Here is your comprehensive Computer Based Test scorecard. Review correct keys, negative mark deductions, and detailed performance metrics below.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleChallengeFriend}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-3 px-6 rounded-xl shadow-lg hover:shadow-emerald-950/40 transition transform active:scale-97 text-sm cursor-pointer"
                >
                  <Share2 className="w-4 h-4" /> Challenge Your Friend
                </button>
                <button
                  onClick={() => document.getElementById('review-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-extrabold py-3 px-6 rounded-xl shadow-lg hover:shadow-slate-900/40 transition transform active:scale-97 text-sm cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" /> Review Answers
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center bg-slate-850 p-6 rounded-2xl border border-slate-750 z-10 min-w-[200px] w-full md:w-auto">
              <span className="text-sm text-slate-400 uppercase tracking-widest font-bold">Total Score</span>
              <span className={`text-5xl font-black mt-2 ${results.totalMarks >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                {results.totalMarks.toFixed(1)}
              </span>
              <span className="text-slate-500 text-xs mt-1">out of {maxPossibleMarks.toFixed(1)} Marks</span>
            </div>
          </div>

          {/* Core Analytics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm font-medium">Correct Answers</p>
                <p className="text-3xl font-bold mt-1 text-emerald-400">{results.correctCount}</p>
                <p className="text-slate-500 text-xs mt-1">+{results.correctCount * 2} Marks</p>
              </div>
              <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/20">
                <Check className="w-6 h-6" />
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm font-medium">Incorrect Answers</p>
                <p className="text-3xl font-bold mt-1 text-rose-400">{results.incorrectCount}</p>
                <p className="text-slate-500 text-xs mt-1">-{results.incorrectCount * 0.5} Net Penalty</p>
              </div>
              <div className="p-3 bg-rose-500/10 text-rose-400 rounded-xl border border-rose-500/20">
                <XCircle className="w-6 h-6" />
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm font-medium">Unattempted</p>
                <p className="text-3xl font-bold mt-1 text-slate-400">{results.unattemptedCount}</p>
                <p className="text-slate-500 text-xs mt-1">0 Marks changed</p>
              </div>
              <div className="p-3 bg-slate-800 text-slate-400 rounded-xl border border-slate-700">
                <AlertCircle className="w-6 h-6" />
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm font-medium">Overall Accuracy</p>
                <p className="text-3xl font-bold mt-1 text-indigo-400">{results.accuracy}%</p>
                <p className="text-slate-500 text-xs mt-1">Correct / Total Attempted</p>
              </div>
              <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/20">
                <FileText className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Predicted Rank & Percentile Analyzer module */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden space-y-6">
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl -z-10"></div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
              <div>
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <span className="text-2xl">🏆</span> 
                  <span>অল ইন্ডিয়া র্যাঙ্ক ও পার্সেন্টাইল প্রেডিক্টর (Est. Rank &amp; Percentile Predictor)</span>
                </h3>
                <p className="text-slate-400 text-xs mt-1">
                  লক্ষাধিক পরীক্ষার্থীর মক টেস্ট ট্রেন্ড ও ডাটা বিশ্লেষণের উপর ভিত্তি করে আপনার সাম্ভাব্য অল ইন্ডিয়া অবস্থান
                </p>
              </div>
              <div className={`px-4 py-2 rounded-xl border text-xs font-bold uppercase tracking-wider ${predData.zoneBg} ${predData.borderStyle}`}>
                {predData.zoneName}
              </div>
            </div>

            {/* Score position visual bar */}
            <div className="space-y-3 bg-slate-955 p-5 rounded-2xl border border-slate-800/80">
              <div className="flex justify-between text-xs text-slate-400 font-bold">
                <span>ন্যূনতম সীমা: ০ নম্বর</span>
                <span className="text-indigo-400">আপনার স্কোর: {results.totalMarks.toFixed(1)} / {maxPossibleMarks} (Scaled: {predictorScore.toFixed(1)}/২০০)</span>
                <span>সর্বোচ্চ: {maxPossibleMarks} নম্বর</span>
              </div>
              
              <div className="h-4 bg-slate-800 rounded-full relative overflow-visible">
                {/* Visual meter bar background colors for zones */}
                <div className="absolute inset-0 flex rounded-full overflow-hidden opacity-30">
                  <div className="w-[30%] bg-red-600 h-full"></div> {/* 0-59 */}
                  <div className="w-[20%] bg-rose-500 h-full"></div> {/* 60-99 */}
                  <div className="w-[22%] bg-indigo-500 h-full"></div> {/* 100-144 */}
                  <div className="w-[15%] bg-teal-500 h-full"></div> {/* 145-174 */}
                  <div className="w-[13%] bg-amber-500 h-full"></div> {/* 175-200 */}
                </div>
                
                {/* Active range progress highlight */}
                <div 
                  className={`h-full rounded-full transition-all duration-1000 ${predData.progressBg}`}
                  style={{ width: `${Math.max(4, Math.min(100, (predictorScore / 200) * 100))}%` }}
                />

                {/* Score Marker Pin representing accurate pointer */}
                <div 
                  className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-slate-950 border-2 border-indigo-400 rounded-full flex items-center justify-center -ml-3 shadow-lg z-20 transition-all duration-1000 hover:scale-125"
                  style={{ left: `${Math.max(4, Math.min(96, (predictorScore / 200) * 100))}%` }}
                >
                  <span className="w-2 h-2 bg-indigo-400 rounded-full animate-ping"></span>
                </div>
              </div>

              <div className="flex justify-between text-[10px] text-slate-500 pt-1 font-mono">
                <span>নো-হোপ জোন (০-৯৯)</span>
                <span>কোয়ালিফাইং জোন (১০০-১৪৪)</span>
                <span>নিরাপদ জোন (১৪৫-১৭৪)</span>
                <span>টপার জোন (১৭৫-২০০)</span>
              </div>
            </div>

            {/* Estimated Stat metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-850 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold">সাম্ভাব্য অল ইন্ডিয়া র্যাঙ্ক (AIR)</span>
                  <p className="text-3xl font-black mt-1 text-indigo-400 font-mono">{predData.rankRange}</p>
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  সমজাতীয় কঠিন বা সহজ শিফট সমন্বয় পরবর্তীতে নরমালাইজড ডাটা অনুসারে সম্ভাব্য র্যাঙ্ক।
                </p>
              </div>

              <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-850 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold">সাম্ভাব্য পার্সেন্টাইল (Percentile)</span>
                  <p className="text-3xl font-black mt-1 text-emerald-400 font-mono">{predData.percentileRange}</p>
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  যার প্রায় অর্থ হলো আপনি পরীক্ষা দেওয়া শতকরা {Math.max(0, Math.min(100, 100 - parseFloat(predData.percentileRange.split(' ')[0]))).toFixed(2)}% ছাত্রের থেকে এগিয়ে আছেন।
                </p>
              </div>

              <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-850 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold">আপনার স্কোর মূল্যায়ন</span>
                  <p className="text-sm font-bold mt-1 text-slate-300">{predData.descriptionBengali}</p>
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  আপনার মোট সঠিক উত্তর ও নেগেটিভ মার্কিংয়ের পেনাল্টি হিসাব করে তৈরি গ্রেড।
                </p>
              </div>
            </div>

            {/* Zonal Feedback block */}
            <div className={`p-5 sm:p-6 rounded-2xl border ${predData.borderStyle} ${predData.zoneBg}/5 space-y-3`}>
              <h4 className="font-bold text-slate-200 flex items-center gap-2 text-sm sm:text-base">
                💡 <span className={predData.zoneColor}>পার্সোনালাইজড প্রিপারেশন গাইড ও ফিডব্যাক:</span>
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                {predData.adviceBengali}
              </p>
            </div>

            {/* Interactive Compare Matrix list */}
            <div className="border border-slate-800/80 rounded-2xl overflow-hidden bg-slate-950/40">
              <div className="px-5 py-4 bg-slate-900 border-b border-slate-800 text-xs text-slate-400 font-bold flex justify-between items-center">
                <span>📊 সামগ্রিক স্কোর বনাম র্যাঙ্ক ডিস্ট্রিবিউশন চার্ট (Benchmarks)</span>
                <span className="text-[10px] text-slate-500">মোট মার্কস: ২০০ • নেগেটিভ: ০.৫</span>
              </div>
              <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                <div className="p-3 bg-slate-900/50 rounded-xl space-y-1">
                  <p className="text-amber-400 font-bold">১৮৫ - ২০০ (টপার জোন)</p>
                  <p className="text-slate-300 font-mono">AIR: ১ - ৫০</p>
                  <p className="text-[10px] text-slate-500">শীর্ষ পছন্দ / নিশ্চিত চাকরি</p>
                </div>
                <div className="p-3 bg-slate-900/50 rounded-xl space-y-1">
                  <p className="text-yellow-400 font-bold">১৭৫ - ১৮৪ (টপার জোন)</p>
                  <p className="text-slate-300 font-mono">AIR: ৫০ - ৫০০</p>
                  <p className="text-[10px] text-slate-500">টপ র্যাঙ্ক / মন্ত্রিত্ব পদ</p>
                </div>
                <div className="p-3 bg-slate-900/50 rounded-xl space-y-1">
                  <p className="text-emerald-400 font-bold">১৬৫ - ১৭৪ (নিরাপদ জোন)</p>
                  <p className="text-slate-300 font-mono">AIR: ৫০০ - ২৫০০</p>
                  <p className="text-[10px] text-slate-500">১০০% ক্যাটাগরি নিরাপদ জোন</p>
                </div>
                <div className="p-3 bg-slate-800/20 rounded-xl space-y-1">
                  <p className="text-teal-400 font-bold">১৫৫ - ১৬৪ (নিরাপদ জোন)</p>
                  <p className="text-slate-300 font-mono">AIR: ২৫০০ - ৮০০০</p>
                  <p className="text-[10px] text-slate-500">LDC ও সমমানের পোস্ট</p>
                </div>
                <div className="p-3 bg-slate-800/20 rounded-xl space-y-1">
                  <p className="text-blue-400 font-bold">১৪৫ - ১৫৪ (নিরাপদ জোন)</p>
                  <p className="text-slate-300 font-mono">AIR: ৮০০০ - ২০০০০</p>
                  <p className="text-[10px] text-slate-500">বর্ডারলাইন / নরমাল নির্ভর</p>
                </div>
                <div className="p-3 bg-slate-800/20 rounded-xl space-y-1">
                  <p className="text-indigo-400 font-bold">১৩০ - ১৪৪ (কোয়ালিফাইং)</p>
                  <p className="text-slate-300 font-mono">AIR: ২০০০০ - ৪০০০০</p>
                  <p className="text-[10px] text-slate-500">সংরক্ষিত প্রার্থীদের দারুন সুযোগ</p>
                </div>
                <div className="p-3 bg-slate-800/20 rounded-xl space-y-1">
                  <p className="text-slate-400 font-bold">১০০ - ১২৯ (কোয়ালিফাইং)</p>
                  <p className="text-slate-300 font-mono">AIR: ৪০০০০ - ৮০০০০</p>
                  <p className="text-[10px] text-slate-500">বিশেষ কোটা ও PwD উত্তীর্ণ</p>
                </div>
                <div className="p-3 bg-slate-800/20 rounded-xl space-y-1">
                  <p className="text-rose-400 font-bold">০ - ৯৯ (নো-হোপ জোন)</p>
                  <p className="text-slate-300 font-mono">AIR: ৮০,০০০+</p>
                  <p className="text-[10px] text-slate-500">অনুত্তীর্ণ / পুনরায় সিলেবাস পড়া</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sectional Performance Table */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="px-6 py-5 border-b border-slate-800 flex items-center justify-between">
              <h3 className="text-lg font-bold">Section-wise Performance Breakdown</h3>
              <span className="text-xs text-slate-400 uppercase tracking-wide">4 Sections • 100 Qs</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-850 text-slate-400 text-xs uppercase font-bold border-b border-slate-850">
                    <th className="py-4 px-6">Section Name</th>
                    <th className="py-4 px-6 text-center">Total Questions</th>
                    <th className="py-4 px-6 text-center">Attempted</th>
                    <th className="py-4 px-6 text-center text-emerald-400">Correct</th>
                    <th className="py-4 px-6 text-center text-rose-400">Incorrect</th>
                    <th className="py-4 px-6 text-right">Score achieved</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-sm">
              {(Object.keys(results.sectionStats) as Section[])
                .filter((secName) => results.sectionStats[secName].total > 0)
                .map((secName) => {
                    const stat = results.sectionStats[secName];
                    return (
                      <tr key={secName} className="hover:bg-slate-850/55 transition">
                        <td className="py-4 px-6 font-bold text-slate-200">
                          {secName === 'English' ? 'English (Language & Practice)' : 
                           secName === 'Math' ? 'Mathematics (Aptitude)' : 
                           secName === 'GI' ? 'General Intelligence (GI)' : 
                           'General Knowledge & Current Affairs'}
                        </td>
                        <td className="py-4 px-6 text-center font-mono text-slate-300">{stat.total}</td>
                        <td className="py-4 px-6 text-center font-mono text-slate-300">{stat.attempted}</td>
                        <td className="py-4 px-6 text-center font-mono text-emerald-400 font-semibold">{stat.correct}</td>
                        <td className="py-4 px-6 text-center font-mono text-rose-400 font-semibold">{stat.incorrect}</td>
                        <td className="py-4 px-6 text-right font-mono font-bold text-slate-100">
                          <span className={stat.marks >= 0 ? 'text-emerald-400' : 'text-rose-400'}>
                            {stat.marks.toFixed(1)}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Interactive Answer Key & Question review */}
          <div id="review-section" className="bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-lg sm:text-xl font-bold flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-indigo-400" /> Complete Question Review Keys
                </h3>
                <p className="text-slate-400 text-xs mt-1">Review correct options, explanation rationale, and your responses</p>
              </div>

              {/* Filter controls */}
              <div className="flex flex-wrap gap-2">
                {(['all', 'correct', 'incorrect', 'unattempted'] as const).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setReviewFilter(mode)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition ${
                      reviewFilter === mode
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-750'
                    }`}
                  >
                    {mode === 'all' ? 'All' : 
                     mode === 'correct' ? `Correct (${results.correctCount})` : 
                     mode === 'incorrect' ? `Incorrect (${results.incorrectCount})` : 
                     `Unattempted (${results.unattemptedCount})`}
                  </button>
                ))}
              </div>
            </div>

            {/* Answer Feed */}
            <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2 divide-y divide-slate-800">
              {testQuestions
                .filter((q) => {
                  const select = selectedAnswers[q.id];
                  if (reviewFilter === 'correct') return select === q.correctAnswer;
                  if (reviewFilter === 'incorrect') return select && select !== q.correctAnswer;
                  if (reviewFilter === 'unattempted') return !select;
                  return true;
                })
                .map((q) => {
                  const select = selectedAnswers[q.id];
                  const isCorrect = select === q.correctAnswer;
                  const isUnattempted = !select;

                  return (
                    <div key={q.id} className="pt-6 first:pt-0 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 bg-slate-800 text-slate-300 px-3 py-1 rounded text-xs font-semibold">
                          Q {q.id} • Section: <strong>{q.section}</strong>
                        </span>

                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded text-xs font-bold leading-none ${
                          isUnattempted ? 'bg-slate-850 text-slate-400 border border-slate-750' : 
                          isCorrect ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 
                          'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                        }`}>
                          {isUnattempted && 'Unattempted (0 Marks)'}
                          {!isUnattempted && isCorrect && '+2.0 Marks (Correct)'}
                          {!isUnattempted && !isCorrect && '-0.5 Marks (Incorrect)'}
                        </span>
                      </div>

                      <p className="text-base sm:text-lg font-medium text-slate-100">
                        <LatexRenderer text={q.question} />
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {q.options.map((opt, idx) => {
                          const optionKey = String.fromCharCode(65 + idx) as 'A' | 'B' | 'C' | 'D';
                          const isPicked = select === optionKey;
                          const isCorrectKey = q.correctAnswer === optionKey;

                          let optStyle = 'p-3 rounded-xl border text-xs sm:text-sm text-left transition flex items-start gap-2.5 ';
                          if (isCorrectKey) {
                            optStyle += 'bg-emerald-500/10 border-emerald-500/50 text-emerald-300 font-medium';
                          } else if (isPicked) {
                            optStyle += 'bg-rose-500/10 border-rose-500/40 text-rose-300 font-medium';
                          } else {
                            optStyle += 'bg-slate-850 border-slate-750 text-slate-350';
                          }

                          return (
                            <div key={idx} className={optStyle}>
                              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                                isCorrectKey ? 'bg-emerald-500 text-white' : 
                                isPicked ? 'bg-rose-500 text-white' : 'bg-slate-700 text-slate-350'
                              }`}>
                                {optionKey}
                              </span>
                              <span>
                                <LatexRenderer text={opt} />
                              </span>
                            </div>
                          );
                        })}
                      </div>

                      {/* Explanation box */}
                      <div className="p-4 bg-slate-850 rounded-xl border border-slate-755 text-xs sm:text-sm space-y-1.5">
                        <p className="font-semibold text-slate-250 flex items-center gap-1.5">
                          <CheckCircle className="w-4 h-4 text-emerald-400" />
                          <span>Correct Answer Key: <strong className="text-emerald-400 text-base">{q.correctAnswer}</strong></span>
                        </p>
                        {q.explanation && (
                          <div className="text-slate-400 font-light leading-relaxed">
                            <strong className="text-slate-300">Explanation: </strong>
                            <LatexRenderer text={q.explanation} />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}

              {testQuestions.filter((q) => {
                const select = selectedAnswers[q.id];
                if (reviewFilter === 'correct') return select === q.correctAnswer;
                if (reviewFilter === 'incorrect') return select && select !== q.correctAnswer;
                if (reviewFilter === 'unattempted') return !select;
                return true;
              }).length === 0 && (
                <div className="text-center py-12 text-slate-500 text-xs sm:text-sm">
                  No questions match your selected filter criteria.
                </div>
              )}
            </div>

            <div className="h-24 sm:h-32 w-full"></div>

            {/* Bottom Actions */}
            <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-900 border-t border-slate-800 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.5)] px-4 py-3 sm:px-6 sm:py-4">
              <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={handleRetake}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 sm:py-3.5 px-8 rounded-xl shadow-lg transition transform active:scale-97 cursor-pointer text-sm"
                >
                  <RotateCcw className="w-4.5 h-4.5" /> Retake Mock Exam
                </button>
                
                <button
                  onClick={handleChallengeFriend}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-3 sm:py-3.5 px-8 rounded-xl shadow-lg hover:shadow-emerald-900/30 transition transform active:scale-97 cursor-pointer text-sm"
                >
                  <Share2 className="w-4.5 h-4.5" /> Challenge Your Friend
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* SHARE PROMPT MODAL */}
        {sharePromptOpen && (
          <div className="fixed inset-0 min-h-screen z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative text-center">
              <div className="mb-6 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center text-[#25D366]">
                  <Share2 className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Challenge a Friend</h3>
              <p className="text-slate-400 text-center mb-6 text-sm">
                To continue the retake attempt for free, you need to challenge your friend first.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setSharePromptOpen(false)}
                  className="flex-1 px-4 py-3 bg-slate-800 hover:bg-slate-700 rounded-xl font-bold transition text-sm text-center"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setSharePromptOpen(false);
                    handleChallengeFriend();
                    // Also trigger the retake logic so they don't have to click the button again
                    setExamStarted(false);
                    setSubmitted(false);
                    setSelectedAnswers({});
                    setMarkedForReview({});
                    setVisitedQuestions({ 1: true });
                    setActiveQuestionId(1);
                    setActiveSection('English');
                    setTimeLeft(3600);
                  }}
                  className="flex-1 px-4 py-3 bg-[#25D366] hover:bg-[#1DA851] rounded-xl font-bold transition flex items-center justify-center gap-2 text-sm text-white"
                >
                  <Share2 className="w-4 h-4" /> Share Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  const activeQuestion = testQuestions.find((q) => q.id === activeQuestionId) || testQuestions[0];
  const userSelectedOption = selectedAnswers[activeQuestion.id];
  const isQuestionMarked = !!markedForReview[activeQuestion.id];

  // Section navigation quick clicks
  const handleSectionSwitch = (sectionName: Section) => {
    setActiveSection(sectionName);
    const firstQ = testQuestions.find(q => q.section === sectionName);
    if (firstQ) {
      setActiveQuestionId(firstQ.id);
    }
  };

  // Section statistics computed for tab labels
  const getSectionStats = (sectionName: Section) => {
    const secQs = testQuestions.filter(q => q.section === sectionName);
    const totalCount = secQs.length;
    const answeredCount = secQs.filter(q => !!selectedAnswers[q.id]).length;
    return `${answeredCount}/${totalCount}`;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans pb-24 sm:pb-32">
      
      {/* EXAM STATUS TOP NAV */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-40 px-3 sm:px-6 py-2.5 sm:py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3 sm:gap-4">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="bg-indigo-500/10 p-1.5 sm:p-2 rounded-lg text-indigo-400 border border-indigo-500/20">
              <Award className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h1 className="text-sm sm:text-lg font-extrabold text-white tracking-wide leading-tight">
                {(() => {
                  const activeTestDef = testOptions.find(t => t.id === selectedTest);
                  return activeTestDef?.title || 'Mock Test';
                })()}
              </h1>
              <p className="text-[10px] sm:text-xs text-indigo-400 font-semibold tracking-wider uppercase leading-none mt-1">
                {(() => {
                  const activeTestDef = testOptions.find(t => t.id === selectedTest);
                  return activeTestDef 
                    ? `${activeTestDef.badge} ${activeTestDef.questionCount} Q Series • ${activeTestDef.totalMarks} Marks` 
                    : 'Mock Test';
                })()}
              </p>
            </div>
          </div>

          {/* Mobile-only Timer & Submit (next to title to save vertical space) */}
          <div className="flex items-center gap-2 md:hidden">
            <div className={`flex items-center gap-1 border px-2.5 py-1 rounded-lg font-mono text-sm font-bold transition-all ${
              timeLeft < 300 
                ? 'bg-rose-500/10 border-rose-500 text-rose-500 animate-pulse' 
                : 'bg-slate-950 border-slate-800 text-emerald-400'
            }`}>
              <Clock className="w-3.5 h-3.5" />
              <span>{formatTime(timeLeft)}</span>
            </div>
            <button
              onClick={triggerManualSubmit}
              className="bg-red-600 hover:bg-red-700 active:bg-red-800 px-3 py-1 rounded-lg text-white font-extrabold transition-all text-[11px]"
            >
              Submit
            </button>
          </div>
        </div>

        {/* Real-time stats display - tighter and beautifully styled on all screen sizes */}
        <div className="flex items-center justify-between sm:justify-start flex-wrap gap-2 bg-slate-950 p-1.5 sm:p-2 rounded-xl border border-slate-800 w-full md:w-auto">
          <div className="flex items-center gap-1 px-2 py-0.5 text-[10px] sm:text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="font-semibold text-slate-400 sm:text-slate-300">Answered:</span>
            <span className="font-mono bg-slate-900 px-1.5 py-0.5 rounded text-emerald-400 font-bold">
              {Object.keys(selectedAnswers).length}
            </span>
          </div>

          <div className="flex items-center gap-1 px-2 py-0.5 text-[10px] sm:text-xs border-l border-slate-800 pl-2">
            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
            <span className="font-semibold text-slate-400 sm:text-slate-300">Marked:</span>
            <span className="font-mono bg-slate-900 px-1.5 py-0.5 rounded text-purple-400 font-bold">
              {Object.keys(markedForReview).filter(k => !!markedForReview[Number(k)]).length}
            </span>
          </div>

          <div className="flex items-center gap-1 px-2 py-0.5 text-[10px] sm:text-xs border-l border-slate-800 pl-2">
            <span className="w-2 h-2 rounded-full bg-rose-500"></span>
            <span className="font-semibold text-slate-400 sm:text-slate-300">Not Answered:</span>
            <span className="font-mono bg-slate-900 px-1.5 py-0.5 rounded text-rose-400 font-bold">
              {Object.keys(visitedQuestions).length - Object.keys(selectedAnswers).length}
            </span>
          </div>
        </div>

        {/* Desktop-only Timer countdown and Submit action */}
        <div className="hidden md:flex items-center gap-4">
          <div className={`flex items-center gap-2 border px-4 py-2 rounded-xl font-mono text-xl font-bold transition-all ${
            timeLeft < 300 
              ? 'bg-rose-500/10 border-rose-500 text-rose-500 animate-pulse' 
              : 'bg-slate-950 border-slate-800 text-emerald-400'
          }`}>
            <Clock className="w-5 h-5" />
            <span>{formatTime(timeLeft)}</span>
          </div>

          <button
            onClick={triggerManualSubmit}
            className="bg-red-600 hover:bg-red-700 active:bg-red-800 px-5 py-2 rounded-xl text-white font-bold transition-all shadow-md active:scale-98 text-sm"
          >
            Submit Test
          </button>
        </div>
      </header>

      {/* EXAM CONTENT LAYER */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start">
        
        {/* LEFT CONTAINER (8 COLS): TABS, QUESTION SPACE & BUTTONS */}
        <div className="lg:col-span-8 flex flex-col space-y-4 sm:space-y-6">
          
          {/* SECTION TAB HEADERS */}
          <div className="bg-slate-900 p-1.5 sm:p-2 rounded-xl sm:rounded-2xl border border-slate-800 grid grid-cols-4 gap-1 sm:flex sm:flex-wrap sm:gap-1.5">
            {currentSections.map((sec) => (
              <button
                key={sec}
                onClick={() => handleSectionSwitch(sec)}
                className={`text-center py-2 sm:py-3 rounded-lg sm:rounded-xl text-[10px] sm:text-sm font-bold transition-all flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 flex-1 ${
                  activeSection === sec
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-slate-850 text-slate-400 hover:bg-slate-800'
                }`}
              >
                <span className="truncate max-w-[42px] xs:max-w-[60px] sm:max-w-none">
                  {sec === 'English' ? 'English' : 
                   sec === 'Math' ? 'Math' : 
                   sec === 'GI' ? 'GI (Logic)' : 
                   'GK/GA'}
                </span>
                <span className={`px-1 py-0.2 sm:px-1.5 sm:py-0.5 rounded-full text-[8px] sm:text-[10px] font-mono leading-none ${
                  activeSection === sec ? 'bg-indigo-800 text-indigo-200' : 'bg-slate-950 text-slate-500'
                }`}>
                  {getSectionStats(sec)}
                </span>
              </button>
            ))}
          </div>

          {/* VIEW SWITCHER & TITLE */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-slate-900/55 p-2.5 sm:p-0 rounded-xl sm:bg-transparent border border-slate-800/60 sm:border-none">
            <span className="text-slate-400 text-xs sm:text-sm font-semibold uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping"></span>
              Active Section: <strong className="text-white bg-indigo-900/40 px-2 py-0.5 rounded border border-indigo-500/20">{activeSection}</strong>
            </span>

            {/* Mode switch allows listing all questions in section, or showing one by one */}
            <div className="flex bg-slate-950 sm:bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs self-stretch sm:self-auto justify-center sm:justify-start">
              <button
                onClick={() => setViewMode('single')}
                className={`flex-1 sm:flex-initial px-3 py-1.5 rounded-lg font-bold transition flex items-center justify-center gap-1 ${
                  viewMode === 'single' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Grid className="w-3.5 h-3.5" /> Single Q
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`flex-1 sm:flex-initial px-3 py-1.5 rounded-lg font-bold transition flex items-center justify-center gap-1 ${
                  viewMode === 'list' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <List className="w-3.5 h-3.5" /> All Questions
              </button>
            </div>
          </div>

          {/* VIEW RENDERER */}
          {viewMode === 'single' ? (
            /* SINGLE QUESTION MODE */
            <div className="bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-8 flex flex-col min-h-[350px] sm:min-h-[420px] justify-between relative shadow-xl">
              {/* Question title index header */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 gap-2">
                  <span className="text-indigo-400 text-xs sm:text-sm font-bold uppercase tracking-wider">
                    Question {activeQuestion.id} of {testQuestions.length}
                  </span>
                  
                  {isQuestionMarked && (
                    <span className="inline-flex items-center gap-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg text-[10px] sm:text-xs font-bold leading-none shrink-0">
                      <Bookmark className="w-3 h-3 fill-current" /> Marked
                    </span>
                  )}
                </div>

                <div className="space-y-5 sm:space-y-6">
                  {/* The actual question message */}
                  <h3 className="text-base sm:text-xl font-semibold text-slate-100 leading-relaxed">
                    <LatexRenderer text={activeQuestion.question} />
                  </h3>

                  {/* Options layout */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    {activeQuestion.options.map((opt, idx) => {
                      const optionKey = String.fromCharCode(65 + idx) as 'A' | 'B' | 'C' | 'D';
                      const isSelected = userSelectedOption === optionKey;

                      return (
                        <button
                          key={idx}
                          id={`option-${idx}`}
                          onClick={() => handleOptionSelect(activeQuestion.id, optionKey)}
                          className={`text-left p-3 sm:p-4 rounded-xl sm:rounded-2xl border text-xs sm:text-sm transition-all focus:outline-none flex items-start gap-2.5 sm:gap-3 min-h-[48px] sm:min-h-[56px] ${
                            isSelected
                              ? 'bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/10'
                              : 'bg-slate-850 hover:bg-slate-800 border-slate-750 text-slate-300'
                          }`}
                        >
                          <span className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold flex-shrink-0 ${
                            isSelected ? 'bg-white text-indigo-600' : 'bg-slate-700 text-slate-400'
                          }`}>
                            {optionKey}
                          </span>
                          <span className="leading-snug pt-0.5 sm:pt-0">
                            <LatexRenderer text={opt} />
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* ACTION COMMAND BAR */}
              <div className="fixed bottom-0 left-0 right-0 z-50 flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 px-4 py-3 sm:px-8 sm:py-4 bg-slate-900 border-t border-slate-800 shadow-xl lg:left-0 lg:w-full">
                <div className="flex items-center gap-1.5 sm:gap-2 max-w-7xl w-full mx-auto justify-between">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <button
                      onClick={() => handleToggleReview(activeQuestion.id)}
                      className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border text-[11px] sm:text-sm font-bold transition flex items-center gap-1 sm:gap-1.5 ${
                        isQuestionMarked 
                          ? 'bg-purple-600 text-white border-purple-700' 
                          : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-755'
                      }`}
                    >
                      <Bookmark className="w-3.5 h-3.5" /> <span className="hidden sm:inline-block">Mark for Review</span><span className="sm:hidden">Mark</span>
                    </button>

                    <button
                      onClick={() => handleClearResponse(activeQuestion.id)}
                      className="px-3 sm:px-4 py-2 sm:py-2.5 bg-slate-800 hover:bg-slate-750 hover:text-white border border-slate-700 text-slate-400 rounded-lg sm:rounded-xl text-[11px] sm:text-sm font-bold transition flex items-center gap-1 sm:gap-1.5"
                      disabled={!userSelectedOption}
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Clear
                    </button>
                  </div>

                  <div className="flex items-center gap-1.5 sm:gap-2 ml-auto">
                    <button
                      onClick={handlePrev}
                      disabled={activeQuestionId === 1}
                      className="p-2 sm:p-2.5 bg-slate-800 hover:bg-slate-750 text-white disabled:opacity-30 disabled:hover:bg-slate-800 rounded-lg sm:rounded-xl border border-slate-700 transition"
                    >
                      <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>

                    <button
                      onClick={handleNext}
                      disabled={activeQuestionId === testQuestions.length}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 sm:py-2.5 px-4 sm:px-6 rounded-lg sm:rounded-xl text-[11px] sm:text-sm shadow-md transition-all flex items-center gap-1"
                    >
                      Save &amp; Next <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Spacer for fixed footer */}
              <div className="h-24 sm:h-32 w-full"></div>
            </div>
          ) : (
            /* BULK SECTION MATRIX VIEW */
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-8 shadow-xl max-h-[650px] overflow-y-auto">
              <div className="border-b border-slate-800 pb-3 flex justify-between items-center">
                <h2 className="text-lg font-bold">All {sectionQuestions.length} questions in {activeSection}</h2>
                <span className="text-slate-400 text-xs">Scroll to browse &amp; answer</span>
              </div>
              <div className="space-y-8 divide-y divide-slate-800">
                {sectionQuestions.map((q, qIdx) => {
                  const selectedOpt = selectedAnswers[q.id];
                  const qIsMarked = !!markedForReview[q.id];

                  return (
                    <div key={q.id} className="pt-6 first:pt-0 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-300">Question {q.id}</span>
                        
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleToggleReview(q.id)}
                            className={`px-2.5 py-1 rounded text-xs transition font-semibold flex items-center gap-1 border ${
                              qIsMarked 
                                ? 'bg-purple-600/20 border-purple-600 text-purple-400' 
                                : 'bg-slate-850 hover:bg-slate-800 border-slate-700 text-slate-400'
                            }`}
                          >
                            <Bookmark className="w-3 h-3" /> Mark
                          </button>
                          
                          {selectedOpt && (
                            <button
                              onClick={() => handleClearResponse(q.id)}
                              className="text-rose-400 hover:text-rose-300 text-xs font-semibold"
                            >
                              Clear
                            </button>
                          )}
                        </div>
                      </div>

                      <p className="text-slate-150 font-medium text-base">
                        <LatexRenderer text={q.question} />
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {q.options.map((opt, oIdx) => {
                          const optionKey = String.fromCharCode(65 + oIdx) as 'A' | 'B' | 'C' | 'D';
                          const isSelected = selectedOpt === optionKey;

                          return (
                            <button
                              key={oIdx}
                              onClick={() => {
                                handleOptionSelect(q.id, optionKey);
                                setVisitedQuestions(v => ({ ...v, [q.id]: true }));
                              }}
                              className={`text-left p-3 rounded-xl border text-sm transition-all focus:outline-none flex items-start gap-2 ${
                                isSelected
                                  ? 'bg-indigo-600 text-white border-indigo-500 shadow-md'
                                  : 'bg-slate-850 hover:bg-slate-855 border-slate-750 text-slate-300'
                              }`}
                            >
                              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 ${
                                isSelected ? 'bg-white text-indigo-600' : 'bg-slate-700 text-slate-400'
                              }`}>
                                {optionKey}
                              </span>
                              <span>
                                <LatexRenderer text={opt} />
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Quick instructions indicator */}
          <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-indigo-400 flex-shrink-0" />
            <p className="text-xs text-slate-400 leading-normal">
              You can jump to any question of the test instantly by clicking on the respective question index number in the right-side grid palette. Your responses are auto-saved.
            </p>
          </div>
        </div>

        {/* RIGHT PALETTE BLOCK (4 COLS): PROFILE & DYNAMIC NAV PALETTE */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* CANDIDATE QUICK CARD */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-indigo-600 border border-indigo-500 flex items-center justify-center text-white font-black text-xl shadow-inner shadow-indigo-400/20">
              {candidateName ? candidateName.charAt(0).toUpperCase() : 'C'}
            </div>
            <div>
              <p className="text-slate-400 text-xs">Active Candidate</p>
              <h4 className="text-base font-bold text-slate-200">{candidateName}</h4>
              <p className="text-[10px] font-mono text-emerald-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800/80 inline-block mt-0.5">
                CBT MOCK SESSION
              </p>
            </div>
          </div>

          {/* QUESTION NAVIGATION GRID PALETTE */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-5 shadow-xl">
            <div className="border-b border-slate-800 pb-2">
              <h3 className="font-bold text-sm text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <Grid className="w-4 h-4 text-indigo-400" /> Question Palette
              </h3>
              <p className="text-slate-500 text-[11px] mt-0.5">Click any number to view the question</p>
            </div>

            {/* Quick Filter Section for the Palette */}
            <div className="flex bg-slate-950 p-1.5 rounded-xl border border-slate-850 gap-1 text-[11px]">
              {currentSections.map((sec) => (
                <button
                  key={sec}
                  onClick={() => handleSectionSwitch(sec)}
                  className={`flex-1 text-center py-1 rounded font-bold transition ${
                    activeSection === sec
                      ? 'bg-slate-800 text-white font-extrabold border border-slate-700'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {sec}
                </button>
              ))}
            </div>

            {/* Dynamic Button Grid */}
            <div className="grid grid-cols-5 sm:grid-cols-5 gap-2 max-h-[300px] overflow-y-auto pr-1">
              {testQuestions.map((q) => {
                const isSelected = !!selectedAnswers[q.id];
                const isMarked = !!markedForReview[q.id];
                const isVisited = !!visitedQuestions[q.id];
                const isActive = activeQuestionId === q.id;

                return (
                  <button
                    key={q.id}
                    onClick={() => {
                      setActiveQuestionId(q.id);
                      setViewMode('single');
                    }}
                    className={getPaletteBtnStyle(q.id)}
                    title={`Question ${q.id} (${q.section})`}
                  >
                    {q.id}
                  </button>
                );
              })}
            </div>

            {/* COLOR LEGEND INDICATORS */}
            <div className="pt-2 border-t border-slate-800 space-y-2">
              <p className="text-xs font-bold text-slate-400">Palette Legends:</p>
              
              <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded bg-emerald-600 border border-emerald-800"></span>
                  <span>Answered</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded bg-rose-500 border border-rose-700"></span>
                  <span>Not Answered</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded bg-purple-600 border border-purple-800"></span>
                  <span>Marked &amp; Saved</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded bg-amber-500 border border-amber-750"></span>
                  <span>Marked Only</span>
                </div>
                <div className="flex items-center gap-2 col-span-2">
                  <span className="w-3.5 h-3.5 rounded bg-gray-100 border border-gray-300"></span>
                  <span>Not Visited</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* SHARE PROMPT MODAL */}
      {sharePromptOpen && (
        <div className="fixed inset-0 min-h-screen z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative text-center">
            <div className="mb-6 flex items-center justify-center">
              <div className="w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center text-[#25D366]">
                <Share2 className="w-8 h-8" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">Challenge a Friend</h3>
            <p className="text-slate-400 text-center mb-6 text-sm">
              To continue the retake attempt for free, you need to challenge your friend first.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setSharePromptOpen(false)}
                className="flex-1 px-4 py-3 bg-slate-800 hover:bg-slate-700 rounded-xl font-bold transition text-sm text-center"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setSharePromptOpen(false);
                  handleChallengeFriend();
                  setExamStarted(false);
                  setSubmitted(false);
                  setSelectedAnswers({});
                  setMarkedForReview({});
                  setVisitedQuestions({ 1: true });
                  setActiveQuestionId(1);
                  setActiveSection('English');
                  setTimeLeft(3600);
                }}
                className="flex-1 px-4 py-3 bg-[#25D366] hover:bg-[#1DA851] rounded-xl font-bold transition flex items-center justify-center gap-2 text-sm text-white"
              >
                <Share2 className="w-4 h-4" /> Share Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CONFIRMATION SUBMIT DIALOG MODAL */}
      {confirmSubmitOpen && (
        <div className="fixed inset-0 min-h-screen z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="max-w-md w-full bg-slate-900 border border-slate-850 rounded-2xl p-6 sm:p-8 space-y-6 text-center transform scale-100 transition shadow-2xl">
            
            <div className="inline-flex p-3 rounded-full bg-rose-500/10 text-rose-400 mb-2 border border-rose-500/20">
              <AlertCircle className="w-8 h-8 animate-bounce" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Submit Mock Exam?</h3>
              <p className="text-slate-400 text-sm">
                Are you sure you want to end your exam? You cannot modify your answers or retake once submitted!
              </p>
            </div>

            {/* Quick stats list */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs text-left text-slate-350 space-y-2 font-medium">
              <div className="flex justify-between">
                <span>Total Questions:</span>
                <span className="font-mono text-white">{testQuestions.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Attempted / Answered:</span>
                <span className="font-mono text-emerald-400 font-bold">{Object.keys(selectedAnswers).length}</span>
              </div>
              <div className="flex justify-between">
                <span>Marked for Review:</span>
                <span className="font-mono text-purple-400 font-bold">
                  {Object.keys(markedForReview).filter(k => !!markedForReview[Number(k)]).length}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Unattempted:</span>
                <span className="font-mono text-rose-400 font-bold">{testQuestions.length - Object.keys(selectedAnswers).length}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setConfirmSubmitOpen(false)}
                className="flex-1 bg-slate-800 hover:bg-slate-750 text-slate-300 font-bold py-3 rounded-xl transition-all border border-slate-700 text-sm"
              >
                No, Back to Test
              </button>

              <button
                onClick={confirmSubmit}
                className="flex-1 bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 rounded-xl transition-all shadow-md active:scale-97 text-sm"
              >
                Yes, Submit Test
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER SYSTEM LABEL */}
      <footer className="bg-slate-950 border-t border-slate-900 py-4 text-center text-[11px] text-slate-500">
        System Protocol: TCS iON Style CBT Simulator • Max marks: {testQuestions.length * 2}.0 • Verified server-controlled timer.
      </footer>

    </div>
  );
}
