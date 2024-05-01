import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFilePen,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ isAuth }) => {
  return (
    <nav>
      <h1>みんなのブログ村</h1>
      <div>
        <Link to='/'>
          <FontAwesomeIcon icon={faHouse} />
          Home
        </Link>

        {!isAuth ? (
          <Link to='/login'>
            <FontAwesomeIcon icon={faArrowRightToBracket} />
            ログイン
          </Link>
        ) : (
          <>
            <Link to='/logout'>
              <FontAwesomeIcon icon={faArrowRightToBracket} />
              ログアウト
            </Link>
            <Link to='/createpost'>
              <FontAwesomeIcon icon={faFilePen} />
              記事投稿
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
