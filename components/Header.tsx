
import React from 'react';
import Icon from './Icon';

interface HeaderProps {
  totalLevels: number;
  completedLevels: number;
  streak: number;
}

const Header: React.FC<HeaderProps> = ({ totalLevels, completedLevels, streak }) => {
  const progressPercentage = totalLevels > 0 ? (completedLevels / totalLevels) * 100 : 0;

  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
             <div className="flex-shrink-0">
                <Icon name="logo" className="h-10 w-10 text-blue-600" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 ml-3">JavaBean</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center" title={`${streak} day streak`}>
                <Icon name="streak" className="h-6 w-6 text-orange-500" />
                <span className="text-lg font-semibold text-gray-700 ml-1">{streak}</span>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
            <div
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
