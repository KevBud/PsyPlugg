export interface Flashcard {
  id: string;
  term: string;
  definition: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface SectionContent {
  type: 'paragraph' | 'list' | 'factbox' | 'heading';
  text?: string;
  items?: string[];
  title?: string;
}

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  content: {
    title: string;
    sections: SectionContent[];
  }[];
  flashcards: Flashcard[];
  quiz: QuizQuestion[];
}