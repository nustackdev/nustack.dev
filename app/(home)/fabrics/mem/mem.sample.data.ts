import type { CodeTok } from '@/components/media/CodeSample';

/** 60-second snippet: an in-memory counter, five lines that run. */
export const MEM_COUNTER_LINES: CodeTok[][] = [
  [{ c: 'kw', t: 'import' }, { t: ' nu' }],
  [],
  [{ c: 'kw', t: 'class' }, { t: ' Counter(' }, { c: 'nu', t: 'nu.Shape' }, { t: '):' }],
  [{ t: '    hits = ' }, { c: 'nu', t: 'nu.mem.IntRef' }, { t: '.slot()' }],
  [],
  [{ c: 'cmt', t: '# in-process state, no backend, no wiring' }],
  [{ t: 'state = {}' }],
  [{ t: 'ctx = ' }, { c: 'nu', t: 'nu.Context' }, { t: '().bind(' }, { c: 'kw', t: 'dict' }, { t: ', state, Counter)' }],
  [],
  [{ c: 'nu', t: 'nu.run' }, { t: '(' }],
  [{ t: '    Counter.hits.init(0) >> Counter.hits.inc() >> ' }, { c: 'nu', t: 'nu.print' }, { t: '(Counter.hits),' }],
  [{ t: '    ctx=ctx,' }],
  [{ t: ')' }],
];
