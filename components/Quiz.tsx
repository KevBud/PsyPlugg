import React, { useState } from 'react';
import { QuizQuestion } from '../types';

interface QuizProps {
  questions: QuizQuestion[];
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [answers, setAnswers] = useState<{ [key: string]: number }>({});
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (questionId: string, optionIndex: number) => {
    if (showResult) return; 
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correctIndex) score++;
    });
    return score;
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 my-8">
      <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
        <span className="bg-academic-500 text-white p-1 rounded">?</span> Kunskapskontroll
      </h2>
      
      <div className="space-y-8">
        {questions.map((q, idx) => {
          const isAnswered = answers[q.id] !== undefined;
          const isCorrect = answers[q.id] === q.correctIndex;
          const selected = answers[q.id];

          return (
            <div key={q.id} className="border-b border-slate-100 pb-6 last:border-0">
              <p className="text-lg font-medium text-slate-800 mb-4">
                {idx + 1}. {q.question}
              </p>
              <div className="space-y-3">
                {q.options.map((opt, optIdx) => {
                  let btnClass = "w-full text-left p-4 rounded-lg border transition-all duration-200 flex items-center justify-between ";
                  
                  if (showResult) {
                    if (optIdx === q.correctIndex) {
                      btnClass += "bg-green-100 border-green-500 text-green-900";
                    } else if (selected === optIdx && selected !== q.correctIndex) {
                      btnClass += "bg-red-50 border-red-300 text-red-900 opacity-75";
                    } else {
                      btnClass += "bg-slate-50 border-slate-200 text-slate-400 opacity-50";
                    }
                  } else {
                    if (selected === optIdx) {
                      btnClass += "bg-academic-50 border-academic-500 text-academic-900 ring-1 ring-academic-500";
                    } else {
                      btnClass += "bg-white border-slate-200 hover:border-academic-300 hover:bg-slate-50 text-slate-700";
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelect(q.id, optIdx)}
                      disabled={showResult}
                      className={btnClass}
                    >
                      <span>{opt}</span>
                      {showResult && optIdx === q.correctIndex && (
                        <span className="text-green-600 text-sm font-bold">✓ Rätt</span>
                      )}
                      {showResult && selected === optIdx && selected !== q.correctIndex && (
                        <span className="text-red-600 text-sm font-bold">✗ Fel</span>
                      )}
                    </button>
                  );
                })}
              </div>
              
              {showResult && (
                <div className="mt-4 p-4 bg-academic-50 rounded-lg text-sm text-academic-900 border-l-4 border-academic-500">
                  <strong>Förklaring:</strong> {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        {!showResult ? (
          <button
            onClick={() => setShowResult(true)}
            disabled={Object.keys(answers).length < questions.length}
            className={`px-8 py-3 rounded-full font-bold shadow-lg transition-transform transform active:scale-95 ${
              Object.keys(answers).length < questions.length
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                : 'bg-academic-700 text-white hover:bg-academic-900'
            }`}
          >
            Rätta svaren
          </button>
        ) : (
          <div className="flex items-center gap-4 w-full justify-between bg-academic-900 text-white p-4 rounded-xl">
            <span className="font-bold text-lg">
              Ditt resultat: {calculateScore()} / {questions.length} rätt
            </span>
            <button
              onClick={() => {
                setAnswers({});
                setShowResult(false);
              }}
              className="text-sm underline opacity-90 hover:opacity-100"
            >
              Starta om
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;