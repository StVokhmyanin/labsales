const presets = [
  ['@babel/preset-env', { 
    targets: {
      "browsers": [
        "cover 99.5%"
      ]
    },
    useBuiltIns: "entry"
  }]
];

module.exports = { presets };