//src\client\testing\ItemComponent.tsx
import React, { useState } from "react";
import { Equipment } from "../components/base/Equipment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UI, items, Stats } from "../components/icons";
import { CustomPopover } from "../tooltips/customPopover/custom-popover";
import InventoryPopover from "../tooltips/customPopover/inventory-popover";
import { useDispatch, useSelector  } from "react-redux";
import { transferItem } from "../inventory/actions/inventory.actions";
import { RootState } from '../state/store';
  
interface IProps {
  equipment: Equipment;
  section: string;
  from: string
}

const ItemComponent: React.FC<IProps> = ({ equipment, section, from }) => {
  const [showExtendedDetails, setShowExtendedDetails] = useState(false);
  const dispatch = useDispatch();

  const fromInventory = useSelector((state: RootState) => state.inventory.inventories[from]);
  const toInventory = useSelector((state: RootState) => state.inventory.inventories['Player']);



  const handleClick = () => {
    setShowExtendedDetails(!showExtendedDetails);
  };
  const BuyItem = () => {
    dispatch(transferItem({ fromInventory, toInventory, item: equipment }));
    setShowExtendedDetails(!showExtendedDetails);
  };

  const SellItem = () => {
    const playerInventory = useSelector((state: RootState) => state.inventory.inventories['Player']);
    const shopInventory = useSelector((state: RootState) => state.inventory.inventories['Shop']);
    dispatch(transferItem({ fromInventory: playerInventory, toInventory: shopInventory, item: equipment }));
    setShowExtendedDetails(!showExtendedDetails);
  };

  const { stats, elementalStats, uniqueAbilities, abilityEnhancers } =
    equipment;

  const statEntries = Object.entries(stats).filter(
    ([key, value]) => value !== undefined
  );
  const statElementalEntries = elementalStats
    ? Object.entries(elementalStats).filter(
        ([key, value]) => value !== undefined
      )
    : [];



  return (
    <CustomPopover
    enabled
    popover={<InventoryPopover equipment={equipment}/>}
    placement="bottom-start"
    >
    <div className={`item ${equipment.rarity}`}>
      <div
        className="icon"
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={items[equipment.icon]} width={64} height={128}/>
        
      </div>

      <>
        {showExtendedDetails && (
          <>
          <div className="details extended">
            <div className="background" onClick={handleClick}></div>
            <div className={`${equipment.rarity}`}>
              <FontAwesomeIcon
                className="close"
                icon={UI["close"]}
                width={14}
                onClick={handleClick}
              />
            <div className="body">
              <div className="name">{equipment.name}</div>
              <div className="type-rarity">
                <div className="type">Type: {equipment.type}</div>
                <div className={`rarity`}>{equipment.rarity}</div>
              </div>
          <div className="stats-elementalStats">
              {equipment.stats && (
                <div className="stat">
                  <p className="stat-title">Stats</p>
                  <div className="stat-body">
                    {statEntries.map(([key, value]) => (
                      <span className="attribute icon">
                        <FontAwesomeIcon icon={Stats[key]} width={24} />
                        <p className="value">{value}</p>
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {equipment.elementalStats && (
                <div className="elemental-stat">
                  <p className="elemental-stat-title">Elemental Stats</p>
                  <div className="elemental-stat-body">
                    {statElementalEntries.map(([key, value]) => (
                      <span className="attribute icon">
                        <FontAwesomeIcon icon={Stats[key]} width={24} />
                        <p className="value">{value}</p>
                      </span>
                    ))}
                  </div>
                </div>
              )}
              </div>
              {equipment.uniqueAbilities && (
                <div className="unique-abilities">
                  <p className="unique-abilities-title">Unique Abilities</p>
                  <div className="unique-abilities-body">
                  {uniqueAbilities && uniqueAbilities.map((ability) => (
                  <div className="ability icon">
                    <FontAwesomeIcon icon={UI[ability.icon]} width={24}/>
                    <div className="name">{ability.name}</div>
                    <div className="description">{ability.description}</div>
                  </div>
                    ))}
                  </div>
                </div>
              )}
              {equipment.abilityEnhancers && (
                <div className="abilities-enhancers">
                  <p className="abilities-enhancers-title">Abilities Enhancers</p>
                  <div className="abilities-enhancers-body">
                  {abilityEnhancers && abilityEnhancers.map((ability) => (
                  <div className="ability icon">
                    <FontAwesomeIcon icon={UI[ability.icon]} width={24} />
                    <div className="name">{ability.name}</div>
                    <div className="description">{ability.description}</div>
                  </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {from === 'Shop' &&
            <button onClick={BuyItem}>Buy Item</button>}
            {from === 'Player' &&
            <button onClick={SellItem}>Sell Item</button>}
            </div>
            </div>
          </>
        )}
      </>
    </div>
    </CustomPopover>
  );
};

export default ItemComponent;
