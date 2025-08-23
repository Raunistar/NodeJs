import { UserEvents } from "./customEvents.mjs";

const userEvent = new UserEvents();

userEvent.addListener("postCreated", (content) => {
  console.log("Saving Post to Database.");
});
function sendingNotification() {
  console.log("Sending Notification.");
}
function updateTimeline() {
  console.log("updating Timeline.");
}
userEvent.addListener("postCreated", sendingNotification);
userEvent.addListener("postCreated", updateTimeline);

userEvent.createPost("This is my first Post.");
