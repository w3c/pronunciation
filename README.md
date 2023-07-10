- [Calendar link](https://www.w3.org/groups/tf/pronunciation-tf/calendar/)

# Pronunciation Task Force current work

Editors' drafts are available on:

* Explainer: Improving Spoken Presentation on the Web - https://w3c.github.io/pronunciation/explainer

* Pronunciation User Scenarios - https://w3c.github.io/pronunciation/user-scenarios/

* Pronunciation Gap Analysis and Use Cases - https://w3c.github.io/pronunciation/gap-analysis_and_use-case

* Pronunciation Technical Approach - https://w3c.github.io/pronunciation/technical-approach/

Markdown URL for Use-cases

* https://github.com/w3c/pronunciation/blob/master/use-cases/draft.md

## Timeline


Pronunciation TF want to make a publication every three months if possible. 
Timeline: https://github.com/w3c/pronunciation/wiki/Timeline

# Implementations

## Multi-attribute Approach

none

## Single-attribute Approach

Note: need specific URL to confirm from each vendor

Texthelp SpeechStream : https://www.texthelp.com/en-us/products/speechstream/

Pearson TestNav : https://home.testnav.com/

# For Authors

## Proofing Markdown

Have node installed. Then, from this folder, run `npm install` from the command line (only the first time).

To proof all markdown files in this repository, `node ./scripts/proof.js`. To proof specific files, use "glob" syntax like `node ./scripts/proof.js */draft.md` or a specific files `node ./scripts/proof.js contributing.md readme.md`

If you introduce proper nouns, technical terms, or acronyms, you can add them to the `./scripts/DICTIONARY` file which will no longer trigger the `retext-spell` rule.
