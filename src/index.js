import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/*BrowserRouter 是 使用React Router的設定*/}
      <BrowserRouter>
          {/*顯示App的內容*/}
          <App />
      </BrowserRouter>
  </React.StrictMode>
);

