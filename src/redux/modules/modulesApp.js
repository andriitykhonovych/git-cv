import { createDuck } from 'redux-duck';

const myDuck = createDuck('FETCH');

const PERSONAL_DATA = myDuck.defineType('PERSONAL_DATA');
const WORKING_DATA = myDuck.defineType('WORKING_DATA');

export function fetchPersonalData(personalData){
  return {
    type: PERSONAL_DATA,
    payload: personalData
  }
}

export function fetchWorkingData(workingData){
  return {
    type: WORKING_DATA,
    payload: workingData,
  }
}

const initialState = {
  personalData: [],
  workingData: []
};

export default function reducer(state = initialState, action){
  switch (action.type){
    case PERSONAL_DATA:
    return myDuck.createReducer({
      [PERSONAL_DATA]: (state) => ({
        state,
        personalData: action.payload,
      })
    }, state);
    case WORKING_DATA:
    return myDuck.createReducer({
      [WORKING_DATA]: (state) => ({
        state,
        workingData: action.payload,
      })
    }, state);
  default:
    return state;
  }
}