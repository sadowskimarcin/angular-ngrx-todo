import { MetaReducer } from '@ngrx/store';
import { debugMetaReducer } from './debug.meta-reducer';

export const metaReducers: MetaReducer<any>[] = [debugMetaReducer];
