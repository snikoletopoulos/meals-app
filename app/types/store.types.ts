import store from "store/index";

export type RootStore = ReturnType<typeof store.getState>;
