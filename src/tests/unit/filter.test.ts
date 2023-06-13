describe('array.filter()', () => {
  it('should return [2, 3] when called with [1, 2, 3] and x => x > 1', () => {
    expect([1, 2, 3].filter(x => x > 1)).toEqual([2, 3]);
  });

  it('should return [1, 2, 3] when called', () => {
    expect([1, 2, 3].filter(x => x > 0)).toEqual([1, 2, 3]);
  });

  it('should return [] when called with [1, 2, 3] and x => x > 3', () => {
    expect([1, 2, 3].filter(x => x > 3)).toEqual([]);
  });
});
