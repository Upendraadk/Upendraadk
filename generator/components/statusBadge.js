import { COLORS } from "../colors.js";

export function statusBadge() {

return `

<g>

<rect
x="1340"
y="20"
width="190"
height="38"
rx="19"
fill="${COLORS.surface}"
stroke="${COLORS.success}"
stroke-width="2"/>

<circle
cx="1365"
cy="39"
r="6"
fill="${COLORS.success}">

<animate
attributeName="opacity"
values="1;0.3;1"
dur="1.2s"
repeatCount="indefinite"/>

</circle>

<text
x="1380"
y="45"
font-size="15"
font-family="Segoe UI"
fill="${COLORS.text}">

Available for Hire

</text>

</g>

`;

}