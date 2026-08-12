import type { CodeTok } from '@/components/media/CodeSample';

/** The model in one snippet — a tree of Interactions over Refs, routed by a Context. */
export const SPEC_MODEL_LINES: CodeTok[][] = [
  [{ c: 'kw', t: 'class' }, { t: ' Counter(' }, { c: 'nu', t: 'Shape' }, { t: '):' }],
  [{ t: '    val: ' }, { c: 'nu', t: 'v.IntRef' }, { t: '                          ' }, { c: 'cmt', t: '# kv storage' }],
  [],
  [{ c: 'kw', t: 'class' }, { t: ' Dashboard(' }, { c: 'nu', t: 'ui.Page' }, { t: '):' }],
  [{ t: '    count: ' }, { c: 'nu', t: 'ui.TextRef' }, { t: '                      ' }, { c: 'cmt', t: '# browser widget' }],
  [],
  [{ t: 'app = ' }, { c: 'nu', t: 'Parallel' }, { t: '(' }],
  [{ t: '    ' }, { c: 'nu', t: 'ForeverDo' }, { t: '(Counter.val.inc() >> ' }, { c: 'nu', t: 'Delay' }, { t: '(1.0)),' }],
  [{ t: '    ' }, { c: 'nu', t: 'ReactForever' }, { t: '(' }],
  [{ t: '        Counter.val.on_change(),' }],
  [{ t: '        Dashboard.count.set(Counter.val),' }],
  [{ t: '    ),' }],
  [{ t: ')' }],
  [{ c: 'cmt', t: '# Context routes Counter.val to kv, Dashboard.count to the browser.' }],
];
