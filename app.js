class SlideStories {
  constructor(id) {
    this.$slide = document.querySelector(`[data-slide="${id}"]`);
  }
}


new SlideStories('slide');