import { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store/Store";

export const useCustomDispatch = () => useDispatch<AppDispatch>();
export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector;