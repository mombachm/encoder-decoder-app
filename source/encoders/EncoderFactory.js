"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EncodingType_1 = require("./EncodingType");
var FibonnaciEncoder_1 = require("./FibonnaciEncoder");
var GolombEncoder_1 = require("./GolombEncoder");
var UnaryEncoder_1 = require("./UnaryEncoder");
var EncoderFactory = /** @class */ (function () {
    function EncoderFactory() {
    }
    EncoderFactory.prototype.make = function (headerConfigs, inputData) {
        switch (headerConfigs.encodingType) {
            case EncodingType_1.EncodingType.Fibonacci:
                return new FibonnaciEncoder_1.FibonnaciEncoder(inputData);
            case EncodingType_1.EncodingType.Unary:
                return new UnaryEncoder_1.UnaryEncoder(inputData);
            case EncodingType_1.EncodingType.Golomb:
                return new GolombEncoder_1.GolombEncoder(inputData, headerConfigs.divider);
            default:
                return null;
        }
    };
    return EncoderFactory;
}());
exports.EncoderFactory = EncoderFactory;
//# sourceMappingURL=EncoderFactory.js.map