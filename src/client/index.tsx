//src\client\index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider  } from 'react-redux';
import store from './state/store';
import './styles/index.scss'
import './styles/btn.scss'
import Inventory from '../client/inventory/components/Inventory';



const App: React.FC = () => {
  return (
    <div>
      <Inventory 
      id='Shop'
      save={false} 
      sections={['Equipment', 'Materials', 'Consumables']} />
      <Inventory
      id='Player' 
      save={true}
      sections={['Equipment', 'Materials', 'Consumables', 'Runes']} />
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);