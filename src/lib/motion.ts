import { Variants } from "framer-motion";

/**
 * Physics-based spring configuration for smooth, premium animations
 * Used throughout the portfolio for consistent motion feel
 */
export const springConfig = {
  // Default spring - balanced for most animations
  default: { type: "spring" as const, stiffness: 100, damping: 15, mass: 1 },
  // Snappy spring - for quick interactions
  snappy: { type: "spring" as const, stiffness: 300, damping: 20, mass: 0.8 },
  // Gentle spring - for large movements
  gentle: { type: "spring" as const, stiffness: 50, damping: 15, mass: 1.2 },
  // Bouncy spring - subtle bounce effect
  bouncy: { type: "spring" as const, stiffness: 200, damping: 10, mass: 0.5 },
};

/**
 * Fade in from bottom - primary entrance animation
 * Used for section content as it enters viewport
 */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: springConfig.default,
  },
};

/**
 * Fade in from top - for elements dropping in
 */
export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: springConfig.default,
  },
};

/**
 * Fade in from left
 */
export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: springConfig.default,
  },
};

/**
 * Fade in from right
 */
export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: springConfig.default,
  },
};

/**
 * Scale in animation - for cards and modals
 */
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: springConfig.snappy,
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.2 },
  },
};

/**
 * Stagger container - parent variant for staggered children
 * Children will animate in sequence with configurable delay
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

/**
 * Fast stagger for skill badges and quick lists
 */
export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

/**
 * Slow stagger for important content like project cards
 */
export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

/**
 * Text reveal animation - character by character
 * Parent variant for text reveal effect
 */
export const textRevealContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

/**
 * Individual character variant for text reveal
 */
export const textRevealChar: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: springConfig.snappy,
  },
};

/**
 * Navbar animation variants
 */
export const navbarVariants: Variants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ...springConfig.gentle,
      delay: 0.5,
    },
  },
};

/**
 * Nav link hover animation
 */
export const navLinkVariants: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: springConfig.snappy,
  },
  tap: { scale: 0.95 },
};

/**
 * Button hover animation with subtle lift
 */
export const buttonVariants: Variants = {
  initial: {
    scale: 1,
    y: 0,
  },
  hover: {
    scale: 1.02,
    y: -2,
    transition: springConfig.snappy,
  },
  tap: {
    scale: 0.98,
    y: 0,
  },
};

/**
 * Card hover animation - subtle lift and glow effect
 */
export const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: springConfig.default,
  },
  hover: {
    y: -5,
    transition: springConfig.snappy,
  },
};

/**
 * Modal backdrop animation
 */
export const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

/**
 * Modal content animation
 */
export const modalVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: springConfig.default,
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: { duration: 0.2 },
  },
};

/**
 * Skill badge animation
 */
export const skillBadgeVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: springConfig.bouncy,
  },
  hover: {
    scale: 1.1,
    transition: springConfig.snappy,
  },
};

/**
 * Underline animation for nav links
 */
export const underlineVariants: Variants = {
  initial: { scaleX: 0 },
  hover: {
    scaleX: 1,
    transition: springConfig.snappy,
  },
};

/**
 * Page load sequence - coordinates initial page animations
 */
export const pageLoadSequence: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

/**
 * Parallax-lite scroll effect values
 * Use with useScroll and useTransform
 */
export const parallaxConfig = {
  // Slow parallax - moves slower than scroll
  slow: { inputRange: [0, 1], outputRange: [0, -50] },
  // Medium parallax
  medium: { inputRange: [0, 1], outputRange: [0, -100] },
  // Fast parallax - moves faster than scroll
  fast: { inputRange: [0, 1], outputRange: [0, -200] },
  // Opacity fade based on scroll
  fadeOut: { inputRange: [0, 0.5, 1], outputRange: [1, 0.5, 0] },
  // Scale down on scroll
  scaleDown: { inputRange: [0, 1], outputRange: [1, 0.9] },
};

/**
 * Icon animation variants
 */
export const iconVariants: Variants = {
  initial: { rotate: 0 },
  hover: {
    rotate: [0, -10, 10, 0],
    transition: { duration: 0.5 },
  },
};

/**
 * List item animation for bullet points
 */
export const listItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: springConfig.default,
  },
};

/**
 * Section title animation
 */
export const sectionTitleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...springConfig.gentle,
      delay: 0.1,
    },
  },
};
