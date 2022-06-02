import API from './api';
import type { QueryResponse } from './api';
import type { Planet } from '../models';

const getPlanets= (page = 1) => (
  API.get('planets', { page })
);

const getAllPlanets = async (): Promise<Planet[]> => {
  const firstPage: QueryResponse = await getPlanets();

  const { count, results: firstResults } = firstPage;
  const resultsPerPage = firstResults.length;
  const pages = Math.ceil(count / resultsPerPage);

  const queries = [] as Promise<QueryResponse>[];

  for (let i = 1; i <= pages; i++) {
    const query = getPlanets(i);
    queries.push(query);
  }

  const allPlanets = Promise.all(queries).then((data) => (
    data.reduce((total, currentValue) => {
      total = total.concat(currentValue.results);
      return total;
    }, [])
  ));

  return allPlanets;
};

export default getAllPlanets;