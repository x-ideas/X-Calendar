interface IXCalendarContentProps {}

/**
 * 日历的内容区，用来定坐标系(relative)
 * @param props
 * @returns
 */
export const XCalendarContent: React.FC<IXCalendarContentProps> = props => {
  return (
    <div
      style={{
        position: 'relative',
        overflow: 'auto',
      }}
      className="w-full h-full"
    >
      {props.children}
    </div>
  );
};
