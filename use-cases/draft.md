# Use Cases

- [aria-ssml](#Use-Case-Aria-SSML)
- [data-ssml](#Use-Case-Data-SSML)
- [HTML5](#Use-Case-HTML5)
- [Custom Element](#Use-Case-Custom-Element)
- [JSON-LD](#Use-Case-JSON-LD)

## Use Case `aria-ssml`

### Name
`aria-ssml`

### Owner
Paul Grenier

### Background and Current Practice
A new `aria` attribute could be used to include pronunciation content.

### Goal
- Embed SSML in an HTML document.

### Target Audience

- Assistive Technology
- Browser Extensions
- Search Engines

### Implementation Options

- `aria-ssml` as embedded JSON

When AT encounters an element with `aria-ssml`, the AT should enhance the UI by processing the pronunciation content and passing it to the [Web Speech API](https://w3c.github.io/speech-api/) or an external API (e.g., [Google's Text to Speech API](https://cloud.google.com/text-to-speech/)).

```html
I say <span aria-ssml='{"phoneme":{"ph":"pɪˈkɑːn","alphabet":"ipa"}}'>pecan</span>.
You say <span aria-ssml='{"phoneme":{"ph":"ˈpi.kæn","alphabet":"ipa"}}'>pecan</span>.
```

Client will convert JSON to SSML and pass the XML string a speech API.

```js
var msg = new SpeechSynthesisUtterance();
msg.text = convertJSONtoSSML(element.dataset.ssml);
speechSynthesis.speak(msg);
```

- `aria-ssml` referencing XML by template ID

```html
<!-- ssml must appear inside a template to be valid -->
<template id="pecan">
<?xml version="1.0"?>
<speak version="1.1"
       xmlns="http://www.w3.org/2001/10/synthesis"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.w3.org/2001/10/synthesis
                   http://www.w3.org/TR/speech-synthesis11/synthesis.xsd"
       xml:lang="en-US">
    You say, <phoneme alphabet="ipa" ph="pɪˈkɑːn">pecan</phoneme>.
    I say, <phoneme alphabet="ipa" ph="ˈpi.kæn">pecan</phoneme>.
</speak>
</template>

<p aria-ssml="#pecan">You say, pecan. I say, pecan.</p>
```

Client will parse XML and serialize it before passing to a speech API:

```js
var msg = new SpeechSynthesisUtterance();
var xml = document.getElementById('pecan').content.firstElementChild;
msg.text = serialize(xml);
speechSynthesis.speak(msg);
```

- `aria-ssml` referencing an XML string as script tag

```html
<script id="pecan" type="application/ssml+xml">
<speak version="1.1"
       xmlns="http://www.w3.org/2001/10/synthesis"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.w3.org/2001/10/synthesis
                   http://www.w3.org/TR/speech-synthesis11/synthesis.xsd"
       xml:lang="en-US">
    You say, <phoneme alphabet="ipa" ph="pɪˈkɑːn">pecan</phoneme>.
    I say, <phoneme alphabet="ipa" ph="ˈpi.kæn">pecan</phoneme>.
</speak>
</script>

<p aria-ssml="#pecan">You say, pecan. I say, pecan.</p>
```

Client will pass the XML string raw to a speech API.

```js
var msg = new SpeechSynthesisUtterance();
msg.text = document.getElementById('pecan').textContent;
speechSynthesis.speak(msg);
```

- `aria-ssml` referencing an external XML document by URL

```html
<p aria-ssml="http://example.com/pronounce.ssml#pecan">You say, pecan. I say, pecan.</p>
```

Client will pass the string payload to a speech API.

```js
var msg = new SpeechSynthesisUtterance();
var response = await fetch(el.dataset.ssml)
msg.txt = await response.text();
speechSynthesis.speak(msg);
```

### Existing Work

- [`aria-ssml` proposal](https://github.com/alia11y/SSMLinHTMLproposal)
- [SSML](https://www.w3.org/TR/speech-synthesis11/)
- [Web Speech API](https://w3c.github.io/speech-api/)

### Problems and Limitations

- `aria-ssml` is not a valid `aria-*` attribute.
- OS/Browsers combinations that do not support the serialized XML usage of the Web Speech API.

## Use Case `data-ssml`

### Name
`data-ssml`

### Owner
Paul Grenier

### Background and Current Practice
As an existing attribute, [`data-*`](https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes) could be used, with some conventions, to include pronunciation content.

### Goal

- Support repeated use within the page context
- Support external file references
- Reuse existing techniques without expanding specifications

### Target Audience

- Hearing users

### Implementation Options

- `data-ssml` as embedded JSON

When an element with `data-ssml` is encountered by an SSML-aware AT, the AT should enhance the user interface by processing the referenced SSML content and passing it to the [Web Speech API](https://w3c.github.io/speech-api/) or an external API (e.g., [Google's Text to Speech API](https://cloud.google.com/text-to-speech/)).


```html
I say <span data-ssml='{"phoneme":{"ph":"pɪˈkɑːn","alphabet":"ipa"}}'>pecan</span>.
You say <span data-ssml='{"phoneme":{"ph":"ˈpi.kæn","alphabet":"ipa"}}'>pecan</span>.
```

Client will convert JSON to SSML and pass the XML string a speech API.

```js
var msg = new SpeechSynthesisUtterance();
msg.text = convertJSONtoSSML(element.dataset.ssml);
speechSynthesis.speak(msg);
```

- `data-ssml` referencing XML by template ID

```html
<!-- ssml must appear inside a template to be valid -->
<template id="pecan">
<?xml version="1.0"?>
<speak version="1.1"
       xmlns="http://www.w3.org/2001/10/synthesis"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.w3.org/2001/10/synthesis
                   http://www.w3.org/TR/speech-synthesis11/synthesis.xsd"
       xml:lang="en-US">
    You say, <phoneme alphabet="ipa" ph="pɪˈkɑːn">pecan</phoneme>.
    I say, <phoneme alphabet="ipa" ph="ˈpi.kæn">pecan</phoneme>.
</speak>
</template>

<p data-ssml="#pecan">You say, pecan. I say, pecan.</p>
```

Client will parse XML and serialize it before passing to a speech API:

```js
var msg = new SpeechSynthesisUtterance();
var xml = document.getElementById('pecan').content.firstElementChild;
msg.text = serialize(xml);
speechSynthesis.speak(msg);
```

- `data-ssml` referencing an XML string as script tag

```html
<script id="pecan" type="application/ssml+xml">
<speak version="1.1"
       xmlns="http://www.w3.org/2001/10/synthesis"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.w3.org/2001/10/synthesis
                   http://www.w3.org/TR/speech-synthesis11/synthesis.xsd"
       xml:lang="en-US">
    You say, <phoneme alphabet="ipa" ph="pɪˈkɑːn">pecan</phoneme>.
    I say, <phoneme alphabet="ipa" ph="ˈpi.kæn">pecan</phoneme>.
</speak>
</script>

<p data-ssml="#pecan">You say, pecan. I say, pecan.</p>
```

Client will pass the XML string raw to a speech API.

```js
var msg = new SpeechSynthesisUtterance();
msg.text = document.getElementById('pecan').textContent;
speechSynthesis.speak(msg);
```

- `data-ssml` referencing an external XML document by URL

```html
<p data-ssml="http://example.com/pronounce.ssml#pecan">You say, pecan. I say, pecan.</p>
```

Client will pass the string payload to a speech API.

```js
var msg = new SpeechSynthesisUtterance();
var response = await fetch(el.dataset.ssml)
msg.txt = await response.text();
speechSynthesis.speak(msg);
```

### Existing Work

- [`aria-ssml` proposal](https://github.com/alia11y/SSMLinHTMLproposal)
- [SSML](https://www.w3.org/TR/speech-synthesis11/)
- [Web Speech API](https://w3c.github.io/speech-api/)

### Problems and Limitations

- Does not assume or suggest visual pronunciation help for deaf or hard of hearing
- Use of `data-*` requires input from AT vendors
- XML data is not indexed by search engines

## Use Case HTML5

### Name
HTML5

### Owner
Paul Grenier

### Background and Current Practice
HTML5 includes the XML [namespaces](https://www.w3.org/TR/html5/infrastructure.html#namespaces) for MathML and SVG. So, using either's elements in an HTML5 document is valid. Because SSML's implementation is non-visual in nature, browser implementation could be slow or non-existent without affecting how authors use SSML in HTML. Expansion of HTML5 to include SSML namespace would allow valid use of SSML in the HTML5 document. Browsers would treat the element like any other unknown element, as [`HTMLUnknownElement`](https://www.w3.org/TR/html50/dom.html#htmlunknownelement).

### Goal

- Support valid use of SSML in HTML5 documents
- Allow visual pronunciation support

### Target Audience

- SSML-aware technologies and browser extensions
- Search indexers

### Implementation Options

- SSML

When an element with [`data-ssml`](https://www.w3.org/TR/wai-aria-1.1/#aria-details) is encountered by an [SSML](https://www.w3.org/TR/speech-synthesis11/)-aware AT, the AT should enhance the user interface by processing the referenced SSML content and passing it to the [Web Speech API](https://w3c.github.io/speech-api/) or an external API (e.g., [Google's Text to Speech API](https://cloud.google.com/text-to-speech/)).

```html
<speak>
  You say, <phoneme alphabet="ipa" ph="pɪˈkɑːn">pecan</phoneme>.
  I say, <phoneme alphabet="ipa" ph="ˈpi.kæn">pecan</phoneme>.
</speak>
```

### Existing Work

- [VoiceXML 2.1](https://www.w3.org/TR/voicexml21/)
- [SMIL - Synchronized Multimedia Integration Language](https://www.w3.org/TR/REC-smil/smil-extended-linking.html#SMILLinking-Relationship-to-XLink)
- [PLS - Pronunciation Lexicon](https://www.w3.org/TR/pronunciation-lexicon/#AppB)

### Problems and Limitations

- SSML is not valid HTML5

## Use Case Custom Element

### Name
Custom Element

### Owner
Paul Grenier

### Background and Current Practice
Embed valid SSML in HTML using custom elements registered as `ssml-*` where `*` is the actual SSML tag name (except for `p` which expects the same treatment as an HTML `p` in HTML layout).

### Goal

- Support use of SSML in HTML documents.

### Target Audience

- SSML-aware technologies and browser extensions
- Search indexers

### Implementation Options

- `ssml-speak`: see [demo](https://ssml-components.glitch.me/)

Only the `<ssml-speak>` component requires registration. The component code lifts the SSML by getting the `innerHTML` and removing the `ssml-` prefix from the interior tags and passing it to the web speech API. The `<p>` tag from SSML is not given the prefix because we still want to start a semantic paragraph within the content. The other tags used in the example have no semantic meaning. Tags like `<em>` in HTML could be converted to `<emphasis>` in SSML. In that case, CSS styles will come from the browser's default styles or the page author.

```html
<ssml-speak>
  Here are <ssml-say-as interpret-as="characters">SSML</ssml-say-as> samples.
  I can pause<ssml-break time="3s"></ssml-break>.
  I can speak in cardinals.
  Your number is <ssml-say-as interpret-as="cardinal">10</ssml-say-as>.
  Or I can speak in ordinals.
  You are <ssml-say-as interpret-as="ordinal">10</ssml-say-as> in line.
  Or I can even speak in digits.
  The digits for ten are <ssml-say-as interpret-as="characters">10</ssml-say-as>.
  I can also substitute phrases, like the <ssml-sub alias="World Wide Web Consortium">W3C</ssml-sub>.
  Finally, I can speak a paragraph with two sentences.
  <p>
    <ssml-s>You say, <ssml-phoneme alphabet="ipa" ph="pɪˈkɑːn">pecan</ssml-phoneme>.</ssml-s>
    <ssml-s>I say, <ssml-phoneme alphabet="ipa" ph="ˈpi.kæn">pecan</ssml-phoneme>.</ssml-s>
  </p>
</ssml-speak>
<template id="ssml-controls">
  <style>
    [role="switch"][aria-checked="true"] :first-child,
    [role="switch"][aria-checked="false"] :last-child {
      background: #000;
      color: #fff;
    }
  </style>
  <slot></slot>
  <p>
    <span id="play">Speak</span>
    <button role="switch" aria-checked="false" aria-labelledby="play">
      <span>on</span>
      <span>off</span>
    </button>
  </p>
</template>
```

```js
class SSMLSpeak extends HTMLElement {
  constructor() {
    super();
    const template = document.getElementById('ssml-controls');
    const templateContent = template.content;
    this.attachShadow({mode: 'open'})
      .appendChild(templateContent.cloneNode(true));
  }
  connectedCallback() {
    const button = this.shadowRoot.querySelector('[role="switch"][aria-labelledby="play"]')
    const ssml = this.innerHTML.replace(/ssml-/gm, '')
    const msg = new SpeechSynthesisUtterance();
    msg.lang = document.documentElement.lang;
    msg.text = `<speak version="1.1"
      xmlns="http://www.w3.org/2001/10/synthesis"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.w3.org/2001/10/synthesis
        http://www.w3.org/TR/speech-synthesis11/synthesis.xsd"
      xml:lang="${msg.lang}">
    ${ssml}
    </speak>`;
    msg.voice = speechSynthesis.getVoices().find(voice => voice.lang.startsWith(msg.lang));
    msg.onstart = () => button.setAttribute('aria-checked', 'true');
    msg.onend = () => button.setAttribute('aria-checked', 'false');
    button.addEventListener('click', () => speechSynthesis[speechSynthesis.speaking ? 'cancel' : 'speak'](msg))
  }
}

customElements.define('ssml-speak', SSMLSpeak);
```

### Existing Work

- [DOM Living Standard](https://dom.spec.whatwg.org/#concept-element-custom)
- [Web Speech API](https://w3c.github.io/speech-api/)

### Problems and Limitations

- OS/Browsers combinations that do not support the serialized XML usage of the Web Speech API.
- Browsers may need to map SSML tags with CSS styles for default user agent styles.
- Without an extension or AT, only user interaction can start the Web Speech API.
- Authors or parsing may need to remove HTML content with unintended SSML semantics before serialization.

## Use Case JSON-LD

### Name
JSON-LD

### Owner
Paul Grenier

### Background and Current Practice
[JSON-LD](https://www.w3.org/2018/jsonld-cg-reports/json-ld/) provides an established standard for embedding data in HTML. Unlike other microdata approaches, JSON-LD helps to reuse standardized annotations through external references.

### Goal

- Support use of SSML in HTML documents.

### Target Audience

- SSML-aware technologies and browser extensions
- Search indexers

### Implementation Options

- `JSON-LD`

```html
<script type="application/ld+json">
{
  "@context": "http://schema.org/",
  "@id": "/Pronunciation#WKRP",
  "@type": "TextPronunciation",
  "@language": "en",
  "text": "WKRP",
  "speechToTextMarkup": "SSML",
  "phoneticText": "<say-as interpret-as=\"characters\">WKRP</say-as>"
}
</script>
<p>
  Do you listen to <span itemscope
    itemtype="http://schema.org/TextPronunciation"
    itemid="/Pronunciation#WKRP">WKRP</span>?
</p>
```

### Existing Work

- [Web of Things Working Group](https://www.w3.org/WoT/WG/)
- [Schema.org](https://schema.org/)

### Problems and Limitations

- not an established "type"/published schema


## Use Case Ruby

### Name
Ruby

### Owner
Paul Grenier

### Background and Current Practice
> [`<Ruby>`](https://www.w3.org/TR/html5/textlevel-semantics.html#the-ruby-element) annotations are short runs of text presented alongside base text, primarily used in East Asian typography as a guide for pronunciation or to include other annotations.

`ruby` guides pronunciation visually. This seems like a natural fit for text-to-speech.

### Goal

- Support use of SSML in HTML documents.
- Offer visual pronunciation support.

### Target Audience

- AT and browser extensions
- Search indexers

### Implementation Options

- `ruby` with microdata

Microdata can augment the `ruby` element and its descendants.

```html
<p>
  You say,
  <span itemscope="" itemtype="http://example.org/Pronunciation">
    <ruby itemprop="phoneme" content="pecan">
      pecan
      <rt itemprop="ph">pɪˈkɑːn</rt>
      <meta itemprop="alphabet" content="ipa">
    </ruby>.
  </span>
  I say,
  <span itemscope="" itemtype="http://example.org/Pronunciation">
    <ruby itemprop="phoneme" content="pecan">
      pe
      <rt itemprop="ph">ˈpi</rt>
      can
      <rt itemprop="ph">kæn</rt>
      <meta itemprop="alphabet" content="ipa">
    </ruby>.
  </span>
</p>
```

### Existing Work

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-ruby-element)
- [Schema.org](https://schema.org/)

### Problems and Limitations

- AT may process annotations as content
- AT "double reading" words instead of choosing either the content or the annotation
- Only offers for a few SSML expressions
- Difficult to reuse by reference

