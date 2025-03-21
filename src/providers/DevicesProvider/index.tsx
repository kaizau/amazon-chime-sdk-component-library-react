// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { AudioInputProvider, useAudioInputs } from './AudioInputProvider';
import { AudioOutputProvider, useAudioOutputs } from './AudioOutputProvider';
import { useVideoInputs, VideoInputProvider } from './VideoInputProvider';

const DevicesProvider: React.FC = ({ children }) => (
  <AudioInputProvider>
    <AudioOutputProvider>
      <VideoInputProvider>{children}</VideoInputProvider>
    </AudioOutputProvider>
  </AudioInputProvider>
);

export { DevicesProvider, useAudioInputs, useAudioOutputs, useVideoInputs };
