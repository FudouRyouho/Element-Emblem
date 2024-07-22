import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateSaveGame } from "../../components/saveGame/saveGame.actions";
import { saveGameInterface } from "../../components/saveGame/saveGameInterface";
import { useSectionSwitcher } from "../hooks/Layout.Hooks";
import { unitGenerator } from "../../components/base/generate/unit/unitGenerator";

interface IProps {}

const NewGame: React.FC<IProps> = () => {
  const { currentSection, switchSection } = useSectionSwitcher();
  const dispatch = useDispatch();
  const [characterName, setCharacterName] = useState("name of character");
  const [difficulty, setDifficulty] = useState<number>(1);

  const handleCreateCharacter = () => {
    const newUnit = unitGenerator(characterName, true);
    const newSaveGame: saveGameInterface = {
      id: Math.random().toString(36).substr(2, 9),
      unit: [newUnit],
      difficulty: difficulty,
    };

    dispatch(updateSaveGame(newSaveGame));
    setCharacterName("");
  };

  return (
    <div>
      New Game
      <div>
        Character
        <div>
          Name:
          <textarea
            placeholder="name"
            value={characterName}
            onChange={(e) => setCharacterName(e.target.value)}
          />
          <button onClick={handleCreateCharacter}>Create Character</button>
        </div>
        <div>
          <label>
            Difficulty:
            <input
              type="number"
              value={difficulty}
              onChange={(e) => setDifficulty(parseInt(e.target.value))}
            />
          </label>
        </div>
      </div>
      <button className="btn" onClick={() => switchSection("Main Menu")}>
        Back
      </button>
    </div>
  );
};
export default NewGame;
