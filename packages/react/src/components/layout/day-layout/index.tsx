import * as React from 'react';

interface IXDayLayoutProps {
  /**
   * 宽度
   */
  width: number;
  /**
   * 高度
   */
  height: number;

  /**
   * x坐标轴的高度
   */
  xAxisHeight: number;

  /**
   * y坐标轴的宽度
   */
  yAxisWidth: number;

  children?: React.ReactNode;
}

const XDayLayoutContext = React.createContext<IXDayLayoutProps>({
  width: 0,
  height: 0,
  xAxisHeight: 0,
  yAxisWidth: 0,
});

export function XDayLayout(props: IXDayLayoutProps) {
  return (
    <XDayLayoutContext.Provider
      value={{
        width: props.width,
        height: props.height,
        xAxisHeight: props.xAxisHeight,
        yAxisWidth: props.yAxisWidth,
      }}
    >
      {props.children}
    </XDayLayoutContext.Provider>
  );
}

const XAxisLayout: React.FC = props => {
  const layoutContext = React.useContext(XDayLayoutContext);

  return <div>{props.children}</div>;
};
XDayLayout.XAxisLayout = XAxisLayout;

const YAxisLayout: React.FC = props => {
  const layoutContext = React.useContext(XDayLayoutContext);

  return <div>{props.children}</div>;
};
XDayLayout.YAxisLayout = YAxisLayout;
