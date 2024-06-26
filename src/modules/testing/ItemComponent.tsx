import React, { useState } from "react";
import { Equipment } from "../common/components/base/Equipment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UI, items, Stats } from "../common/components/icons";
interface IProps {
  equipment: Equipment;
}

const ItemComponent: React.FC<IProps> = ({ equipment }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showExtendedDetails, setShowExtendedDetails] = useState(false);

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

  const handleMouseEnter = () => {
    setShowDetails(true);
  };

  const handleMouseLeave = () => {
    setShowDetails(false);
  };

  const handleClick = () => {
    setShowExtendedDetails(!showExtendedDetails);
  };

  return (
    <div className={`item ${equipment.rarity}`}>
      <div
        className="icon"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={items[equipment.icon]} width={64} height={128}/>
        
      </div>

      <>
        {showDetails && (
          <div className={`details ${equipment.rarity}`}>
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
          </div>
        )}
        {showExtendedDetails && (
          <>
          <div className="details extended">
            <div className="background" onClick={handleClick}>a</div>
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
            </div></div>
          </>
        )}
      </>
    </div>
  );
};

export default ItemComponent;
