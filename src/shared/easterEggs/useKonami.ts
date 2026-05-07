import React from "react";
import { toast } from "sonner";

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

export function useKonami() {
  React.useEffect(() => {
    let i = 0;
    const onKey = (e: KeyboardEvent) => {
      const k = e.key;
      const expected = KONAMI[i];
      if (!expected) return;
      if (k === expected) {
        i += 1;
        if (i === KONAMI.length) {
          i = 0;
          document.documentElement.classList.toggle("konami");
          toast.success("Dev Easter egg unlocked.", {
            description: "Konami mode toggled."
          });
        }
      } else {
        i = k === KONAMI[0] ? 1 : 0;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
}

