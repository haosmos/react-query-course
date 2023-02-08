import { useQuery } from 'react-query';

export function useLabelsData() {
  const labelsQuery = useQuery(
      [ 'labels' ],
      () => fetch('/api/labels').then(res => res.json())
  )
  // console.log("labelsQuery is: ", labelsQuery);
  return labelsQuery;
}
