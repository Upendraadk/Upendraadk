import { COLORS } from "../colors.js";

const TECH = [
  {
    name: "React",
    color: COLORS.react,
    x: 620,
    y: 110,
    delay: "0s"
  },
  {
    name: "Python",
    color: COLORS.python,
    x: 760,
    y: 220,
    delay: "1s"
  },
  {
    name: "JavaScript",
    color: COLORS.javascript,
    x: 560,
    y: 330,
    delay: "2s"
  },
  {
    name: "Git",
    color: COLORS.git,
    x: 760,
    y: 420,
    delay: "3s"
  },
  {
    name: "AI",
    color: COLORS.secondary,
    x: 620,
    y: 520,
    delay: "4s"
  }
];

export function techIcons() {

    let svg = `<g id="tech-icons">`;

    TECH.forEach((tech) => {

        svg += `

<g>

<rect
    x="${tech.x}"
    y="${tech.y}"
    rx="18"
    width="160"
    height="52"
    fill="${COLORS.surface}"
    stroke="${tech.color}"
    stroke-width="2"
    opacity="0.95">

<animateTransform
attributeName="transform"
type="translate"
values="0 0;0 -8;0 0"
dur="6s"
begin="${tech.delay}"
repeatCount="indefinite"/>

</rect>

<circle
cx="${tech.x+24}"
cy="${tech.y+26}"
r="8"
fill="${tech.color}"/>

<text
x="${tech.x+42}"
y="${tech.y+32}"
font-size="18"
font-family="Segoe UI"
font-weight="600"
fill="${COLORS.text}">

${tech.name}

</text>

</g>

`;

    });

    svg += `</g>`;

    return svg;

}