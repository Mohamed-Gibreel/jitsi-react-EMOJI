// @flow

import { ColorSchemeRegistry, schemeColor } from "../../../base/color-scheme";
import { BoxModel, ColorPalette } from "../../../base/styles";

const BUTTON_SIZE = 48;

// Toolbox, toolbar:

/**
 * The style of toolbar buttons.
 */
const toolbarButton = {
    borderRadius: 50,
    borderWidth: 0,
    flex: 0,
    flexDirection: "row",
    height: BUTTON_SIZE,
    justifyContent: "center",
    marginHorizontal: 6,
    marginTop: 6,
    width: BUTTON_SIZE,
};

/**
 * The icon style of the toolbar buttons.
 */
const toolbarButtonIcon = {
    alignSelf: "center",
    color: ColorPalette.darkGrey,
    fontSize: 24,
};

const hangupButtonIcon = {
    ...toolbarButton,
    color: ColorPalette.white,
    fontSize: 20,
    paddingVertical: 7,
};

/**
 * The icon style of toolbar buttons which display white icons.
 */
const whiteToolbarButtonIcon = {
    ...toolbarButtonIcon,
    color: ColorPalette.black,
};

/**
 * The style of reaction buttons.
 */
const reactionButton = {
    ...toolbarButton,
    backgroundColor: "transparent",
    alignItems: "center",
    marginTop: 0,
    marginHorizontal: 0,
};

/**
 * The style of the emoji on the reaction buttons.
 */
const reactionEmoji = {
    fontSize: 20,
    color: ColorPalette.white,
};

const reactionMenu = {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: ColorPalette.black,
    padding: 16,
};

/**
 * The Toolbox and toolbar related styles.
 */
const styles = {
    sheetGestureRecognizer: {
        alignItems: "stretch",
        flexDirection: "column",
    },

    /**
     * The style of the toolbar.
     */
    toolbox: {
        alignItems: "center",
        backgroundColor: ColorPalette.transparent,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        flexDirection: "row",
        flexGrow: 0,
        justifyContent: "space-between",
        paddingHorizontal: BoxModel.margin,
        paddingVertical: 8,
    },

    /**
     * The style of the root/top-level container of {@link Toolbox}.
     */
    toolboxContainer: {
        flexDirection: "column",
        flexGrow: 0,
        width: "100%",
        maxWidth: 580,
        marginLeft: "auto",
        marginRight: "auto",
    },
};

export default styles;

/**
 * Color schemed styles for the @{Toolbox} component.
 */
ColorSchemeRegistry.register("Toolbox", {
    /**
     * Styles for buttons in the toolbar.
     */
    buttonStyles: {
        iconStyle: toolbarButtonIcon,
        style: toolbarButton,
    },

    buttonStylesBorderless: {
        iconStyle: whiteToolbarButtonIcon,
        style: {
            ...toolbarButton,
            backgroundColor: ColorPalette.white,
        },
    },

    backgroundToggle: {
        borderWidth: 3,
        borderColor: "#2AD3F8",
        // backgroundColor: ColorPalette.chatToggled,
    },

    hangupButtonStyles: {
        iconStyle: hangupButtonIcon,
        style: {
            ...toolbarButton,
            backgroundColor: schemeColor("hangup"),
        },
        underlayColor: ColorPalette.transparent,
    },

    reactionDialog: {
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
    },

    overflowReactionMenu: reactionMenu,

    reactionMenu: {
        ...reactionMenu,
        borderRadius: 3,
        width: 360,
    },

    reactionRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginBottom: 16,
    },

    reactionButton: {
        style: reactionButton,
        underlayColor: ColorPalette.toggled,
        emoji: reactionEmoji,
    },

    raiseHandButton: {
        style: {
            ...reactionButton,
            backgroundColor: ColorPalette.toggled,
            width: "100%",
            borderRadius: 6,
        },
        underlayColor: ColorPalette.toggled,
        emoji: reactionEmoji,
        text: {
            color: ColorPalette.white,
            fontWeight: "600",
            marginLeft: 8,
            lineHeight: 24,
        },
        container: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
        },
    },

    emojiAnimation: {
        color: ColorPalette.white,
        position: "absolute",
        zIndex: 1001,
        elevation: 2,
        fontSize: 20,
        left: "50%",
        top: "100%",
    },

    /**
     * Styles for toggled buttons in the toolbar.
     */
    toggledButtonStyles: {
        iconStyle: whiteToolbarButtonIcon,
        style: {
            ...toolbarButton,
            backgroundColor: ColorPalette.white,
        },
    },
});
