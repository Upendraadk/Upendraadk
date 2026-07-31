import { CONFIG } from "../config.js";
import { COLORS } from "../colors.js";

export function skillBars(startX, startY) {

    let svg = `<g id="skill-bars">`;

    const barWidth = 220;
    const barHeight = 8;
    const gap = 42;

    CONFIG.skills.forEach((skill, index) => {

        const y = startY + index * gap;
        const width = (skill.level / 100) * barWidth;

        svg += `

<!-- ${skill.name} -->

<text
    x="${startX}"
    y="${y}"
    font-family="Segoe UI"
    font-size="15"
    fill="${COLORS.textSecondary}">

${skill.name}

</text>

<text
    x="${startX + barWidth + 25}"
    y="${y}"
    text-anchor="end"
    font-family="Segoe UI"
    font-size="14"
    fill="${COLORS.muted}">

${skill.level}%

</text>

<rect
    x="${startX}"
    y="${y + 10}"
    rx="4"
    width="${barWidth}"
    height="${barHeight}"
    fill="${COLORS.progressBackground}"/>

<rect
    x="${startX}"
    y="${y + 10}"
    rx="4"
    width="0"
    height="${barHeight}"
    fill="${COLORS.progressFill}">

<animate
    attributeName="width"
    from="0"
    to="${width}"
    dur="1.6s"
    begin="${index * 0.2}s"
    fill="freeze"/>

</rect>

`;

    });

    svg += `</g>`;

    return svg;
}