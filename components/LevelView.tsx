
import React, { useState, useEffect } from 'react';
import type { Level } from '../types';
import Icon from './Icon';

interface LevelViewProps {
  level: Level;
  userCode: string;
  onSubmit: (levelId: number, code: string) => boolean;
  onReset: (levelId: number) => void;
}

const LevelView: React.FC<LevelViewProps> = ({ level, userCode, onSubmit, onReset }) => {
  const [code, setCode] = useState(userCode);
  const [showHint, setShowHint] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'correct' | 'incorrect'>('idle');

  useEffect(() => {
    setCode(userCode);
    setSubmissionStatus('idle');
    setShowHint(false);
  }, [level, userCode]);
  
  const handleSubmit = () => {
    const isCorrect = onSubmit(level.id, code);
    setSubmissionStatus(isCorrect ? 'correct' : 'incorrect');
  };

  const handleReset = () => {
    onReset(level.id);
    setSubmissionStatus('idle');
  }

  const FeedbackPanel = () => {
    if (submissionStatus === 'idle') return null;

    if (submissionStatus === 'correct') {
      return (
        <div className="mt-4 p-4 rounded-md bg-green-100 border border-green-300">
          <div className="flex items-center">
            <Icon name="checkCircle" className="h-6 w-6 text-green-600" />
            <div className="ml-3">
              <h3 className="text-lg font-semibold text-green-800">Correct!</h3>
              <p className="text-sm text-green-700">Great job! You've unlocked the next level.</p>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="mt-4 p-4 rounded-md bg-red-50 border border-red-200">
        <div className="flex items-center mb-3">
            <Icon name="xCircle" className="h-6 w-6 text-red-500" />
            <h3 className="ml-3 text-lg font-semibold text-red-800">Not quite...</h3>
        </div>
        <p className="text-sm text-red-700 mb-3">{level.explanation}</p>
        <div className="space-y-2">
            <h4 className="font-semibold text-gray-700">Expected Solution:</h4>
            <pre className="bg-gray-800 text-white p-3 rounded-md text-sm whitespace-pre-wrap font-mono">
              <code>{level.solution}</code>
            </pre>
        </div>
      </div>
    );
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">{level.id + 1}. {level.title}</h2>
      <p className="text-gray-600 mb-4">{level.context}</p>
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6">
        <h3 className="font-bold text-blue-800">Your Task:</h3>
        <p className="text-blue-700 mt-1">{level.task}</p>
      </div>

      <div className="bg-gray-900 rounded-lg p-4 shadow-inner relative">
         <div className="absolute top-3 right-3 text-xs font-semibold text-gray-500 uppercase">Java</div>
        <textarea
          className="w-full h-64 bg-transparent text-white font-mono text-sm border-0 focus:ring-0 resize-none outline-none"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          spellCheck="false"
        />
      </div>

      <div className="flex items-center justify-between mt-4 flex-wrap gap-2">
        <div className="flex items-center space-x-2">
           <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Submit
          </button>
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition-colors"
          >
            Reset
          </button>
        </div>
        <button 
            onClick={() => setShowHint(!showHint)}
            className="flex items-center px-4 py-2 text-sm font-medium text-yellow-700 bg-yellow-100 rounded-md hover:bg-yellow-200"
        >
            <Icon name="hint" className="h-5 w-5 mr-2 text-yellow-500" />
            {showHint ? 'Hide Hint' : 'Show Hint'}
        </button>
      </div>
      
      {showHint && (
        <div className="mt-4 p-4 rounded-md bg-yellow-50 border border-yellow-200 text-sm text-yellow-800">
          <strong>Hint:</strong> {level.hint}
        </div>
      )}

      <FeedbackPanel />
    </div>
  );
};

export default LevelView;
