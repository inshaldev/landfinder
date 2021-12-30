import React, { useContext, createContext } from 'react';
import { useQuery } from '@apollo/client';
import { ADS_QUERY } from './gqlquery';

const Context = createContext();

export const useData = () => {
  return useContext(Context);
};

export const DataContext = ({ children }) => {
  const APIRoute = process.env.REACT_APP_API_ROUTE;
  const { loading, error, data } = useQuery(ADS_QUERY);
  const ads = data?.advertisements.data;
  const value = { loading, error, ads, APIRoute };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
