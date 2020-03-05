import { Color, log } from './utils/logger';

const byteArrayToString = (buffer: any) => {
    if (typeof buffer.length !== 'number') {
        return buffer;
    }
    const result = [];
    for (let i = 0; i < buffer.length; ++i) {
        result.push(buffer[i] & 0xff);
    }
    return result.map((i: number) => i >= 32 && i <= 126 ? String.fromCharCode(i) : `\\x${i.toString(16).padStart(2, '0')}`).join('');
}

const printBacktrace = () => {
    Java.perform(() => {
        const Exception = Java.use('java.lang.Exception');
        const Log = Java.use('android.util.Log');
        const trace: string = Log.getStackTraceString(Exception.$new());
        log(trace.split('\n').map(i => i.trim()).slice(1).join('\n'), { c: Color.Yellow });
    });
};

Java.perform(() => {
    log("=====================");
    const cls = Java.use<{
        a: Java.MethodDispatcher;
        b: Java.MethodDispatcher;
    }>('com.safeway.client.android.util.j'); // DataEncryptionUtil
    const encrypt = "a";
    const getRawKey = "a";
    const generateSalt = "a";
    const toHex = "b";
    cls[encrypt].overload('java.lang.String', '[B', '[B').implementation = function (...args) {
        log(`encrypt: ${cls}.${encrypt}('java.lang.String', '[B', '[B')`, { c: Color.Cyan });
        log(`args: ${args[0]}, ${byteArrayToString(args[1])}, ${byteArrayToString(args[2])}`, { c: Color.Blue });
        const result = this[encrypt](...args);
        log(`result: ${this[toHex](result)}`, { c: Color.Green });
        printBacktrace();
        log("=====================");
        return result;
    };
    cls[getRawKey].overload('java.lang.String', '[B').implementation = function (...args) {
        log(`getRawKey: ${cls}.${getRawKey}('java.lang.String', '[B')`, { c: Color.Cyan });
        log(`args: ${args[0]}, ${byteArrayToString(args[1])}`, { c: Color.Blue });
        const result = this[getRawKey](...args);
        log(`result: ${byteArrayToString(result)}`, { c: Color.Green });
        printBacktrace();
        log("=====================");
        return result;
    };
    cls[generateSalt].overload().implementation = function (...args) {
        log(`generateSalt: ${cls}.${generateSalt}()`, { c: Color.Cyan });
        log(`args: no args`, { c: Color.Blue });
        const result = this[generateSalt](...args);
        log(`result: ${byteArrayToString(result)}`, { c: Color.Green });
        printBacktrace();
        log("=====================");
        return result;
    };
});
