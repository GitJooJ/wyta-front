import { createContext, ReactNode, useState } from "react";

interface ResultProviderActions {
  setResults: (results: result | null) => void;
  setLoading: (loading: boolean) => void;
}

interface ResultProviderState {
  results: result | null;
  loading: boolean;
}


interface result {
  top_words: {
    word: string;
    count: number;
  }[];
  users: string[];
}

const initialState: ResultProviderState = {
  results: null,
  loading: false,
}
type ContextInterface<ActionType, StateType> = ActionType & { state: StateType };
export type ResultContextType = ContextInterface<ResultProviderActions, ResultProviderState>;
export const ResultContext = createContext<ResultContextType | null>(null);

export const ResultProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<ResultProviderState>(initialState);

  const setResults = (results: result | null) => {
    setState(state=>({
      ...state,
      results,
      loading: false,
    }));
  };

  const setLoading = (loading: boolean) => {
    setState(state => ({
      ...state,
      loading,
    }));
  }

  return (
    <ResultContext.Provider value={{ state, setResults, setLoading }}>
      {children}
    </ResultContext.Provider>
  );
};