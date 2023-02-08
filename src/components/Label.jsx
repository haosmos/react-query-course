import { useLabelsData } from '../helpers/useLabelsData';

export function Label({ label }) {
  const labelsQuery = useLabelsData();

  if (labelsQuery.isLoading) {
    return null;
  }

  const labelObject = labelsQuery.data.find(queryLabel => queryLabel.id === label);

  if (!labelObject) {
    return null;
  }

  // console.log("labelQuery is: ", labelObject);

  return (
      <span
          className={`label ${labelObject.color}`}
      >
        {labelObject.name}
      </span>
  );
}
