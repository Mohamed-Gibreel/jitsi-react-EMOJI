// @flow

import { ColorPalette } from "../../base/styles";
import BaseTheme from "../../base/ui/components/BaseTheme.native";

export const ENABLED_THUMB_COLOR = BaseTheme.palette.ui02;
export const ENABLED_TRACK_COLOR = BaseTheme.palette.ui02;
export const DISABLED_THUMB_COLOR = ColorPalette.darkGrey;

export default {
    roomLockSwitchContainer: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 16,
    },
};
