---
title: Writing Guide for Marrakesh Sentinel
published: 2026-10-01
description: "How to write posts in Marrakesh Sentinel, including front-matter and supported markdown syntax."
tags: ["Marrakesh Sentinel", "Writing", "Internal"]
category: Guides
draft: false
---

## Where to Place the Post Files
They should be placed in `src/content/posts/` directory. You can also create sub-directories to better organize your posts and assets.

```
src/content/posts/
├── post-1.md
└── post-2/
    ├── cover.png
    └── index.md
```

## Front-matter of Posts

Each post in Marrakesh Sentinel starts with a front-matter section written in YAML format. This section contains metadata about the post, such as its title, publication date, description, tags, and more.

### Example 
```yaml
---
title: Title of the publication
published: 2026-10-01
description: Description of the publication.
image: ./cover.jpg
tags: [Foo, Bar]
category: Front-end
draft: false
---
```
### Supported Attributes

| Attribute     | Description                                                                                                                                                                                                 |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `title`       | The title of the post.                                                                                                                                                                                      |
| `published`   | The date the post was published.                                                                                                                                                                            |
| `description` | A short description of the post. Displayed on index page.                                                                                                                                                   |
| `image`       | The cover image path of the post.<br/>1. Start with `http://` or `https://`: Use web image<br/>2. Start with `/`: For image in `public` dir<br/>3. With none of the prefixes: Relative to the markdown file |
| `tags`        | The tags of the post.                                                                                                                                                                                       |
| `category`    | The category of the post.                                                                                                                                                                                   |
| `draft`        | If this post is still a draft, which won't be displayed.                                                                                                                                                    |

## Syntax Overview

This document defines the complete syntax supported by Marrakesh Sentinel and demonstrates how each element renders.

### Headings

```markdown
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
```

### Text Formatting

#### Source

```markdown
*italic* **bold**  ~~strikethrough~~  __underline__ <mark>highlighted</mark>  `inline code`
```

#### Preview

*italic* **bold**  ~~strikethrough~~  __underline__ <mark>highlighted</mark>  `inline code`


### Links

#### Source

```markdown
[Visit Marrakesh Sentinel](https://marrakeshsentinel.com)
```

#### Preview

