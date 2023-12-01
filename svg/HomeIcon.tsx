import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  focused: boolean;
  color: string;
}

export default ({focused, ...props}: Props) => {
  if (focused) {
    return (
      <Svg width="22" height="24" viewBox="0 0 22 24" fill="none" {...props}>
        <Path
          d="M16.5246 22H14.7818H7.34876H5.60596C3.86861 22 2.46021 20.4607 2.46021 18.5618V9.84736C2.4669 9.09967 2.78834 8.39702 3.3316 7.94256L9.26584 2.6853C10.31 1.77157 11.7944 1.77157 12.8386 2.6853L18.799 7.93303C19.3402 8.38935 19.6611 9.09083 19.6704 9.83784V18.5618C19.6704 20.4607 18.2619 22 16.5246 22Z"
          stroke="#0296E5"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    );
  }

  return (
    <Svg width="20" height="22" viewBox="0 0 20 22" fill="none" {...props}>
      <Path
        d="M15.5245 21H13.7817H6.3487H4.6059C2.86855 21 1.46014 19.4607 1.46014 17.5618V8.84736C1.46683 8.09967 1.78828 7.39702 2.33154 6.94256L8.26578 1.6853C9.30997 0.771566 10.7943 0.771566 11.8385 1.6853L17.7989 6.93303C18.3401 7.38935 18.661 8.09083 18.6703 8.83784V17.5618C18.6703 19.4607 17.2619 21 15.5245 21Z"
        stroke="#67686D"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
