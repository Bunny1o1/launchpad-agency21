"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import Link from "next/link";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const questions = [
  { id: 1, question: "Do you have an active WhatsApp Business API or RCS channel?", weight: 15, category: "Infrastructure" },
  { id: 2, question: "Are your messaging templates optimized and A/B tested regularly?", weight: 12, category: "Optimization" },
  { id: 3, question: "Do you have defined conversational journeys for different customer segments?", weight: 15, category: "Strategy" },
  { id: 4, question: "Can you track engagement metrics (read rates, CTR, conversion) per template/journey?", weight: 12, category: "Analytics" },
  { id: 5, question: "Do you have automated flows for onboarding, re-engagement, or support?", weight: 10, category: "Automation" },
  { id: 6, question: "Is there a dedicated person or team owning your messaging channel strategy?", weight: 10, category: "Ownership" },
  { id: 7, question: "Do you measure and report on messaging ROI to leadership?", weight: 8, category: "Analytics" },
  { id: 8, question: "Are you using rich media (images, videos, carousels, CTAs) in your messages?", weight: 8, category: "Content" },
  { id: 9, question: "Do you have a strategy for handling opt-outs and maintaining list health?", weight: 5, category: "Compliance" },
  { id: 10, question: "Are you exploring or using conversational AI/chatbots for customer interactions?", weight: 5, category: "Innovation" },
];

const getGrade = (score: number) => {
  if (score >= 85) return { grade: "A", label: "Excellent", color: "text-green-500", border: "border-green-500", desc: "Your messaging strategy is mature. Focus on optimization and scaling." };
  if (score >= 65) return { grade: "B", label: "Good", color: "text-accent", border: "border-accent", desc: "Solid foundation but significant room for growth. Strategic improvements could drive major ROI." };
  if (score >= 40) return { grade: "C", label: "Developing", color: "text-secondary", border: "border-secondary", desc: "You have the basics but are leaving serious money on the table. A focused sprint could transform your results." };
  return { grade: "D", label: "Early Stage", color: "text-red-500", border: "border-red-500", desc: "Your messaging strategy needs foundational work. The good news: the ROI ceiling is massive once you build the right systems." };
};

