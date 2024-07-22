import { openDB, db } from "../../services/OpenIndexedDB.js";

const dbName = 'saveGame';


const saveGameService = async (data) => {
    try {
        await openDB(dbName);

        if (!data) {
            return false;
        };
        const transaction = db.transaction(dbName, "readwrite");
        const objectStore = transaction.objectStore(dbName);
        const request = objectStore.put(data);

        request.onsuccess = (event) => {
            console.log(`[${event.target.result}] guardado correctamente en IndexedDB.`);
        };
        request.onerror = (event) => {
            console.error(`No se ha guardado: [${event.target.errorCode}]`)
        };

        if (data) {
            localStorage.setItem(data.name, JSON.stringify(data));
            console.log(`[${data.id}] guardado correctamente en LocalStorage.`);
        } else {
            console.log(`[${data.id}] no requiere ser guardado.`);
        };
        return true;
    } catch (error) {
        console.error(`Error al guardar [${data}]`, error);
        return false;
    };
};

const getSaveGameService = async () => {
    try {
        await openDB(dbName);
        const transaction = db.transaction(dbName, 'readonly');
        const objectStore = transaction.objectStore(dbName);
        const request = objectStore.getAll();
        console.log(request)
        

        return new Promise((resolve, reject) => {
            request.onsuccess = (event) => {
                const load = event.target.result;
                if (load) {
                    console.log(`Se ha encontrado ${load} en IndexedDB.`);
const saves = load.reduce((acc, save) => {
            acc[save.id] = save;
            return acc;
          }, {});
          resolve({ saves });
                } else {
                    console.log('No se ha encontrado nada IndexedDB.');
                    const localLoad = JSON.parse(localStorage.getItem(dbName));
                    if (localLoad) {
                        console.log(`Guardado correctamente ${localLoad} en localStorage.`);
                        resolve(localLoad);
                    } else {
                        console.log('No se ha encontrado nada en LocalStorage.');
                        resolve({ saves: [] });
                    }
                }
            };

            request.onerror = (event) => {
                console.log(`Error al cargar desde IndexedDB: ${event.target.errorCode}`);
                reject(event.target.errorCode)
            };
        });
    } catch (error) {
        console.error(`Error al cargar ${error}`);
        return { saves: [] };
    }
};
export { saveGameService, getSaveGameService }
