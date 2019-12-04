describe('Generate array', () => {
  it('returns any matching items with a single activity query', async () => {
    expect(item.generateItemsArray(['Tshirt', 'Passport'])).toEqual([{ name: 'Tshirt', default: true },
    { name: 'Passport', default: true }]);
  });
});