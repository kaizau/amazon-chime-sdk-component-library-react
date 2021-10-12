// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { Device, AudioTransformDevice } from 'amazon-chime-sdk-js';

import { AudioInputProvider, useAudioInputs } from './AudioInputProvider';
import { AudioOutputProvider, useAudioOutputs } from './AudioOutputProvider';
import { VideoInputProvider, useVideoInputs } from './VideoInputProvider';

interface Props {
  onDeviceReplacement?: (device: Device) => Promise<Device | AudioTransformDevice>;
}

const DevicesProvider: React.FC<Props> = ({ children, onDeviceReplacement }) => (
  <AudioInputProvider onDeviceReplacement={onDeviceReplacement}>
    <AudioOutputProvider>
      <VideoInputProvider>{children}</VideoInputProvider>
    </AudioOutputProvider>
  </AudioInputProvider>
);

export { DevicesProvider, useAudioInputs, useAudioOutputs, useVideoInputs };
