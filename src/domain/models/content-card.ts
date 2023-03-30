/** To be our instance of content card */
export default class ContentCard {
  readonly id: string;
  readonly title?: string;
  readonly image?: string;
  readonly message?: string;
  readonly type: 'Banner' | 'Classic' | 'Captioned';

  constructor(init: ContentCard) {
    this.id = init.id;
    this.title = init.title;
    this.image = init.image;
    this.message = init.message;
    this.type = init.type;
  }
}
