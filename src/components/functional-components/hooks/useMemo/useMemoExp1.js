import React, { useMemo } from "react";

const UseMemoExample1 = ({ list, filter, utidhe }) => {
  const filteredList = useMemo(() => {
    return list.filter((item) => item.includes(filter));
  }, [list, filter]);

  return (
    <>
      <ul>
        {filteredList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};
export default UseMemoExample1;
