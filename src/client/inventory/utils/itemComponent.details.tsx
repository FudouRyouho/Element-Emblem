import React, { useState } from "react";
import { isEquipment } from "../../components/base/Equipment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UI, items, Stats } from "../../components/icons";
import { Items } from "../../components/base/generate/Items/items";
import { isConsumables } from "../../components/base/Consumables";

interface IProps {
  item: Items;
  type: "extended";
  showExtendedDetails: boolean;
  handleClick: () => void;
}

export const ItemComponentDetails: React.FC<IProps> = ({
  item,
  type,
  showExtendedDetails,
  handleClick,
}) => {
  let additionalDetails: JSX.Element | null = null;

  if (isEquipment(item)) {
    const { stats, elementalStats, uniqueAbilities, abilityEnhancers } = item;
    const statEntries = stats
      ? Object.entries(stats).filter(([key, value]) => value !== undefined)
      : [];
    const statElementalEntries = elementalStats
      ? Object.entries(elementalStats).filter(
          ([key, value]) => value !== undefined
        )
      : [];

    additionalDetails = (
      <>
        <div className="stats-elementalStats">
          {item.stats && (
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

          {item.elementalStats && (
            <div className="elemental-stat">
              <p className="elemental-stat-title">Elemental Stats</p>
              <div className="elemental-stat-body">
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
          )}
        </div>
        {item.uniqueAbilities && (
          <div className="unique-abilities">
            <p className="unique-abilities-title">Unique Abilities</p>
            <div className="unique-abilities-body">
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
          <div className="abilities-enhancers">
            <p className="abilities-enhancers-title">Abilities Enhancers</p>
            <div className="abilities-enhancers-body">
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
      <div className="background" onClick={handleClick}></div>
      <div className={`${item.rarity}`}>
        <FontAwesomeIcon
          className="close"
          icon={UI["close"]}
          width={14}
          onClick={handleClick}
        />
        <div className="body">
          <div className="name">{item.name}</div>
          <div className="type-rarity">
            <div className="type">Type: {item.type}</div>
            <div className={`rarity`}>{item.rarity}</div>
          </div>
          <div>{additionalDetails}</div>
        </div>
      </div>
    </div>
  );
};
