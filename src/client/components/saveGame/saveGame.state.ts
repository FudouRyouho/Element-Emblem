//src\client\components\saveGame\saveGame.state.ts
import { saveGameInterface } from "./saveGameInterface";

export interface  GameState {
    saves: {
        [key: string]: saveGameInterface;
    };
}

export const initialGameState: GameState = {
    saves: {}
};
