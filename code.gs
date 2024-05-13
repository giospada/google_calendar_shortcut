function updateCalendar() {

  let calendars = listCalendars();
  const calendarId = 'primary';  // Currently set to update events in the primary calendar
  const now = new Date();
  const events = CalendarApp.getCalendarById(calendarId)
                            .getEvents(new Date(now.getTime() - 7 * 24 * 3600 * 1000), new Date(now.getTime() + 7 * 24 * 3600 * 1000));  // Get events for the next 7 days

  // Iterate through all found events
  events.forEach(event => {
    // Check each calendar condition against the event's title
    calendars.forEach(calendar => {
      if (event.getTitle() === calendar[2]) {  // Check if the event title matches the original title specified
        // Update the calendar ID and title as per the matching entry
        var newCalendar = CalendarApp.getCalendarById(calendar[1]);
        if (newCalendar) {
          let description= event.getDescription();
          if(description==""){
            description=calendar[3]
          }
          var newEvent = newCalendar.createEvent(calendar[0], event.getStartTime(), event.getEndTime(), {
            description: description,
            location: event.getLocation(),
          });
          // Remove the old event after creating the new one in the new calendar
          event.deleteEvent();
          Logger.log('Updated event ID: ' + newEvent.getId());
        } else {
          Logger.log('No calendar found with ID: ' + calendar[0]);
        }
      }
    });
  });
}

function listCalendars() {
  let calendars;
  let pageToken;
  let return_val = []
  do {
    calendars = Calendar.CalendarList.list({
      maxResults: 100,
      pageToken: pageToken

    });
    if (!calendars.items || calendars.items.length === 0) {
      break;
    }
    for (const calendar of calendars.items) {
      // check if the shortcut is enabled 
      if(calendar.description!=undefined &&calendar.description.startsWith('#')){
        let splitted = calendar.description.split('\n')
        let identifier =splitted.shift()
	// add the description
        let other = splitted.length>0? splitted.join('\n'):'' 
        return_val.push([calendar.summary,calendar.id,identifier,other])
      }
    }
    pageToken = calendars.nextPageToken;
  } while (pageToken);
  return return_val;
}
