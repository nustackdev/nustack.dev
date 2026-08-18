import type { CodeTok } from './CodeSample';
import s from './Snippet.module.css';

interface Props {
  lines: CodeTok[][];
  ariaLabel?: string;
  className?: string;
}

/**
 * Snippet — excerpt-style code panel. No filename, no gutter, no line
 * numbers, no copy button (snippets aren't meant to be lifted). Faded
 * top and bottom signal that this is a slice of a larger program, not
 * a runnable file. Uses the same CodeTok[] shape as CodeSample.
 */
export function Snippet({ lines, ariaLabel, className }: Props) {
  const cls = [s.snippet, className].filter(Boolean).join(' ');

  return (
    <div className={cls} role="figure" aria-label={ariaLabel ?? 'Code excerpt'}>
      <div className={s.body}>
        <div className={s.code}>
          {lines.map((tokens, i) => (
            <div key={i} className={s.line}>
              {tokens.length === 0 ? ' ' : tokens.map((tok, j) =>
                tok.c ? (
                  <span key={j} className={s[tok.c]}>{tok.t}</span>
                ) : (
                  <span key={j}>{tok.t}</span>
                ),
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
