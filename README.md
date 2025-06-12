## Day - 1

### File based routing

1. page.tsx
2. layout.tsx
3. basic folder structure
4. routing -> client side routing (endpoint)
5. app router

## Day - 2

### How to use Image in nextjs

import imgSrc form "./public/a1.svg";
<Image src={imgSrc} alt="Logo" width={120} height={120} />

In "tsconfig.js" file

"paths": {
"@/*": ["./src/_"],
"public/*":["./public/*"]
}
