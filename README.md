# Readout

Build blazing fast docs with zero configuration.

> Note: This project is under development, do not use it in production!

## Instructions

**Step 1:** Create a docs folder in the root of any public repository. The docs folder needs to have a file named `index.mdx` inside of it.

**Step 2:** Create a `readout.config.json` file with the navigation field to generate the
TOC of the your documentation site.

## config

**navigation**:
Add mdx file in the

**sample navigation**:\*\*\*\*

```json
{
  "navigation": {
    "anchors": [
      { "name": "outside One", "href": "https://outpost.run" },
      { "name": "outside two", "href": "https://controlplane.com" }
    ]
  }
}
```

You can also have navigation groups which help you group several navigation links together

```json
{
  "navigation": {
    "navLinks": [
      { "name": "outside One", "path": "outside_one.mdx" },
      { "name": "outside two", "path": "outside_two.mdx" }
    ],
    "groups": [
      {
        "name": "one",
        "navLinks": [
          { "name": "page One", "path": "first_post.mdx" },
          { "name": "page two", "path": "second_post.mdx" }
        ]
      },
      {
        "name": "two",
        "navLinks": [
          { "name": "page One", "path": "first_post.mdx" },
          { "name": "page two", "path": "second_post.mdx" }
        ]
      }
    ]
  }
}
```

## License

Readout is a project by [Outpost](https://outpost.run).

Released under the MIT License.