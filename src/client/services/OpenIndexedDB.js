//F:\Development\web\Game\RPG\Element rpg\src\client\services\OpenIndexedDB.js
export let db;
/*
Acceso a IndexedDB mediante el prop dbName.
*/
export const openDB = async (dbName) => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('myDB', 1);

        request.onupgradeneeded = (event) => {
            db = event.target.result;
            const objectStore = db.createObjectStore(dbName, { keyPath: 'id' });
            objectStore.createIndex('id', 'id', { unique: true });
        };

        request.onsuccess = (event) => {
            db = event.target.result;
            resolve(db);
        };

        request.onerror = (event) => {
            reject(event.target.errorCode);
        };
    });
};
