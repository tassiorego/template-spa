import useSWR from 'swr';
import { AxiosRequestConfig, AxiosError } from 'axios';
import api from '../services/api';

export default function useFetch<T = any>(
  url: string,
  options: AxiosRequestConfig = {},
) {
  const { data, error, mutate } = useSWR<T, AxiosError>(url, async (uri) => {
    const response = await api.get(uri, options);

    return response.data;
  });

  return {
    data, error, isLoading: !data && !error, mutate,
  };
}
