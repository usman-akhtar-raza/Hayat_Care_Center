"use client";

import { useState } from "react";
import Link from "next/link";

const questions = [
  {
    question: "Does your loved one need help with daily activities like bathing or dressing?",
    options: ["Yes, regularly", "Sometimes", "Rarely", "No"],
  },
  {
    question: "Are you looking for social engagement and companionship for your loved one?",
    options: ["Very important", "Somewhat important", "Not a priority"],
  },
  {
    question: "Does your family member need health monitoring or medication management?",
    options: ["Yes, daily", "Occasionally", "No"],
  },
  {
    question: "Would reliable transportation to and from the center be helpful?",
    options: ["Yes, essential", "Would be nice", "Not needed"],
  },
];

export default function AssessmentQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setStep(0);
    setAnswers([]);
    setShowResult(false);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)]">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block text-[var(--accent-light)] font-semibold text-sm uppercase tracking-wider mb-2">
            Free Assessment
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Is Adult Daycare Right for Your Family?
          </h2>
          <p className="text-white/70">
            Take this quick assessment to see how our services can help your loved one.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          {!showResult ? (
            <>
              {/* Progress bar */}
              <div className="flex gap-2 mb-8">
                {questions.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full flex-1 transition-colors ${
                      i <= step ? "bg-[var(--primary)]" : "bg-gray-200"
                    }`}
                  />
                ))}
              </div>

              <p className="text-sm text-[var(--text-muted)] mb-2">
                Question {step + 1} of {questions.length}
              </p>
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-6">
                {questions[step].question}
              </h3>

              <div className="space-y-3">
                {questions[step].options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleAnswer(option)}
                    className="w-full text-left px-5 py-3.5 rounded-xl border-2 border-gray-200 hover:border-[var(--primary)] hover:bg-[var(--secondary)] transition-all font-medium text-[var(--foreground)]"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[var(--foreground)] mb-3">
                Hayat Can Help!
              </h3>
              <p className="text-[var(--text-muted)] mb-6 max-w-md mx-auto">
                Based on your responses, our adult daycare services would be a
                great fit for your family. Schedule a free visit to see our
                center and meet our caring team.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center bg-[var(--accent)] text-white px-8 py-3 rounded-full font-semibold hover:bg-[var(--accent-light)] transition-colors"
                >
                  Schedule a Free Visit
                </Link>
                <button
                  onClick={resetQuiz}
                  className="inline-flex items-center justify-center border-2 border-gray-300 text-[var(--foreground)] px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors"
                >
                  Retake Quiz
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
