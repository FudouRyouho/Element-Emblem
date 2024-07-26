//src\client\layout\components\Layout.MainMenu.tsx
import React from "react";
import NewGame from "./Layout.NewGame";
import { useSectionSwitcher } from "../hooks/Layout.Hooks";
import { Continue } from "./Layout.Continue";
import { ButtonTemplate } from "../utils/buttons";
import { useSetSelectedSave } from "../../components/saveGame/useSaveLoader";
import Testing from "./Layout.Testing";
interface IProps {}

const MainMenu: React.FC<IProps> = ({}) => {
  const { currentSection, switchSection } = useSectionSwitcher();
  const { selectedSave, handleLoadGame } = useSetSelectedSave();

  return (
    <>
      <div className="flex flex-col items-center size-max">
        {currentSection === "Main Menu" && (
          <>
            <h1>Main Menu</h1>
            <ButtonTemplate
              content="Start Game"
              color="stone"
              onClick={() => switchSection("Start Game")}
            />
            <ButtonTemplate
              content="Options"
              color="stone"
              onClick={() => switchSection("Options")}
            />
            <ButtonTemplate
              content="Codex"
              color="stone"
              onClick={() => switchSection("Codex")}
            />
            <ButtonTemplate
              content="Testing"
              color="stone"
              onClick={() => switchSection("Testing")}
            />
          </>
        )}
        {currentSection === "Start Game" && (
          <>
            <h1>Start Game</h1>
            <ButtonTemplate
              content="Continue"
              color="stone"
              onClick={() => switchSection("Continue")}
            />
            <ButtonTemplate
              content="New Game"
              color="stone"
              onClick={() => switchSection("New Game")}
            />
            <ButtonTemplate
              content="Back"
              color="stone"
              onClick={() => switchSection("Main Menu")}
            />
          </>
        )}
      </div>
      {currentSection === "New Game" && <NewGame />}
      {(currentSection === "Continue" || currentSection === "Loading") && (
        <Continue />
      )}
      {currentSection === "Testing" && <Testing />}
    </>
  );
};

export default MainMenu;
