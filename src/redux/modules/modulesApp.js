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

const personalDataReducer =  myDuck.createReducer({
  [PERSONAL_DATA]: (state, action) => ({
    ...state,
    personalData: action.payload,
  })
}, initialState);

const workingDataReducer =  myDuck.createReducer({
  [WORKING_DATA]: (state, action) => ({
    ...state,
    workingData: action.payload,
  })
}, initialState);

export default function reducer(state = initialState, action){
  switch (action.type){
    case PERSONAL_DATA:
      return personalDataReducer({ ...state, personalData: action.payload });
    case WORKING_DATA:
      return workingDataReducer( { ...state, workingData: action.payload });
    default:
      return state;
  }
}