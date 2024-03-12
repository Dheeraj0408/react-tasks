import { useMemo } from "react";

const UseMemoExample3 = ({ a, b }) => {
  const result = useMemo(() => a * b, [a, b]);
  return (
    <>
      <p>
        The Result of {a} and {b} is {result}{" "}
      </p>
    </>
  );
};
export default UseMemoExample3;
