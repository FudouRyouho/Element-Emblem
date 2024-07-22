//src\client\components\saveGame\saveGame.Reducer.ts
import { createReducer } from "@reduxjs/toolkit";
import { initialGameState } from "./saveGame.state";
import { updateSaveGame } from "./saveGame.actions";
import { isEqual } from "lodash";
import { saveGameService } from "./saveGame.service";

export const saveGameReducer = createReducer(initialGameState, (builder) => {
  builder.addCase(updateSaveGame, (state, action) => {
    const { id } = action.payload;
    if (!isEqual(state.saves[id], action.payload)) {
      state.saves[id] = action.payload;
      console.log('Save Game update [state]', state.saves[id]);
      //saveGameService(state.saves[id])
    }
  });
});
