var respecConfig = {
    // embed RDFa data in the output
    trace:  true,
    doRDFa: '1.0',
    includePermalinks: true,
    permalinkEdge:     true,
    permalinkHide:     false,
    tocIntroductory: true,
    // specification status (e.g., WD, LC, NOTE, etc.). If in doubt use ED.
    specStatus:           "ED",
    noRecTrack: false,
    //crEnd:                "2012-04-30",
    //perEnd:               "2013-07-23",
    //publishDate:          "2013-08-22",
    //diffTool:             "http://www.aptest.com/standards/htmldiff/htmldiff.pl",

    // the specifications short name, as in http://www.w3.org/TR/short-name/
    shortName:            "spoken-html",


    // if you wish the publication date to be other than today, set this
    //publishDate:  "2017-05-09",
    copyrightStart:  "2021",
    license: "w3c-software",

    // if there is a previously published draft, uncomment this and set its YYYY-MM-DD date
    // and its maturity status
    //previousPublishDate:  "",
    //previousMaturity:  "",
    //prevRecURI: "",
    //previousDiffURI: "",

    // if there a publicly available Editors Draft, this is the link
    edDraftURI: "https://w3c.github.io/pronunciation/technical-approach",

    // if this is a LCWD, uncomment and set the end of its review period
    // lcEnd: "2012-02-21",

    // editors, add as many as you like
    // only "name" is required
    editors: [
      {
        name: "Irfan Ali",
        url: 'https://www.w3.org/users/98332',
        mailto: "iali@ets.org",
        company: "Educational Testing Service",
        companyURI: "https://www.ets.org/",
        w3cid: 98332
      },
        {
         name: "Markku Hakkinen",
        url: 'https://www.w3.org/users/35712',
        mailto: "mhakkinen@ets.org",
        company: "Educational Testing Service",
        companyURI: "https://www.ets.org/",
        w3cid: 35712
      },
        {
        name: "Paul Grenier",
        url: 'https://www.w3.org/users/',
        mailto: "pgrenier@gmail.com",
        company: "Invited Expert",
        w3cid: 111500
       
      },
      {
        name: "Ruoxi Ran",
        url: 'https://www.w3.org',
        mailto: "ran@w3.org",
        company: "W3C",
        companyURI: "http://www.w3.org",
        w3cid: 100586
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

    maxTocLevel: 3,

   // WG info
   //group: 83907
    group: "apa",
    github: "https://github.com/w3c/pronunciation/"

    // Spec URLs


  };
