import { PracticeEmitingPage } from './app.po';

describe('practice-emiting App', () => {
  let page: PracticeEmitingPage;

  beforeEach(() => {
    page = new PracticeEmitingPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
