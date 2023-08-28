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
import Login from "./page/Login";
import FindId from "./page/FindId";
import FindPwd from "./page/FindPwd";
import AccountCreate from "./page/AccountCreate";
import AccountTerm from "./page/AccountTerm";
import AccountForm from "./page/AccountForm";
import NotFound from "./page/NotFound";
import BookMainPage from "./pages/book/BookMainPage";
import MyPage from "./pages/MyPage";
import MyPagePoint from "./components/MyPagePoint";
import SearchPage from "./pages/SearchPage";
import SimpleBoard from "./components/board/SimpleBoard";
import ReadPost from "./components/board/ReadPost";
import ChangeDatePage from "./pages/book/ChangeDatePage";
import ChooseSeatsPage from "./pages/book/ChooseSeatsPage";
import DiscountPricePage from "./pages/book/DiscountPricePage";
import CheckBooksPage from "./pages/book/CheckBooksPage";
import PaymentPage from "./pages/book/PaymentPage";
import TicketingCancle from "./components/TicketingCancle";
import WritePost from "./components/board/WritePost";
import ServiceFirst from "./components/ServiceFirst";
import AnnouncementPage from "./pages/AnnouncementPage";

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
            <Route path="/detailpage/:id?/*" element={<DetailPage />} />
            <Route path="/login" element={<Login />}></Route>
            <Route path="/findid" element={<FindId />}></Route>
            <Route path="/findpwd" element={<FindPwd />}></Route>
            <Route path="/accountcreate" element={<AccountCreate />}></Route>
            <Route path="/accountterm" element={<AccountTerm />}></Route>
            <Route path="/accountform" element={<AccountForm />}></Route>
            <Route path="/servicepage" element={<ServicePage />}>
              <Route path="servicefirst" element={<ServiceFirst />}></Route>
              <Route path="announcement" element={<AnnouncementPage />} />
              <Route path="announcement/write" element={<WritePost />}></Route>
              <Route
                path="announcement/read/:id"
                element={<ReadPost />}
              ></Route>
            </Route>
            <Route path="/book/:id?/:index?" element={<BookMainPage />}>
              <Route path="1" element={<ChangeDatePage />}></Route>
              <Route path="2" element={<ChooseSeatsPage />}></Route>
              <Route path="3" element={<DiscountPricePage />}></Route>
              <Route path="4" element={<CheckBooksPage />}></Route>
              <Route path="5" element={<PaymentPage />}></Route>
            </Route>
            <Route path="/mypage/:id?" element={<MyPage />}>
              <Route path="ticketingcancle" element={<TicketingCancle />} />
              <Route path="point" element={<MyPagePoint />}></Route>
            </Route>

            <Route path="/search" element={<SearchPage />}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </RankingTypeProvider>
      </Provider>
    </div>
  );
}

export default App;
