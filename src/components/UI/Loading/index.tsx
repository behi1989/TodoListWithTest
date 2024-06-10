import { FC } from 'react'

import { SpinnerType } from './Spinner.type';

import './Spinner.css'

const Spinner: FC<SpinnerType> = ({color, type}) => {
  switch (type) {
    case 'circle':
      return (
        <div className="circle-loader" style={{ borderColor: color }} />
      );
    case 'dot':
    default:
      return (
        <div className="dot-loader">
          <div className="dot" style={{ backgroundColor: color }}></div>
          <div className="dot" style={{ backgroundColor: color }}></div>
          <div className="dot" style={{ backgroundColor: color }}></div>
        </div>
      );
  }
};

export default Spinner
