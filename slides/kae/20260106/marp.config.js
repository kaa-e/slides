module.exports = {
    allowLocalFiles: true,
    themeSet: "./slide.css",
    options: {
      markdown: {
        breaks: false,
        html: true,
      },
      html: {
        template: "bespoke",
        bespoke: {
          progress: true,
        }
      },
      pdf: {
        format: "A4",
        printBackground: true,
        preferCSSPageSize: true,
      },
      pptx: {
        output: "slides.pptx",
      }
    }
  };
