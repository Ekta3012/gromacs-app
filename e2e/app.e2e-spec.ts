import { GromacsAppPage } from './app.po';

describe('gromacs-app App', () => {
  let page: GromacsAppPage;

  beforeEach(() => {
    page = new GromacsAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
