"use strict";
exports.__esModule = true;
exports.ScaleLinear = void 0;
/**
 * 过小值
 */
var TOO_SMALL_DOMAIN_VALUE = -1;
/**
 * 过大值
 */
var TOO_MAX_DOMAIN_VALUE = -2;
var ScaleLinear = /** @class */ (function () {
    function ScaleLinear() {
        /**
         * 作用域
         */
        this._domain = [];
        /**
         * 值域
         */
        this._range = [];
    }
    ScaleLinear.prototype.setDomain = function (domain) {
        this._domain = domain;
        return this;
    };
    ScaleLinear.prototype.domain = function () {
        return this._domain;
    };
    ScaleLinear.prototype.setRange = function (range) {
        this._range = range;
        return this;
    };
    ScaleLinear.prototype.range = function () {
        return this._range;
    };
    ScaleLinear.prototype.getRangeValue = function (dValue) {
        if (this.check()) {
            // 找到domain区间
            var index = this.findDomainIndex(dValue);
            if (index === TOO_MAX_DOMAIN_VALUE) {
                return undefined;
            }
            if (index === TOO_SMALL_DOMAIN_VALUE) {
                return undefined;
            }
            // 一次线性函数
            var yStart = this.range()[index];
            var yEnd = this.range()[index + 1];
            var xStart = this.domain()[index];
            var xEnd = this.domain()[index + 1];
            var k = (yEnd - yStart) / (xEnd - xStart);
            return xStart + k * (dValue - xStart);
        }
        return undefined;
    };
    /**
     * 根据dValue的值，找到对应的定义域索引
     * TOO_SMALL_DOMAIN_VALUE 表示 dValue位于domain定义域的下界之外
     * TOO_MAX_DOMAIN_VALUE 表示 dValue位于domain定义域的上界之外
     * @private
     * @param {number} dValue
     * @returns {(number | -1)}
     * @memberof ScaleLinear
     */
    ScaleLinear.prototype.findDomainIndex = function (dValue) {
        // TODO: 待实现
        return 0;
    };
    /**
     * 检查参数是否有效
     * @private
     */
    ScaleLinear.prototype.check = function () {
        if (this._domain.length === 0) {
            console.error(new Error('当前domain尚未被设置'));
            return false;
        }
        if (this._range.length === 0) {
            console.error(new Error('当前range尚未被设置'));
            return false;
        }
        if (this._domain.length !== this._range.length) {
            console.error(new Error('scale-linear的domain与range的长度不匹配'));
            return false;
        }
    };
    return ScaleLinear;
}());
exports.ScaleLinear = ScaleLinear;
