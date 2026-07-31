import { COLORS } from "../colors.js";
import { CONFIG } from "../config.js";

export function particles() {

  let svg = `<g id="particles">`;

  const particleCount = 150;

  for (let i = 0; i < particleCount; i++) {

    const x = Math.random() * CONFIG.width;
    const y = Math.random() * CONFIG.height;

    const radius = (Math.random() * 2 + 0.5).toFixed(2);

    const opacity = (Math.random() * 0.6 + 0.2).toFixed(2);

    const duration = (Math.random() * 6 + 4).toFixed(2);

    const delay = (Math.random() * 5).toFixed(2);

    const moveY = (Math.random() * 20 + 10).toFixed(2);

    svg += `

<circle
cx="${x}"
cy="${y}"
r="${radius}"
fill="${COLORS.primary}"
opacity="${opacity}">

<animate
attributeName="opacity"
values="${opacity};1;${opacity}"
dur="${duration}s"
begin="${delay}s"
repeatCount="indefinite"/>

<animateTransform
attributeName="transform"
type="translate"
values="0 0;0 -${moveY};0 0"
dur="${duration}s"
begin="${delay}s"
repeatCount="indefinite"/>

</circle>

`;

  }

  svg += `</g>`;

  return svg;

}