import { RecipeShoppingPage } from './app.po';

describe('recipe-shopping App', () => {
  let page: RecipeShoppingPage;

  beforeEach(() => {
    page = new RecipeShoppingPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
