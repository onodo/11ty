module.exports = {
  extends: ["stylelint-config-recess-order", "stylelint-config-recommended-scss", "stylelint-config-prettier"],
  customSyntax: "postcss-scss",
  rules: {
    "scss/at-import-partial-extension": null,
    "rule-empty-line-before": [
      "always-multi-line",
      {
        ignore: ["after-comment", "first-nested"],
      },
    ],
    "scss/at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["apply", "tailwind"],
      },
    ],
  },
}
