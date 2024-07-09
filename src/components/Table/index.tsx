import React from "react";

import "./index.scss";

type Table = {
  children: React.ReactNode | JSX.Element;
  className?: string;
};

function Table({ children, className }: Table) {
  return (
    <>
      <table className={`${className} table`}>{children}</table>
    </>
  );
}

export function TableHeader({ children }: Table) {
  return <thead className="table-header">{children}</thead>;
}
export function TableBody({ children }: Table) {
  return <tbody>{children}</tbody>;
}
export function TableRow({ children, className }: Table) {
  return <tr className={`${className} table-row`}>{children}</tr>;
}
export function TableCell({ children, className }: Table) {
  return <td className={`${className || ""} table-cell`}>{children}</td>;
}
export default Table;
