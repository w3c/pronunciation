# Introduction

As part of the Accessible Platform Architectures (APA) Working Group, the Pronunciation Task Force (PTF) is a collaboration of subject matter experts working to identify and specify the optimal approach which can deliver reliably accurate pronunciation across browser and operating environments. With the introduction of the Kurzweil reading aid in 1976, to the more sophisticated synthetic speech currently used to assist communication as reading aides for the visually impaired and those with reading disabilities, the technology has multiple applications in education, communication, entertainment, etc. From helping to teach spelling and pronunciation in different languages, Text-to-Speech (TTS) has become a vital technology for providing access to digital content on the web and through mobile devices.

The challenges that TTS introduces include but are not limited to the inability to accommodate regional variation and presentation of every phoneme present throughout the world, the incorrect determination by TTS of the pronunciation of content in context, and the current inability to influence other pronunciation characteristics such as prosody and emphasis. 

# User Scenarios
The purpose of developing user scenarios is to facilitate discussion and further requirements definition for pronunciation standards developed within the PTF prior to review of the APA. There are numerous interpretations of what form user scenarios adopt. Within the user experience research (UXR) body of practice, a user scenario is a written narrative related to the use of a service from the perspective of a user or user group. Importantly, the context of use is emphasized as is the desired outcome of use. There are potentially thousands of user scenarios for a technology such as TTS, however, the focus for the PTF is on the core scenarios that relate to the kinds of users who will engage with TTS.

User scenarios, like Personas, represent a composite of real world experiences. In the case of the PTF, the scenarios were derived from interviews of people who were end-consumers of TTS, as well as submitted narratives and industry examples from practitioners. There are several formats of scenarios. Several are general goal or task-oriented scenarios. Others elaborate on richer context, for example, educational assessment.

The following user scenarios are organized on the three perspectives of TTS use derived from analysis of the qualitative data collected from the discovery work:

+ **End-Consumers of TTS:** Encompasses those with a visual disability or other need to have TTS operational when using assistive technologies (ATs).
+ **Digital Content Managers:** Addresses activities related to those responsible for producing content that needs to be accessible to ATs and W3C-WAI Guidelines.
+ **Software Engineers:** Includes developers and architects required to put TTS into an application or service.

## End-Consumers of TTS
Ultimately, the quality and variation of TTS rendering by assistive technologies varies widely according to a user's context. The following user scenarios reinforce the necessity for accurate pronunciation from the perspective of those who consume digitally-generated content.

A) As a traveller who uses assitive technology (AT) with TTS to help navigate through websites, I need to hear arrival and destination codes pronounced accurately so I can select the desired travel itinerary. For example, a user with a visual impairment attempts to book a flight to Ottawa, Canada and so goes to a travel website. The user already knows the airport code and enters "YOW". The site produces the result in a drop-down list as "Ottawa, CA" but the AT does not pronounce the text accurately to help the user make the correct association between their data entry and the list item. 

B) As a test taker (tester) with a visual impairment who may use assistive technology to access the test content with speech software, screen reader or refreshable braille device, I want the content to be presented as intended, with accurate pronunciation and articulation, so that my assessment accurately reflects my knowledge of the content.

C) As a student/learner with auditory and cognitive processing issues, it is difficult to distinguish sounds, inflections, and variations in pronunciation as rendered through synthetic voice, such as text-to-speech or screen reader technologies. Consistent and accurate pronunciation whether human-provided, external, or embedded is needed to support working executive processing, auditory processing and memory that facilitates comprehension in literacy and numeracy for learning and for assessments.

D) As an English Learner (EL) or a visually impaired early learner using speech synthesis for reading comprehension that includes decoding words from letters as part of the learning construct (intent of measurement), pronunciation accuracy is vital to successful comprehension, as it allows the learner to distinguish sounds at the sentence, word, syllable, and phoneme level.

