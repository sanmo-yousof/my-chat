import { useEffect, useRef, useState } from "react";

export function useOverflow() {
  const ref = useRef(null);
  const [overflow, setOverflow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    setOverflow(el.scrollHeight > el.clientHeight);
  }, []);

  return { ref, overflow };
}