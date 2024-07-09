import React from "react";

import "./index.scss";

type Select = {
  children: React.ReactNode;
  onChange: React.ChangeEventHandler<HTMLSelectElement> | undefined;
  name: string;
  id: string;
};

function Select({ children, onChange, name, id }: Select) {
  return (
    <>
      <select id={id} name={name} onChange={onChange} className="field__select">
        {children}
      </select>
    </>
  );
}

type Options = {
  children: React.ReactNode;
  value: string | number;
};

function Options({ children, value }: Options) {
  return (
    <option className="field__select-option" value={value}>
      {children}
    </option>
  );
}

Select.Options = Options;

export default Select;
