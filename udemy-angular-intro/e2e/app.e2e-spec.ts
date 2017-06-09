import { UdemyAngularIntroPage } from './app.po';

describe('udemy-angular-intro App', function() {
  let page: UdemyAngularIntroPage;

  beforeEach(() => {
    page = new UdemyAngularIntroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
