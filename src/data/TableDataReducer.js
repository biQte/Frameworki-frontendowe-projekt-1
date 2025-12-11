export default function TableDataReducer(state, action) {
  switch (action.type) {
    case "sort":
      if (action.order === "asc") {
        return [...state].sort((a, b) => (a[action.key] > b[action.key] ? 1 : -1));
      } else if (action.order === "desc") {
        return [...state].sort((a, b) => (a[action.key] < b[action.key] ? 1 : -1));
      } else {
        return action.original; // Restore original order
      }
    case "set":
      return action.data;
    default:
      return state;
  }
}
