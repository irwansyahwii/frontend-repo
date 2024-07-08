import loadingPlugin, { ExtraModelsFromLoading } from "@rematch/loading"

import { init, RematchDispatch, RematchRootState } from '@rematch/core'
import { models, RootModel } from './models'
type FullModel = ExtraModelsFromLoading<RootModel>


export const initStore = (initialState: any) =>
  init<RootModel, FullModel>({
    models,
    plugins: [loadingPlugin()],
    redux: {
      initialState,
    },
  });

export const store = init({
	models,
})


export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel, FullModel>;

