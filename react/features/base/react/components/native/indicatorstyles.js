// @flow

import { ColorPalette } from "../../../styles";
import BaseTheme from "../../../../base/ui/components/BaseTheme.native";

export default {
    /**
     * Highlighted indicator additional style.
     */
    highlightedIndicator: {
        backgroundColor: BaseTheme.palette.ui02,
        borderRadius: 16,
        padding: 4,
    },

    /**
     * Base indicator style.
     */
    indicator: {
        backgroundColor: ColorPalette.transparent,
        color: ColorPalette.white,
        fontSize: 12,
        textShadowColor: ColorPalette.black,
        textShadowOffset: {
            height: -1,
            width: 0,
        },
    },
};
