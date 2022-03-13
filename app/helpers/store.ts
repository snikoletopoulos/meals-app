import {
	useSelector as useReduxSelector,
	useDispatch as useReduxDispatch,
	TypedUseSelectorHook,
} from "react-redux";
import store from "store/index";
import { RootState } from "types/store.types";

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const useDispatch = () => useReduxDispatch<typeof store.dispatch>();
