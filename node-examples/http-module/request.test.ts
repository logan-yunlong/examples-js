import {describe, expect, test} from '@jest/globals';
import {getByHttp, postByHttp} from "./request";

describe('node:http request', () => {
    test('get', (done) => {
        try {
            getByHttp()
            done();
        } catch (e) {
            done(e);
        }
    });
    test('post', done => {
        try {
            postByHttp()
            done();
        } catch (e) {
            done(e)
        }
    })
});
