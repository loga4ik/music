import {FC} from "react";
import "../Button/Button.css";
interface ButtonProps {
  text: string;
}
export const Button: FC<ButtonProps> = ({text}) => {
  return (
    <div>
      <button className="special--button">{text}</button>
    </div>
  );
};
