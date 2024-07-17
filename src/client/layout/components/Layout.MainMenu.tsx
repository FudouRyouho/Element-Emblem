import React from "react";

interface IProps {
    onStartGame: () => void;
    onSelectCharacter: () => void;
}

const MainMenu: React.FC<IProps> = ({onStartGame,onSelectCharacter}) => {
    return (
        <div>
            Main Menu
        </div>

    )
};

export default MainMenu;
