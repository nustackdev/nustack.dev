import type { CodeTok } from '@/components/media/CodeSample';

/**
 * 60-second nu.kv snippet. A Shape with two typed refs, mutated in one
 * atomic body, backed by RocksDB. Kill the process, run again, values are
 * still there. Adapted from examples/counter.py.
 */
export const KV_SNIPPET_LINES: CodeTok[][] = [
  [{ c: 'kw', t: 'import' }, { t: ' nu' }],
  [],
  [{ c: 'kw', t: 'class' }, { t: ' DB(' }, { c: 'nu', t: 'nu.Shape' }, { t: '):' }],
  [{ t: '    hits = ' }, { c: 'nu', t: 'nu.kv.IntRef' }, { t: '.slot()' }],
  [{ t: '    last = ' }, { c: 'nu', t: 'nu.kv.StrRef' }, { t: '.slot()' }],
  [],
  [{ c: 'cmt', t: '# refs read and write like variables' }],
  [{ t: 'bump = DB.hits.inc() >> DB.last.set(' }, { c: 'str', t: '"world"' }, { t: ')' }],
  [],
  [{ c: 'cmt', t: '# assemble: rocksdb-backed, one atomic body' }],
  [{ t: 'app = ' }, { c: 'nu', t: 'nu.With' }, { t: '(' }],
  [{ t: '    ' }, { c: 'nu', t: 'nu.kv.rocksdb_navigator' }, { t: '(' }, { c: 'str', t: '".mydb"' }, { t: '),' }],
  [{ t: '    body=' }, { c: 'nu', t: 'nu.kv.auto_flow_atomic' }, { t: '(bump),' }],
  [{ t: ')' }],
  [],
  [{ c: 'nu', t: 'nu.run' }, { t: '(app)' }],
];
