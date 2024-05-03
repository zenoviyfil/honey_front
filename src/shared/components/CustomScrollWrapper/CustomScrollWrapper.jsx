import 'overlayscrollbars/styles/overlayscrollbars.css';
import s from './CustomScrollWrapper.scss';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import clsx from 'clsx';

const CustomScrollWrapper = ({ children, wrapClassName }) => {
  return (
    <OverlayScrollbarsComponent
      element="div"
      className={clsx(s.myScroll, wrapClassName && wrapClassName)}
      options={{
        scrollbars: { autoHide: 'never', theme: 'no-theme' },
      }}
      defer
    >
      {children}
    </OverlayScrollbarsComponent>
  );
};

export default CustomScrollWrapper;
