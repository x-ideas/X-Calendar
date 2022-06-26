// Provides dev-time type structures for  `danger` - doesn't affect runtime.
import type { DangerDSLType } from 'danger/distribution/dsl/DangerDSL';

declare const danger: DangerDSLType;
export declare function message(info: string): void;
export declare function warn(info: string): void;
export declare function fail(info: string): void;
export declare function markdown(info: string): void;

/**
 * only pnpm
 */
export default function onlyPnpm() {
  // Replace this with the code from your Dangerfile
  const { title } = danger.github.pr;
  message(`PR Title: ${title}`);
}
