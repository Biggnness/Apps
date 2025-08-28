
import React from 'react';
import type { Level, UserProgress } from '../types';
import Icon from './Icon';

interface LevelSelectorProps {
  levels: Level[];
  userProgress: UserProgress;
  currentLevelId: number;
  onSelectLevel: (levelIndex: number) => void;
}

const LevelSelector: React.FC<LevelSelectorProps> = ({ levels, userProgress, currentLevelId, onSelectLevel }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Levels</h2>
      <nav>
        <ul className="space-y-2">
          {levels.map((level, index) => {
            const progress = userProgress[level.id];
            const isCompleted = progress?.completed;
            const isCurrent = level.id === currentLevelId;
            const isUnlocked = index === 0 || userProgress[index - 1]?.completed;

            let statusClasses = 'bg-white text-gray-700 hover:bg-gray-100';
            let statusIcon = <Icon name="code" className="h-5 w-5 text-gray-400" />;

            if (!isUnlocked) {
              statusClasses = 'bg-gray-100 text-gray-400 cursor-not-allowed';
              statusIcon = <Icon name="lock" className="h-5 w-5" />;
            } else if (isCurrent) {
              statusClasses = 'bg-blue-600 text-white shadow-sm';
              statusIcon = <Icon name="code" className="h-5 w-5" />;
            } else if (isCompleted) {
              statusClasses = 'bg-green-100 text-green-800 hover:bg-green-200';
              statusIcon = <Icon name="check" className="h-5 w-5 text-green-600" />;
            }

            return (
              <li key={level.id}>
                <button
                  onClick={() => onSelectLevel(index)}
                  disabled={!isUnlocked}
                  className={`w-full flex items-center p-3 rounded-md text-left transition-colors duration-200 ${statusClasses}`}
                >
                  <div className="flex-shrink-0 w-6">{statusIcon}</div>
                  <span className="ml-3 font-medium flex-1">{level.id + 1}. {level.title}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default LevelSelector;
