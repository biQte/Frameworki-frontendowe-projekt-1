import { useContext } from "react";
import AppContext from "./AppContext";

export function useData() {
  return useContext(AppContext).items;
}

export function useDispatch() {
  return useContext(AppContext).dispatch;
}
