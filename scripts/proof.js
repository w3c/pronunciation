const vfile = require('to-vfile');
const unified = require('unified');
const markdown = require('remark-parse');
const lint = require('remark-lint');
const stringify = require('remark-stringify');
const report = require('vfile-reporter');
const glob = require('fast-glob');
const remark2retext = require('remark-retext');
const fs = require('fs');
const path = require('path');
const personal = fs.readFileSync(path.join(__dirname, 'DICTIONARY'));

// Plugins
// @see https://github.com/retextjs/retext/blob/master/doc/plugins.md
const english = require('retext-english');
const equality = require('retext-equality');
const passive = require('retext-passive');
const simplify = require('retext-simplify');
const readability = require('retext-readability');
const spell = require('retext-spell');
const dictionary = require('dictionary-en-us');
const urls = require('retext-syntax-urls');
const acronyms = require('retext-redundant-acronyms');
const repeated = require('retext-repeated-words');

// Take command line file glob
const files = process.argv.slice(2);

// Set default if no glob passed
if (!files.length) {
  files.push('**/*.md');
}

// Always avoid node_modules
glob(['!node_modules', ...files]).then(files =>
  files.map(file => processAST(vfile.readSync(file)))
);

function processAST(ast) {
  unified()
    .use(markdown)
    .use(lint)
    .use(
      remark2retext,
      unified()
        .use(english)
        .use(urls)
        .use(acronyms)
        .use(repeated)
        .use(equality)
        .use(passive)
        .use(simplify)
        .use(readability)
        .use(spell, {
          dictionary,
          personal
        })
    )
    .use(stringify)
    .process(ast, function(err, file) {
      console.error(report(err || file));
    });
}
