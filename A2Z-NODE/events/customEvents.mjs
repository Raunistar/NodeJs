// Import built-in events module
import { EventEmitter } from "events";

// Extend EventEmitter to create our own event class
export class UserEvents extends EventEmitter {
  createPost(content) {
    console.log("Post is created:", content);

    // Emit event and pass content to all listeners
    this.emit("postCreated", content);
  }
}
