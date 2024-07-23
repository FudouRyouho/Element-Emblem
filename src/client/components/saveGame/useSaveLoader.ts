import { useEffect, useState } from "react";
import { saveGameInterface } from "./saveGameInterface";
import { useAppDispatch } from "../../state/store";
import { getSaveGameService } from "./saveGame.service.js";
import { updateSaveGame } from "./saveGame.actions";

export const useSaveLoader = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLoader = async () => {
      try {
        const load = await getSaveGameService();
        if (load && load.saves) {
          console.log(load)
          Object.values(load.saves).forEach((save) => {
            dispatch(updateSaveGame(save as saveGameInterface));
          });
        } else {
          console.log("No se ha encontrado datos, creando nuevos...");
        }
      } catch (error) {
        console.log(`Error al cargar ${error}`);
      } finally {
        setLoading(false);
      }
    };
    fetchLoader();
  }, [dispatch]);
  return loading;
};

export const useSetSelectedSave  = () => {
  const [selectedSave, setSelectedSave] = useState<saveGameInterface | null>(
    null
  );

  const handleLoadGame = (save: saveGameInterface) => {
    setSelectedSave(save);
  };

  console.log(selectedSave)
  return {
    selectedSave,
    setSelectedSave,
    handleLoadGame,
  };
}