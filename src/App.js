import "./App.css";
import Main from "./pages/Main";
import Musical from "./pages/Musical";
import Concert from "./pages/Concert";
import Theatre from "./pages/Theatre";
import ServicePage from "./pages/ServicePage";
import DetailPage from "./pages/DetailPage";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/store/store";
import { RankingTypeProvider } from "./store/RankingTypeContext";
import ScrollToTop from "./components/ScrollToTop";
import Login from './page/Login'
import FindId from './page/FindId'
import AccountCreate from './page/AccountCreate'
import AccountTerm from './page/AccountTerm'
import AccountForm from './page/AccountForm'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RankingTypeProvider>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/musical" element={<Musical />}></Route>
            <Route path="/concert" element={<Concert />}></Route>
            <Route path="/theatre" element={<Theatre />}></Route>
            <Route path="/detailpage/:id?" element={<DetailPage />} />
            <Route path="/servicepage" element={<ServicePage />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/findid" element={<FindId />}></Route>
            <Route path="/accountcreate" element={<AccountCreate />}></Route>
            <Route path="/accountterm" element={<AccountTerm />}></Route>
            <Route path="/accountform" element={<AccountForm />}></Route>
          </Routes>
        </RankingTypeProvider>
      </Provider>
    </div>
  );
}

export default App;
