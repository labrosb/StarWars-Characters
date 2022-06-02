import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import type { PersonState as Person } from '../slices/peopleSlice';

export type SortPeopleBy = keyof Person
export type SortType = 'ASC' | 'DESC'

export const selectFilteredPeople = createSelector(
  [
    (state: RootState) => state.people,
    (state: RootState, searchTerm: string) => searchTerm
  ],
  (people, searchTerm) => {
    if (searchTerm === '') {
      return people;
    }
    const searchTermLow = searchTerm.toLowerCase();
    return people.filter((person) => {
      const nameLow = person.name.toLowerCase();
      return nameLow.search(searchTermLow) > -1
    })
  }
);

// Retrieves the person slice directly
export const selectSortedPeople = createSelector(
  [
    (people: Person[]) => people,
    (people: Person[], sortBy: SortPeopleBy, sortType: SortType) => ({ sortBy, sortType })
  ],
  (people, { sortBy, sortType }) => {
    if (sortType === 'DESC') {
      return [...people].sort((a: Person, b: Person) => {
        return a[sortBy] > b[sortBy] ? 1 : -1
      });
    }
    return [...people].sort((a: Person, b: Person) => a[sortBy] < b[sortBy] ? 1 : -1);
  }
);
