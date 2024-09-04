
import { CommonError } from '@ueye/infra/terminal';

describe('CommonError specifications', () => {

    it('should format an unspecified error correctly with 160 code', () => {
        const error = new Error('Error message');
        const result = CommonError.unspecifiedError(error);

        expect(result).toEqual({
            error: `${error.stack}\n`,
            code: 160,
        });
    });

    it('should format an internal error correctly with 88 code', () => {
        const error = new Error('Error message');
        const result = CommonError.internalError(error);

        expect(result).toEqual({
            error: `${error.stack}\n`,
            code: 88,
        });
    });

});