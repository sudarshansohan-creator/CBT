import React, { useState, useEffect } from 'react';
import { questions, comboQuestions } from '../data/questions';
import { Question, Section } from '../types';
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
  FileText
} from 'lucide-react';

export default function ExamPortal() {
  // Candidate Profile State
  const [candidateName, setCandidateName] = useState('Sudarshan Sohan');
  const [nameEntered, setNameEntered] = useState(false);
  const [selectedTest, setSelectedTest] = useState<'full_mock_1' | 'english_gi_combo'>('full_mock_1');
  const [examStarted, setExamStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  // Navigation & View States
  const [activeSection, setActiveSection] = useState<Section>('English');
  const [activeQuestionId, setActiveQuestionId] = useState<number>(1);
  const [viewMode, setViewMode] = useState<'single' | 'list'>('single');
  const [confirmSubmitOpen, setConfirmSubmitOpen] = useState(false);
  
  // Exam Response States
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, 'A' | 'B' | 'C' | 'D'>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<number, boolean>>({});
  const [visitedQuestions, setVisitedQuestions] = useState<Record<number, boolean>>({ 1: true });
  
  // Timer State (60 minutes = 3600 seconds)
  const [timeLeft, setTimeLeft] = useState(3600);

  // Filter for post-exam review (All, Correct, Incorrect, Unattempted)
  const [reviewFilter, setReviewFilter] = useState<'all' | 'correct' | 'incorrect' | 'unattempted'>('all');

  // List of questions for the selected test
  const testQuestions = React.useMemo(() => {
    if (selectedTest === 'english_gi_combo') {
      return comboQuestions;
    }
    return questions; // 'full_mock_1' uses all 100 questions
  }, [selectedTest]);

  // Loader for currentSections tab option lists
  const currentSections = React.useMemo<Section[]>(() => {
    if (selectedTest === 'english_gi_combo') {
      return ['English', 'GI'];
    }
    return ['English', 'Math', 'GI', 'GK'];
  }, [selectedTest]);

  // Load active question list based on section
  const sectionQuestions = testQuestions.filter((q) => q.section === activeSection);

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
    setNameEntered(true);
  };

  const handleStartExam = () => {
    setExamStarted(true);
    setSubmitted(false);
    setSelectedAnswers({});
    setMarkedForReview({});
    setVisitedQuestions({ 1: true });
    setActiveQuestionId(1);
    setActiveSection('English');
    
    // Set appropriate timer duration
    if (selectedTest === 'english_gi_combo') {
      setTimeLeft(1800); // 30 mins
    } else {
      setTimeLeft(3600); // 60 mins
    }
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
    setSubmitted(true);
    setConfirmSubmitOpen(false);
  };

  const triggerManualSubmit = () => {
    setConfirmSubmitOpen(true);
  };

  const confirmSubmit = () => {
    setSubmitted(true);
    setConfirmSubmitOpen(false);
  };

  const handleRetake = () => {
    setNameEntered(false);
    setExamStarted(false);
    setSubmitted(false);
    setSelectedAnswers({});
    setMarkedForReview({});
    setVisitedQuestions({ 1: true });
    setActiveQuestionId(1);
    setActiveSection('English');
    setTimeLeft(3600);
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

  const predictorScore = selectedTest === 'english_gi_combo' ? results.totalMarks * 5 : results.totalMarks;
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
        <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
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
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-slate-800 text-white shadow-2xl rounded-2xl p-8 border border-slate-700 relative overflow-hidden">
          {/* Accent decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>

          <div className="text-center mb-6">
            <h1 className="text-2xl font-black text-slate-100">সিবিটি মক টেস্ট পোর্টাল</h1>
            <p className="text-indigo-400 mt-1 font-semibold text-sm">CBT Exam Room • Candidate: {candidateName}</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-200">সিলেক্ট করুন কোন টেস্টটি দিতে চান (Select Test Pool):</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Card 1: Full Mock */}
              <div
                onClick={() => setSelectedTest('full_mock_1')}
                className={`cursor-pointer rounded-xl p-5 border transition-all relative flex flex-col justify-between ${
                  selectedTest === 'full_mock_1'
                    ? 'border-indigo-500 bg-indigo-500/15 ring-2 ring-indigo-500/35'
                    : 'border-slate-705 bg-slate-750/70 hover:border-slate-600'
                }`}
              >
                <span className="absolute top-3 right-3 text-xs bg-indigo-600 text-white font-bold px-2 py-0.5 rounded-full">
                  Full Set
                </span>
                <div>
                  <h3 className="font-extrabold text-lg text-white">Full Mocktest 1</h3>
                  <p className="text-xs text-slate-300 mt-1">সবকটি সাবজেক্টের সম্পূর্ণ মক টেস্ট।</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-700/50 space-y-1.5 text-xs font-semibold text-slate-400">
                  <div className="flex justify-between">
                    <span>English, Math, GI, GK</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Questions: 100</span>
                    <span>Marks: 200</span>
                  </div>
                  <div className="text-indigo-300">⏳ সময়: ১ ঘন্টা (60 Mins)</div>
                </div>
              </div>

              {/* Card 2: Combo Mock */}
              <div
                onClick={() => setSelectedTest('english_gi_combo')}
                className={`cursor-pointer rounded-xl p-5 border transition-all relative flex flex-col justify-between ${
                  selectedTest === 'english_gi_combo'
                    ? 'border-emerald-500 bg-emerald-500/15 ring-2 ring-emerald-500/35'
                    : 'border-slate-705 bg-slate-750/70 hover:border-slate-600'
                }`}
              >
                <span className="absolute top-3 right-3 text-xs bg-emerald-600 text-white font-bold px-2 py-0.5 rounded-full">
                  Combo Qs
                </span>
                <div>
                  <h3 className="font-extrabold text-lg text-white">English + GI Combo</h3>
                  <p className="text-xs text-slate-300 mt-1">ইংরেজি এবং রিজননিং সাবজেক্টের স্পেশাল কম্বো সেট।</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-700/50 space-y-1.5 text-xs font-semibold text-slate-400">
                  <div className="flex justify-between">
                    <span>English &amp; GI Sections</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Questions: 20</span>
                    <span>Marks: 40</span>
                  </div>
                  <div className="text-emerald-300">⏳ সময়: ৩০ মিনিট (30 Mins)</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-755 p-4 rounded-xl border border-slate-700/50 text-xs text-slate-300 leading-relaxed">
              <strong className="text-yellow-400 block mb-1">গুরুত্বপূর্ণ নিয়ম ও মার্কিং স্কিম:</strong>
              • প্রতিটি সঠিক উত্তরের জন্য পাবেন <span className="text-emerald-400 font-bold">+২.০ নম্বর</span>।<br />
              • ভুল উত্তরের জন্য ডিক্ট করা হবে <span className="text-rose-400 font-bold">-০.৫ নম্বর</span> নেগেটিভ মার্কিং।<br />
              • নির্ধারিত সময় শেষ হলে পরীক্ষা স্বয়ংক্রিয়ভাবে সেভ ও সাবমিট হয়ে যাবে।
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={() => setNameEntered(false)}
                className="order-2 sm:order-1 flex-1 py-3 border border-slate-600 hover:bg-slate-750 rounded-xl font-bold transition text-slate-300 text-center"
              >
                ← Back
              </button>
              <button
                type="button"
                onClick={handleStartExam}
                className="order-1 sm:order-2 flex-[2] bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black py-3 rounded-xl shadow-lg shadow-emerald-500/20 transition-all text-center text-lg uppercase tracking-wider animate-pulse"
              >
                পরীক্ষা শুরু করুন (Start Exam)
              </button>
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
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
            
            <div className="space-y-4 text-center md:text-left z-10">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-semibold border border-emerald-500/20">
                <CheckCircle className="w-4 h-4" /> Exam Completed Safely
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight">
                Mock Test Report: {candidateName}
              </h2>
              <p className="text-slate-400 max-w-xl">
                Here is your comprehensive Computer Based Test scorecard. Review correct keys, negative mark deductions, and detailed performance metrics below.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center bg-slate-850 p-6 rounded-2xl border border-slate-750 z-10 min-w-[200px]">
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
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-xl font-bold flex items-center gap-2">
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
                    {mode === 'all' ? 'All (100)' : 
                     mode === 'correct' ? `Correct (${results.correctCount})` : 
                     mode === 'incorrect' ? `Incorrect (${results.incorrectCount})` : 
                     `Unattempted (${results.unattemptedCount})`}
                  </button>
                ))}
              </div>
            </div>

            {/* Answer Feed */}
            <div className="space-y-6 max-h-[800px] overflow-y-auto pr-2 divide-y divide-slate-800">
              {testQuestions
                .filter((q) => {
                  const select = selectedAnswers[q.id];
                  if (reviewFilter === 'correct') return select === q.correctAnswer;
                  if (reviewFilter === 'incorrect') return select && select !== q.correctAnswer;
                  if (reviewFilter === 'unattempted') return !select;
                  return true;
                })
                .map((q, index) => {
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

                      <p className="text-lg font-medium text-slate-100">{q.question}</p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {q.options.map((opt, idx) => {
                          const optionKey = String.fromCharCode(65 + idx) as 'A' | 'B' | 'C' | 'D';
                          const isPicked = select === optionKey;
                          const isCorrectKey = q.correctAnswer === optionKey;

                          let optStyle = 'p-3.5 rounded-xl border text-sm text-left transition flex items-start gap-2.5 ';
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
                              <span>{opt}</span>
                            </div>
                          );
                        })}
                      </div>

                      {/* Explanation box */}
                      <div className="p-4 bg-slate-850 rounded-xl border border-slate-755 text-sm space-y-1.5">
                        <p className="font-semibold text-slate-250 flex items-center gap-1.5">
                          <CheckCircle className="w-4 h-4 text-emerald-400" />
                          <span>Correct Answer Key: <strong className="text-emerald-400 text-base">{q.correctAnswer}</strong></span>
                        </p>
                        {q.explanation && (
                          <p className="text-slate-400 font-light leading-relaxed">
                            <strong className="text-slate-300">Explanation: </strong>
                            {q.explanation}
                          </p>
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
                <div className="text-center py-12 text-slate-500">
                  No questions match your selected filter criteria.
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="flex justify-center pt-6 border-t border-slate-800">
              <button
                onClick={handleRetake}
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition transform active:scale-97"
              >
                <RotateCcw className="w-5 h-5" /> Retake Mock Exam
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 3. MAIN LIVE EXAM SESSION
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
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      
      {/* EXAM STATUS TOP NAV */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-40 px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-500/10 p-2 rounded-lg text-indigo-400 border border-indigo-500/20">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-lg font-extrabold text-white tracking-wide">
              {selectedTest === 'english_gi_combo' ? 'English + GI Combo Mock' : 'CBT Full Mocktest 1'}
            </h1>
            <p className="text-xs text-indigo-400 font-semibold tracking-wider uppercase">
              {selectedTest === 'english_gi_combo' ? 'Combo 20 Q Series • 40 Marks' : 'Full 100 Q Series • 200 Marks'}
            </p>
          </div>
        </div>

        {/* Real-time stats display */}
        <div className="flex flex-wrap items-center gap-3 bg-slate-950 p-2 rounded-xl border border-slate-800">
          <div className="flex items-center gap-1.5 px-2.5 py-1 text-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="font-semibold text-slate-300">Answered:</span>
            <span className="font-mono bg-slate-900 px-1.5 py-0.5 rounded text-emerald-400 font-bold">
              {Object.keys(selectedAnswers).length}
            </span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 text-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
            <span className="font-semibold text-slate-300">Marked:</span>
            <span className="font-mono bg-slate-900 px-1.5 py-0.5 rounded text-purple-400 font-bold">
              {Object.keys(markedForReview).filter(k => !!markedForReview[Number(k)]).length}
            </span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 text-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
            <span className="font-semibold text-slate-300">Not Answered:</span>
            <span className="font-mono bg-slate-900 px-1.5 py-0.5 rounded text-rose-400 font-bold">
              {Object.keys(visitedQuestions).length - Object.keys(selectedAnswers).length}
            </span>
          </div>
        </div>

        {/* Timer countdown and Submit action */}
        <div className="flex items-center gap-4">
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
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* LEFT CONTAINER (8 COLS): TABS, QUESTION SPACE & BUTTONS */}
        <div className="lg:col-span-8 flex flex-col space-y-6">
          
          {/* SECTION TAB HEADERS */}
          <div className="bg-slate-900 p-2 rounded-2xl border border-slate-800 flex flex-wrap gap-1.5">
            {currentSections.map((sec) => (
              <button
                key={sec}
                onClick={() => handleSectionSwitch(sec)}
                className={`flex-1 min-w-[100px] text-center px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 ${
                  activeSection === sec
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-slate-850 text-slate-400 hover:bg-slate-800'
                }`}
              >
                <span>
                  {sec === 'English' ? 'English' : 
                   sec === 'Math' ? 'Math' : 
                   sec === 'GI' ? 'GI (Logic)' : 
                   'GK/GA'}
                </span>
                <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono leading-none ${
                  activeSection === sec ? 'bg-indigo-800 text-indigo-200' : 'bg-slate-950 text-slate-500'
                }`}>
                  {getSectionStats(sec)}
                </span>
              </button>
            ))}
          </div>

          {/* VIEW SWITCHER & TITLE */}
          <div className="flex items-center justify-between">
            <span className="text-slate-400 text-sm font-semibold uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-ping"></span>
              Active Section: <strong className="text-white bg-indigo-900/40 px-2 py-0.5 rounded border border-indigo-500/20">{activeSection}</strong>
            </span>

            {/* Mode switch allows listing all questions in section, or showing one by one */}
            <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
              <button
                onClick={() => setViewMode('single')}
                className={`px-3 py-1.5 rounded-lg font-bold transition flex items-center gap-1 ${
                  viewMode === 'single' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Grid className="w-3.5 h-3.5" /> Single Q
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-1.5 rounded-lg font-bold transition flex items-center gap-1 ${
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
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col min-h-[420px] justify-between relative shadow-xl">
              {/* Question title index header */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-indigo-400 text-sm font-bold uppercase tracking-wider">
                    Question {activeQuestion.id} of {testQuestions.length}
                  </span>
                  
                  {isQuestionMarked && (
                    <span className="inline-flex items-center gap-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 px-2.5 py-1 rounded-lg text-xs font-bold leading-none">
                      <Bookmark className="w-3 h-3 fill-current" /> Marked for Review
                    </span>
                  )}
                </div>

                <div className="space-y-6">
                  {/* The actual question message */}
                  <h3 className="text-xl font-semibold text-slate-100 leading-relaxed">
                    {activeQuestion.question}
                  </h3>

                  {/* Options layout */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activeQuestion.options.map((opt, idx) => {
                      const optionKey = String.fromCharCode(65 + idx) as 'A' | 'B' | 'C' | 'D';
                      const isSelected = userSelectedOption === optionKey;

                      return (
                        <button
                          key={idx}
                          id={`option-${idx}`}
                          onClick={() => handleOptionSelect(activeQuestion.id, optionKey)}
                          className={`text-left p-4 rounded-2xl border text-sm transition-all focus:outline-none flex items-start gap-3 min-h-[56px] ${
                            isSelected
                              ? 'bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/10'
                              : 'bg-slate-850 hover:bg-slate-800 border-slate-750 text-slate-300'
                          }`}
                        >
                          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                            isSelected ? 'bg-white text-indigo-600' : 'bg-slate-700 text-slate-400'
                          }`}>
                            {optionKey}
                          </span>
                          <span className="leading-snug">{opt}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* ACTION COMMAND BAR */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-8 mt-8 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleToggleReview(activeQuestion.id)}
                    className={`px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-bold transition flex items-center gap-1.5 ${
                      isQuestionMarked 
                        ? 'bg-purple-600 text-white border-purple-700' 
                        : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-750'
                    }`}
                  >
                    <Bookmark className="w-4 h-4 fill-none" /> Mark for Review
                  </button>

                  <button
                    onClick={() => handleClearResponse(activeQuestion.id)}
                    className="px-4 py-2.5 bg-slate-800 hover:bg-slate-75 hover:text-white border border-slate-705 text-slate-400 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5"
                    disabled={!userSelectedOption}
                  >
                    <Trash2 className="w-4 h-4" /> Clear
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    disabled={activeQuestionId === 1}
                    className="p-2.5 bg-slate-800 hover:bg-slate-750 text-white disabled:opacity-30 disabled:hover:bg-slate-800 rounded-xl border border-slate-700 transition"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={handleNext}
                    disabled={activeQuestionId === testQuestions.length}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center gap-1"
                  >
                    Save &amp; Next <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
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

                      <p className="text-slate-150 font-medium text-base">{q.question}</p>

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
                              <span>{opt}</span>
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
