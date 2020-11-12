class SlideStories {
  constructor(id) {
    this.$slide = document.querySelector(`[data-slide="${id}"]`);
    this.current = 0;
  }

  activeSlide(index) {
    this.active = index;
    this.items = this.$slide.querySelectorAll('.slide__item');
    this.items[index].classList.add('slide__item--active');
  }
}


new SlideStories('slide');