import { MozcuAngular2Page } from './app.po';

describe('mozcu-angular-2 App', function() {
  let page: MozcuAngular2Page;

  beforeEach(() => {
    page = new MozcuAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
