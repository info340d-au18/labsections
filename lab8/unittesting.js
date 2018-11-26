function testFunction(variable1, variable2) {
    return variable1 * variable2;
}

test('test works', () => {
    expect(testFunction(1, 1)).toBe(1);
    expect(testFunction(4, 4)).toBe(16);
    expect(testFunction(2, 2)).toBe(2);
    expect(testFunction(2, 3)).toBe(6);
})

it('undefined values', () => {
    expect(testFunction(undefined, undefined)).toBe(______)
})