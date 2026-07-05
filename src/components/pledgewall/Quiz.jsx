import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { toPng } from "html-to-image";
import { Download, RotateCcw } from "lucide-react";
import confetti from "canvas-confetti";
import { quizQuestions } from "../../data/quizQuestions";
import { pillars } from "../../data/pillars";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { ResultCard } from "./ResultCard";

function tallyResult(answers) {
  const counts = {};
  answers.forEach((key) => {
    counts[key] = (counts[key] || 0) + 1;
  });
  let winner = answers[0];
  let best = 0;
  pillars.forEach((p) => {
    const c = counts[p.key] || 0;
    if (c > best) {
      best = c;
      winner = p.key;
    }
  });
  return pillars.find((p) => p.key === winner);
}

export function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);
  const reducedMotion = useReducedMotion();
  const cardRef = useRef(null);

  const total = quizQuestions.length;
  const progress = result ? 100 : (step / total) * 100;

  useEffect(() => {
    if (!result) return;
    if (reducedMotion) return;
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#8B2E2E", "#C9A15A"],
    });
  }, [result, reducedMotion]);

  const handleAnswer = (pillarKey) => {
    const next = [...answers, pillarKey];
    setAnswers(next);
    if (step + 1 >= total) {
      setResult(tallyResult(next));
    } else {
      setStep(step + 1);
    }
  };

  const handleRestart = () => {
    setStep(0);
    setAnswers([]);
    setResult(null);
  };

  const handleDownload = async () => {
    if (!cardRef.current) return;
    const dataUrl = await toPng(cardRef.current, { pixelRatio: 2 });
    const link = document.createElement("a");
    link.download = "my-welfare-pillar.png";
    link.href = dataUrl;
    link.click();
  };

  return (
    <div className="mx-auto max-w-xl">
      {!result && (
        <div className="mb-8 h-1 w-full overflow-hidden rounded-full bg-line">
          <motion.div
            className="h-full bg-accent"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      )}

      <AnimatePresence mode="wait" initial={false}>
        {!result ? (
          <motion.div
            key={step}
            initial={reducedMotion ? false : { opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reducedMotion ? undefined : { opacity: 0, x: -40 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-medium uppercase tracking-wider text-accent">
              Question {step + 1} of {total}
            </p>
            <h3 className="mt-3 font-display text-2xl text-ink md:text-3xl">
              {quizQuestions[step].prompt}
            </h3>

            <div className="mt-8 flex flex-col gap-3">
              {quizQuestions[step].options.map((opt) => (
                <button
                  key={opt.text}
                  onClick={() => handleAnswer(opt.pillar)}
                  className="min-h-11 w-full border border-line px-5 py-4 text-left text-ink transition-colors duration-300 hover:border-accent hover:bg-accent/5"
                >
                  {opt.text}
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <ResultCard ref={cardRef} pillar={result} />

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button
                onClick={handleDownload}
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-paper transition-colors hover:bg-ink"
              >
                <Download size={16} />
                Download / Share Result
              </button>
              <button
                onClick={handleRestart}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-6 text-sm font-medium text-ink transition-colors hover:border-accent-soft"
              >
                <RotateCcw size={16} />
                Retake Quiz
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
