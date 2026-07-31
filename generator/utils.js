export function svg(width, height, content) {
  return `
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 ${width} ${height}">

${content}

</svg>
`;
}