[Visit Marrakesh Sentinel](https://marrakeshsentinel.com)


### Images

#### Source

```markdown
![Image Title](https://images.unsplash.com/photo-1768742574399-bf73e164336d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D )
```

#### Preview

![Image Title](https://images.unsplash.com/photo-1768742574399-bf73e164336d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)


### Blockquotes

#### Source

```markdown
> The desert teaches clarity.
>
>> Nested quotes are supported.
```

#### Preview

> The desert teaches clarity.
>
> > Nested quotes are supported.


### Lists

#### Unordered List

##### Source

```markdown
- Alpha  
- Beta  
  - Nested item
```

##### Preview

* Alpha
* Beta

  * Nested item


#### Ordered List

##### Source

```markdown
1. First  
2. Second  
3. Third
```

##### Preview

1. First
2. Second
3. Third


#### Task Lists

##### Source

```markdown
- [x] Parse input  
- [ ] Render output
```

##### Preview

* [x] Parse input
* [ ] Render output


### Tables

#### Source

```markdown
| Feature | Supported | Notes       |  
|---------|-----------|-------------|  
| Bold    | Yes       | **Syntax**  |  
| Code    | Yes       | Inline & blocks |
```

#### Preview

| Feature | Supported | Notes       |  
|---------|-----------|-------------|  
| Bold    | Yes       | **Syntax**  |  
| Code    | Yes       | Inline & blocks |

### Code Blocks

#### Source

```markdown
```js
function greet(name) {
  return `Hello, ${name}`;
}
#``` remove the extra #
```

#### Preview

```js
function greet(name) {
  return `Hello, ${name}`;
}
```



### Admonitions

Following types of admonitions are supported: `note` `tip` `important` `warning` `caution`

#### Source

```markdown
:::note
Highlights information that users should take into account, even when skimming.
:::

:::tip
Optional information to help a user be more successful.
:::

:::important
Crucial information necessary for users to succeed.
:::

:::warning
Critical content demanding immediate user attention due to potential risks.
:::

:::caution
Negative potential consequences of an action.
:::
```

#### Preview

:::note
Highlights information that users should take into account, even when skimming.
:::

:::tip
Optional information to help a user be more successful.
:::

:::important
Crucial information necessary for users to succeed.
:::

:::warning
Critical content demanding immediate user attention due to potential risks.
:::

:::caution
Negative potential consequences of an action.
:::


### Footnotes

#### Source

```
This sentence needs context.[^1]

[^1]: Footnotes appear at the end of the document.
```

#### Preview

This sentence needs context.[^1]

[^1]: Footnotes appear at the end of the document.


#### Spoiler

You can add spoilers to your text. The text also supports **Markdown** syntax.

The content :spoiler[is hidden **ayyy**]!

```markdown
The content :spoiler[is hidden **ayyy**]!

```

#### Embedded Videos

Just copy the embed code from YouTube or other platforms, and paste it in the markdown file.

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/Ujvy-DEA-UM?si=paJ8jEySsc9MdtqN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
```
<iframe width="560" height="315" src="https://www.youtube.com/embed/Ujvy-DEA-UM?si=paJ8jEySsc9MdtqN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Advanced Code Block Features

#### GitHub Repository Cards
You can add dynamic cards that link to GitHub repositories, on page load, the repository information is pulled from the GitHub API. 

##### Source

```markdown
::github{repo="meel-hd/sentinel"}
```
##### Preview

::github{repo="meel-hd/sentinel"}


#### Rendering ANSI escape sequences

```ansi
ANSI colors:
- Regular: [31mRed[0m [32mGreen[0m [33mYellow[0m [34mBlue[0m [35mMagenta[0m [36mCyan[0m
- Bold:    [1;31mRed[0m [1;32mGreen[0m [1;33mYellow[0m [1;34mBlue[0m [1;35mMagenta[0m [1;36mCyan[0m
- Dimmed:  [2;31mRed[0m [2;32mGreen[0m [2;33mYellow[0m [2;34mBlue[0m [2;35mMagenta[0m [2;36mCyan[0m

256 colors (showing colors 160-177):
[38;5;160m160 [38;5;161m161 [38;5;162m162 [38;5;163m163 [38;5;164m164 [38;5;165m165[0m
[38;5;166m166 [38;5;167m167 [38;5;168m168 [38;5;169m169 [38;5;170m170 [38;5;171m171[0m
[38;5;172m172 [38;5;173m173 [38;5;174m174 [38;5;175m175 [38;5;176m176 [38;5;177m177[0m

Full RGB colors:
[38;2;34;139;34mForestGreen - RGB(34, 139, 34)[0m

Text formatting: [1mBold[0m [2mDimmed[0m [3mItalic[0m [4mUnderline[0m
```

#### Code editor frames

```js title="my-test-file.js"
console.log('Title attribute example')
```


```html
<!-- src/content/index.html -->
<div>File name comment example</div>
```

#### Terminal frames

```bash
echo "This terminal frame has no title"
```



```powershell title="PowerShell terminal example"
Write-Output "This one has a title!"
```


#### Math
[Learn More!](https://katex.org/docs/supported.html)

##### Source

```latex
$$
E = mc^2
$$

$$
\begin{aligned}
E &= mc^2 \\[6pt]
\mathcal{L}(\phi,\partial\phi) &= \tfrac{1}{2}\partial_\mu\phi\,\partial^\mu\phi - \tfrac{1}{2}m^2\phi^2 \\[6pt]
\Box\phi + m^2\phi &= 0
\end{aligned}
$$

$$
\mathbf{A} =
\begin{pmatrix}
1 & 2 & 3 \\
0 & -1 & 4 \\
5 & 6 & 0
\end{pmatrix},
\qquad
\det(\mathbf{A}) = 1\cdot\det\!\begin{pmatrix}-1&4\\6&0\end{pmatrix}
-2\cdot\det\!\begin{pmatrix}0&4\\5&0\end{pmatrix}
+3\cdot\det\!\begin{pmatrix}0&-1\\5&6\end{pmatrix}
$$

$$
\int_{-\infty}^{\infty} e^{-x^2}\,dx = \sqrt{\pi},
\qquad
\sum_{n=0}^{\infty}\frac{x^n}{n!}=e^{x}
$$

$$
f(x)=
\begin{cases}
x^2 & x \ge 0\\[4pt]
-x & x < 0
\end{cases}
$$

$$
\begin{aligned}
\nabla\cdot\mathbf{E} &= \frac{\rho}{\varepsilon_0} \\[4pt]
\nabla\times\mathbf{B} - \dfrac{1}{c^2}\dfrac{\partial\mathbf{E}}{\partial t} &= \mu_0 \mathbf{J}
\end{aligned}
$$
```

##### Preview

$$
E = mc^2
$$

$$
\begin{aligned}
E &= mc^2 \\[6pt]
\mathcal{L}(\phi,\partial\phi) &= \tfrac{1}{2}\partial_\mu\phi\,\partial^\mu\phi - \tfrac{1}{2}m^2\phi^2 \\[6pt]
\Box\phi + m^2\phi &= 0
\end{aligned}
$$

$$
\mathbf{A} =
\begin{pmatrix}
1 & 2 & 3 \\
0 & -1 & 4 \\
5 & 6 & 0
\end{pmatrix},
\qquad
\det(\mathbf{A}) = 1\cdot\det\!\begin{pmatrix}-1&4\\6&0\end{pmatrix}
-2\cdot\det\!\begin{pmatrix}0&4\\5&0\end{pmatrix}
+3\cdot\det\!\begin{pmatrix}0&-1\\5&6\end{pmatrix}
$$

$$
\int_{-\infty}^{\infty} e^{-x^2}\,dx = \sqrt{\pi},
\qquad
\sum_{n=0}^{\infty}\frac{x^n}{n!}=e^{x}
$$

$$
f(x)=
\begin{cases}
x^2 & x \ge 0\\[4pt]
-x & x < 0
\end{cases}
$$

$$
\begin{aligned}
\nabla\cdot\mathbf{E} &= \frac{\rho}{\varepsilon_0} \\[4pt]
\nabla\times\mathbf{B} - \dfrac{1}{c^2}\dfrac{\partial\mathbf{E}}{\partial t} &= \mu_0 \mathbf{J}
\end{aligned}
$$
