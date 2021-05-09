interface IXCalendarContainerProps {
  width: number | string;
  height: number | string;
}

/**
 * 日历的容器，用来确定尺寸
 * @param props
 * @returns
 */
export const XCalendarContainer: React.FC<IXCalendarContainerProps> = props => {
  return (
    <div
      style={{
        width: props.width,
        height: props.height,
      }}
    >
      {props.children}
    </div>
  );
};
