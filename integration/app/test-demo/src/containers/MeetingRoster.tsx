import {
  Roster, RosterAttendee, RosterGroup, RosterHeader, useRosterState
} from 'amazon-chime-sdk-component-library-react';
import React from 'react';

const MeetingRoster = () => {
  const { roster } = useRosterState();
  const attendees = Object.values(roster);

  const attendeeItems = attendees.map((attendee: any) => {
    const { chimeAttendeeId } = attendee || {};
    return (
      <RosterAttendee key={chimeAttendeeId} attendeeId={chimeAttendeeId} />
    );
  });

  return (
    <Roster className="roster">
      <RosterHeader
        title="Roster"
        badge={attendees.length}
      />
      <RosterGroup>{attendeeItems}</RosterGroup>
    </Roster>
  );
};

export default MeetingRoster;
