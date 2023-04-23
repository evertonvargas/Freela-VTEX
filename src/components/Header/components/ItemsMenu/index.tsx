import { useState, useEffect } from "react";

import styles from "./ItemsMenu.module.scss";

export const MenuFixed = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 840) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }, []);

  const ItemsMenu = [
    { itemName: "Home", itemLink: "/home" },
    { itemName: "Serviços", itemLink: "/servicos" },
    { itemName: "Planos de Manutenção", itemLink: "/planos-e-manutencao" },
    { itemName: "Contatos", itemLink: "/contatos" },
  ];

  const showMenu = () => {
    var element = document.querySelector("section.Header_menu__A_uMK ul");
    element?.classList.add("mystyle");
    setToggle(!toggle);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.menuHamburguer}
        onClick={() => showMenu()}
      ></button>

      {toggle && (
        <ul className={styles.menuItems}>
          {ItemsMenu.map((element, index) => (
            <li key={index}>
              <a href={element.itemLink}>{element.itemName}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
