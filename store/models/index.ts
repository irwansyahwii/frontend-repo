import { Models } from '@rematch/core';
import { auth } from './auth';
import { user } from './user';

export interface RootModel extends Models<RootModel>{
  auth: typeof auth;
  user: typeof user;
}

export const models: RootModel =  {auth, user};