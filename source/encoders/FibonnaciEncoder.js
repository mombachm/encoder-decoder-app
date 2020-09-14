"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var term = require('terminal-kit').terminal;
var FibonnaciEncoder = /** @class */ (function () {
    function FibonnaciEncoder() {
    }
    FibonnaciEncoder.prototype.mod = function (val, n) {
        return ((val % n) + n) % n;
    };
    ;
    FibonnaciEncoder.prototype.readFileData = function (filepath) {
        return fs.readFileSync(filepath).toString();
    };
    FibonnaciEncoder.prototype.saveEncodedFileData = function (data, filepath) {
        var dirname = path.dirname(filepath);
        var filename = path.parse(filepath);
        var distFilepath = dirname + "/" + filename.name + ".cod";
        fs.writeFileSync(distFilepath, data);
        var stats = fs.statSync(distFilepath);
        var fileSizeInBytes = stats["size"];
        term.green("Encoded file size: " + fileSizeInBytes + " bytes");
    };
    FibonnaciEncoder.prototype.saveDecodedFileData = function (data, filepath) {
        var dirname = path.dirname(filepath);
        var filename = path.parse(filepath);
        var distFilepath = dirname + "/" + filename.name + ".dec";
        fs.writeFileSync(distFilepath, data);
        var stats = fs.statSync(distFilepath);
        var fileSizeInBytes = stats["size"];
        term.green("Decoded file size: " + fileSizeInBytes + " bytes");
    };
    FibonnaciEncoder.prototype.execute = function (data, reverse, cycle) {
        if (reverse === void 0) { reverse = false; }
        if (cycle === void 0) { cycle = 10; }
        var sequence = this.fibonacci();
        return Array.from(data).map(function (c, i) {
            var fibonacciValue = Number(sequence.next(i % cycle === 0).value);
            var val = (c.charCodeAt(0) + (reverse ? -1 : 1) * fibonacciValue);
            // val = this.mod(val, 255);
            return val;
        }).map(function (n) { return String.fromCharCode(n); })
            .join('');
    };
    FibonnaciEncoder.prototype.encode = function (filepath) {
        var data = this.readFileData(filepath);
        var dataEncoded = this.execute(data, false);
        this.saveEncodedFileData(dataEncoded, filepath);
    };
    FibonnaciEncoder.prototype.decode = function (filepath) {
        var data = this.readFileData(filepath);
        var dataDecoded = this.execute(data, true);
        this.saveDecodedFileData(dataDecoded, filepath);
    };
    FibonnaciEncoder.prototype.fibonacci = function () {
        var fn1, fn2, current, reset;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fn1 = 0;
                    fn2 = 1;
                    _a.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 3];
                    current = fn1;
                    fn1 = fn2;
                    fn2 = current + fn1;
                    return [4 /*yield*/, current];
                case 2:
                    reset = _a.sent();
                    if (reset) {
                        fn1 = 0;
                        fn2 = 1;
                    }
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/];
            }
        });
    };
    return FibonnaciEncoder;
}());
exports.FibonnaciEncoder = FibonnaciEncoder;
//# sourceMappingURL=FibonnaciEncoder.js.map