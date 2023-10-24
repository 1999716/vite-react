import { HashRouter as Router, Routes, Route, useNavigate } from "react-router-dom"
import routeArr from './router/router.js'
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';
import "../src/assets/main.css"

function App() {
  return (
    <>
      <ConfigProvider locale={zhCN}>
        <div className="logo">
          <Router>
            <Routes>
              {routeArr.map((item) => (
                <Route
                  exact
                  key={item.path}
                  path={item.path}
                  element={<item.component />}
                />
              ))}
            </Routes>
          </Router>
        </div>
      </ConfigProvider>
    </>
  )
}

export default App
