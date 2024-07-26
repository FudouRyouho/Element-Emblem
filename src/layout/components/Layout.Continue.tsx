import React, { useState } from "react";
import { useSectionSwitcher } from "../hooks/Layout.Hooks";
import { useAppSelector } from "../../state/store";
import { Loading } from "./Layout.Loanding";
import { saveGameInterface } from "../../components/saveGame/saveGameInterface";
import { useSaveLoader, useSetSelectedSave } from "../../components/saveGame/useSaveLoader";
import { ButtonTemplate } from "../utils/buttons";
interface Iprops {}

export const Continue: React.FC<Iprops> = () => {
  const { currentSection, switchSection } = useSectionSwitcher();
  const { selectedSave, handleLoadGame } = useSetSelectedSave();

  const savedData = useAppSelector((state) => state.saveGame.saves);

  console.log(savedData);

  const loadding = useSaveLoader();

  //Carga los datos de save desde el boton 'load'
  if (selectedSave && currentSection === 'Loading') {
    return <Loading saveData={selectedSave} />;
  }

  return (
    <>
      <div className="flex flex-wrap overflow-hidden">
        {savedData && Object.keys(savedData).length > 0
          ? Object.values(savedData).map((save) => (
              <div
                className="grid auto-cols-auto min-w-72 m-2 p-3 border-2 border-cyan-600 hover:border-cyan-300"
                key={save.id}
              >
                {save.unit.map((unit) => (
                  <div className='grid auto-cols-auto'key={unit.id}>
                    <div className="justify-self-center">name: {unit.name}</div>
                    <div className="justify-self-center">id: {unit.id}</div>
                  </div>
                ))}
                <div className="flex flex-row justify-between">
                  <div className="">saveID: {save.id}</div>
                  <div className="">Dificulty: {save.difficulty}</div>
                </div>
                <ButtonTemplate
                  content="Load"
                  color="stone"
                  onClick={() => {
                    handleLoadGame(save);
                    switchSection('Loading');
                  }}
                />
              </div>
            ))
          : "empty"}
      </div>
      <ButtonTemplate
        content="Back"
        color="stone"
        onClick={() => switchSection("Start Game")}
      />
    </>
  );
};
