import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector  } from 'react-redux';
import store,{RootState} from './state/store';
import InventoryTabs from './modules/layout/components/common/inventory.tap';
import './styles/index.scss'
import Inventory from './modules/layout/components/common/Inventory';

const App: React.FC = () => {
  const activeTab = useSelector((state: RootState) => state.layout.inventoryTap);
  return (
    <div>
      <div className='right-separator'></div>
      <h1>Inventory</h1>
      <InventoryTabs />
      <Inventory/>
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);