import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css";
export const Layout = () => (
  <>
    <div className="allPage">
      <div className="page--leftSide">
        <div className="home__logo" />
        <p className="home__title">style takes over</p>
      </div>
      <div className="page--mainSide">
        <div className="header">
          <header>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/aboutUs">About us</NavLink>
            {/* <NavLink to="/">Home</NavLink>
            <NavLink to="/aboutUs">About us</NavLink> */}
            {/* <div className="underline" /> */}
          </header>
        </div>
        <div className="outlet">
          <Outlet />
        </div>
        <footer>
          <h3 className="footer__title">напишите нам</h3>
          <div className="footer__mail">
            <div className="mail__img"></div>
            <p className="mail__name">xxx@mail.com</p>
          </div>
          <div className="footer__social">
            <div className="social__image social-1"></div>
            <div className="social__image social-2"></div>
            <div className="social__image social-3"></div>
          </div>
        </footer>
      </div>
    </div>
  </>
);
