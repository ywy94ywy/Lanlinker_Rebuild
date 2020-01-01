import { useState } from "react";

export const usePagination = ({ defaultPageSize = 10, defaultCurrent = 1 } = {}) => {
  const [pageSize, setPageSize] = useState(defaultPageSize);
  const [current, setCurrent] = useState(defaultCurrent);

  return [pageSize, current, setCurrent];
};
