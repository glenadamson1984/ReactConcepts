import type { RowComponentProps } from "react-window";

export const WordRow = ({
  index,
  names,
}: RowComponentProps<{ names: string[] }>) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {names[index]}
      <div style={{ fontSize: "12px", color: "gray" }}>{`${index + 1} of ${
        names.length
      }`}</div>
    </div>
  );
};
