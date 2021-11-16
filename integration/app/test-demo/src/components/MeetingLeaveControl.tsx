import { ControlBarButton, LeaveMeeting, useMeetingManager } from 'amazon-chime-sdk-component-library-react';
import React from 'react';

const MeetingLeaveControl = () => {
  const meetingManager = useMeetingManager();

  return <ControlBarButton icon={<LeaveMeeting />} onClick={async () => { await meetingManager.leave() }} label="Leave" />;
};

export default MeetingLeaveControl;
