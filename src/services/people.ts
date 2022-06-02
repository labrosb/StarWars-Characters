import API from './api';
import type { QueryResponse } from './api';
import type { Person } from '../models';

const getPeople = (page = 1) => (
  API.get('people', { page })
);

const getAllPeople = async (): Promise<Person[]> => {
  const firstPage: QueryResponse = await getPeople();

  const { count, results: firstResults } = firstPage;
  const resultsPerPage = firstResults.length;
  const pages = Math.ceil(count / resultsPerPage);

  const queries = [] as Promise<QueryResponse>[];

  for (let i = 1; i <= pages; i++) {
    const query = getPeople(i);
    queries.push(query);
  }

  const allPeople = Promise.all(queries).then((data) => (
    data.reduce((total, currentValue) => {
      total = total.concat(currentValue.results);
      return total;
    }, [])
  ));

  return allPeople;
};

export default getAllPeople;