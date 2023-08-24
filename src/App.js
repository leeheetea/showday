import "./App.css";
import Main from "./pages/Main";
import Musical from "./pages/Musical";
import Concert from "./pages/Concert";
import Theatre from "./pages/Theatre";
import ServicePage from "./pages/ServicePage";
import DetailPage from "./pages/DetailPage";
import { Routes, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/store/store";
import { RankingTypeProvider } from "./store/RankingTypeContext";
import ScrollToTop from "./components/ScrollToTop";
import Login from "./page/Login";
import FindId from "./page/FindId";
import FindPwd from "./page/FindPwd";
import AccountCreate from "./page/AccountCreate";
import AccountTerm from "./page/AccountTerm";
import AccountForm from "./page/AccountForm";
import NotFound from "./page/NotFound";
import BookMainPage from "./pages/book/BookMainPage";
import MyPage from "./pages/MyPage";
import MyPointPage from "./pages/MyPointPage";

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
            <Route path="/findpwd" element={<FindPwd />}></Route>
            <Route path="/accountcreate" element={<AccountCreate />}></Route>
            <Route path="/accountterm" element={<AccountTerm />}></Route>
            <Route path="/accountform" element={<AccountForm />}></Route>
            <Route path="*" element={<NotFound />} />
            <Route path="/book/*" element={<BookMainPage />}></Route>
            <Route path="/mypage" element={<MyPage />}></Route>
            <Route path="/mypage/point" element={<MyPointPage />}></Route>
          </Routes>
        </RankingTypeProvider>
      </Provider>
    </div>
  );
}

export default App;
