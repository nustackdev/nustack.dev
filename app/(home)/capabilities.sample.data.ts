/**
 * Capabilities snippets — hint-sized excerpts for the "What you can build"
 * landing chapter. Each follows the same three-part shape so the "same
 * primitive, different substrate" pattern is felt visually:
 *
 *   class ...(nu.Shape | nu.ui.Page | nu.Service):
 *       ref = nu.<fabric>.<Ref>.slot() / .method()
 *
 *   op  = <ref>.set(...) | Ref(...) | Teleport(op, ...)   # the essence
 *
 *   app = nu.With(<fabric backend>, body=op)              # assembly
 *
 * cluster deviates: instead of a single op, it shows the SAME op running
 * locally vs. teleported — that's the reveal.
 *
 * Comments go on their own line above the code — the snippet column is
 * narrow, inline comments would trigger horizontal scroll.
 */

import type { CodeTok } from '@/components/media/CodeSample';

/** nu.kv — persistent state. */
export const CAP_KV_LINES: CodeTok[][] = [
  [{ c: 'kw', t: 'class' }, { t: ' DB(' }, { c: 'nu', t: 'nu.Shape' }, { t: '):' }],
  [{ t: '    hits = ' }, { c: 'nu', t: 'nu.kv.IntRef' }, { t: '.slot()' }],
  [],
  [{ c: 'cmt', t: '# +1 to a persistent counter' }],
  [{ t: 'op = DB.hits.set(DB.hits + ' }, { c: 'num', t: '1' }, { t: ')' }],
  [],
  [{ t: 'app = ' }, { c: 'nu', t: 'nu.With' }, { t: '(' }],
  [{ t: '    ' }, { c: 'nu', t: 'nu.kv.rocksdb_navigator' }, { t: '(' }, { c: 'str', t: '".db"' }, { t: '),' }],
  [{ t: '    body=' }, { c: 'nu', t: 'nu.kv.auto_flow_atomic' }, { t: '(op),' }],
  [{ t: ')' }],
];

/** nu.ui — live browser UI. */
export const CAP_UI_LINES: CodeTok[][] = [
  [{ c: 'kw', t: 'class' }, { t: ' Dashboard(' }, { c: 'nu', t: 'nu.ui.Page' }, { t: '):' }],
  [{ t: '    hello = ' }, { c: 'nu', t: 'nu.ui.TextRef' }, { t: '.slot()' }],
  [],
  [{ c: 'cmt', t: '# renders live in the browser' }],
  [{ t: 'op = Dashboard.hello.set(' }, { c: 'str', t: '"Hello, browser."' }, { t: ')' }],
  [],
  [{ t: 'app = ' }, { c: 'nu', t: 'nu.With' }, { t: '(' }],
  [{ t: '    ' }, { c: 'nu', t: 'nu.ui.server' }, { t: '(op),' }],
  [{ t: ')' }],
];

/** nu.cluster — distributed execution. Same op, local vs teleported. */
export const CAP_CLUSTER_LINES: CodeTok[][] = [
  [{ c: 'kw', t: 'class' }, { t: ' DB(' }, { c: 'nu', t: 'nu.Shape' }, { t: '):' }],
  [{ t: '    hits = ' }, { c: 'nu', t: 'nu.kv.IntRef' }, { t: '.slot()' }],
  [],
  [{ c: 'cmt', t: '# any Nu op' }],
  [{ t: 'op = DB.hits.set(DB.hits + ' }, { c: 'num', t: '1' }, { t: ')' }],
  [],
  [{ c: 'cmt', t: '# same op — teleport it to a worker' }],
  [{ t: 'remote = ' }, { c: 'nu', t: 'nu.cluster.Teleport' }, { t: '(op, target=' }, { c: 'str', t: '"gpu-0"' }, { t: ')' }],
  [],
  [{ t: 'app = ' }, { c: 'nu', t: 'nu.With' }, { t: '(' }],
  [{ t: '    ' }, { c: 'nu', t: 'nu.cluster.RayCluster' }, { t: '(),' }],
  [{ t: '    body=remote,' }],
  [{ t: ')' }],
];

/** nu.llm — LLM chat. Real API from examples/llm_hello.py. */
export const CAP_LLM_LINES: CodeTok[][] = [
  [{ c: 'kw', t: 'class' }, { t: ' Bot(' }, { c: 'nu', t: 'nu.Service' }, { t: '):' }],
  [{ t: '    chat = ' }, { c: 'nu', t: 'nu.llm.ChatRef' }, { t: '.method(temperature=' }, { c: 'num', t: '0.7' }, { t: ')' }],
  [],
  [{ c: 'cmt', t: '# ask the model' }],
  [{ t: 'op = Bot.chat(prompt=' }, { c: 'str', t: '"one-line haiku about rust"' }, { t: ')' }],
  [],
  [{ t: 'app = ' }, { c: 'nu', t: 'nu.With' }, { t: '(' }],
  [{ t: '    ' }, { c: 'nu', t: 'nu.llm.ollama' }, { t: '(Bot, host=' }, { c: 'str', t: '"localhost"' }, { t: ', model=' }, { c: 'str', t: '"qwen2.5:7b"' }, { t: '),' }],
  [{ t: '    body=op,' }],
  [{ t: ')' }],
];
