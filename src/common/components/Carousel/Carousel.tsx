import React from 'react';
import ReactSwipe from 'react-swipe';

type Props = {
  currentStepIndex: number;
  transitionSpeed?: number;
  isSwipeDisabled?: boolean;
  isContinuous?: boolean;
  isAuto?: boolean;
  onTransitionStart?: () => void;
  onTransitionEnd?: () => void;
  onSwipe?: (event: Event) => void;
};

const defaultTransitionSpeed = 500;

export const Carousel: React.FC<Props> = ({
  children,
  currentStepIndex,
  transitionSpeed = defaultTransitionSpeed,
  isSwipeDisabled = false,
  onSwipe,
  isContinuous = false,
  isAuto = false,
  onTransitionStart,
  onTransitionEnd,
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
      swipeOptions={{
        continuous: isContinuous,
        auto: isAuto,
        speed: transitionSpeed,
        swiping: (e) => (isSwipeDisabled ? e.preventDefault() : onSwipe?.(e)),
        callback: onTransitionStart,
        onTransitionEnd
      }}>
      {React.Children.map(children, (child, index) => (
        <div key={index}>
          <div
            style={{
              visibility: currentStepIndex === index ? 'visible' : 'hidden'
            }}>
            {child}
          </div>
        </div>
      ))}
    </ReactSwipe>
  );
};
