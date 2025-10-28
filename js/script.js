/* 
  script.js contains the Vue logic for the application
  Title/description toggle management and navigation
*/
const { createApp } = Vue;

createApp({
  data() {
    return {
      items: disasters,       // Disaster table
      index: 0,               // Index of the displayed element
      showDescriptionBox: false // Toggle to display the description in the frame
    };
  },
  computed: {
    currentItem() {
      return this.items[this.index];
    }
  },
  methods: {
    // Display the following item
    nextItem() {
      this.index = (this.index + 1) % this.items.length;
      this.showDescriptionBox = false; // resets the frame
    },
    // Display the previous item
    prevItem() {
      this.index = (this.index - 1 + this.items.length) % this.items.length;
      this.showDescriptionBox = false;
    },
    // Toggle the description frame
    toggleDescription() {
      this.showDescriptionBox = !this.showDescriptionBox;
    }
  }
}).mount('#app');
