/** To be our instance of content card */
export default class ContentCard {
  readonly id: string;
  readonly title: string;
  readonly image: string;

  constructor(init: ContentCard) {
    this.id = init.id;
    this.title = init.title;
    this.image = init.image;
  }
}
