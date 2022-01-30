import React from "react";

interface Props {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
const ButtonComponent: React.FC<Props> = (props) => {
  const { text, onClick } = props;
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  );
};
export default ButtonComponent;
