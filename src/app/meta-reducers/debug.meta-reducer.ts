import { ActionReducer } from "@ngrx/store";

// console.log all actions
export function debugMetaReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}
