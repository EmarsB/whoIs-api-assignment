import { ChangeEventHandler } from "react";
import "./index.scss";

type InputField = {
  // children: React.ReactNode;
  id: string;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  type: "text" | "email" | "number";
  placeHolder: string;
};

function index({ onChange, type, id, name, placeHolder }: InputField) {
  return (
    <>
      <input
        placeholder={placeHolder}
        id={id}
        name={name}
        onChange={onChange}
        className="field__input"
        type={type}
      />
    </>
  );
}

export default index;
