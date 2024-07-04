import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { updateInventory } from "../actions/inventory.actions";
import { getPlayerInventory } from "../../../server/services/inventoryService";
import { createInventory } from "../../../server/services/inventoryManager";


export const useInventoryLoader = (id: string, save : boolean, sections: string[]) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {console.log('useInventoryLoader');
      const fetchInventory = async () => {
        
        try {
          const inventory = await getPlayerInventory(id);
          if (inventory) {
            dispatch(updateInventory(inventory));
          } else {
            console.log('No se encontró inventario en almacenamiento, creando uno nuevo...');
            const newInventory = createInventory(id, save, sections);
            dispatch(updateInventory(newInventory));
          }
        } catch (error) {
          console.error(`Error al cargar el inventario ${id}:`, error);
          const newInventory = createInventory(id, save, sections);
          dispatch(updateInventory(newInventory));
        } finally {
          setLoading(false);
        }
      };
      fetchInventory();
    }, [dispatch, id, sections]);
  
    return loading;
  };