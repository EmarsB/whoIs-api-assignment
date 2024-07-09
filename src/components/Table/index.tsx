import React from "react";

import "./index.scss";

type Table = {
  children: React.ReactNode | JSX.Element;
  className?: string;
  overflowHidden?: boolean;
};
/**
 * ------------------------------------------------------------------------
 * Component Definition
 * ------------------------------------------------------------------------
 */
function Table({ children, className }: Table) {
  return (
    <>
      <table className={`${className} table`}>{children}</table>
    </>
  );
}

// Following are the children who functions as a container
// Data will be managed in the data layer
export function TableHeader({ children }: Table) {
  return <thead className="table-header">{children}</thead>;
}
export function TableBody({ children }: Table) {
  return <tbody>{children}</tbody>;
}
export function TableRow({ children, className }: Table) {
  return <tr className={`${className} table-row`}>{children}</tr>;
}
export function TableCell({
  children,
  className,
  overflowHidden = false,
}: Table) {
  return (
    <td className={`${className || ""} table-cell`}>
      <div className={overflowHidden ? "text-overflow-ellipsis" : ""}>
        {children}
      </div>
    </td>
  );
}
export default Table;
