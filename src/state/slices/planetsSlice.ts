import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getAllPlanets from '../../services/planets';
import type { Planet } from '../../models'

export type PlanetState = Omit<Planet, 'url'>
export type PlanetsState = Record<string, PlanetState>

const mapArrayToObject= (planet: Planet[]): PlanetsState => (
  planet.reduce((total, current) => {
    const { url, name, diameter, climate, population } = current;
    total[url] = { name, diameter, climate, population };
    return total;
  }, {} as PlanetsState)
);

export const getPlanetsMap = createAsyncThunk(
  'planets/setPlannetsMap',
  async () => {
    try {
      const response = await getAllPlanets();
      return mapArrayToObject(response);
    } catch (err) {
      console.warn(err);
      return {};
    }
  }
);

const initialState = {} as PlanetsState;

const planetsSlice = createSlice({
  name: 'planets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPlanetsMap.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
  }
});

export default planetsSlice.reducer;
