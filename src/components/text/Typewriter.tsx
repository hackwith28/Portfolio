import React from "react";

type Props = {
  phrases: string[];
  className?: string;
  typingMs?: number;
  pauseMs?: number;
};

export function Typewriter({
  phrases,
  className,
  typingMs = 40,
  pauseMs = 900
}: Props) {
  const [i, setI] = React.useState(0);
  const [sub, setSub] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    const current = phrases[i] ?? "";

    const doneTyping = !deleting && sub === current.length;
    const doneDeleting = deleting && sub === 0;

    if (doneTyping) {
      const t = window.setTimeout(() => setDeleting(true), pauseMs);
      return () => window.clearTimeout(t);
    }
    if (doneDeleting) {
      setDeleting(false);
      setI((v) => (v + 1) % phrases.length);
      return;
    }

    const stepMs = deleting ? Math.max(typingMs * 0.55, 18) : typingMs;
    const t = window.setTimeout(() => {
      setSub((v) => v + (deleting ? -1 : 1));
    }, stepMs);
    return () => window.clearTimeout(t);
  }, [phrases, i, sub, deleting, typingMs, pauseMs]);

  const current = phrases[i] ?? "";
  return (
    <span className={className}>
      <span className="font-mono">{current.slice(0, sub)}</span>
      <span className="ml-0.5 inline-block h-[1em] w-[0.55ch] translate-y-[2px] bg-fg/80 animate-[blink_1s_steps(2,end)_infinite]" />
      <style>{`@keyframes blink{50%{opacity:0}}`}</style>
    </span>
  );
}

