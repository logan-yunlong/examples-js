import {describe, expect, test} from '@jest/globals';
import {AxiosExamples} from "./request";

describe('axios http request', () => {
    test('get', (done) => {
        AxiosExamples.getRequest().then(res => {
            console.log(res.data);
            done();
        }).catch(e => {
            done(e);
        })
    });
    test('post', (done) => {
        AxiosExamples.postRequest().then(res => {
            console.log(res.data);
            done();
        }).catch(e => {
            done(e);
        })
    });
});
