const {it, expect} = require('@jest/globals');
const CaptionSync = require('../index')

describe('basic test that the code completes', () => {
    it('should create an instance', () => {
        expect(() => {
            const cs = new CaptionSync()
        }).not.toThrow()

    })
})
// TODO: nightwatch instead of jest