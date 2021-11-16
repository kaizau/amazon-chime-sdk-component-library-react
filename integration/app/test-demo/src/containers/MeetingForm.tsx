import {
  Flex,
  FormField,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  PrimaryButton,
  useMeetingManager,
} from 'amazon-chime-sdk-component-library-react';
import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import { createGetAttendeeCallback, fetchMeeting } from '../utils/api';

const MeetingForm: FC = () => {
  const meetingManager = useMeetingManager();
  const [meetingId, setMeetingId] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, updateErrorMessage] = useState('');

  const joinMeeting = async (event: FormEvent) => {
    event.preventDefault();

    const id = meetingId.trim().toLocaleLowerCase();
    setMeetingId(id);
    window.localStorage.setItem('meetingId', id);
    const attendeeName = name.trim();

    meetingManager.getAttendee = createGetAttendeeCallback(id);
    try {
      const { JoinInfo } = await fetchMeeting(id, attendeeName, 'us-east-1');
      await meetingManager.join({
        meetingInfo: JoinInfo.Meeting,
        attendeeInfo: JoinInfo.Attendee,
      });
    } catch (error: any) {
      updateErrorMessage(error.message);
    }

    // At this point you can let users setup their devices, or start the session immediately
    await meetingManager.start();
  };

  const closeError = (): void => {
    updateErrorMessage('');
    setMeetingId('');
    setName('');
  };

  return (
    <form>
      <FormField
        field={Input}
        label='Meeting Id'
        value={meetingId}
        fieldProps={{
          name: 'Meeting Id',
          placeholder: 'Enter a Meeting ID',
        }}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setMeetingId(e.target.value);
        }}
      />
      <FormField
        field={Input}
        label="Name"
        value={name}
        fieldProps={{
          name: 'Name',
          placeholder: 'Enter your Attendee Name'
        }}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setName(e.target.value);
        }}
      />
      <Flex
        container
        layout="fill-space-centered"
        style={{ marginTop: '2.5rem' }}
      >
        <PrimaryButton label="Join Meeting" onClick={joinMeeting} />
      </Flex>
      {errorMessage && (
        <Modal size="md" onClose={closeError}>
          <ModalHeader title={`Meeting ID: ${meetingId}`} />
          <ModalBody>
            <p>{errorMessage}</p>
          </ModalBody>
        </Modal>
      )}
    </form>
  );
};

export default MeetingForm;
