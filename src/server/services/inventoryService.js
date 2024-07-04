
//src\server\services\inventoryService.js
let db;

const openDB = async () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('myDB', 1);

    request.onupgradeneeded = (event) => {
      db = event.target.result;
      const objectStore = db.createObjectStore('playerInventories', { keyPath: 'id' });
      objectStore.createIndex('id', 'id', { unique: true });
    };

    request.onsuccess = (event) => {
      db = event.target.result;
      resolve();
    };

    request.onerror = (event) => {
      reject(event.target.errorCode);
    };
  });
};

const savePlayerInventory = async (inventoryData) => {
  try {
    await openDB();

    if (!inventoryData.save) {
      console.log(inventoryData.save)
      console.log(`El inventario [${inventoryData.id}] no requiere guardado.`);
      return false;
    }
    

    const transaction = db.transaction('playerInventories', 'readwrite');
    const objectStore = transaction.objectStore('playerInventories');
    const request = objectStore.put(inventoryData);

    request.onsuccess = (event) => {
      console.log(`El inventario [${event.target.result}] guardado correctamente en IndexedDB.`);
    };

    request.onerror = (event) => {
      console.error(`El inventario [${event.target.errorCode}] guardado correctamente en IndexedDB.`);
    };

    if (inventoryData.save) {
      localStorage.setItem('playerInventory', JSON.stringify(inventoryData));
      console.log(`El inventario [${inventoryData.id}] guardado correctamente en LocalStorage.`);
    } else {
      console.log(`El inventario [${inventoryData.id}] no requiere guardado en LocalStorage.`);
    }
    return true;
  } catch (error) {
    console.error("Error al guardar inventario del jugador:", error);
    return false;
  }
};

const getPlayerInventory = async (id) => {
  try {
    await openDB();
    const transaction = db.transaction('playerInventories', 'readonly');
    const objectStore = transaction.objectStore('playerInventories');
    const request = objectStore.get(id);

    return new Promise((resolve, reject) => {
      request.onsuccess = (event) => {
        const inventory = event.target.result;
        if (inventory) {
          console.log("Inventario del jugador encontrado en IndexedDB:", inventory);
          resolve(inventory);
        } else {
          console.log("Inventario del jugador no encontrado en IndexedDB.");
          const localInventory = JSON.parse(localStorage.getItem('playerInventory'));
          if (localInventory) {
            console.log("Inventario del jugador encontrado en LocalStorage:", localInventory);
            resolve(localInventory);
          } else {
            console.log("Inventario del jugador no encontrado en LocalStorage.");
            resolve(null);
          }
        }
      };

      request.onerror = (event) => {
        console.error("Error al cargar inventario del jugador desde IndexedDB:", event.target.errorCode);
        reject(event.target.errorCode);
      };
    });
  } catch (error) {
    console.error("Error al cargar inventario del jugador:", error);
    return null;
  }
};
export { savePlayerInventory, getPlayerInventory };
