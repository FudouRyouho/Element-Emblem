//src\index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector  } from 'react-redux';
import store,{RootState} from './state/store';
import './styles/index.scss'
import Inventory from './modules/layout/components/common/Inventory';
import { generateShopItems } from './modules/common/components/base/generate/testing/generateShopItems';



const App: React.FC = () => {
  const playerInventory = useSelector((state: RootState) => state.inventory.inventories["Player"]);
  const shopInventory = useSelector((state: RootState) => state.inventory.inventories["Shop"]);
  return (
    <div>
      <Inventory id='Shop' sections={['Equipment', 'Materials', 'Consumables']} items={{ 'Equipment': shopInventory.sections['Equipment'].items }}/>
      <Inventory id='Player' sections={['Equipment', 'Materials', 'Consumables']} items={{ 'Equipment': playerInventory.sections['Equipment'].items }}/>
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);