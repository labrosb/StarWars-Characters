import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type QueryResponse = any
type Query = Promise<QueryResponse | QueryResponse[]>

type Params = Record<string, unknown>
type Get = (url: string, params?: Params) => Query
type API = { get: Get }

const Api = ((): API => {
  const { REACT_APP_API_HOST } = process.env;
  try {
    const get: Get = async (url, params) => {
      const res = await axios.get(
        `${REACT_APP_API_HOST}/${url}`, { params }
      );
      return res.data;
    };

    return { get };
  } catch (err) {
    console.warn(err);
    throw Error('API ERROR');
  }
})();

export default Api;