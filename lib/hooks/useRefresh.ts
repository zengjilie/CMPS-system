import { useState } from "react";

export function useRefresh(): any {
  const [state, setState] = useState(0);

  const refresh = () => {
    setState(0);
  };

  return { refresh };
}
