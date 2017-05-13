import { AppTodoPage } from './app.po';

describe('app-todo App', () => {
  let page: AppTodoPage;

  beforeEach(() => {
    page = new AppTodoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
