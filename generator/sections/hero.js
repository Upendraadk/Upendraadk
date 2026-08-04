import { svg } from "../utils.js";
import { CONFIG } from "../config.js";

import { defs } from "../effects/defs.js";
import { background } from "../effects/background.js";
import { particles } from "../effects/particles.js";
import { shootingStars } from "../effects/stars.js";

import { profile } from "./profile.js";
import { terminal } from "./terminal.js";

import { techIcons } from "../components/techIcons.js";

import { statusBadge } from "../components/statusBadge.js";

export function hero() {

return svg(

CONFIG.width,

CONFIG.height,

`

${defs()}

${background()}

${particles()}

${shootingStars()}

${profile()}

${techIcons()}

${terminal()}

${statusBadge()}

`

);

}
