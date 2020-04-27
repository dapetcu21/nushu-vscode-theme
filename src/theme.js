const { getVariant } = require("./process");
const { getColors } = require("./primer");

function getTheme({ style, name }) {
  // Usage: `auto('pink')`
  const auto = (hex) => getVariant(hex, style);

  // Usage: `pick({ light: "lightblue", dark: "darkblue" })`
  const pick = (options) => options[style];

  const primer = getColors(style);
  return {
    name: name,
    colors: {
      focusBorder: primer.blue[4],
      foreground: primer.gray[7],
      descriptionForeground: primer.gray[5],
      errorForeground: primer.red[6],
      "textLink.foreground": primer.blue[5],
      "textLink.activeForeground": primer.blue[6],
      "textBlockQuote.background": primer.gray[0],
      "textBlockQuote.border": primer.gray[2],
      "textCodeBlock.background": primer.gray[1],
      "textPreformat.foreground": primer.gray[6],
      "textSeparator.foreground": primer.gray[3],
      "button.background": auto("#159739"),
      "button.foreground": primer.white,
      "button.hoverBackground": auto("#138934"),
      "checkbox.border": primer.gray[3],
      "dropdown.background": primer.gray[0],
      "dropdown.listBackground": primer.white,
      "dropdown.border": primer.gray[2],
      "dropdown.foreground": primer.gray[9],
      "input.background": primer.gray[0],
      "input.border": primer.gray[2],
      "input.foreground": primer.gray[9],
      "input.placeholderForeground": primer.gray[4],
      "badge.foreground": primer.blue[6],
      "badge.background": primer.blue[1],
      "progressBar.background": primer.blue[4],
      "titleBar.activeForeground": primer.gray[9],
      "titleBar.activeBackground": primer.white,
      "titleBar.inactiveForeground": primer.gray[5],
      "titleBar.inactiveBackground": primer.gray[1],
      "titleBar.border": primer.gray[2],
      "activityBar.foreground": primer.gray[9],
      "activityBar.inactiveForeground": primer.gray[4],
      "activityBar.background": primer.white,
      "activityBarBadge.foreground": primer.white,
      "activityBarBadge.background": primer.blue[4],
      "activityBar.activeBorder": auto("#f9826c"),
      "activityBar.border": primer.gray[2],
      "sideBar.foreground": primer.gray[7],
      "sideBar.background": primer.gray[1],
      "sideBar.border": primer.gray[2],
      "sideBarTitle.foreground": primer.gray[9],
      "sideBarSectionHeader.foreground": primer.gray[9],
      "sideBarSectionHeader.background": primer.gray[1],
      "sideBarSectionHeader.border": primer.gray[2],
      "list.hoverForeground": primer.gray[9],
      "list.inactiveSelectionForeground": primer.gray[9],
      "list.activeSelectionForeground": primer.gray[9],
      "list.hoverBackground": auto("#ebf0f4"),
      "list.inactiveSelectionBackground": auto("#e8eaed"),
      "list.activeSelectionBackground": auto("#e2e5e9"),
      "tree.indentGuidesStroke": primer.gray[2],
      "notificationCenterHeader.background": primer.gray[0],
      "pickerGroup.border": primer.gray[2],
      "pickerGroup.foreground": primer.gray[9],
      "quickInput.background": primer.gray[0],
      "quickInput.foreground": primer.gray[9],
      "statusBar.foreground": primer.gray[6],
      "statusBar.background": primer.white,
      "statusBar.border": primer.gray[2],
      "statusBar.noFolderBackground": primer.white,
      "statusBar.debuggingBackground": auto("#f9826c"),
      "statusBar.debuggingForeground": primer.white,
      "editorGroupHeader.tabsBackground": primer.gray[1],
      "editorGroupHeader.tabsBorder": primer.gray[2],
      "editorGroup.border": primer.gray[2],
      "tab.activeForeground": primer.gray[9],
      "tab.inactiveForeground": primer.gray[5],
      "tab.inactiveBackground": primer.gray[1],
      "tab.activeBackground": primer.white,
      "tab.hoverBackground": primer.white,
      "tab.unfocusedHoverBackground": primer.white,
      "tab.border": primer.gray[2],
      "tab.unfocusedActiveBorderTop": primer.gray[2],
      "tab.activeBorder": primer.white,
      "tab.unfocusedActiveBorder": primer.white,
      "tab.activeBorderTop": auto("#f9826c"),
      "breadcrumb.foreground": primer.gray[5],
      "breadcrumb.focusForeground": primer.gray[9],
      "breadcrumb.activeSelectionForeground": primer.gray[6],
      "breadcrumbPicker.background": primer.gray[0],
      "editor.foreground": primer.gray[9],
      "editor.background": primer.white,
      "editor.foldBackground": primer.gray[0],
      "editor.lineHighlightBackground": primer.gray[1],
      "editorLineNumber.foreground": auto("#1b1f234d"),
      "editorLineNumber.activeForeground": primer.gray[9],
      "editorIndentGuide.background": auto("#eff2f6"),
      "editorIndentGuide.activeBackground": auto("#d7dbe0"),
      "editorWhitespace.foreground": primer.gray[3],
      "editorCursor.foreground": primer.blue[7],
      "editor.inactiveSelectionBackground": auto("#0366d611"),
      "editor.selectionBackground": auto("#0366d625"),
      "editor.wordHighlightBackground": auto("#0366d622"),
      "editor.findMatchBackground": primer.yellow[4],
      "editor.findMatchHighlightBackground": auto("#ffdf5d66"),
      "editorBracketMatch.background": primer.blue[2],
      "editorBracketMatch.border": primer.blue[2],
      "editorGutter.modifiedBackground": primer.blue[4],
      "editorGutter.addedBackground": primer.green[5],
      "editorGutter.deletedBackground": primer.red[5],
      "diffEditor.insertedTextBackground": "#34d05822",
      "diffEditor.removedTextBackground": auto("#d73a4922"),
      "scrollbar.shadow": auto("#6a737d33"),
      "scrollbarSlider.background": auto("#959da533"),
      "scrollbarSlider.hoverBackground": auto("#959da544"),
      "scrollbarSlider.activeBackground": auto("#959da588"),
      "editorOverviewRuler.border": primer.white,
      "panel.background": primer.gray[1],
      "panel.border": primer.gray[2],
      "panelTitle.activeBorder": auto("#f9826c"),
      "panelTitle.activeForeground": primer.gray[9],
      "panelTitle.inactiveForeground": primer.gray[5],
      "panelInput.border": primer.gray[2],
      "terminal.ansiBlack": primer.gray[3],
      "terminal.ansiRed": primer.red[8],
      "terminal.ansiGreen": primer.green[8],
      "terminal.ansiYellow": primer.yellow[8],
      "terminal.ansiBlue":  primer.purple[8],
      "terminal.ansiMagenta": primer.pink[8],
      "terminal.ansiCyan": primer.blue[8],
      "terminal.ansiWhite": primer.gray[7],
      "terminal.ansiBrightBlack": primer.gray[5],
      "terminal.ansiBrightRed": primer.red[7],
      "terminal.ansiBrightGreen":  primer.green[7],
      "terminal.ansiBrightYellow": primer.yellow[7],
      "terminal.ansiBrightBlue": primer.purple[7],
      "terminal.ansiBrightMagenta":primer.pink[7],
      "terminal.ansiBrightCyan": primer.blue[7],
      "terminal.ansiBrightWhite": primer.gray[2],
      "terminal.background": "#f6f3ed",
      "terminal.foreground": primer.gray[6],
      "gitDecoration.addedResourceForeground": primer.green[5],
      "gitDecoration.modifiedResourceForeground": primer.blue[6],
      "gitDecoration.deletedResourceForeground": primer.red[5],
      "gitDecoration.untrackedResourceForeground": primer.green[5],
      "gitDecoration.ignoredResourceForeground": primer.gray[4],
      "gitDecoration.conflictingResourceForeground": primer.orange[6],
      "gitDecoration.submoduleResourceForeground": primer.gray[4],
      "debugToolBar.background": primer.white,
      "editor.stackFrameHighlightBackground": primer.yellow[1],
      "editor.focusedStackFrameHighlightBackground": primer.yellow[2],
      "settings.headerForeground": primer.gray[9],
      "settings.modifiedItemIndicator": primer.blue[4],
      "welcomePage.buttonBackground": primer.gray[1],
      "welcomePage.buttonHoverBackground": primer.gray[2],
    },
    tokenColors: [
      {
        scope: ["comment", "punctuation.definition.comment", "string.comment"],
        settings: {
          foreground: primer.gray[5],
        },
      },
      {
        scope: [
          "constant",
          "entity.name.constant",
          "variable.other.constant",
          "variable.language",
          // Added.
          "variable.other.normal"
        ],
        settings: {
          foreground: primer.blue[6],
        },
      },
      /* Added */
      {
        "scope": [
          "constant.language"
        ],
        "settings": {
          "foreground": primer.orange[7]
        }
      },
      /* */
      {
        scope: ["entity", "entity.name"],
        settings: {
          foreground: primer.purple[5],
        },
      },
      {
        scope: "variable.parameter.function",
        settings: {
          foreground: primer.gray[9],
        },
      },
      {
        scope: "entity.name.tag",
        settings: {
          // foreground: primer.green[6],
          foreground: primer.orange[7],
        },
      },
      {
        scope: "keyword",
        settings: {
          // foreground: primer.red[5],
          foreground: primer.yellow[9],
        },
      },
      {
        scope: ["storage", "storage.type"],
        settings: {
          // foreground: primer.red[5],
          foreground: primer.yellow[9],
        },
      },
      {
        scope: [
          "storage.modifier.package",
          "storage.modifier.import",
          "storage.type.java",
        ],
        settings: {
          foreground: primer.gray[9],
        },
      },
      {
        scope: [
          "string",
          "punctuation.definition.string",
          "string punctuation.section.embedded source",
        ],
        settings: {
          foreground: primer.blue[8],
        },
      },
      {
        scope: "support",
        settings: {
          foreground: primer.blue[6],
        },
      },
      /* Added */
      {
        "scope": [
          "source.yaml entity.name.tag"
        ],
        "settings": {
          foreground: primer.blue[6],
        }
      },
      /* */
      {
        scope: "meta.property-name",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: "variable",
        settings: {
          // foreground: primer.orange[6],
          foreground: primer.blue[7],
        },
      },
      {
        scope: "variable.other",
        settings: {
          foreground: primer.gray[9],
        },
      },
      {
        scope: "invalid.broken",
        settings: {
          fontStyle: "italic",
          foreground: primer.red[7],
        },
      },
      {
        scope: "invalid.deprecated",
        settings: {
          fontStyle: "italic",
          foreground: primer.red[7],
        },
      },
      {
        scope: "invalid.illegal",
        settings: {
          fontStyle: "italic",
          foreground: primer.red[7],
        },
      },
      {
        scope: "invalid.unimplemented",
        settings: {
          fontStyle: "italic",
          foreground: primer.red[7],
        },
      },
      {
        scope: "carriage-return",
        settings: {
          fontStyle: "italic underline",
          // background: primer.red[5],
          background: primer.yellow[9],
          // foreground: primer.gray[0],
          foreground: primer.nushuGray[0],
          content: "^M",
        },
      },
      {
        scope: "message.error",
        settings: {
          foreground: primer.red[7],
        },
      },
      {
        scope: "string source",
        settings: {
          foreground: primer.gray[9],
        },
      },
      {
        scope: "string variable",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: ["source.regexp", "string.regexp"],
        settings: {
          foreground: primer.blue[8],
        },
      },
      {
        scope: [
          "string.regexp.character-class",
          "string.regexp constant.character.escape",
          "string.regexp source.ruby.embedded",
          "string.regexp string.regexp.arbitrary-repitition",
        ],
        settings: {
          foreground: primer.blue[8],
        },
      },
      /* Added */
      {
        "scope": [
          "entity.other.attribute-name.pseudo-class",
          "entity.other.attribute-name.pseudo-element",
          "entity.other.attribute-name.pseudo-class.css punctuation.definition.entity.css",
          "entity.other.attribute-name.pseudo-element.css punctuation.definition.entity.css"
        ],
        "settings": {
          "foreground": primer.yellow[9]
        }
      },
      {
        "scope": [
          "entity.other.attribute-name.id", 
          "entity.other.attribute-name.id punctuation.definition.entity"
        ],
        "settings": {
          "foreground": primer.gray[9]
        }
      },
      /* Added */
      {
        scope: "string.regexp constant.character.escape",
        settings: {
          fontStyle: "bold",
          // foreground: primer.green[6],
          foreground: primer.orange[7],
        },
      },
      {
        scope: "support.constant",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: "support.variable",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: "meta.module-reference",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: "markup.list",
        settings: {
          foreground: primer.yellow[9],
        },
      },
      {
        scope: ["markup.heading", "markup.heading entity.name"],
        settings: {
          fontStyle: "bold",
          foreground: primer.blue[6],
        },
      },
      {
        scope: "markup.quote",
        settings: {
          // foreground: primer.green[6],
          foreground: primer.orange[7],
        },
      },
      {
        scope: "markup.italic",
        settings: {
          fontStyle: "italic",
          foreground: primer.gray[9],
        },
      },
      {
        scope: "markup.bold",
        settings: {
          fontStyle: "bold",
          foreground: primer.gray[9],
        },
      },
      {
        scope: "markup.raw",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: [
          "markup.deleted",
          "meta.diff.header.from-file",
          "punctuation.definition.deleted",
        ],
        settings: {
          background: primer.red[0],
          foreground: primer.red[7],
        },
      },
      {
        scope: [
          "markup.inserted",
          "meta.diff.header.to-file",
          "punctuation.definition.inserted",
        ],
        settings: {
          background: primer.green[0],
          foreground: primer.green[6],
        },
      },
      {
        scope: ["markup.changed", "punctuation.definition.changed"],
        settings: {
          background: primer.orange[1],
          foreground: primer.orange[6],
        },
      },
      {
        scope: ["markup.ignored", "markup.untracked"],
        settings: {
          // foreground: primer.gray[1],
          foreground: primer.nushuGray[1],
          background: primer.blue[6],
        },
      },
      {
        scope: "meta.diff.range",
        settings: {
          foreground: primer.purple[5],
          fontStyle: "bold",
        },
      },
      {
        scope: "meta.diff.header",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: "meta.separator",
        settings: {
          fontStyle: "bold",
          foreground: primer.blue[6],
        },
      },
      {
        scope: "meta.output",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: [
          "brackethighlighter.tag",
          "brackethighlighter.curly",
          "brackethighlighter.round",
          "brackethighlighter.square",
          "brackethighlighter.angle",
          "brackethighlighter.quote",
        ],
        settings: {
          foreground: primer.gray[6],
        },
      },
      {
        scope: "brackethighlighter.unmatched",
        settings: {
          foreground: primer.red[7],
        },
      },
      {
        scope: ["constant.other.reference.link", "string.other.link"],
        settings: {
          foreground: primer.blue[8],
          fontStyle: "underline",
        },
      },
      {
        name: "ITALIC",
        scope: [
          "comment",
          "storage.modifier",
          "punctuation.definition.comment",
          "entity.other",
          "variable.language",
          "support.type.vendored",
          "support.constant.vendored",
          "markup.quote",
          "markup.italic",
          "tag.decorator.js entity.name.tag.js",
          "tag.decorator.js punctuation.definition.tag.js",
          "keyword.control.clojure",
          "source.clojure meta.symbol.dynamic",
          "keyword.other.this.cs",
          "keyword.other.base.cs",
          "variable.other.member.c",
          "support.type.core.rust",
          "variable.other.object.property",
          "variable.other.property",
          "source.r meta.function.r keyword.control.r",
          "comment.line.roxygen.r keyword",
          "comment.line.roxygen.r variable.parameter.r",
          "keyword.control.inheritance.coffee",
          "comment.block.documentation.phpdoc.php keyword",
          "keyword.other.array.phpdoc.php",
          "storage.type.modifier",
          "comment.block.javadoc.java keyword",
          "comment.block.javadoc.java variable.parameter.java",
          "keyword.operator.documentation.powershell",
          "variable.other.table.property.lua",
          "storage.type.scala",
          "variable.parameter.function.language.special",
          "comment.block.documentation.scala keyword",
          "comment.block.documentation.scala variable.parameter",
          "support.function.builtin.go",
          "constant.other.symbol.hashkey.ruby",
          "constant.other.symbol.hashkey.ruby punctuation.definition.constant.ruby",
          "constant.other.symbol.ruby",
          "source.vala storage.type.generic",
          "constant.other.table-name",
          "constant.other.placeholder",
          "variable.other.field",
          "keyword.function.go",
          "entity.alias.import.go",
          "source.swift keyword.other.declaration-specifier",
          "support.variable.swift",
          "keyword.other.capture-specifier",
          "text.tex support.function.emph",
          "constant.other.math",
          "support.function.textit",
          "entity.name.footnote",
          "entity.name.function.directive.graphql",
          "source.graphql support.type.enum",
          "source.ocaml entity.name.filename",
          "source.reason entity.name.filename",
          "abstract.definition.fsharp keyword",
          "abstract.definition.fsharp entity",
          "function.anonymous keyword",
          "entity.name.record.field.accessor.elm",
          "support.type.primitive",
          "support.type.builtin",
          "keyword.type.cs",
          "storage.type.built-in",
          "storage.type.primitive",
          "source.python support.type.python",
          "storage.type.core.rust",
          "source.swift support.type",
          "source.go storage.type",
          "storage.type.php",
          "storage.type.function.kotlin",
          "entity.name.type.kotlin",
          "support.type.julia",
          "variable.other.member",
          "keyword.other.import",
          "keyword.package",
          "keyword.import",
          "source.wsd keyword.control.diagram",
          "keyword.language.gherkin.feature.step",
          "source.hlsl storage.type.basic",
          "source.apex keyword.type",
          "sharing.modifier",
          "source.nim storage.type.concrete",
          "meta.preprocessor.pragma.nim",
          "storage.type.integral",
          "entity.name.scope-resolution.function.call",
          "support.class.builtin",
          "comment.block.documentation storage.type.class",
          "source.tf meta.keyword.string",
          "source.tf meta.keyword.number",
          "source.scala entity.name.class",
          "meta.import keyword.control",
          "keyword.control.export",
          "meta.tag.attributes entity.other.attribute-name",
          "text.html entity.other.attribute-name",
          "meta.attribute-selector entity.other.attribute-name",
        ],
        settings: {
          fontStyle: "italic",
        },
      },
      {
        name: "MORE-ITALIC",
        scope: [
          "markup.bold markup.italic",
          "markup.italic markup.bold",
          "markup.quote markup.bold",
          "markup.bold markup.italic string",
          "markup.italic markup.bold string",
          "markup.quote markup.bold string",
          "text.html punctuation.section.embedded",
          "variable.other.c",
          "storage.modifier.lifetime.rust",
          "entity.name.lifetime.rust",
          "source.rust meta.attribute.rust",
          "meta.attribute.id entity.other.attribute-name",
          "keyword.other.fn.rust",
          "source.ocaml punctuation.definition.tag emphasis",
          "source.tf entity.name",
          "comment.block.documentation variable.other",
        ],
        settings: {
          fontStyle: "italic",
        },
      },
      {
        name: "NORMAL",
        scope: [
          "keyword.begin.tag.ejs",
          "source.python meta.function.decorator.python support.type.python",
          "source.cs keyword.other",
          "keyword.other.var.cs",
          "source.go keyword",
          "storage.modifier.static.rust",
          "variable.parameter.r",
          "variable.parameter.handlebars",
          "storage.modifier.import",
          "storage.modifier.package",
          "meta.class.identifier storage.modifier",
          "keyword.operator.other.powershell",
          "source.lua storage.type.function",
          "source.css variable.parameter",
          "string.interpolated variable.parameter",
          "source.apacheconf keyword",
          "keyword.other.julia",
          "storage.modifier.using.vala",
          "source.objc keyword.other.property.attribute",
          "source.sql keyword.other",
          "keyword.other.using.vala",
          "keyword.operator.function.infix",
          "keyword.control.directive",
          "keyword.other.rust",
          "keyword.other.declaration-specifier.swift",
          "entity.name.function.swift",
          "keyword.control.function-end.lua",
          "keyword.control.class",
          "keyword.control.def",
          "punctuation.definition.variable",
          "entity.name.section.latex",
          "source.ocaml keyword markup.underline",
          "source.ocaml constant.language constant.numeric entity.other.attribute-name.id.css",
          "source.reason entity.other.attribute-name constant.language constant.numeric",
          "keyword.format.specifier.fsharp",
          "entity.name.section.fsharp",
          "binding.fsharp keyword",
          "binding.fsharp keyword.symbol",
          "record.fsharp keyword",
          "keyword.symbol.fsharp",
          "entity.name.section.fsharp keyword",
          "namespace.open.fsharp keyword",
          "namespace.open.fsharp entity",
          "storage.type",
          "source.cpp keyword.other",
          "source.c keyword.other",
          "keyword.other.unit",
          "storage.modifier.array.bracket",
          "keyword.control.default",
          "meta.import.haskell keyword",
          "keyword.declaration.dart",
          "source.wsd keyword.other",
          "keyword.other.skinparam",
          "source.css keyword.control",
          "source.css keyword.operator",
          "keyword.language.gherkin.feature.scenario",
          "keyword.control.cucumber.table",
          "source.toml entity.other.attribute-name",
          "source.toml keyword",
          "keyword.other.nim",
          "source.nim keyword.other.common.function",
          "source.nim keyword.other",
          "source.scala keyword.declaration",
          "source.scala entity.name.class.declaration",
          "entity.other.attribute-name.pseudo-class",
          "entity.other.attribute-name.pseudo-element",
          "entity.other.attribute-name.pseudo-class.css punctuation.definition.entity.css",
          "entity.other.attribute-name.pseudo-element.css punctuation.definition.entity.css",
        ],
        settings: {
          fontStyle: "",
        },
      },
    ],
  };
}

module.exports = getTheme;
