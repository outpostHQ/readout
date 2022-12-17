#!/usr/bin/env node

const fs = require("fs");

const configString = `{
    "navigation": {
      "navLinks": [
          { "name": "outside One", "path": "outside_one.mdx" },
          { "name": "outside two", "path": "outside_two.mdx" }],
      "groups":[ {
        "name": "one",
        "navLinks": [
          { "name": "page One", "path": "first_post.mdx" },
          { "name": "page two", "path": "second_post.mdx" }
        ]
      }, {
        "name": "two",
        "navLinks": [
          { "name": "page One", "path": "first_post.mdx" },
          { "name": "page two", "path": "second_post.mdx" }
        ]
      }]
    }
  }
`;

try {
  fs.mkdir(`./docs`, { recursive: true }, (err: Error) => {
    if (err) throw err;
    fs.writeFile(
      `./docs/index.mdx`,
      "# The home page for your documentaion",
      (err: Error) => {
        if (err) throw err;
      }
    );
    fs.writeFile(`./docs/Page-one.mdx`, "# page links", (err: Error) => {
      if (err) throw err;
    });
  });
  fs.writeFile(`./readout.config.json`, configString, (err: Error) => {
    if (err) throw err;
  });
} catch (err) {
  console.log("Error", err);
}
