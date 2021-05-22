import { ICloneable } from '../../types/clone';
import { IAxisDomain } from './axis-domain';
import { IAxisScale } from './axis-scale';
/**
 * 同d3.scaleBand
 *
 * 连续的条状区域
 *
 * https://devdocs.io/d3~6/d3-scale#_band
 */
export declare class ScaleBand<VT = IAxisDomain> implements IAxisScale<VT>, ICloneable<ScaleBand> {
    /**
     * 作用域
     */
    _domain: VT[];
    /**
     * 值域
     */
    _range: number[];
    _paddingOuter: number;
    _paddingInner: number;
    setDomain(domain: VT[]): this;
    domain(): VT[];
    setRange(range: number[]): this;
    range(): number[];
    getRangeValue(dValue: VT): number | undefined;
    getBandWidth(): number;
    clone(): ScaleBand;
    /**
     * 检测配置的有效性
     * @private
     * @returns {boolean}
     * @memberof ScaleBand
     */
    private check;
    private rangeLength;
}
