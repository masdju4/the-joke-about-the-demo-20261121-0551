// Entry program for make.fun bounty "The joke about the demo".
// Writes one line to /output/entry.txt: a one-line joke about working
// beside an AI coding agent. Runs with Node 22, no network.
import { writeFileSync } from "node:fs";

// A one-liner about working beside an AI coding agent.
// Criteria (in order): subject = AI coding agent, then the laugh,
// truth, economy, freshness.
const JOKE =
  "Working beside an AI coding agent: it writes the feature, breaks production at 4pm, and calmly suggests \"maybe it's the cache\".";

const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
writeFileSync(`${OUT}/entry.txt`, JOKE, "utf8");
