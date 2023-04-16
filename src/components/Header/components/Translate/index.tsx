import { useState } from "react";

import styles from "../../../../styles/Header/components/Translate.module.scss";

export const Translate = () => {
  const [languageIcon, setLanguageIcon] = useState("");
  const translateOption = [
    { itemImage: "src", itemLanguage: "PT-BR" },
    { itemImage: "src", itemLanguage: "ES" },
    { itemImage: "src", itemLanguage: "EN-US" },
  ];

  const translateFuction = (data: any) => {
    setLanguageIcon(data);
  };
  
  return (
    <div className={styles.contentTranslate}>
      <select className={styles.itemSelect + languageIcon} name="select">
        {translateOption.map((element, index) => (
          <option onClick={(e) => translateFuction(e.target)} key={index}>
            {element.itemLanguage}
          </option>
        ))}
      </select>
    </div>
  );
};
