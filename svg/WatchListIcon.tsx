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
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.6963 18.6316L5.32373 21.881C4.89477 22.1271 4.3663 21.9529 4.12982 21.4874V21.4874C4.0614 21.3432 4.02449 21.1834 4.02203 21.0206V6.62244C4.02203 3.87644 5.7217 2.77805 8.16756 2.77805H13.9133C16.2845 2.77805 18.0588 3.80322 18.0588 6.43937V21.0206C18.0588 21.2804 17.9653 21.5295 17.7989 21.7132C17.6326 21.8968 17.4069 22 17.1716 22C17.0216 21.9974 16.874 21.9567 16.7405 21.881L11.3347 18.6316C11.1355 18.5128 10.8955 18.5128 10.6963 18.6316Z"
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
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.6963 18.6316L5.32373 21.881C4.89477 22.1271 4.3663 21.9529 4.12982 21.4874V21.4874C4.0614 21.3432 4.02449 21.1834 4.02203 21.0206V6.62244C4.02203 3.87644 5.7217 2.77805 8.16756 2.77805H13.9133C16.2845 2.77805 18.0588 3.80322 18.0588 6.43937V21.0206C18.0588 21.2804 17.9653 21.5295 17.7989 21.7132C17.6326 21.8968 17.4069 22 17.1716 22C17.0216 21.9974 16.874 21.9567 16.7405 21.881L11.3347 18.6316C11.1355 18.5128 10.8955 18.5128 10.6963 18.6316Z"
        stroke="#67686D"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
