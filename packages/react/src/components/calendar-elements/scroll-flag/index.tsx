import * as React from 'react';

interface IScrollFlagProps {
  // TODO: 无限滚动靠他了
}

interface IPixelPos {
  x: number;
  y: number;
}

/**
 * 滚动标兵（撑大滚动区域）
 */
export const ScrollFlag: React.FC<IScrollFlagProps> = props => {
  const [pos, setPos] = React.useState<IPixelPos>({
    x: 0,
    y: 0,
  });

  return (
    <div
      style={{
        position: 'absolute',
        width: 1,
        height: 1,
        top: pos.y,
        left: pos.x,
      }}
    ></div>
  );
};
