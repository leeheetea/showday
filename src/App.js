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
import BookMainPage from "./pages/book/BookMainPage";
import MyPage from "./pages/MyPage";

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
            <Route path="/detailpage/:id?" element={<DetailPage />}/>
            <Route path="/servicepage" element={<ServicePage />}/>
            <Route path="/book/*" element={<BookMainPage />} />
            <Route path="/mypage" element={<MyPage />}></Route>
          </Routes>
        </RankingTypeProvider>
      </Provider>
    </div>
  );
}

export default App;
