# Introduction

As part of the Accessible Platform Architectures (APA) Working Group, the Pronunciation Task Force (PTF) is a collaboration of subject matter experts working to identify and specify the optimal approach which can deliver reliably accurate pronunciation across browser and operating environments. With the introduction of the Kurzweil reading aid in 1976, to the more sophisticated synthetic speech currently used to assist communication as reading aides for the visually impaired and those with reading disabilities, the technology has multiple applications in education, communication, entertainment, etc. From helping to teach spelling and pronunciation in different languages, Text-to-Speech (TTS) has become a vital technology for providing access to digital content on the web and through mobile devices.

The challenges that TTS introduces is the inability to accommodate regional variations and presentation of every phoneme present throughout the world. A number of markup languages have been established to address these language and pronunciation variations and make the content legible and meaningful.  The W3C recommendation, of the Speech Synthesis Markup Language (SSML), provides a promising approach that will be addressed through the Pronunciation Task Force. This document explores requirements based on examples of use cases and scenarios.

## User Scenarios

The purpose of developing user scenarios is to facilitate discussion and further requirements definition for pronunciation standards developed within the PTF prior to review of the APA. There are numerous interpretations of what form a user scenarios adopt. Within the user experience research (UXR) body of practice, a user scenario is a written narrative related to the use of a service from the perspective of a user or user group. Importantly, the context of use is emphasized as is the desired outcome of use. There are potentially thousands of user scenarios for a technology such as TTS, however, the focus for the PTF is on the core scenarios that relate to the kinds of users who will engage with TTS. 

User scenarios, like Personas, represent a composite of real world experiences. In the case of the PTF, the scenarios were derived from interviews of people who were end-consumers of TTS, as well as submitted narratives and industry examples from practitioners. There are several formats of scenarios. Several are general goal or task-oriented scenarios. Others elaborate on richer context, for example, educational assessment.

The following user scenarios are organized on the three perspectives of TTS use derived from analysis of the qualitative data collected from the discovery work: 

+ **End-Consumers of TTS** Encompasses those with a visual disability or other need to have TTS operational for using assistive technologies (ATs).
+ **Digital Content Managers** Addresses activities related to those responsible for producing content that needs to be accessible to ATs and W3C WAI Guidelines.
+ **Software Engineers** Includes developers and architects required to put TTS into an application or service. 

### End-Consumer of TTS
Mary has a visual impairment and uses AT with TTS to help navigate through websites. She needs to travel to Ottawa, Canada and so goes to a travel website to book her flight. Mary already knows the airport code and enters "YOW". The site produces the result in a drop-down list as "Ottawa, CA" but her AT cannot pronounce the text. In frustration, she abandons her search and calls a friend to complete the booking online instead.

#### Cultural Exchange

**Contributed by:** Paul Grenier on behalf of [Pronounce Names](https://www.pronouncenames.com/).

**Description:** A free resource assisting with proper name pronunciation. Currently, users of the site must be familiar with English alphabet pronunciation (romaji when used for Japanese). Linguists providing pronunciation could increase accuracy and expand to languages the English alphabet can not pronounce if it were accessible to users. With Pronunciation standards, users of Pronounce Names could use the browser's Speech Synthesis to speak names using the IPA alphabet.

A person requesting pronunciation for their own name, could use the browser's Speech Synthesis to verify their preferred pronunciation. This could be copied to resumes, social media, vcard, business cards, etc. In the case of "Americanized" names, personal choice is more important than correctness and many alternate pronunciations may exist. For example, the surname "Grenier" has two pronunciations on the site, and my prefered pronunciation is neither of them.

### Content Management for TTS
Andrew is a content producer for a global travel e-commerce site where he is responsible for curating text and images for promotional events. His Enterprise is vying to be the preferred vendor for the European Union and in order to do so, they need to be able to provide accessible content for TTS. At present, there is no way he can edit content to pronounce words, other than English, correctly.

Johnny is a translator for indigenous elders in South Australia. His latest assignment requires him to not only translate but to document pronunciation of regional languages within the State on the Project website, given the diversity among tribal groups with pronunciation although having a shared lexicon for common terms for geography, flora, fauna, and climate.

#### Educational Assessment

As a test administrator, I want to ensure that students with the read aloud accommodation who are using assistive technology or speech synthesis as an alternative to a human reader, have the same speech quality (e.g., intonation, expression, pronunciation, and pace, etc.) as spoken language.

As a test administrator, speech accuracy with mathematical expressions, including numbers, fractions, and operations can be difficult to pronounce. Some mathematical expressions required special pronunciations to prevent any violations to the test construct.

As a test administrator/educator, pronunciations must be consistent across instruction and assessment, in order to avoid test bias or impact effects for students.

As a test taker (tester) with a visual impairment who may use assistive technology to access the test content with speech software, screen reader or refreshable braille device, I want the content to be presented as intended, with accurate pronunciation and articulation, so that my assessment accurately reflects my knowledge of the content.

#### Education Publishing

As a content developer, I want to create content that can readily be delivered both assistive technology and can convey the correct meaning and ensure that screen readers render the right pronunciation based on the surrounding context.

#### Academic Research

**Contributed by:** Paul Grenier on behalf of [Léamh](https://léamh.org/).

**Description:** An academic resource for translation of Irish texts (13th - 18th century) supported by several universities. With pronunciation standards for the web, anthropological linguistics scholars could join the conversation and possibly offer new insights to this academic work. Hearing Early Modern Irish spoken may spark more interest among students to assist with the translations of texts. Many of the studied works were once performed. As linguists map phonemes to synthesized voices, Pronunciation standards can help bring this language "back to life" for historians and Arts programs. Additionally, blind and low vision scholars, unable to read the texts, could assist with additional translations.

### Software Application Development
Anna is a developer in a Content Management System (CMS) start-up based in Latvia. The Product Owner is wanting the next release to have the capability of pronouncing speech "just like Alexa can", to demonstrate the start-up's capability in a competitive SaaS space.




