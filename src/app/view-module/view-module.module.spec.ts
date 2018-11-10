import { ViewModuleModule } from './view-module.module';

describe('ViewModuleModule', () => {
  let viewModuleModule: ViewModuleModule;

  beforeEach(() => {
    viewModuleModule = new ViewModuleModule();
  });

  it('should create an instance', () => {
    expect(viewModuleModule).toBeTruthy();
  });
});
