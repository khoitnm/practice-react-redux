import { splitPathParts } from './PathUtils';

describe('splitPathParts', () => {
    it.each`
        absolutePath         | expectedParts
        ${null}              | ${[]}
        ${undefined}         | ${[]}
        ${' '}               | ${[]}
        ${''}                | ${[]}
        ${'/'}               | ${[]}
        ${'\\'}              | ${[]}
        ${'part1'}           | ${['part1']}
        ${'/part1'}          | ${['part1']}
        ${'\\part1'}         | ${['part1']}
        ${'/part1/'}         | ${['part1']}
        ${'\\part1\\'}       | ${['part1']}
        ${'/part1/part2'}    | ${['part1', 'part2']}
        ${'part1/part2'}     | ${['part1', 'part2']}
        ${'part1\\part2'}    | ${['part1', 'part2']}
        ${'/part1\\part2'}   | ${['part1', 'part2']}
        ${'/part1\\part2/'}  | ${['part1', 'part2']}
        ${'/part1\\part2\\'} | ${['part1', 'part2']}
    `('Split path "$absolutePath" should return $expectedParts parts successfully', ({ absolutePath, expectedParts }): void => {
        const parts: string[] = splitPathParts(absolutePath);
        expect(parts).toEqual(expectedParts);
    });
});
