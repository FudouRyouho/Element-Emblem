//src\client\layout\components\Layout.MainMenu.tsx
import React from "react";
import NewGame from "./Layout.NewGame";
import { useSectionSwitcher } from "../hooks/Layout.Hooks";
import { Continue } from "./Layout.Continue";


interface IProps {}

const MainMenu: React.FC<IProps> = ({}) => {
  const { currentSection, switchSection } = useSectionSwitcher();
  return (
    <div className="layout">
      {currentSection === "Main Menu" && (
        <>
          Main Menu
          <button className="btn" onClick={() => switchSection("Start Game")}>
            Start Game
          </button>
          <button className="btn">Options</button>
          <button className="btn">Codex</button>
          </>
      )}
      {currentSection === 'Start Game' && (
        <>
          Start Game
          <button className="btn" onClick={() => switchSection('Continue')}>Continue</button>
          <button className="btn" onClick={() => switchSection('New Game')}>New Game</button>
          <button className="btn" onClick={() => switchSection('Main Menu')}>Back</button>
          </>
      )}
      {currentSection === 'New Game' && (
        <NewGame />
      )}
      {currentSection === 'Continue' && (<Continue/>)}
      </div>
  );
};

export default MainMenu;
