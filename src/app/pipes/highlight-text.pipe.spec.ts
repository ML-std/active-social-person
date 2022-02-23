import { HighlightTextPipe } from './highlight-text.pipe';

describe('HighlightTextPipe', () => {
  const pipe = new HighlightTextPipe();

  it('create an instance', () => {
    const pipe = new HighlightTextPipe();
    expect(pipe).toBeTruthy();
  });
  it('wrap a simple string in a <span>', () => {
    expect(pipe.transform('foobar','foo')).toBe('<span class= "highlight-text">foo</span>bar')
  })

  it('wrap a Uppercase string simple string in a <span> with a space', () => {
    expect(pipe.transform('FOO BAR','foo')).toBe('<span class= "highlight-text">FOO</span> BAR')
  });

  it('wrap a multiple values string in a <span>', () => {
    expect(pipe.transform('foo foo','foo')).toBe('<span class= "highlight-text">foo</span> <span class= "highlight-text">foo</span>')
  })


});

