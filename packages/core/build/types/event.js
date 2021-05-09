"use strict";
exports.__esModule = true;
exports.ECalendarEventType = exports.ECalendarEventStatus = void 0;
/**
 * 事件的状态
 */
var ECalendarEventStatus;
(function (ECalendarEventStatus) {
    /**
     * 确定的
     */
    ECalendarEventStatus["Confirmed"] = "confirmed";
    /**
     * 不确定的
     */
    ECalendarEventStatus["Tentative"] = "tentative";
    /**
     * 取消
     */
    ECalendarEventStatus["Cancelled"] = "cancelled";
})(ECalendarEventStatus = exports.ECalendarEventStatus || (exports.ECalendarEventStatus = {}));
var ECalendarEventType;
(function (ECalendarEventType) {
    ECalendarEventType["Default"] = "deafult";
})(ECalendarEventType = exports.ECalendarEventType || (exports.ECalendarEventType = {}));
