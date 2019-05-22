# Use Cases

- [aria-details](#Use-Case-Aria-Details)

## Use Case Aria-Details

### Name
Aria-Details

### Owner
Paul Grenier

### Background and Current Practice
As an existing attribute, [`aria-details`](https://www.w3.org/TR/wai-aria-1.1/#aria-details) could be used, with some conventions, to include pronunciation content.

### Goal

- Support repeated use within the page context
- Reuse existing techniques without expanding specifications

### Target Audience

- AT users

### Use Case Scenario

#### SSML in Aria-Details

When an element with [`aria-details`](https://www.w3.org/TR/wai-aria-1.1/#aria-details) is encountered by an [SSML](https://www.w3.org/TR/speech-synthesis11/)-aware AT, the AT should replace the text content of the referenced SSML with the text content of the referencing element and parse the SSML for speech synthesis passing instructions to the [Web Speech API](https://w3c.github.io/speech-api/).

```html
<p>
  You say, <span aria-details="pecan1">pecan</span>.
  I say, <span aria-details="pecan2">pecan</span>.
</p>
<div>
  <speak>
    <phoneme id="pecan1" alphabet="ipa" ph="pɪˈkɑːn"></phoneme>
    <phoneme id="pecan2" alphabet="ipa" ph="ˈpi.kæn"></phoneme>
  </speak>
</div>
```

#### JSON-LD in Aria-Details

When an element with `aria-details` is encountered by a pronunciation-aware AT, the AT should parse the content of the referenced script for speech synthesis passing instructions to the [Web Speech API](https://w3c.github.io/speech-api/). Search engines use JSON-LD data to enhance search. This could increase the accuracy of voice-enabled search technology (e.g., speech to text) as well as the pronunciation of digital assistant technology.

```html
<p>
  You say, <span aria-details="pecan1">pecan</span>.
  I say, <span aria-details="pecan2">pecan</span>.
</p>
<script id="pecan1" type="application/ld+json">
  {
    "@context": "http://schema.org/",
    "type": "Pronunciation",
    "alphabet": "ipa",
    "phoneme ": "pecan",
    "ph": "pɪˈkɑːn"
  }
</script>
<script id="pecan2" type="application/ld+json">
  {
    "@context": "http://schema.org/",
    "type": "Pronunciation",
    "alphabet": "ipa",
    "phoneme ": "pecan",
    "ph": "ˈpi.kæn"
  }
</script>
```

### Existing Work

- [`aria-details`](https://www.w3.org/TR/wai-aria-1.1/#aria-details)
- [SSML](https://www.w3.org/TR/speech-synthesis11/)
- [Web Speech API](https://w3c.github.io/speech-api/)
- [Schema.org Community Group](https://www.w3.org/community/schemaorg/)

### Problems and Limitations

- Does not assume or suggest pronunciation assistance for deaf or hard of hearing
- Use of `aria-*` requires input from AT vendors
- XML data is not currently indexed by search engines
- New schemas require vetting through Schema.org

### Related Use Cases