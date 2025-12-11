export default function AppReducer(state, action) {
  switch (action.type) {
    case "check":
      return state.map(item => {
        if (item.id === action.id) {
          return { ...item, check: !item.check };
        }
        return item;
      });
    case "rate":
      return state.map(item => {
        if (item.id === action.id) {
          return { ...item, rating: (item.rating || 0) + 1 > 10 ? 0 : (item.rating || 0) + 1 };
        }
        return item;
      });
    case "delete":
      return state.filter(item => item.id !== action.id);
    case "edit":
      return state.map(item => {
        if (item.id === action.id) {
          return { ...item, ...action.data };
        }
        return item;
      });
    default:
      return state;
  }
}
