import { ChangeEventHandler } from "react";
import "./index.scss";

type InputField = {
  // children: React.ReactNode;
  id: string;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  type: "text" | "email" | "number";
  placeHolder: string;
  errorMessage?: string;
  error?: boolean;
};

function index({
  onChange,
  type,
  id,
  name,
  placeHolder,
  error,
  errorMessage,
}: InputField) {
  return (
    <div>
      <input
        placeholder={placeHolder}
        id={id}
        name={name}
        onChange={onChange}
        className={`field__input ${error ? "error" : ""}`}
        type={type}
      />
      {error && <label className="error-message">{errorMessage}</label>}
    </div>
  );
}

export default index;
