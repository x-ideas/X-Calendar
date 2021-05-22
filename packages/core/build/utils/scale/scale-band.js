"use strict";
exports.__esModule = true;
exports.ScaleBand = void 0;
/**
 * 同d3.scaleBand
 *
 * 连续的条状区域
 *
 * https://devdocs.io/d3~6/d3-scale#_band
 */
var ScaleBand = /** @class */ (function () {
    function ScaleBand() {
        /**
         * 作用域
         */
        this._domain = [];
        /**
         * 值域
         */
        this._range = [];
        this._paddingOuter = 0;
        this._paddingInner = 0;
    }
    ScaleBand.prototype.setDomain = function (domain) {
        this._domain = domain;
        return this;
    };
    ScaleBand.prototype.domain = function () {
        return this._domain;
    };
    ScaleBand.prototype.setRange = function (range) {
        this._range = range;
        return this;
    };
    ScaleBand.prototype.range = function () {
        return this._range;
    };
    ScaleBand.prototype.getRangeValue = function (dValue) {
        if (this.check()) {
            var index = this._domain.findIndex(function (val) { return val === dValue; });
            if (-1 === index) {
                return undefined;
            }
            // 分段函数
            return this.range()[index];
        }
        return undefined;
    };
    ScaleBand.prototype.getBandWidth = function () {
        if (this.check()) {
            var num = this.domain().length;
            return this.rangeLength() / num;
        }
        return 0;
    };
    ScaleBand.prototype.clone = function () {
        var clonedItem = new ScaleBand();
        // TODO: 待实现
        return clonedItem;
    };
    /**
     * 检测配置的有效性
     * @private
     * @returns {boolean}
     * @memberof ScaleBand
     */
    ScaleBand.prototype.check = function () {
        if (this._range.length !== 2) {
            console.error(new Error('scale-band的值域的长度只支持2'));
            return false;
        }
        if (this._domain.length === 0) {
            console.error(new Error('scale-band的作用域需要设置'));
            return false;
        }
        return true;
    };
    ScaleBand.prototype.rangeLength = function () {
        if (this.check()) {
            return this.range()[1] - this.range()[0];
        }
        return 0;
    };
    return ScaleBand;
}());
exports.ScaleBand = ScaleBand;
