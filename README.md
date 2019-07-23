# pronunciation
Pronunciation Task Force deliverables

HTML snapshots are available on:
* https://w3c.github.io/pronunciation/gap-analysis/

* https://w3c.github.io/pronunciation/user-scenarios/

* https://w3c.github.io/pronunciation/use-cases/

Markdown URL for Use-cases

* https://github.com/w3c/pronunciation/blob/master/use-cases/draft.md

# For Authors

## Proofing Markdown

Have node installed. Then, from this folder, run `npm install` from the command line (only the first time).

To proof all markdown files in this repository, `node ./scripts/proof.js`. To proof specific files, use "glob" syntax like `node ./scripts/proof.js */draft.md` or a specific files `node ./scripts/proof.js contributing.md readme.md`

If you introduce proper nouns, technical terms, or acronyms, you can add them to the `./scripts/DICTIONARY` file which will no longer trigger the `retext-spell` rule.