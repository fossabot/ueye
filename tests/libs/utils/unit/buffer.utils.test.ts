
import { BufferUtils } from '@ueye/utils';

describe('BufferUtils specifications', () => {

    describe('toUTF8String', () => {

        it('should convert a Buffer to a UTF-8 string', () => {
            const buffer = Buffer.from('Hello World', 'utf8');
            expect(BufferUtils.toUTF8String(buffer)).toBe('Hello World');
        });

    });

    describe('toUTF8StringTrimmed', () => {

        it('should convert a Buffer to a trimmed UTF-8 string', () => {
            const buffer = Buffer.from('  Hello World  ', 'utf8');
            expect(BufferUtils.toUTF8StringTrimmed(buffer)).toBe('Hello World');
        });

        it('should return an empty string when the Buffer only contains whitespace', () => {
            const buffer = Buffer.from('   ', 'utf8');
            expect(BufferUtils.toUTF8StringTrimmed(buffer)).toBe('');
        });

    });

});