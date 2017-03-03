import { Rc1Page } from './app.po';

describe('rc1 App', () => {
  let page: Rc1Page;

  beforeEach(() => {
    page = new Rc1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('polaris works!');
  });
});
