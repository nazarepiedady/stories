class SlideStories {
  constructor(id) {
    this.$slide = document.querySelector(`[data-slide="${id}"]`);
    this.active = 0;
    this.init();
  }

  activeSlide(index) {
    this.active = index;
    this.items.forEach(item => item.classList.remove('slide__item--active'));
    this.items[index].classList.add('slide__item--active');
  }

  prev() {
    if (this.active > 0)
      this.activeSlide(this.active - 1);
    else
      this.activeSlide(this.items.length - 1);
  }

  next() {
    if (this.active < this.items.length - 1)
      this.activeSlide(this.active + 1);
    else
      this.activeSlide(0);
  }

  addNavigation() {
    const $nextButton = this.$slide.querySelector('.slide__next-button');
    const $prevButton = this.$slide.querySelector('.slide__prev-button');

    $nextButton.addEventListener('click', this.next);
    $prevButton.addEventListener('click', this.prev);
  }

  addThumbs() {
    this.items.forEach(() => this.thumb.innerHTML += `<span></span>`);
    this.thumbs = Array.from(this.thumb.children);
  }

  init() {
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.items = this.$slide.querySelectorAll('.slide__item');
    this.thumb = this.$slide.querySelector('.slide__thumb');
    this.addThumbs();
    this.activeSlide(0);
    this.addNavigation();
  }
}


new SlideStories('slide');