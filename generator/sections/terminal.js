import { CONFIG } from "../config.js";
import { COLORS } from "../colors.js";
import { skillBars } from "../components/skillBars.js";

export function terminal() {

let svg = `

<g id="terminal" filter="url(#shadow)">

<!-- Window -->

<rect
x="960"
y="70"
width="560"
height="500"
rx="18"
fill="${COLORS.surface}"
stroke="${COLORS.border}"
stroke-width="2"/>

<!-- Header -->

<rect
x="960"
y="70"
width="560"
height="42"
rx="18"
fill="#111827"/>

<rect
x="960"
y="92"
width="560"
height="478"
fill="${COLORS.surface}"/>

<!-- Buttons -->

<circle cx="985" cy="91" r="6" fill="#FF5F56"/>
<circle cx="1008" cy="91" r="6" fill="#FFBD2E"/>
<circle cx="1031" cy="91" r="6" fill="#27C93F"/>

<!-- Title -->

<text
x="1240"
y="96"
text-anchor="middle"
font-size="15"
font-family="Segoe UI"
fill="${COLORS.muted}">

upendra@portfolio:~

</text>

`;

let y = 145;

CONFIG.terminal.forEach((line,index)=>{

const color =
line.startsWith("$")
? COLORS.success
: COLORS.text;

svg += `

<text
x="985"
y="${y}"
font-size="18"
font-family="Consolas"
fill="${color}"
opacity="0">

${line}

<animate
attributeName="opacity"
values="0;1"
begin="${index*0.35}s"
dur="0.1s"
fill="freeze"/>

</text>

`;

y += 28;

});

svg += `

<text
x="1180"
y="150"
font-size="16"
font-family="Segoe UI"
fill="${COLORS.primary}"
font-weight="700">

Skills

</text>

`;

svg += skillBars(1180,180);

svg += `

<!-- Status -->

<text
x="1180"
y="435"
font-size="16"
font-family="Segoe UI"
fill="${COLORS.primary}"
font-weight="700">

Current Status

</text>

<circle
cx="1190"
cy="462"
r="6"
fill="${COLORS.success}">

<animate
attributeName="opacity"
values="1;0.4;1"
dur="1s"
repeatCount="indefinite"/>

</circle>

<text
x="1205"
y="468"
font-size="16"
font-family="Segoe UI"
fill="${COLORS.text}">

Available for Internship

</text>

`;

svg += `

<rect
x="986"
y="453"
width="10"
height="18"
fill="${COLORS.success}">

<animate
attributeName="opacity"
values="1;0;1"
dur="0.8s"
repeatCount="indefinite"/>

</rect>

`;

svg += `</g>`;

return svg;

}