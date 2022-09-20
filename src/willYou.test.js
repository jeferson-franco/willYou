const solution = require('./willYou.js');

test('test 1', () => {
    expect(solution(true, true, true)).toBe(false);
});

test('test 2', () => {
    expect(solution(true, false, true)).toBe(true);
});

test('test 3', () => {
    expect(solution(false, false, false)).toBe(false);
});

test('test 4', () => {
    expect(solution(false, false, true)).toBe(true);
});
