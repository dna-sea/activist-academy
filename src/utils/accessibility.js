export function prefersReducedMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function getTransition(duration = 0.3, options = {}) {
  if (prefersReducedMotion()) {
    return { ...options, duration: 0 };
  }
  return { duration, ...options };
}

export function getAnimationVariants(variants) {
  if (prefersReducedMotion()) {
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    };
  }
  return variants;
}

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const slideInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -60 },
};

export function getSlideInRight() {
  return prefersReducedMotion() ? fadeIn : slideInRight;
}

export function getFadeInUp() {
  return prefersReducedMotion() ? fadeIn : fadeInUp;
}
