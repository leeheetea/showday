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
import FAQPage from "./pages/FAQPage";
import MyMemberInfo from "./pages/MyMemberInfo";
import Advanceticket from "./components/Advanceticket";
import Giftcard from "./components/Giftcard";
import Coupon from "./components/Coupon";
import ReadFAQpost from "./components/board/ReadFAQpost";
import WriteFAQpost from "./components/board/WriteFAQpost";
import KakaoRedirect from "./components/KakaoRedirect";
import UserInfo from "./page/UserInfo";
import UserInfoModify from "./page/UserInfoModify";
import LoginLog from "./components/LoginLog";
import KakaoRedirectLogout from "./components/KakaoRedirectLogout";
import UserInfoResetPassword from "./page/UserInfoResetPassword";
import NaverRedirect from "./components/NaverRedirect";

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
            <Route path="/user/oauth/kakao" element={<KakaoRedirect />}></Route>
            <Route path="/user/oauth/kakao/logout" element={<KakaoRedirectLogout/>} ></Route>
            <Route path="/user/oauth/naver" element={<NaverRedirect />}></Route>
            <Route path="/findid" element={<FindId />}></Route>
            <Route path="/findpwd" element={<FindPwd />}></Route>
            <Route path="/accountcreate" element={<AccountCreate />}></Route>
            <Route path="/accountterm" element={<AccountTerm />}></Route>
            <Route path="/accountform" element={<AccountForm />}></Route>
            <Route path="/userinfo" element={<UserInfo />}></Route>
            <Route path="/userinfomodify" element={<UserInfoModify />}></Route>
            <Route path="/userinforesetpassword" element={<UserInfoResetPassword />}></Route>
            <Route path="/loginlog" element={<LoginLog />} ></Route>
            <Route path="/servicepage" element={<ServicePage />}>
              <Route path="servicefirst" element={<ServiceFirst />}></Route>
              <Route path="faq" element={<FAQPage />} />
              <Route path="faq/write" element={<WriteFAQpost />} />
              <Route path="faq/read/:id?" element={<ReadFAQpost />} />
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
              <Route path="memberInfo" element={<MyMemberInfo />}></Route>
              <Route path="advanceticket" element={<Advanceticket />}></Route>
              <Route path="giftcard" element={<Giftcard />}></Route>
              <Route path="coupon" element={<Coupon />}></Route>
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
