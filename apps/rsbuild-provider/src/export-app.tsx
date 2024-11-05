import { createBridgeComponent } from '@module-federation/bridge-react';
import App from './App.tsx';

export default createBridgeComponent({
  rootComponent: App,
});
