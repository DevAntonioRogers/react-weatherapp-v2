import {create} from 'zustand'
import {persist} from "zustand/middleware"

type State = {
  data: any;
  location: string;
  loading: boolean;
  error: string;
  height: boolean;
};

const useStore = create<State>((set) => ({
  data: {},
  location: '',
  loading: false,
  error: '',
  height: false,
}));

export default useStore;