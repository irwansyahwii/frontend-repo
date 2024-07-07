import { init, RematchDispatch, RematchRootState } from '@rematch/core'
import { models, RootModel } from './models'
import { useDispatch } from "react-redux";
import { useMemo } from 'react';

// let store: any;



export const initStore = (initialState: any) =>
  init({
    models,
    redux: {
      initialState,
    },
  });

export const store = init({
	models,
})


// export type Store = ReturnType<typeof initStore>;
export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;

// export const initializeStore = (preloadedState: any) => {
//   let _store = store ?? initStore(preloadedState);

//   // After navigating to a page with an initial Redux state, merge that state
//   // with the current state in the store, and create a new store
//   if (preloadedState && store) {
//     _store = initStore({
//       ...store.getState(),
//       ...preloadedState,
//     });
//     // Reset the current store
//     store = undefined;
//   }

//   // For SSG and SSR always create a new store
//   if (typeof window === "undefined") return _store;
//   // Create the store once in the client
//   if (!store) store = _store;

//   return _store;
// };


// export function useStore(initialState: any) {
//   const store = useMemo(() => initializeStore(initialState), [initialState]);
//   return store;
// }

export const useRematchDispatch = (selector: any) => {
  const dispatch = useDispatch();
  
  return selector(dispatch);
};