class SlideStories {
  constructor(id) {
    this.$slide = document.querySelector(`[data-slide="${id}"]`);
    this.active = 0;
    this.activeSlide(1);
    this.init();
  }

  activeSlide(index) {
    this.active = index;
    this.items = this.$slide.querySelectorAll('.slide__item');
    this.items[index].classList.add('slide__item--active');
  }

  prev() {}

  next() {
    this.activeSlide(this.active + 1);
  }

  addNavigation() {
    const $nextButton = this.$slide.querySelector('.slide__next-button');
    const $prevButton = this.$slide.querySelector('.slide__prev-button');

    $nextButton.addEventListener('click', this.next);
    $prevButton.addEventListener('click', this.prev);
  }

  init() {
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.addNavigation();
  }
}


new SlideStories('slide');