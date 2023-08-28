import "../css/Header.css";
import { Link } from "react-router-dom";

const SearchBar = () => {
  return (
    <header>
      <div className='AccountHeader'>
          <div className="header-ticket-icon">
            <Link to="/">
              <img
                style={{ position: 'relative', top:'10px', left: '30px'}}
                className="header-logo"
                src={
                  "https://github.com/leeheetea/showday/blob/main/public/img/Showday_logo.png?raw=true"
                }
                alt=""
              />
            </Link>
          </div>
        </div>
    </header>
  );
};

const Header = () => {
  return <SearchBar />;
};

export default Header;
