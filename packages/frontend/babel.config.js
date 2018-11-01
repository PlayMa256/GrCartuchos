module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: [
            "> 1%",
            "last 2 versions",
            "not ie <=10",
            "ie 11",
            "Firefox ESR"
          ]
        },
        modules: false,
        useBuiltIns: "entry"
      }
    ],
    "@babel/preset-react"
  ],
  plugins: [
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-syntax-dynamic-import",
    "relay"
  ]
};