export default function ReadinessScorePage() {
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const handleAnswer = (questionId: number, value: boolean) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const score = Object.entries(answers).reduce((total, [qId, val]) => {
    const question = questions.find((q) => q.id === parseInt(qId));
    return total + (val && question ? question.weight : 0);
  }, 0);

  const answeredAll = Object.keys(answers).length === questions.length;

  const handleSubmit = () => {
    if (answeredAll) setShowResults(true);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call for now since we are building front-end first
    setTimeout(() => {
      setEmailSent(true);
    }, 1000);
  };

  const gradeInfo = getGrade(score);
  const progress = (Object.keys(answers).length / questions.length) * 100;

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden bg-surface border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative text-center">
          <motion.span
            className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 block"
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Free Assessment
          </motion.span>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6"
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            WhatsApp & Messaging <span className="text-accent">Readiness Score</span>
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Answer 10 quick questions to see how mature your messaging strategy
            is — and where the biggest growth opportunities are hiding.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          {!showResults ? (
            <motion.div
              variants={fade}
              initial="hidden"
              animate="visible"
              className="space-y-12"
            >
              {/* Progress */}
              <div className="space-y-3">
                <div className="h-1.5 w-full bg-surface rounded-full overflow-hidden border border-border">
                  <div 
                    className="h-full bg-accent transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="text-sm font-medium text-muted-foreground text-right">
                  {Object.keys(answers).length} of {questions.length} answered
                </div>
              </div>

              {/* Questions */}
              <div className="space-y-6">
                {questions.map((q, i) => {
                  const isAnswered = answers[q.id] !== undefined;
                  const isYes = answers[q.id] === true;
                  const isNo = answers[q.id] === false;

                  return (
                    <div 
                      key={q.id}
                      className={`p-6 md:p-8 rounded-xl border transition-all ${
                        isAnswered ? "border-accent/30 bg-surface/50" : "border-border bg-card"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-surface border border-border text-xs font-bold text-muted-foreground">
                          {i + 1}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-3 py-1 rounded-full bg-surface border border-border">
                          {q.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-medium mb-6 leading-relaxed text-foreground">
                        {q.question}
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          onClick={() => handleAnswer(q.id, true)}
                          className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg border font-medium text-sm transition-all ${
                            isYes 
                              ? "bg-green-500/10 border-green-500/50 text-green-500 dark:text-green-400" 
                              : "bg-surface border-border text-muted-foreground hover:border-muted-foreground/50"
                          }`}
                        >
                          <Check size={18} /> Yes
                        </button>
                        <button
                          onClick={() => handleAnswer(q.id, false)}
                          className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg border font-medium text-sm transition-all ${
                            isNo 
                              ? "bg-red-500/10 border-red-500/50 text-red-500 dark:text-red-400" 
                              : "bg-surface border-border text-muted-foreground hover:border-muted-foreground/50"
                          }`}
                        >
                          <X size={18} /> No
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={!answeredAll}
                className="w-full py-4 rounded-xl bg-accent text-background font-bold text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
              >
                See My Score <ArrowRight size={20} />
              </button>
            </motion.div>
          ) : (
            <motion.div
              variants={fade}
              initial="hidden"
              animate="visible"
              className="space-y-12"
            >
              {/* Score Display */}
              <div className="text-center p-12 rounded-2xl border border-border bg-card">
                <div className={`mx-auto w-40 h-40 rounded-full border-8 ${gradeInfo.border} flex flex-col items-center justify-center mb-8 bg-surface`}>
                  <span className={`text-6xl font-black tracking-tighter ${gradeInfo.color}`}>
                    {score}
                  </span>
                  <span className="text-sm font-bold text-muted-foreground mt-1 uppercase tracking-widest">
                    / 100
                  </span>
                </div>
                <h2 className={`text-3xl font-bold mb-4 ${gradeInfo.color}`}>
                  Grade {gradeInfo.grade} — {gradeInfo.label}
                </h2>
                <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto">
                  {gradeInfo.desc}
                </p>
              </div>

              {/* Lead Capture */}
              {!emailSent ? (
                <div className="p-8 md:p-12 rounded-2xl border border-accent/30 bg-accent/5 text-center">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    Get your personalized improvement roadmap
                  </h3>
                  <p className="text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">
                    Enter your email and I'll send you a custom action plan based
                    on your score — with the specific improvements that'll have
                    the biggest impact for your grade level.
                  </p>
                  <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 px-4 py-3 rounded-lg border border-border bg-surface text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-muted-foreground"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-lg bg-accent text-background font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 whitespace-nowrap"
                    >
                      Send Roadmap <ArrowRight size={16} />
                    </button>
                  </form>
                </div>
              ) : (
                <div className="p-12 rounded-2xl border border-green-500/30 bg-green-500/5 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mx-auto mb-6">
                    <Check size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    Roadmap on its way!
                  </h3>
                  <p className="text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed">
                    Check your inbox in a few minutes. In the meantime, if you want to skip the line:
                  </p>
                  <Link
                    href="/book"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-surface border border-border text-foreground font-semibold hover:border-accent hover:text-accent transition-all"
                  >
                    Book a Strategy Call <ArrowRight size={16} />
                  </Link>
                </div>
              )}

              {/* Breakdown */}
              <div className="rounded-2xl border border-border bg-card overflow-hidden">
                <div className="p-6 md:p-8 border-b border-border bg-surface">
                  <h3 className="text-xl font-bold">Your Breakdown</h3>
                </div>
                <div className="divide-y divide-border">
                  {questions.map((q) => (
                    <div key={q.id} className="p-6 md:p-8 flex flex-col sm:flex-row sm:items-center gap-4 hover:bg-surface/50 transition-colors">
                      <div className="flex-1 flex items-start gap-4">
                        <span className={`flex-shrink-0 mt-0.5 flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${
                          answers[q.id] 
                            ? "bg-green-500/20 text-green-500" 
                            : "bg-red-500/20 text-red-500"
                        }`}>
                          {answers[q.id] ? "✓" : "✗"}
                        </span>
                        <span className="text-sm font-medium text-foreground leading-relaxed">
                          {q.question}
                        </span>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-3 py-1 rounded-full bg-surface border border-border shrink-0 self-start sm:self-auto">
                        {q.category}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
