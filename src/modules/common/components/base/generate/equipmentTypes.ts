export interface EquipmentType {
    type: string;
    icon: string;
  }
  
  export const equipmentTypes: EquipmentType[] = [
    { type: "helmet", icon: "helmet" },
    { type: "armor", icon: "armor" },
    { type: "boots", icon: "boots" },
    { type: "gloves", icon: "gloves" },
    { type: "ring", icon: "ring" },
  ];
  export const getRandomEquipmentType = () => {
    const randomIndex = Math.floor(Math.random() * equipmentTypes.length);
    return equipmentTypes[randomIndex];
  };