/*
 * @Author: 向家祥(xjiaxiang_86@163.com)
 * @description: 记录所有的状态
 * @filename: index.ts
 * Created on Thu Jun 02 2022
 * Copyright (c) 2022 xxx-ideas
 */
import DeepStateOb, {
  ListenerFunction,
  ListenerOptions,
  SubscribeAllOptions,
} from 'deep-state-observer';

export * from 'deep-state-observer';

/**
 * 用于管理所有的状态，同时提供状态改变的监听
 * @export
 * @class State
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class State<T extends Record<string, any>> {
  private _innerState = new DeepStateOb();

  constructor(config: T) {
    this._innerState = new DeepStateOb(config);
  }

  /**
   * @see {@link DeepStateOb.subscribe}
   * @param {string} listenerPath
   * @param {TListenerFunction} fn
   * @param {(TListenerOptions | undefined)} [options]
   * @param {(TSubscribeAllOptions | undefined)} [subscribeAllOptions]
   * @returns {ReturnType<DeepStateOb['subscribe']>}
   * @memberof State
   * @version 1.0.0
   */
  subscribe(
    listenerPath: string,
    fn: ListenerFunction,
    options?: ListenerOptions | undefined,
    subscribeAllOptions?: SubscribeAllOptions | undefined
  ): ReturnType<DeepStateOb['subscribe']> {
    return this._innerState.subscribe(
      listenerPath,
      fn,
      options,
      subscribeAllOptions
    );
  }
}
