# Use Cases

- [data-ssml](#Use-Case-Data-SSML)

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

### Use Case Scenario

#### SSML in `data-ssml`

When an element with [`data-ssml`](https://www.w3.org/TR/wai-aria-1.1/#aria-details) is encountered by an [SSML](https://www.w3.org/TR/speech-synthesis11/)-aware AT, the AT should enhance the user interface by processing the referenced SSML content and passing it to the [Web Speech API](https://w3c.github.io/speech-api/) or an external API (e.g., [Google's Text to Speech API](https://cloud.google.com/text-to-speech/)).


#### Implementation Options

- `data-ssml` as embedded JSON

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

- Does not assume or suggest visual pronunciation assistance for deaf or hard of hearing
- Use of `data-*` requires input from AT vendors
- XML data is not currently indexed by search engines

### Related Use Cases

## Use Case `data-ssml`

### Name
HTML5

### Owner
Paul Grenier

### Background and Current Practice
Currently, HTML5 includes the XML [namespaces](https://www.w3.org/TR/html5/infrastructure.html#namespaces) for MathML and SVG. So, using either's elements in an HTML5 document is valid. Because SSML's implementation is non-visual in nature, browser implementation could be slow or non-existent without affecting how authors use SSML in HTML. Expansion of HTML5 to include SSML namespace would allow valid use of SSML in the HTML5 document. Browsers would treat the element like any other unknown element, as [`HTMLUnknownElement`](https://www.w3.org/TR/html50/dom.html#htmlunknownelement).

### Goal

- Support valid use of SSML in HTML5 documents
- Allow visual pronunciation support

### Target Audience

- SSML-aware technologies and browser extensions
- Search indexers

### Use Case Scenario

#### SSML

When an element with [`data-ssml`](https://www.w3.org/TR/wai-aria-1.1/#aria-details) is encountered by an [SSML](https://www.w3.org/TR/speech-synthesis11/)-aware AT, the AT should enhance the user interface by processing the referenced SSML content and passing it to the [Web Speech API](https://w3c.github.io/speech-api/) or an external API (e.g., [Google's Text to Speech API](https://cloud.google.com/text-to-speech/)).


#### Implementation Options

- SSML

```html
<speak>
  You say, <phoneme alphabet="ipa" ph="pɪˈkɑːn">pecan</phoneme>.
  I say, <phoneme alphabet="ipa" ph="ˈpi.kæn">pecan</phoneme>.
</speak>
```

In this implementation, assistive technology, browser extensions, and CSS authors could more easily expose pronunciation information visually. While this is very similar to the definition of a `ruby` element, it's farther from its practice.

### Existing Work

- [VoiceXML 2.1](https://www.w3.org/TR/voicexml21/)
- [SMIL - Synchronized Multimedia Integration Language](https://www.w3.org/TR/REC-smil/smil-extended-linking.html#SMILLinking-Relationship-to-XLink)
- [PLS - Pronunciation Lexicon](https://www.w3.org/TR/pronunciation-lexicon/#AppB)

### Problems and Limitations

- SSML is not valid HTML5

### Related Use Cases