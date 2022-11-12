import {describe, expect, test} from '@jest/globals';
import {request} from './request';

describe('sum module', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(request(1, 2)).toBe(3);
    });
});
