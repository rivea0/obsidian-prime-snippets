import { readFileSync } from 'node:fs';

function makeSVGOneLine(SVGPath) {
  try {
    const source = readFileSync(SVGPath, 'utf-8');
    const oneLineSVG = source.replaceAll('  ', '').replaceAll('\n', '');

    return oneLineSVG;
  } catch (e) {
    console.error(e);
  }
}

function makeEmojiCSSVariable(name, SVGPath) {
  return `--${name}: '${SVGPath}';\n`;
}

/**************************

For example, add the output of this to :root in `callout-emojis.css`:

```
console.log(
  makeEmojiCSSVariable(
    'unicorn', makeSVGOneLine('/path/to/unicorn.svg')
  )
);
```

Then add these lines to `callout-emojis.css`:

```
.callout[data-callout="unicorn"] {
	--callout-color: <your-prefered-color-rgb>;
	--callout-icon: var(--unicorn);
}
```

And you're good to go!

Note that `unicorn` already exists, you can find more emojis at: https://openmoji.org/library/

***************************/
