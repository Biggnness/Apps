
import React, { useState, useEffect, useCallback } from 'react';
import { ALL_LEVELS } from './constants';
import type { Level, UserProgress } from './types';
import Header from './components/Header';
import LevelSelector from './components/LevelSelector';
import LevelView from './components/LevelView';

const App: React.FC = () => {
  const [userProgress, setUserProgress] = useState<UserProgress>({});
  const [currentLevelIndex, setCurrentLevelIndex] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);

  useEffect(() => {
    try {
      const savedProgress = localStorage.getItem('javaBeanProgress');
      const savedStreak = localStorage.getItem('javaBeanStreak');
      if (savedProgress) {
        setUserProgress(JSON.parse(savedProgress));
      } else {
        // Initialize progress for level 1
        setUserProgress({ 0: { completed: false, code: ALL_LEVELS[0].starterCode } });
      }
      if (savedStreak) {
        setStreak(JSON.parse(savedStreak));
      }
    } catch (error) {
      console.error("Failed to load progress from localStorage", error);
    }
  }, []);

  const saveProgress = useCallback((progress: UserProgress, currentStreak: number) => {
    try {
      localStorage.setItem('javaBeanProgress', JSON.stringify(progress));
      localStorage.setItem('javaBeanStreak', JSON.stringify(currentStreak));
    } catch (error) {
      console.error("Failed to save progress to localStorage", error);
    }
  }, []);

  const handleLevelSelect = (levelIndex: number) => {
    const isUnlocked = levelIndex === 0 || userProgress[levelIndex - 1]?.completed;
    if (isUnlocked) {
      setCurrentLevelIndex(levelIndex);
    }
  };

  const normalizeCode = (code: string) => {
    return code.replace(/\s+/g, ' ').trim();
  };

  const handleSubmit = (levelId: number, userCode: string): boolean => {
    const level = ALL_LEVELS.find(l => l.id === levelId);
    if (!level) return false;

    const isCorrect = normalizeCode(userCode) === normalizeCode(level.solution);
    const newStreak = isCorrect ? streak + 1 : 0;
    setStreak(newStreak);

    const newProgress: UserProgress = {
      ...userProgress,
      [levelId]: {
        completed: isCorrect || userProgress[levelId]?.completed,
        code: userCode
      }
    };
    
    if (isCorrect && levelId + 1 < ALL_LEVELS.length && !newProgress[levelId+1]) {
        newProgress[levelId+1] = {
            completed: false,
            code: ALL_LEVELS[levelId+1].starterCode,
        };
    }

    setUserProgress(newProgress);
    saveProgress(newProgress, newStreak);
    
    if (isCorrect && currentLevelIndex < ALL_LEVELS.length - 1) {
        setTimeout(() => {
            setCurrentLevelIndex(currentLevelIndex + 1);
        }, 1500);
    }

    return isCorrect;
  };

  const handleReset = (levelId: number) => {
    const level = ALL_LEVELS.find(l => l.id === levelId);
    if (!level) return;

    const newProgress = {
      ...userProgress,
      [levelId]: {
        ...userProgress[levelId],
        code: level.starterCode,
      }
    };
    setUserProgress(newProgress);
    saveProgress(newProgress, streak);
  };
  
  const currentLevel = ALL_LEVELS[currentLevelIndex];

  return (
    <div className="min-h-screen bg-slate-100 font-sans">
      <Header
        totalLevels={ALL_LEVELS.length}
        completedLevels={Object.values(userProgress).filter(p => p.completed).length}
        streak={streak}
      />
      <main className="p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
          <div className="lg:col-span-3">
            <LevelSelector
              levels={ALL_LEVELS}
              userProgress={userProgress}
              currentLevelId={currentLevel.id}
              onSelectLevel={handleLevelSelect}
            />
          </div>
          <div className="lg:col-span-9">
            {currentLevel && (
              <LevelView
                key={currentLevel.id}
                level={currentLevel}
                userCode={userProgress[currentLevel.id]?.code || currentLevel.starterCode}
                onSubmit={handleSubmit}
                onReset={handleReset}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
