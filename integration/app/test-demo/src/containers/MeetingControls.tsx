import {
  ControlBar,
  AudioInputControl,
  VideoInputControl,
  AudioOutputControl,
  ContentShareControl,
} from "amazon-chime-sdk-component-library-react";
import React from "react";
import MeetingEndControl from "../components/MeetingEndControl";
import MeetingLeaveControl from "../components/MeetingLeaveControl";

const MeetingControls: React.FC = () => (
  <>
    <ControlBar
      layout="undocked-horizontal"
      showLabels
    >
      <AudioInputControl />
      <VideoInputControl />
      <AudioOutputControl />
      <ContentShareControl />
      <MeetingLeaveControl />
      <MeetingEndControl />
    </ControlBar>
  </>
)
export default MeetingControls;
