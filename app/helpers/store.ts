import {
	useSelector as useReduxSelector,
	useDispatch as useReduxDispatch,
	TypedUseSelectorHook,
} from "react-redux";
import store from "store/index";
import { RootStore } from "types/store.types";

export const useSelector: TypedUseSelectorHook<RootStore> = useReduxSelector;
export const useDispatch = () => useReduxDispatch<typeof store.dispatch>();
