import { bootstrap } from '../main';

describe('Main App', () => {
  test('if server init correctly', async () => {
    expect(bootstrap()).toBeTruthy();
  });
});
