// @flow

import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { doInvitePeople } from "../../../invite/actions.native";
import { getConferenceName } from "../../../base/conference";
import {
    getFeatureFlag,
    CONFERENCE_TIMER_ENABLED,
    MEETING_NAME_ENABLED,
} from "../../../base/flags";
import { ColorSchemeRegistry } from "../../../base/color-scheme";
import { connect } from "../../../base/redux";
import { PictureInPictureButton } from "../../../mobile/picture-in-picture";
import { isToolboxVisible } from "../../../toolbox/functions.native";
import ConferenceTimer from "../ConferenceTimer";
import ToggleCameraButton from "../../../toolbox/components/native/ToggleCameraButton";

import Labels from "./Labels";
import styles from "./styles";

type Props = {
    /**
     * Whether displaying the current conference timer is enabled or not.
     */
    _conferenceTimerEnabled: boolean,

    /**
     * Name of the meeting we're currently in.
     */
    _meetingName: string,

    /**
     * Whether displaying the current meeting name is enabled or not.
     */
    _meetingNameEnabled: boolean,

    /**
     * True if the navigation bar should be visible.
     */
    _visible: boolean,
};

/**
 * Implements a navigation bar component that is rendered on top of the
 * conference screen.
 *
 * @param {Props} props - The React props passed to this component.
 * @returns {React.Node}
 */
const NavigationBar = (props: Props) => {
    if (!props._visible) {
        return null;
    }
    const { buttonStylesBorderless, hangupButtonStyles, toggledButtonStyles } =
        props._styles;
    const backgroundToggledStyle = {
        ...toggledButtonStyles,
        style: [toggledButtonStyles.style, props._styles.backgroundToggle],
    };

    var openShareDialog = () => {
        console.log("hello there");
        props.dispatch(doInvitePeople());
    };

    return (
        <View pointerEvents="box-none" style={styles.navBarWrapper}>
            <View style={styles.pipButtonContainer}>
                <ToggleCameraButton
                    styles={buttonStylesBorderless}
                    toggledStyles={backgroundToggledStyle}
                />
                {/* <PictureInPictureButton
                    styles = { styles.pipButton } /> */}
            </View>
            <TouchableOpacity onPress={openShareDialog}>
                <View pointerEvents="box-none" style={styles.roomNameWrapper}>
                    {props._meetingNameEnabled && (
                        <View style={styles.roomNameView}>
                            <Text numberOfLines={1} style={styles.roomName}>
                                {props._meetingName}
                            </Text>
                        </View>
                    )}
                    {props._conferenceTimerEnabled && (
                        <View style={styles.roomTimerView}>
                            <ConferenceTimer textStyle={styles.roomTimer} />
                        </View>
                    )}
                    <Labels />
                </View>
            </TouchableOpacity>
        </View>
    );
};

/**
 * Maps part of the Redux store to the props of this component.
 *
 * @param {Object} state - The Redux state.
 * @returns {Props}
 */
function _mapStateToProps(state) {
    const { hideConferenceTimer, hideConferenceSubject } =
        state["features/base/config"];

    return {
        _styles: ColorSchemeRegistry.get(state, "Toolbox"),
        _conferenceTimerEnabled:
            getFeatureFlag(state, CONFERENCE_TIMER_ENABLED, true) &&
            !hideConferenceTimer,
        _meetingName: getConferenceName(state),
        _meetingNameEnabled:
            getFeatureFlag(state, MEETING_NAME_ENABLED, true) &&
            !hideConferenceSubject,
        _visible: isToolboxVisible(state),
    };
}

export default connect(_mapStateToProps)(NavigationBar);
