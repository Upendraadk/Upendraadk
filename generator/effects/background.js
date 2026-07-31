import { CONFIG } from "../config.js";
import { COLORS } from "../colors.js";

export function background() {

return `

<!-- Background -->

<rect
    width="${CONFIG.width}"
    height="${CONFIG.height}"
    fill="${COLORS.background}"/>

<!-- Secondary Gradient -->

<rect
    width="${CONFIG.width}"
    height="${CONFIG.height}"
    fill="url(#backgroundGradient)"/>

<!-- Aurora Left -->

<ellipse
    cx="280"
    cy="140"
    rx="330"
    ry="130"
    fill="url(#auroraGradient)"
    filter="url(#auroraBlur)"
    opacity="0.7">

    <animateTransform
        attributeName="transform"
        type="translate"
        values="0 0;80 20;0 0"
        dur="18s"
        repeatCount="indefinite"/>

</ellipse>

<!-- Aurora Right -->

<ellipse
    cx="1320"
    cy="470"
    rx="360"
    ry="150"
    fill="url(#auroraGradient)"
    filter="url(#auroraBlur)"
    opacity="0.6">

    <animateTransform
        attributeName="transform"
        type="translate"
        values="0 0;-90 -30;0 0"
        dur="22s"
        repeatCount="indefinite"/>

</ellipse>

<!-- Aurora Center -->

<ellipse
    cx="830"
    cy="240"
    rx="220"
    ry="80"
    fill="url(#auroraGradient)"
    filter="url(#auroraBlur)"
    opacity="0.45">

    <animateTransform
        attributeName="transform"
        type="translate"
        values="0 0;0 40;0 0"
        dur="20s"
        repeatCount="indefinite"/>

</ellipse>

<!-- Grid -->

<rect
    width="${CONFIG.width}"
    height="${CONFIG.height}"
    fill="url(#gridPattern)"
    opacity="0.12"/>

<!-- Top Vignette -->

<rect
    width="${CONFIG.width}"
    height="160"
    fill="url(#topFade)"/>

<!-- Bottom Vignette -->

<rect
    y="${CONFIG.height - 170}"
    width="${CONFIG.width}"
    height="170"
    fill="url(#bottomFade)"/>

`;

}