//src\modules\layout\state\Layout.reducer.ts
import { createReducer } from "@reduxjs/toolkit";
import { ToggleSection } from "../actions/Layout.actions";
import { initialILayoutState } from "./Layout.state";

export const LayoutReducer = createReducer(initialILayoutState, (builder) => {
  builder.addCase(ToggleSection, (state, {payload}) => {state.MainMenuSection =payload;})
});
