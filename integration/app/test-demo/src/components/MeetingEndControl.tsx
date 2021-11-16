import { ControlBarButton, Remove, useMeetingManager } from 'amazon-chime-sdk-component-library-react';
import React from 'react';
import { endMeeting } from '../utils/api';

const MeetingEndControl = () => {
  const meetingManager = useMeetingManager();

  const endMeetingForAll = async () => {
    const meetingId = window.localStorage.getItem('meetingId');

    try {
      if (meetingId) {
        await meetingManager.leave();
        await endMeeting(meetingId);
      }
    } catch (e) {
      console.error('Could not end meeting', e);
    }
  }

  return <ControlBarButton icon={<Remove />} onClick={endMeetingForAll} label="End" />;
};

export default MeetingEndControl;
