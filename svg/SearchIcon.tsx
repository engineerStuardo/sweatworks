import * as React from 'react';
import Svg, {Path, Ellipse} from 'react-native-svg';

interface Props {
  focused: boolean;
  color: string;
}

export default ({focused, ...props}: Props) => {
  if (focused) {
    return (
      <Svg width="22" height="24" viewBox="0 0 22 24" fill="none" {...props}>
        <Ellipse
          cx="10.7886"
          cy="11.7666"
          rx="8.14181"
          ry="8.98856"
          stroke="#0296E5"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M16.4514 18.4851L19.6435 22"
          stroke="#0296E5"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    );
  }

  return (
    <Svg width="22" height="24" viewBox="0 0 22 24" fill="none" {...props}>
      <Ellipse
        cx="10.7885"
        cy="11.7666"
        rx="8.14181"
        ry="8.98856"
        stroke="#67686D"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M16.4513 18.4851L19.6433 22"
        stroke="#67686D"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
