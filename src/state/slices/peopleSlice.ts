import { v4 as uuidv4 } from 'uuid';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getAllPeople from '../../services/people';
import type { Person } from '../../models';

export type PersonState = Pick<Person, Exclude<keyof Person, 'created' | 'edited'>> & {
  id: string;
  created: Date;
  edited: Date;
}

const mapToPeople = (people: Person[]): PersonState[] => (
  people.map(person => {
    const { name, height, mass, homeworld, created, edited} = person;
    return {
      id: uuidv4(),
      name,
      height,
      mass,
      homeworld,
      created: new Date(created),
      edited: new Date(edited)
    }
  })
);

export const getPeople = createAsyncThunk(
  'people/setPeople',
  async () => {
    try {
      const response = await getAllPeople();
      return mapToPeople(response);
    } catch (err) {
      console.warn(err);
      return [];
    }
  }
);

const initialState = [] as PersonState[];

const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPeople.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
  }
});

export default peopleSlice.reducer;
