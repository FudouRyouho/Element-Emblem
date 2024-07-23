import React from "react";
import { isEquipment } from "../../components/base/Interface/EquipmentInterface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UI, Stats } from "../../components/icons";
import { ItemsInterface } from "../../components/base/Interface/ItemsInterface";
import { isConsumables } from "../../components/base/Interface/ConsumablesInterface";
import { ButtonTemplate } from "../../layout/utils/buttons";

interface IProps {
  item: ItemsInterface;
  from?: string;
  typeLayout: "extended";
  popover?: boolean;
  showExtendedDetails?: boolean;
  handleClick?: () => void;
  BuyItem?: () => void;
  SellItem?: () => void;
}

export const ItemComponentDetails: React.FC<IProps> = ({
  item,
  from,
  typeLayout,
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
            <div className="m-0.5 p-1 border-2 border-white">
              <p className="mb-0 mt-5 mr-1 ml-5 text-xs text-center text-nowrap">
                Stats
              </p>
              <div className="mb-0 mt-auto ml-0 mr-auto">
                <div className={`grid-Col-${statGrid}`}>
                  {statEntries.map(([key, value]) => (
                    <span className="flex flex-row items-stretch text-white border-2 border-white m-0.5">
                      <FontAwesomeIcon icon={Stats[key]} width={24} />
                      <p className="m-0.5 mb-3 font-bold text-white">{value}</p>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
          {item.elementalStats && (
            <div className="m-0.5 p-1 border-2 border-white">
              <p className="mb-0 mt-5 mr-1 ml-5 text-xs text-center text-nowrap">
                Elemental Stats
              </p>
              <div className="mb-0 mt-auto ml-0 mr-auto">
                <div className={`grid-Col-${elementalStatGrid}`}>
                  {statElementalEntries.map(([key, value]) => (
                    <span className="flex flex-row items-stretch text-white border-2 border-white m-0.5">
                      <FontAwesomeIcon
                        icon={Stats[key]}
                        className={key}
                        width={24}
                      />
                      <p className="m-0.5 mb-3 font-bold text-white">{value}</p>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        {item.uniqueAbilities && (
          <div className="m-0.5 p-1 border-2 border-white">
            <p className="mb-0 mt-5 mr-1 ml-5 text-xs text-center text-nowrap">
              Unique Abilities
            </p>
            <div className="grid-Col-2">
              {uniqueAbilities &&
                uniqueAbilities.map((ability) => (
                  <div className="grid auto-cols-auto-2 grid-cols-1 grid-rows-1 gap-1 grid-areas-ability text-white border-2 border-white m-0.5">
                    <FontAwesomeIcon className="m-1.5 grid-in-icon" icon={UI[ability.icon]} width={24} />
                    <div className="m-1 mb-3 font-bold text-white grid-in-name text-xs">{ability.name}</div>
                    <div className="m-1 mb-3 font-bold text-white text-xs grid-in-description">{ability.description}</div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {item.abilityEnhancers && (
          <div className="m-0.5 p-1 border-2 border-white">
            <p className="mb-0 mt-5 mr-1 ml-5 text-xs text-center text-nowrap">
              Abilities Enhancers
            </p>
            <div className="grid-Col-2">
              {abilityEnhancers &&
                abilityEnhancers.map((ability) => (
                  <div className="grid auto-cols-auto-2 grid-cols-1 grid-rows-1 gap-1 grid-areas-ability text-white border-2 border-white m-0.5">
                    <FontAwesomeIcon icon={UI[ability.icon]} width={24} />
                    <div className="m-1 mb-3 font-bold text-white grid-in-name text-xs">{ability.name}</div>
                    <div className="m-1 mb-3 font-bold text-white text-xs grid-in-description">{ability.description}</div>
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
    <div
      className={`border-2 border-white bg-gray-800/40 m-1 h-max w-max pointer-events-auto absolute ${typeLayout}`}
    >
      {typeLayout === "extended" && !popover && (
        <div
          className="w-full h-full fixed inset-0 bg-gray-800/40 -z-1 border-none"
          onClick={handleClick}
        />
      )}
      <div className={`${item.rarity}`}>
        {!popover && (
          <FontAwesomeIcon
            className="top-0 right-0 absolute pointer-events-auto h-4 mt-2 mr-1 text-white hover:text-blue-500"
            icon={UI["close"]}
            width={14}
            onClick={handleClick}
          />
        )}
        <div className="p-4">
          <div className="text-center font-bold text-xl">{item.name}</div>
          <div className="flex text-white text-sm">
            <div className="text-xs font-bold">Type: {item.type}</div>
            <div className="text-xs font-bold">
              {typeLayout}
              {popover === true && " | popover"}
            </div>
            <div className={`rarity`}>{item.rarity}</div>
          </div>
          <div>{additionalDetails}</div>
        </div>
        {from === "Shop" && (
          <ButtonTemplate
          content="Buy Item"
          color="gray"
          onClick={BuyItem}
          customClass={`${typeLayout}`}
          />
        )}
        {from === "Player" && (
          <ButtonTemplate
          content="Sell Item"
          color="gray"
          onClick={BuyItem}
          customClass={`${typeLayout}`}
          />
        )}
      </div>
    </div>
  );
};
