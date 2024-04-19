import {create} from 'zustand';

interface WordState {
  word: {
    definition_en: string | null;
    definition_id: string | null;
    example_en: string | null;
    example_id: string | null;
    id: number;
    word: string | null;
  } | null;
}

interface WordActions {
  setWord: (word: WordState['word']) => void;
}

const useWordStore = create<WordState & WordActions>((set) => ({
  word: null,
  setWord: (word) => set(() => ({word: word}))
}));

export default useWordStore;
