import { COLORS } from "../colors.js";

export function defs() {

return `

<defs>

    <!-- ========================= -->
    <!-- Glow Filter -->
    <!-- ========================= -->

    <filter
        id="glow"
        x="-50%"
        y="-50%"
        width="200%"
        height="200%">

        <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="5"
            result="blur"/>

        <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
        </feMerge>

    </filter>

    <!-- ========================= -->
    <!-- Aurora Gradient -->
    <!-- ========================= -->

    <linearGradient
        id="auroraGradient"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%">

        <stop
            offset="0%"
            stop-color="${COLORS.primary}"
            stop-opacity="0.28"/>

        <stop
            offset="100%"
            stop-color="${COLORS.secondary}"
            stop-opacity="0.25"/>

    </linearGradient>

    <!-- ========================= -->
    <!-- Aurora Blur -->
    <!-- ========================= -->

    <filter id="auroraBlur">

        <feGaussianBlur
            stdDeviation="90"/>

    </filter>

    <!-- ========================= -->
    <!-- Grid Pattern -->
    <!-- ========================= -->

    <pattern
        id="gridPattern"
        width="40"
        height="40"
        patternUnits="userSpaceOnUse">

        <path
            d="M40 0H0V40"
            fill="none"
            stroke="${COLORS.border}"
            stroke-width="1"/>

    </pattern>

    <!-- ========================= -->
    <!-- Shadow -->
    <!-- ========================= -->

    <filter
        id="shadow"
        x="-30%"
        y="-30%"
        width="160%"
        height="160%">

        <feDropShadow
            dx="0"
            dy="10"
            stdDeviation="12"
            flood-color="#000000"
            flood-opacity="0.35"/>

    </filter>

    <!-- Background Gradient -->

    <linearGradient
        id="backgroundGradient"
        x1="0%"
        y1="0%"
        x2="0%"
        y2="100%">

        <stop
            offset="0%"
            stop-color="#08101F"
            stop-opacity="0.95"/>

        <stop
            offset="100%"
            stop-color="#020617"
            stop-opacity="1"/>

    </linearGradient>

    <!-- Top Fade -->

    <linearGradient
        id="topFade"
        x1="0%"
        y1="0%"
        x2="0%"
        y2="100%">

        <stop
            offset="0%"
            stop-color="#000000"
            stop-opacity="0.35"/>

        <stop
            offset="100%"
            stop-color="#000000"
            stop-opacity="0"/>

    </linearGradient>

    <!-- Bottom Fade -->

    <linearGradient
        id="bottomFade"
        x1="0%"
        y1="0%"
        x2="0%"
        y2="100%">

        <stop
            offset="0%"
            stop-color="#000000"
            stop-opacity="0"/>

        <stop
            offset="100%"
            stop-color="#000000"
            stop-opacity="0.35"/>

    </linearGradient>
    
</defs>

`;

}