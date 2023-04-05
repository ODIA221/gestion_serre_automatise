import React from 'react';
import { useSpring, animated } from 'react-spring';

const ProtectRoute = () => {
  const props = useSpring({
    to: { opacity: 1, color: '#ff0000', transform: 'scale(1.2)' },
    from: { opacity: 0, color: '#ffffff', transform: 'scale(1)' },
    delay: 500,
    config: { tension: 200, friction: 20 },
  });

  return (
    <animated.div style={props}>
      <h1>Route invalide</h1>
    </animated.div>
  );
};

export default ProtectRoute;