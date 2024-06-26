

export interface ILayoutState {
    actualSection: string;
    inventoryTap: string;
    slotCount: number;
}

export const InitialLayoutState: ILayoutState = {
    actualSection: 'main',
    inventoryTap: 'equipment',
    slotCount: 20,
};
