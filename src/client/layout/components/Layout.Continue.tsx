import React, { useState } from "react";
import { useSectionSwitcher } from "../hooks/Layout.Hooks";
import { useAppSelector } from "../../state/store";
import { Loading } from "./Layout.Loanding";
import { saveGameInterface } from "../../components/saveGame/saveGameInterface";
import { useSaveLoader } from "../../components/saveGame/useSaveLoader";
interface Iprops {}

export const Continue: React.FC<Iprops> = () => {
  const { currentSection, switchSection } = useSectionSwitcher();
  const [selectedSave, setSelectedSave] = useState<saveGameInterface | null>(null);

  const savedData = useAppSelector((state) => state.saveGame.saves);

  console.log(savedData)

  const loadding = useSaveLoader()



  //Carga los datos de save desde el boton 'load'
  const handleLoadGame = (save: saveGameInterface) => {
    setSelectedSave(save);
  };

  if (selectedSave) {
    return (
      <Loading 
      saveData={selectedSave}
      />
    )
  }
  return (
    <div>
      Continue game
      <div>
        {savedData && Object.keys(savedData).length > 0 ? (
          Object.values(savedData).map((save) => (
            <div key={save.id}>
              <p>{save.id}</p>
              <p>{save.difficulty}</p>
              {save.unit.map((unit) => (
                <div key={unit.id}>
                  <p>id: {unit.id}</p>
                  <p>name: {unit.name}</p>
                </div>
              ))}
              <button className="btn" onClick={() => handleLoadGame(save)}>Load</button>
            </div>
          ))
        ) : (
          'empty'
        )}
      </div>
      <button className="btn" onClick={() => switchSection("Main Menu")}>
        Back
      </button>
      
    </div>
  );
};
