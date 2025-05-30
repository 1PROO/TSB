# Advanced Telegram Bot Sender

## Overview

The Advanced Telegram Bot Sender is a client-side web application that allows users to manage multiple Telegram bots and send messages (text and files) through them. It also provides an interface to view incoming messages for the selected bot and manage conversations. The application is designed to be responsive and supports theming (light/dark) and multiple languages (English/Arabic).

## Features

* **Multi-Bot Management:**
    * Add new Telegram bots by providing a name and a valid Bot Token.
    * Edit existing bot configurations.
    * Delete bots.
    * Select an active bot to send messages and view updates.
* **Chat ID Management:**
    * Manually add Chat IDs (user IDs, group IDs, channel IDs) to each bot.
    * Assign an alias to each Chat ID for easier identification.
    * Fetch recent Chat IDs automatically using the bot token.
    * Select/deselect specific Chat IDs to target when sending messages.
    * Bulk selection options: Select All, Deselect All, Invert Selection.
    * Search Chat IDs by name or ID.
* **Message Sending:**
    * Send text messages (supports HTML formatting).
    * Attach and send files (documents).
    * Send messages to multiple selected Chat IDs simultaneously.
* **Incoming Messages & Chat Interface:**
    * View incoming messages for the selected bot, organized by conversation.
    * Conversations are listed with the latest message first.
    * Display includes sender name/alias, last message preview, and timestamp.
    * Click a conversation to view its full message history.
    * Messages display sender, text content (or media type placeholder), and time.
    * Support for displaying replied-to message previews.
    * Send replies directly from the chat interface.
    * Attach files when replying from the chat interface.
    * Option to add a conversation partner (from a private chat) to the bot's list of Chat IDs.
    * Locally clear all messages for a conversation.
    * Locally delete individual messages.
* **Customization & Settings:**
    * **Themes:** Switch between Light and Dark mode.
    * **Languages:** Supports English and Arabic.
    * **Show/Hide Incoming Messages:** Toggle the visibility of the entire incoming messages section.
    * **Auto-Refresh:** Enable/disable automatic fetching of new messages for the selected bot.
    * **Auto-Refresh Interval:** Configure the interval (in seconds) for auto-refresh.
* **User Experience:**
    * Responsive design for desktop and mobile devices.
    * Client-side storage (LocalStorage) for bots, theme, language, and other preferences.
    * Notifications for various actions (e.g., bot saved, message sent, errors).
    * Activity log to track sent messages and errors.
    * Loading spinners for asynchronous operations.

## Setup

This is a purely client-side application. No backend server setup is required beyond having access to the Telegram Bot API (which is handled by making requests directly to `https://api.telegram.org`).

1.  **Download:** Obtain the HTML file (`index.html` or the equivalent) and any associated assets (though this version primarily uses CDN for Tailwind and FontAwesome).
2.  **Open in Browser:** Open the HTML file directly in a modern web browser that supports JavaScript modules and LocalStorage (e.g., Chrome, Firefox, Edge, Safari).

## Usage

### 1. Adding a Bot
* Click the **+** (plus) icon in the header.
* In the "Add Bot" form:
    * Enter a **Bot Name** (e.g., "My Test Bot").
    * Enter the **Bot Token** obtained from BotFather on Telegram.
    * **Chat IDs:**
        * You can manually add Chat IDs by clicking "Add Chat ID". Enter the numeric Chat ID and an optional Alias.
        * Alternatively, after entering a valid Bot Token, click "Fetch Chat IDs". This will attempt to get recent chat IDs your bot has interacted with and populate the fields. It will not overwrite existing manually entered IDs but will add new unique ones.
* Click "Save Bot". The new bot will be added to your list.

### 2. Selecting a Bot
* Click the "Telegram Bot" title or the dropdown arrow next to it in the header.
* A list of your configured bots will appear.
* Click on a bot name to select it. The interface will update to reflect the selected bot.

### 3. Sending Messages
* Once a bot is selected:
    * The "Send to" section will display the Chat IDs associated with the selected bot. Click on Chat ID tags to select/deselect them as recipients.
    * Use the "Select All", "Deselect All", or "Invert Selection" buttons for bulk actions on visible (searched) Chat IDs.
    * Type your message in the "Send Message" textarea. HTML formatting is supported.
    * Optionally, click "Choose Files" to attach one or more files.
    * Click the "Send" button.
    * Status of the send operation will be displayed below the button and logged in the "Activity Log".

### 4. Viewing Incoming Messages
* If the "Show Incoming Messages Section" is enabled in Settings (it is by default):
    * Select a bot.
    * The "Incoming Messages" section will appear (on desktop, it's side-by-side; on mobile, you might need to toggle to it using the chat icon in the header).
    * Click the refresh icon <i class="fas fa-sync-alt"></i> in the "Incoming Messages" header to fetch new updates, or enable auto-refresh in Settings.
    * Conversations will be listed on the left (or top on mobile chat view). Click a conversation to view its messages.
    * You can reply to messages using the input field at the bottom of the message display area.

### 5. Settings
* Click the <i class="fas fa-cog"></i> (cog) icon in the header to open the Settings modal.
* **Theme:** Choose between Light and Dark mode.
* **Language:** Switch between Arabic and English.
* **Show Incoming Messages Section:** Toggle the entire right-hand/bottom section for incoming messages.
* **Auto-refresh messages:** Enable or disable automatic fetching of new messages.
* **Auto-refresh interval:** Set how often (in seconds) the app should check for new messages when auto-refresh is enabled.
* **Developed By:** AhmedAkram

## Technologies Used

* **HTML5**
* **CSS3** (with Tailwind CSS for utility-first styling)
* **JavaScript** (ES6 Modules)
* **Font Awesome** (for icons)
* **Telegram Bot API** (for interacting with Telegram)
* **Browser LocalStorage** (for data persistence)

## Developer

Developed by AhmedAkram.
