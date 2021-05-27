import React from "react";
import {Link} from "react-router-dom";

function Header(){
    return(
    // <header id="header">
    //     <div className="port">
    //         {/* <a href="portfolio.html">Port</a> */}
    //         <Link to="/portfolio">Port</Link>
    //     </div>
    //     <div className="logo">
    //         <Link to="/">webstoryboy</Link>
    //     </div>
    //     <div className="nav">
    //         <ul>
    //             <li><a href="../sign/signUp.html">회원가입</a></li>
    //             <li><a href="login.html">로그인</a></li>
    //             <li><a href="../board/board.html">게시판</a></li>
    //         </ul>
    //         <ul>
    //             <li><a href="about.html">About</a></li>
    //             <li><a href="reference.html">Reference</a></li>
    //             <li><a href="youtube.html">Youtube</a></li>
    //             <li><a href="script.html">Script</a></li>
    //             <li><a href="contact.html">Contact</a></li>
    //         </ul>
    //     </div>
    // </header>
    <header id="header">
      <div className="header__inner">
        <div className="header__inner__port">
          <Link to="/portfolio">Portfolio</Link>
        </div>
        <div className="header__inner__logo">
          <Link to="/">webstoryboy</Link>
        </div>
        <div className="header__inner__menu">
          <Link to="#">
            <span className="sr-only">menu</span>
          </Link>
        </div>
      </div>
      <div className="header__nav demo">
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/reference">Reference</Link>
          </li>
          <li>
            <Link to="/youtube">Youtube</Link>
          </li>
          <li>
            <Link to="/script">Script</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/">회원가입</Link>
          </li>
          <li>
            <Link to="/">로그인</Link>
          </li>
          <li>
            <Link to="/">게시판</Link>
          </li>
        </ul>
      </div>
      {/* <div className="header__info" id={none}> */}
      <div className="header__info">
        <div>
          <h4>email</h4>
          <p>
            <a href="mailto:webstoryboy@naver.com">webstoryboy@naver.com</a>
          </p>
        </div>
        <div>
          <h4>kakao</h4>
          <p>
            <a href="/">webstupids</a>
          </p>
        </div>
        <div>
          <h4>social</h4>
          <ul>
            <li>
              <a href="/">Youtube</a>
            </li>
            <li>
              <a href="/">Instargram</a>
            </li>
            <li>
              <a href="/">Github</a>
            </li>
            <li>
              <a href="/">Cafe</a>
            </li>
            <li>
              <a href="/">Referecne</a>
            </li>
            <li>
              <a href="/">Tutorials</a>
            </li>
            <li>
              <a href="/">CSS</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    )
}

export default Header;
