import { createRemoteComponent } from '@module-federation/bridge-react';
import { loadRemote } from '@module-federation/enhanced/runtime';
import type { ForwardRefExoticComponent } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

const RemoteApp = createRemoteComponent({
  // loader 用于加载远程模块，例如：loadRemote('remote1/export-app')、import('remote1/export-app')
  loader: () => loadRemote('mf_provider/export-app'),
  // fallback 用于在加载远程模块失败时展示的组件
  fallback: () => <div>error</div>,
  // loading 用于在加载远程模块时展示的组件
  loading: <div>loading</div>,
}) as ForwardRefExoticComponent<unknown>;

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>home</div>} />
        <Route
          path="/remote/*"
          // 使用 Remote1App 组件, 将会被懒加载
          Component={() => <RemoteApp />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
