var respecConfig = {
    // embed RDFa data in the output
  trace: true,
  doRDFa: '1.0',
  includePermalinks: true,
  permalinkEdge: true,
  permalinkHide: false,
  tocIntroductory: true,
  // specification status (e.g., WD, LC, NOTE, etc.). If in doubt use ED.
  specStatus: "DNOTE",
  noRecTrack: true,
    //crEnd:                "2012-04-30",
    //perEnd:               "2013-07-23",
    //publishDate:          "2013-08-22",
    //diffTool:             "http://www.aptest.com/standards/htmldiff/htmldiff.pl",

    // the specifications short name, as in http://www.w3.org/TR/short-name/
    shortName:            "pronunciation-use-cases",


    // if you wish the publication date to be other than today, set this
    //publishDate:  "2017-05-09",
    copyrightStart:  "2025",
    license: "w3c-software-doc",

    // if there is a previously published draft, uncomment this and set its YYYY-MM-DD date
    // and its maturity status
    //previousPublishDate:  "",
    //previousMaturity:  "",
    //prevRecURI: "",
    //previousDiffURI: "",

    // if there a publicly available Editors Draft, this is the link
    edDraftURI: "https://w3c.github.io/pronunciation/user-scenarios",

    // if this is a LCWD, uncomment and set the end of its review period
    // lcEnd: "2012-02-21",

    // editors, add as many as you like
    // only "name" is required
  editors: [
    {
      name: "Paul Grenier",
      url: 'https://www.w3.org/users/112867',

      company: "Invited Expert",

      w3cid: 111500
    },
    {
      name: "Irfan Ali",
      url: 'https://www.w3.org/users/139064',

      company: "BlackRock",

      w3cid: 139064
    }
  ],

    // authors, add as many as you like.
    // This is optional, uncomment if you have authors as well as editors.
    // only "name" is required. Same format as editors.

    //authors:  [
    //    { name: "Your Name", url: "http://example.org/",
    //      company: "Your Company", companyURI: "http://example.com/" },
    //],

    /*
    alternateFormats: [
      { uri: 'aria-diff.html', label: "Diff from Previous Recommendation" } ,
      { uri: 'aria.ps', label: "PostScript version" },
      { uri: 'aria.pdf', label: "PDF version" }
    ],
    */

    // errata: 'http://www.w3.org/2010/02/rdfa/errata.html',

  group: "apa",
  //maxTocLevel: 2,
  github: "w3c/pronunciation",


  };
