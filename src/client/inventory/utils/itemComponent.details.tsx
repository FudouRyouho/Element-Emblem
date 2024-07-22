import React from "react";
import { isEquipment } from "../../components/base/Interface/EquipmentInterface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UI, Stats } from "../../components/icons";
import { ItemsInterface } from "../../components/base/Interface/ItemsInterface";
import { isConsumables } from "../../components/base/Interface/ConsumablesInterface";

interface IProps {
  item: ItemsInterface;
  from?: string;
  type: "extended";
  popover?: boolean;
  showExtendedDetails?: boolean;
  handleClick?: () => void;
  BuyItem?: () => void;
  SellItem?: () => void;
}

export const ItemComponentDetails: React.FC<IProps> = ({
  item,
  from,
  type,
  popover = false,
  showExtendedDetails,
  handleClick,
  BuyItem,
}) => {
  //console.log(popover);
  let additionalDetails: JSX.Element | null = null;

  if (isEquipment(item)) {
    const { stats, elementalStats, uniqueAbilities, abilityEnhancers } = item;
    const statEntries = stats
      ? Object.entries(stats).filter(([key, value]) => value !== undefined)
      : [];
    const statGrid = statEntries.length;
    const statElementalEntries = elementalStats
      ? Object.entries(elementalStats).filter(
          ([key, value]) => value !== undefined
        )
      : [];
    const elementalStatGrid = statEntries.length;
    additionalDetails = (
      <>
        <div className="grid-Col-2">
          {item.stats && (
            <div className="container">
              <p className="container-title">Stats</p>
              <div className="container-body">
                <div className={`grid-Col-${statGrid}`}>
                  {statEntries.map(([key, value]) => (
                    <span className="attribute icon">
                      <FontAwesomeIcon icon={Stats[key]} width={24} />
                      <p className="value">{value}</p>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
          {item.elementalStats && (
            <div className="container">
              <p className="container-title">Elemental Stats</p>
              <div className="container-body">
                <div className={`grid-Col-${elementalStatGrid}`}>
                  {statElementalEntries.map(([key, value]) => (
                    <span className="attribute icon">
                      <FontAwesomeIcon
                        icon={Stats[key]}
                        className={key}
                        width={24}
                      />
                      <p className="value">{value}</p>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        {item.uniqueAbilities && (
          <div className="container">
            <p className="container-title">Unique Abilities</p>
            <div className="grid-Col-2">
              {uniqueAbilities &&
                uniqueAbilities.map((ability) => (
                  <div className="ability icon">
                    <FontAwesomeIcon icon={UI[ability.icon]} width={24} />
                    <div className="name">{ability.name}</div>
                    <div className="description">{ability.description}</div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {item.abilityEnhancers && (
          <div className="container">
            <p className="container-title">Abilities Enhancers</p>
            <div className="grid-Col-2">
              {abilityEnhancers &&
                abilityEnhancers.map((ability) => (
                  <div className="ability icon">
                    <FontAwesomeIcon icon={UI[ability.icon]} width={24} />
                    <div className="name">{ability.name}</div>
                    <div className="description">{ability.description}</div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </>
    );
  } else if (isConsumables(item)) {
    const { effect, description } = item;

    additionalDetails = (
      <>
        <div className="effect">{effect}</div>
        <div className="description">{description}</div>
      </>
    );
  }

  return (
    <div className={`details ${type}`}>
      {type === "extended" && !popover && (
        <div className="background" onClick={handleClick} />
      )}
      <div className={`${item.rarity}`}>
        {!popover && (
          <FontAwesomeIcon
            className="close"
            icon={UI["close"]}
            width={14}
            onClick={handleClick}
          />
        )}
        <div className="body">
          <div className="name">{item.name}</div>
          <div className="type-rarity">
            <div className="type">Type: {item.type}</div>
            <div className="type">
              {type}
              {popover === true && " | popover"}
            </div>
            <div className={`rarity`}>{item.rarity}</div>
          </div>
          <div>{additionalDetails}</div>
        </div>
        {from === "Shop" && (
          <button className={`btn ${type}`} onClick={BuyItem}>
            Buy Item
          </button>
        )}
        {from === "Player" && (
          <button className={`btn ${type}`} onClick={BuyItem}>
            Sell Item
          </button>
        )}
      </div>
    </div>
  );
};
