export function sortAscending(basedOn, filteredList, setFilteredList) {
  const arr = filteredList;
  arr.sort((a, b) => {
    const nameA = a[basedOn].toUpperCase(); // ignore upper and lowercase
    const nameB = b[basedOn].toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
  setFilteredList(arr);
}
export function sortDescending(basedOn, filteredList, setFilteredList) {
  const arr = filteredList;
  arr.sort((a, b) => {
    const nameA = a[basedOn].toUpperCase(); // ignore upper and lowercase
    const nameB = b[basedOn].toUpperCase(); // ignore upper and lowercase
    if (nameA > nameB) {
      return -1;
    }
    if (nameA < nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
  setFilteredList(arr);
}
