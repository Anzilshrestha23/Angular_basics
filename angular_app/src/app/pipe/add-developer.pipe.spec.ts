import { AddDeveloperPipe } from './add-developer.pipe';

describe('AddDeveloperPipe', () => {
  it('create an instance', () => {
    const pipe = new AddDeveloperPipe();
    expect(pipe).toBeTruthy();
  });
});
