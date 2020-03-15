import React from 'react';
import ReactSwipe from 'react-swipe';

type Props = {
  currentStepIndex: number;
  transitionSpeed?: number;
};

const defaultTransitionSpeed = 500;

export const Carousel: React.FC<Props> = ({
  children,
  currentStepIndex,
  transitionSpeed = defaultTransitionSpeed,
  ...props
}) => {
  const swipeRef = React.useRef(null);

  React.useEffect(() => {
    const actualStepIndex = swipeRef?.current.getPos();
    if (actualStepIndex !== currentStepIndex) {
      swipeRef?.current.slide(currentStepIndex, transitionSpeed);
    }
  });

  return (
    <ReactSwipe
      {...props}
      ref={swipeRef}
      swipeOptions={{ continuous: false, speed: transitionSpeed }}>
      {React.Children.map(children, (child, index) => (
        <div key={index}>
          <div style={{ visibility: currentStepIndex === index ? 'visible' : 'hidden' }}>
            {child}
          </div>
        </div>
      ))}
    </ReactSwipe>
  );
};
