
export interface Level {
  id: number;
  title: string;
  task: string;
  context: string;
  starterCode: string;
  solution: string;
  explanation: string;
  hint: string;
}

export interface UserProgress {
  [levelId: number]: {
    completed: boolean;
    code: string;
  };
}
