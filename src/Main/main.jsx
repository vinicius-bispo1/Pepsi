import React, { useState, useEffect } from "react";
import Logo from "../Main/assets/logo.png";
import blueSoda from "./assets/pepsi001.png";
import face from "./assets/facebook.png";
import insta from "./assets/instagram.png";
import twiter from "./assets/twitter.png";
import whiteSoda from "./assets/pepsi002.png";
import blackSoda from "./assets/pepsi003.png";

import * as S from "../style.jsx";

export default function Main() {
  const [soda, setSoda] = useState(localStorage.getItem("soda"));
  const [color, setColor] = useState(localStorage.getItem("cor"));

  useEffect(() => {
    switch (color) {
      case "#0261bf":
        localStorage.setItem("cor", "#0261bf");
        localStorage.setItem("soda", blueSoda);
        break;
      case "#E60C2D":
        localStorage.setItem("cor", "#E60C2D");
        localStorage.setItem("soda", whiteSoda);
        break;
      case "#1F1E1F":
        localStorage.setItem("cor", "#1F1E1F");
        localStorage.setItem("soda", blackSoda);
        break;
      default:
        localStorage.setItem("cor", "#0261bf");
        localStorage.setItem("soda", blueSoda);
        setSoda(blueSoda);
        setColor("#0261bf");
    }
  });

  return (
    <S.Boxbackground style={{ backgroundColor: color }}>
      <S.Header>
        <S.LogoBox>
          <img src={Logo} alt="Logo da pespi" />
        </S.LogoBox>
        <S.NavHeader>
          <ul>
            <li> Home </li>
            <li> Products </li>
            <li> What´s New </li>
            <li> Newsletter </li>
            <li> Contact </li>
          </ul>
        </S.NavHeader>
      </S.Header>
      );
      <S.MainBox>
        <S.TextBox>
          <h1>
            THAT'S WHAT <span> I LIKE</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            sapiente aspernatur possimus odio accusantium inventore. Vel
            perferendis molestias a unde eum dolorem officia doloremque!
            Doloribus asperiores quas vitae quisquam libero.
          </p>
          <button>VIEW ALL PRODUCTS</button>
        </S.TextBox>
        <S.Boxlatinha>
          <img
            src={blueSoda}
            onClick={() => {
              setColor("#0261bf");
              setSoda(blueSoda);
            }}
            alt="imagem de uma lata de refigerante pepsi"
          />
          <img
            src={whiteSoda}
            onClick={() => {
              setColor("#E60C2D");
              setSoda(whiteSoda);
            }}
            alt="imagem de uma lata de refigerante pepsi"
          />

          <img
            src={blackSoda}
            onClick={() => {
              setColor("#1F1E1F");
              setSoda(blackSoda);
            }}
            alt="imagem de uma lata de refigerante pepsi"
          />
        </S.Boxlatinha>
        <S.Boximg>
          <img src={soda} alt="imagem de uma lata de refigerante pepsi" />
        </S.Boximg>
        <S.Boxicone>
          <S.Boxface>
            <a
              href="https://pt-br.facebook.com/login/device-based/regular/login/"
              target="_blank"
            >
              <img src={face} alt="icone do facebook" />
            </a>
          </S.Boxface>
          <a href="https://twitter.com/" target="_blank">
            <img src={twiter} alt="icone do twitter" />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img src={insta} alt="icone do instagram" />
          </a>
        </S.Boxicone>
      </S.MainBox>
    </S.Boxbackground>
  );
}