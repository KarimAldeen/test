import { useMemo } from 'react';

// Custom hook to ensure each item in the dataSource has a unique key
export const useAddKeyToData = (dataSource:any, identifier = 'id') => {
  return useMemo(() => {
    if (!dataSource || !Array.isArray(dataSource)) {
      return [];
    }
    return dataSource.map((item) => ({ ...item, key: item[identifier] }));
  }, [dataSource, identifier]);
};
