interface INavigator extends Navigator {
  msDoNotTrack: string | null;
}

function validate(doNotTrackValue: string | null) {
  if (doNotTrackValue === null) {
    return false;
  }

  return doNotTrackValue[0] === '1' || doNotTrackValue === 'yes';
}

function getDNTValue(window: Window) {
  return (
    window.doNotTrack ||
    window.navigator.doNotTrack ||
    (window.navigator as INavigator).msDoNotTrack
  );
}

export function isDNTEnabled(window: Window) {
  const doNotTrackValue = getDNTValue(window);

  // browser doesn't support DNT
  if (!doNotTrackValue) {
    return false;
  }

  return validate(doNotTrackValue);
}
