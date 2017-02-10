import { SisPage } from './app.po';

describe('sis App', function() {
  let page: SisPage;

  beforeEach(() => {
    page = new SisPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
