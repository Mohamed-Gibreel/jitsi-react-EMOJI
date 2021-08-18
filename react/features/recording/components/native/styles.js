// @flow

import { ColorPalette, createStyleSheet } from "../../../base/styles";
import BaseTheme from "../../../base/ui/components/BaseTheme.native";

export const LIVE_LABEL_COLOR = BaseTheme.palette.ui02;
export const REC_LABEL_COLOR = ColorPalette.red;

/**
 * The styles of the React {@code Components} of the feature recording.
 */
export default createStyleSheet({
    /**
     * Style for the recording indicator.
     */
    indicatorLive: {
        backgroundColor: LIVE_LABEL_COLOR,
    },

    /**
     * Style for the recording indicator.
     */
    indicatorRecording: {
        backgroundColor: REC_LABEL_COLOR,
    },
});
