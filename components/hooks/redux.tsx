import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { DispatchState, ReducerState } from "../../store";

export const useTypeSelector : TypedUseSelectorHook<ReducerState> = useSelector;
export const useTypeDispatch = ()=> useDispatch<DispatchState>();