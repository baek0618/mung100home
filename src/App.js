import { Routes, Route } from "react-router-dom";
import customHistory from "common/history";
import CustomRouter from "common/CustomRouter";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyle from "style/GlobalStyle";
import theme from "style/theme";
import { ThemeProvider } from "@mui/material/styles";
import Layout from "components/molecules/Layout";

import HomePage from "components/pages/Home";
import InfoPage from "components/pages/Info";
import MyPage from "components/pages/MyPage";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";
import store from "store/index";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

export let persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <CustomRouter history={customHistory}>
          <ThemeProvider theme={theme}>
            <SnackbarProvider>
              <CssBaseline />
              <GlobalStyle />
              <Routes>
                <Route element={<Layout />}>
                  <Route path={`/`} element={<HomePage />} />
                  <Route path={`/info`} element={<InfoPage />} />
                  <Route path={`/myPage`} element={<MyPage />} />
                </Route>

                {/* <Route path="*" element={<NotFound />} /> */}
              </Routes>
            </SnackbarProvider>
          </ThemeProvider>
        </CustomRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
