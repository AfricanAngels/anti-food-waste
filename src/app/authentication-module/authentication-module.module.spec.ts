import { AuthenticationModuleModule } from './authentication-module.module';

describe('AuthenticationModuleModule', () => {
  let authenticationModuleModule: AuthenticationModuleModule;

  beforeEach(() => {
    authenticationModuleModule = new AuthenticationModuleModule();
  });

  it('should create an instance', () => {
    expect(authenticationModuleModule).toBeTruthy();
  });
});
