import { COLORS } from "../colors.js";

export function shootingStars() {

  return `

<g id="shooting-stars">

  <!-- Star 1 -->

  <g>

    <line
      x1="0"
      y1="0"
      x2="70"
      y2="0"
      stroke="${COLORS.primary}"
      stroke-width="2"
      stroke-linecap="round"
      opacity="0.9">

      <animateTransform
        attributeName="transform"
        type="translate"
        values="1550 40; -150 520"
        dur="7s"
        begin="0s"
        repeatCount="indefinite"/>

      <animate
        attributeName="opacity"
        values="0;1;1;0"
        dur="7s"
        repeatCount="indefinite"/>

    </line>

    <circle
      r="3"
      fill="#ffffff">

      <animateTransform
        attributeName="transform"
        type="translate"
        values="1550 40; -150 520"
        dur="7s"
        begin="0s"
        repeatCount="indefinite"/>

    </circle>

  </g>

  <!-- Star 2 -->

  <g>

    <line
      x1="0"
      y1="0"
      x2="60"
      y2="0"
      stroke="${COLORS.secondary}"
      stroke-width="2"
      stroke-linecap="round"
      opacity="0.8">

      <animateTransform
        attributeName="transform"
        type="translate"
        values="1400 120; -180 560"
        dur="10s"
        begin="2s"
        repeatCount="indefinite"/>

      <animate
        attributeName="opacity"
        values="0;1;1;0"
        dur="10s"
        repeatCount="indefinite"/>

    </line>

    <circle
      r="2.5"
      fill="#ffffff">

      <animateTransform
        attributeName="transform"
        type="translate"
        values="1400 120; -180 560"
        dur="10s"
        begin="2s"
        repeatCount="indefinite"/>

    </circle>

  </g>

  <!-- Star 3 -->

  <g>

    <line
      x1="0"
      y1="0"
      x2="80"
      y2="0"
      stroke="${COLORS.primary}"
      stroke-width="2"
      stroke-linecap="round"
      opacity="0.8">

      <animateTransform
        attributeName="transform"
        type="translate"
        values="1600 220; -220 620"
        dur="12s"
        begin="5s"
        repeatCount="indefinite"/>

      <animate
        attributeName="opacity"
        values="0;1;1;0"
        dur="12s"
        repeatCount="indefinite"/>

    </line>

    <circle
      r="3"
      fill="#ffffff">

      <animateTransform
        attributeName="transform"
        type="translate"
        values="1600 220; -220 620"
        dur="12s"
        begin="5s"
        repeatCount="indefinite"/>

    </circle>

  </g>

</g>

`;

}