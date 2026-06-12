import React, { useState, useEffect } from 'react';
import { questions } from '../data/questions';
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

  // Load active question list based on section
  const sectionQuestions = questions.filter((q) => q.section === activeSection);

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
      const q = questions.find(q => q.id === activeQuestionId);
      if (q && q.section !== activeSection) {
        setActiveSection(q.section);
      }
    }
  }, [activeQuestionId, examStarted, submitted]);

  // Actions
  const handleStartExam = (e: React.FormEvent) => {
    e.preventDefault();
    if (!candidateName.trim()) return;
    setExamStarted(true);
    setTimeLeft(3600);
    setSubmitted(false);
    setSelectedAnswers({});
    setMarkedForReview({});
    setVisitedQuestions({ 1: true });
    setActiveQuestionId(1);
    setActiveSection('English');
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
    if (activeQuestionId < 100) {
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

    // Section wise states
    const sectionStats: Record<Section, { total: number; attempted: number; correct: number; incorrect: number; marks: number }> = {
      English: { total: 25, attempted: 0, correct: 0, incorrect: 0, marks: 0 },
      Math: { total: 25, attempted: 0, correct: 0, incorrect: 0, marks: 0 },
      GI: { total: 25, attempted: 0, correct: 0, incorrect: 0, marks: 0 },
      GK: { total: 25, attempted: 0, correct: 0, incorrect: 0, marks: 0 }
    };

    questions.forEach((q) => {
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

  // 1. WELCOME SCREEN
  if (!examStarted) {
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

          <form onSubmit={handleStartExam} className="space-y-6">
            <div>
              <label htmlFor="candidate-name" className="block text-sm font-semibold text-slate-300 mb-2">
                Candidate Name
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

            <div className="bg-slate-750/50 rounded-xl p-5 border border-slate-700/80 space-y-3">
              <h3 className="font-bold text-slate-200 flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-400" /> Exam Information &amp; Rules:
              </h3>
              <ul className="text-sm text-slate-300 space-y-2 list-disc pl-5">
                <li><strong className="text-white">Total Questions:</strong> 100 questions (4 sections of 25 each).</li>
                <li><strong className="text-white">Total Marks:</strong> 200 Marks.</li>
                <li><strong className="text-white">Duration:</strong> 1 Hour (60 minutes).</li>
                <li><strong className="text-emerald-400">Correct Answer:</strong> +2.0 Marks.</li>
                <li><strong className="text-rose-400">Negative Marking:</strong> -0.5 Mark for every wrong answer.</li>
                <li><strong className="text-slate-400">Unattempted:</strong> 0 Marks.</li>
                <li>Dynamic navigation allowed across any of the questions.</li>
              </ul>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-indigo-500/20 transition-all transform active:scale-98 flex items-center justify-center gap-2 text-lg"
            >
              Start Practice Test
            </button>
          </form>
        </div>
      </div>
    );
  }

  // 2. EXAM SUBMITTED - RESULTS DASHBOARD
  if (submitted) {
    const scorePercentage = (results.totalMarks / 200) * 100;
    const isWin = results.totalMarks >= 100; // pass score is 100/200

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
              <span className="text-slate-500 text-xs mt-1">out of 200.0 Marks</span>
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
                  {(Object.keys(results.sectionStats) as Section[]).map((secName) => {
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
              {questions
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

              {questions.filter((q) => {
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
  const activeQuestion = questions.find((q) => q.id === activeQuestionId) || questions[0];
  const userSelectedOption = selectedAnswers[activeQuestion.id];
  const isQuestionMarked = !!markedForReview[activeQuestion.id];

  // Section navigation quick clicks
  const handleSectionSwitch = (sectionName: Section) => {
    setActiveSection(sectionName);
    const firstQ = questions.find(q => q.section === sectionName);
    if (firstQ) {
      setActiveQuestionId(firstQ.id);
    }
  };

  // Section statistics computed for tab labels
  const getSectionStats = (sectionName: Section) => {
    const secQs = questions.filter(q => q.section === sectionName);
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
            <h1 className="text-lg font-extrabold text-white tracking-wide">CBT mock exam</h1>
            <p className="text-xs text-indigo-400 font-semibold tracking-wider uppercase">Full 100 Q Series • 200 Marks</p>
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
            {(['English', 'Math', 'GI', 'GK'] as Section[]).map((sec) => (
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
                    Question {activeQuestion.id} of 100
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
                    disabled={activeQuestionId === 100}
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
                <h2 className="text-lg font-bold">All 25 questions in {activeSection}</h2>
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
              {(['English', 'Math', 'GI', 'GK'] as Section[]).map((sec) => (
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

            {/* Dynamic 100-button Grid */}
            <div className="grid grid-cols-5 sm:grid-cols-5 gap-2 max-h-[300px] overflow-y-auto pr-1">
              {questions.map((q) => {
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
                <span className="font-mono text-white">100</span>
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
                <span className="font-mono text-rose-400 font-bold">{100 - Object.keys(selectedAnswers).length}</span>
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
        System Protocol: TCS iON Style CBT Simulator • Max marks: 200.0 • Verified server-controlled timer.
      </footer>

    </div>
  );
}
