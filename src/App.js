import { Routes, Route } from "react-router-dom";
import customHistory from "common/history";
import CustomRouter from "common/CustomRouter";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyle from "style/GlobalStyle";
import theme from "style/theme";
import { ThemeProvider } from "@mui/material/styles";
import Layout from "components/molecules/Layout";

import HomePage from "components/pages/Home";
import SearchPage from "components/pages/Search";
import SurveyCompletePage from "components/pages/SurveyComplete";

import MyPage from "components/pages/MyPage";

function App() {
  return (
    <CustomRouter history={customHistory}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyle />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/surveyComplete" element={<SurveyCompletePage />} />

            <Route path="/myPage" element={<MyPage />} />
          </Route>
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </ThemeProvider>
    </CustomRouter>
  );
}

export default App;
