import { MeetingProvider } from 'amazon-chime-sdk-component-library-react';
import { LogLevel } from 'amazon-chime-sdk-js';
import React, { FC } from 'react';
import Meeting from '../containers/Meeting';
import MeetingForm from '../containers/MeetingForm';

const SimpleApp: FC = () => {
  const config = {
    logLevel: LogLevel.INFO,
  };

  return (
    <MeetingProvider {...config}>
      <h3 data-testid="app-name">Simple App</h3>
      <MeetingForm />
      <Meeting />
    </MeetingProvider>
  )
};

export default SimpleApp;