## Content Management for TTS
The advent of graphical user interfaces (GIUs) for the management and editing of text content has given rise to content creators not requiring technical expertise beyond the ability to operate a text editing application such as Microsoft Word. The following scenario summarizes the general use, accompanied with a hypothetical application. 

A) As a content creator, I want to create content that can readily be delivered both assistive technology and can convey the correct meaning and ensure that screen readers render the right pronunciation based on the surrounding context. A variation on this scenario may be as follows:

+ As a content producer for a global commercial site that is inclusive, I need to be able to provide accessible culture-specific content for different geographic regions.

### Educational Assessment
In the educational assessment field, providing accurate and concise pronunciation for students with auditory accommodations, such as text-to-speech (TTS) or students with screen readers, is vital for ensuring content validity and alignment with the intended construct, which objectively measures a test takers knowledge and skills.  For test administrators/educators, pronunciations must be consistent across instruction and assessment in order to avoid test bias or impact effects for students.  Some additional requirements for the test administrators, include, but are not limited to, such scenarios:

A) As a test administrator, I want to ensure that students with the read aloud accommodation, who are using assistive technology or speech synthesis as an alternative to a human reader, have the same speech quality (e.g., intonation, expression, pronunciation, and pace, etc.) as spoken language.

Speech accuracy with mathematical expressions, including numbers, fractions, and operations can be difficult to pronounce with existing TTS. Some mathematical expressions required special pronunciations to ensure accurate interpretation while maintaining test validity and construct. Specific examples include:

+ Mathematical formulas written in simple text with special formatting, should convey the correct meaning of the expression to identify changes from normal text to super- or to sub-script text.
For example, without the proper formatting, the equation a3-b3=(a-b)(a2+ab+b2) may incorrectly render through some technologies and applications as a3-b3=(a-b)(a2+ab+b2).
+ Distinctions made in writing are often not made explicit in speech; For example, “fx” may be interpreted as: fx, f(x), fx, F X, F X. The distinction depends on the context; requiring the author to provide consistent and accurate semantic markup.
+ For math equations with Greek letters, it is important that the speech synthesizer be able to distinguish the phonetic differences between them, whether in the natural language or phonetic equivalents. For example, ε (epsilon) υ (upsilon) φ (phi) χ (chi) ξ(xi).
 
B) As a test administrator/educator, pronunciations must be consistent across instruction and assessment, in order to avoid test bias and pronunciation effects on performance for students with disabilities (SWD) in comparison to students without disabilities (SWOD). Examples include:

+ If a test question is measuring rhyming of words or sounds of words, the speech synthesis should not read aloud the words, but rather spell out the words in the answer options.
+ If a test question is measuring spelling and a student needs to consider spelling correctness/incorrectness, the speech synthesis should not read aloud the misspelled words, especially for words, such as:

  + *Heteronyms/homographs*: same spelling, different pronunciation, different meanings, such as lead (to go in front of) or lead (a metal); wind (to follow a course that is not straight) or wind (a gust of air); bass (low, deep sound) or bass (a type of fish), etc.
  + *Homophone*: words that sound alike, such as, to/two/too; there/their/they're; pray/prey; etc.
  + *Homonyms*: multiple meaning words, such as, scale (measure) or scale (climb, mount); fair (reasonable) or fair (carnival); suit (outfit) or suit (harmonize); etc.

### Academic Research
The extension of content management in TTS is one as a means of encoding and preserving spoken text for academic analyses; irrespective of discipline, subject domain, or research methodology.

A) As a linguist, I want to represent all the pronunciation variations of a given word in any language, for future analyses.

## Software Application Development
Technical standards for software development assist organizations and individuals to provide accessible experiences for users with disabilities. The final user scenarios in this document are considered from the perspective of those who design and develop software. 

A) As a Product Owner for a web content management system (CMS), I want the next software product release to have the capability of pronouncing speech "just like Alexa can".

B) As a client-side user interface developer, I need a way to render text content so it is spoken accurately with assistive technologies. 





