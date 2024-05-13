

 README template for a Google Apps Script that automates creating event shortcuts in Google Calendar based on specific hashtags in the event title.

---

# Google Calendar Event Shortcut Creator

## Description
This Google Apps Script enhances Google Calendar by enabling users to quickly create events in specific calendars by using hashtags in the event titles. When a new event is created with a title starting with a hashtag (e.g., `#team`), the script searches through your calendars, identifies a calendar whose description begins with the specified hashtag, and automatically assigns the event to that calendar. Additionally, the script sets the event's title and description to match the designated calendar's name and description.

## Features

- **Automatic Calendar Selection:** Automatically detects and selects the appropriate calendar based on the hashtag in the event title.
- **Event Customization:** Sets the event title and description according to the target calendar's name and description.
- **Ease of Use:** Simplifies the process of organizing events into specific calendars using straightforward hashtags.

## Setup Instructions

1. **Google Apps Script Project:**
   - Open Google Apps Script by visiting [https://script.google.com](https://script.google.com).
   - Click on `New Project`.
   - Replace the contents of the script editor with the provided code (see below).

2. **Script Code:**
   - Paste the script code provided in the `Code.gs` section below into the script editor.

3. **Enable Google Calendar API:**
   - In the Google Apps Script editor, go to `Services`.
   - Click on `+ Add a service`.
   - Select `Google Calendar API` and add it to your project.

4. **Trigger Setup:**
   - Go to `Triggers` in the Google Apps Script editor.
   - Click `Add Trigger` and set up a trigger for the function `updateCalendar`.
   - Choose `Calendar events` as the event source and `on calendarupdate` as the event type.

