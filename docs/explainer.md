# Improving Spoken Presentation on the Web

## What is this?

This is a proposal for a mechanism to allow content authors to include spoken presentation
guidance in HTML content.  Such guidance can be used by assistive technologies (including screen readers and read aloud tools) and voice assistants to control text to speech synthesis. A key requirement is to ensure the spoken presention content matches the author's intent and user expectations.

Currently, the W3C SSML standard is seen as an important piece of a solution. The challenge is
how to integrate SSML into HTML that is both easy to author, does not "break" content, and is straightforward for consumption by assistive technologies, voice assistants, and other tools
that produce spoken presentation of content.

This proposal has emerged from the work of the Accessible Platform Architecture Pronunciation
Task Force and represents a decision point arising from two differing approaches for integrating SSML (or SSML-like characteristics) into HTML.  Each of the approaches differs in authoring and consumption models (specifically for assistive technologies).

## Why do we care?

Several classes of assistive technology users depend upon spoken rendering of web content by
text to speech synthesis (TTS).  In contexts such as education, there are specific expectations for
accuracy of spoken presentation in terms of pronunciation, emphasis, prosody, pausing, etc. 

Correct pronunciation is also important in the context of language learning. 

In practice, the ecosystem of devices used in classrooms is broad, and each vendor generally provides their own text to speech engines for their platform.  Ensuring consistent spoken presenation across devices is a very real problem, and challenge. For many educational assessment vendors, the problem necessitates non-interoperable hacks to tune pronunciation and other presetnations features, such as pausing, which itself can introduce new problems, such as inconsistent represnetation of text across speech and braille.

It could be argued that continual advances in machine learning will improve the quality of synthesized speech, reducing the need for the proposal. Waiting for a robust solution that will likely still not fully address our concerns is risky, especially when an authorable, declarative approach may be within reach (and wouldn't preclude or conflict with continual improvement in TTS technology). 

The current situation is:  

* An authoring challenge for content developers that wish to support spoken presentation
* An implementation challenge for developers creating assistive technologies and read aloud capabilities
* And presents and inconsistent, potentially confusing user experience for listeners of TTS 

With the growing consumer adoption of voice assistants, user expectations for high quality spokebn presentation is growing.  Google and Amazon both encourage application developers to utilzie SSML to enhance the user experience on their platforms, yet Web content authors do not have the same opportunity to enhance the spoken presentation of their content.

Finding a solution to this need can have broader benefit in allowing authors to create web content that presents a better user experience if the content is presented by voice assistants. 

## Goals

* Define a standard mechanism that enables spoken presentation guidance to be authored in HTML
* Leverage SSML, if possible, as it is an existing standard that meets all identified requirements, and is supported my many speech synthesis platforms
* The mechanism must be consumable by assistive technologies such as screen readers

## Non-Goals

* Not trying to create a new speech presentation standard
* Not trying to resurrect CSS Speech (incomplete solution in any case)

## Approaches considered

A variety of approaches have been identified thus far by the Task Force, but two are considered front runners:

1. In-line SSML within Web Content
2. Attribute-based Model of SSML

Both approaches have advantages and disadvantages and these are  brielfy summarized below.

### In-line SSML

Advantages are that SSML is an extistent standard directly consumable by many speech synthesizers, and there is precedent for in-lining non-HTML markup such as SVG and MathML. This approach may be more easily consumed by Voice Assistants.

A key disdvantage is that inline SSML appears to be more difficult for Assistive Technologies, specifically screen readers, to consume.

A simple example of in-line SSML in an HTML fragment is shown below:

``` HTML
<p>According the 2010 US Census, the population of <speak><say-as interpret-as="digits">90274</say-as></speak> increased to 25209 from 24976 over the past 10 years.</p>
```

### Attribute-based Model of SSML

Advantages are that variants of the attribute model are currently used by educational assessment vendors, these variants are supported by custom read aloud tools, and it appears that the attribute model may be more easily implementable by screen reader vendors. The EPUB3 standard includes the SSML phoneme element implemented as a pair of namespaced attributes, and is used by publishers in Japan.

Disadvantages may include adding a level complexity to authoring trhough the introduction of JSON, which could be mitigated by authoring tools. This approach requires transforming the attribute content represented in JSON into SSML by the consumer (screen reader, read aloud tool, voice assistant, etc.). Possible security concerns exist with the JSON approach.  The EPUB approach would lead to a large number of attributes if all the SSML elements were to be implemented in that manner.

A simple example of the attribute based model of SSML is shown below:

``` HTML
<p>According the 2010 US Census, the population of <span data-ssml='{"say-as" : {"interpret-as":"digits"}}'>90274</span> increased to 25209 from 24976 over the past 10 years.</p>
```

## Open Questions

1. From the TAG/WHATWG perspective,  what disadvantages/challenges have we missed with either approach?
2. Whichever approach makes sense from the web standards perspective, will/can it be adopted by assistive technologies? Particularly for screen readers, does it fit the accessibility API model?




