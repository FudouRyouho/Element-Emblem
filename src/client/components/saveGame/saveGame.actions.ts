//src\client\components\saveGame\saveGame.actions.ts
import { createAction } from "@reduxjs/toolkit";
import { saveGameInterface } from "./saveGameInterface";

export const updateSaveGame = createAction<saveGameInterface>('saveGame/updateSaveGame')