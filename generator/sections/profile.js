import { CONFIG } from "../config.js";
import { COLORS } from "../colors.js";

export function profile() {

return `

<g id="profile">

<!-- Name -->

<text
    x="70"
    y="110"
    font-size="58"
    font-family="Segoe UI"
    font-weight="700"
    fill="${COLORS.text}"
    filter="url(#glow)">

${CONFIG.name}

</text>

<!-- Title -->

<text
    x="70"
    y="155"
    font-size="26"
    font-family="Segoe UI"
    fill="${COLORS.primary}">

${CONFIG.title}

</text>

<!-- Subtitle -->

<text
    x="70"
    y="190"
    font-size="20"
    font-family="Segoe UI"
    fill="${COLORS.muted}">

${CONFIG.subtitle}

</text>

<!-- Divider -->

<line
    x1="70"
    y1="220"
    x2="520"
    y2="220"
    stroke="${COLORS.borderLight}"
    stroke-width="2"/>

<!-- Information Cards -->

${card(70,250,"📍","Location",CONFIG.location)}

${card(70,330,"🎓","University","Tribhuvan University")}

${card(70,410,"💼","Status","Open to Internship")}

</g>

`;

}

function card(x,y,icon,title,value){

return `

<g>

<rect
    x="${x}"
    y="${y}"
    rx="16"
    width="420"
    height="62"
    fill="${COLORS.surface}"
    stroke="${COLORS.border}"
    stroke-width="2"
    filter="url(#shadow)"/>

<text
    x="${x+22}"
    y="${y+38}"
    font-size="24">

${icon}

</text>

<text
    x="${x+70}"
    y="${y+25}"
    font-size="14"
    font-family="Segoe UI"
    fill="${COLORS.muted}">

${title}

</text>

<text
    x="${x+70}"
    y="${y+46}"
    font-size="18"
    font-family="Segoe UI"
    fill="${COLORS.text}">

${value}

</text>

</g>

`;

}