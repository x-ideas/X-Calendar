/* eslint-disable @typescript-eslint/no-namespace */
import debug from 'debug';

export const Logger = debug;

export type Logger = {
  Debug: debug.Debug;
  Debugger: debug.Debugger;
  Formatters: debug.Formatters;
  IDebug: debug.IDebug;
  IDebugger: debug.IDebugger;
};
