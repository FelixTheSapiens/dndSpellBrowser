function preventDoubleTap(event) {
  const THRESHOLD_MILLISECONDS = 300;
  const currentTime = new Date().getTime();
  const timeSinceLastTap = currentTime - (preventDoubleTap.lastTouchEnd || 0);

  if (timeSinceLastTap <= THRESHOLD_MILLISECONDS) {
    event.preventDefault();
  }

  preventDoubleTap.lastTouchEnd = currentTime;
}

document.addEventListener('touchend', preventDoubleTap, false);

showSpells();