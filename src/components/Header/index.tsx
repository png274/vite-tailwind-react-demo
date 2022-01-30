import React from "react";
import styles from "./header.module.scss";
interface Props {}
const HeaderComponent: React.FC<Props> = ({}) => {
  return (
    <>
      <div className={`${styles["blue-text"]}`}>header</div>
    </>
  );
};
export default HeaderComponent;
