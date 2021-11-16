import {
  MeetingStatus,
  useMeetingStatus, VideoTileGrid
} from 'amazon-chime-sdk-component-library-react';
import React, { FC } from 'react';
import MeetingControls from './MeetingControls';
import MeetingRoster from './MeetingRoster';

const Meeting: FC = () => {
  const meetingStatus = useMeetingStatus();

  return (
    <>
      {meetingStatus === MeetingStatus.Succeeded ?
        <>
          <MeetingControls />
          <div style={{ marginTop: '2rem', height: '40rem', display: 'flex', flexDirection: 'row' }}>
            <MeetingRoster />
            <VideoTileGrid />
          </div>
        </>
        :
        null
      }
    </>
  );
};

export default Meeting;
