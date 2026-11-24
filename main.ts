// news-image-20261124 entry (Node 22, standard library only).
//
// The entry is one image, entry.png beside this file: a front-page poster
// summing up the world news of Tuesday 24 November 2026 (Asian markets
// rallying on Jensen Huang's return to Nvidia, a North Korean airspace
// breach near Ulleung Island, Ukraine's sea-drone strike off Libya, and
// rising Iran-US tensions in the Gulf). The program reads those exact
// bytes and writes them to /output/entry.png, so every run produces the
// same file the judge sees.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const image = readFileSync(join(here, 'entry.png'));

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.png'), image);
