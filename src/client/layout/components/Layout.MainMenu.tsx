//src\client\layout\components\Layout.MainMenu.tsx
import React from "react";
import NewGame from "./Layout.NewGame";
import { useSectionSwitcher } from "../hooks/Layout.Hooks";
import { Continue } from "./Layout.Continue";
import { Loading } from "./Layout.Loanding";
import { ButtonTemplate } from "../utils/buttons";
import { useSetSelectedSave } from "../../components/saveGame/useSaveLoader";
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
              color="gray"
              onClick={() => switchSection("Start Game")}
            />
            <ButtonTemplate
              content="Options"
              color="gray"
              onClick={() => switchSection("Options")}
            />
            <ButtonTemplate
              content="Codex"
              color="gray"
              onClick={() => switchSection("Codex")}
            />
          </>
        )}
        {currentSection === "Start Game" && (
          <>
            <h1>Start Game</h1>
            <ButtonTemplate
              content="Continue"
              color="gray"
              onClick={() => switchSection("Continue")}
            />
            <ButtonTemplate
              content="New Game"
              color="gray"
              onClick={() => switchSection("New Game")}
            />
            <ButtonTemplate
              content="Back"
              color="gray"
              onClick={() => switchSection("Main Menu")}
            />
          </>
        )}
      </div>
      {currentSection === "New Game" && <NewGame />}
      {(currentSection === "Continue" || currentSection === 'Loading') && <Continue />}
      
    </>
  );
};

export default MainMenu;
