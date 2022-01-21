import React from "react";
import { useState } from "react";
import classes from "./videoTabs.module.css";

function VideoPageTabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className={classes.container}>
      <div className={classes.tabscontainer}>
        <div
          className={
            toggleState === 1
              ? `${classes.tabs} ${classes.activeTabs}`
              : classes.tabs
          }
          onClick={() => toggleTab(1)}
        >
          Visão Geral
        </div>
        <div
          className={
            toggleState === 2
              ? `${classes.tabs} ${classes.activeTabs}`
              : classes.tabs
          }
          onClick={() => toggleTab(2)}
        >
          Perguntas e respostas
        </div>
        <div
          className={
            toggleState === 3
              ? `${classes.tabs} ${classes.activeTabs}`
              : classes.tabs
          }
          onClick={() => toggleTab(3)}
        >
          Observações
        </div>
      </div>
      <hr />
      <div className={classes.contentcontainer}>
        <div
          className={
            toggleState === 1
              ? `${classes.content} ${classes.activeContent}`
              : classes.content
          }
        >
          <h2>Sobre este curso</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            ullamcorper eu velit ac ornare. Nulla semper dolor vitae orci
            condimentum, a bibendum urna tristique. Aenean vel metus vitae arcu
            varius vulputate eu non elit. Phasellus ac mi dapibus, tempus lorem
            vitae, consectetur elit. Cras porta lectus eros
          </p>
        </div>
        <div
          className={
            toggleState === 2
              ? `${classes.content} ${classes.activeContent}`
              : classes.content
          }
        >
          <h2>Seção 1 - Introdução</h2>
          <p>A seguir vamos ver o que você vai aprender em cada capítulo</p>
          <h2>Capítulo 1: Por que aprender programação?</h2>
          <p>
            Porquê você precisa aprender programação. Preciso saber inglês para
            aprender programação? Qual linguagem você deve escolher para
            aprender lógica de programação.
          </p>
          <h2>Capítulo 2: Criando os seus primeiros programas</h2>
          <p>
            O que é um algoritmo. Como instalar o Visualg para aprender lógica
            de programação. Mão na massa:
          </p>
          <h2>Capítulo 3: Variáveis, constantes e tipos de dados</h2>
          <p>
            Como armazenar dados na memória do computador. A diferença entre
            variáveis e constantes. O que são e como usar os tipos de dados.
          </p>
        </div>
        <div
          className={
            toggleState === 3
              ? `${classes.content} ${classes.activeContent}`
              : classes.content
          }
        >
          <h2>Observações</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            ullamcorper eu velit ac ornare. Nulla semper dolor vitae orci
            condimentum, a bibendum urna tristique. Aenean vel metus vitae arcu
            varius vulputate eu non elit. Phasellus ac mi dapibus, tempus lorem
            vitae, consectetur elit. Cras porta lectus eros Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Aenean ullamcorper eu velit
            ac ornare. Nulla semper dolor vitae orci condimentum, a bibendum
            urna tristique. Aenean vel metus vitae arcu varius vulputate eu non
            elit. Phasellus ac mi dapibus, tempus lorem vitae, consectetur elit.
            Cras porta lectus eros
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoPageTabs;
