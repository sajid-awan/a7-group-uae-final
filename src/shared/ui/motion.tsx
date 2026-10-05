"use client"

import { type ReactNode } from "react"
import {
  motion,
  type Variants,
  type MotionProps,
  type UseInViewOptions,
} from "framer-motion"

// ─── Shared viewport config ─────────────────────────────────────────────────
/** Scroll-in animations fire once per element (all pages). */
export const MOTION_VIEWPORT: UseInViewOptions = { once: true, amount: 0.15 }
const VIEWPORT = MOTION_VIEWPORT

// ─── Variant presets ─────────────────────────────────────────────────────────
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
}

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const fadeLeftVariants: Variants = {
  hidden: { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0 },
}

export const scaleUpVariants: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1 },
}

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

export const staggerFastVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.0 } },
}

const MOTION_TAGS = {
  article: motion.article,
  div: motion.div,
  footer: motion.footer,
  header: motion.header,
  li: motion.li,
  main: motion.main,
  p: motion.p,
  section: motion.section,
  span: motion.span,
  ul: motion.ul,
} as const

type MotionTagName = keyof typeof MOTION_TAGS

// ─── Shared transition ────────────────────────────────────────────────────────
export const EASE_TRANSITION = {
  duration: 0.9,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
}

export const SPRING_TRANSITION = {
  type: "spring" as const,
  stiffness: 80,
  damping: 18,
}

// ─── Primitives ───────────────────────────────────────────────────────────────

type FadeUpProps = MotionProps & {
  className?: string
  delay?: number
  duration?: number
  as?: MotionTagName
}

/** Fades + slides up on scroll into view. */
export function FadeUp({
  children,
  className,
  delay = 0,
  duration = 0.9,
  as: Tag = "div",
  ...rest
}: FadeUpProps & { children?: ReactNode }) {
  const MotionTag = MOTION_TAGS[Tag] ?? motion.div
  return (
    <MotionTag
      className={className}
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      transition={{ ...EASE_TRANSITION, duration, delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

type FadeInProps = MotionProps & {
  className?: string
  delay?: number
  duration?: number
}

/** Fades in on scroll into view. */
export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 1.0,
  ...rest
}: FadeInProps & { children?: ReactNode }) {
  return (
    <motion.div
      className={className}
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      transition={{ ...EASE_TRANSITION, duration, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

type StaggerProps = {
  children: ReactNode
  className?: string
  fast?: boolean
  delay?: number
  as?: MotionTagName
}

/** Container that staggers children. Children must use motion variants. */
export function StaggerContainer({
  children,
  className,
  fast = false,
  delay = 0,
  as: Tag = "div",
}: StaggerProps) {
  const MotionTag = MOTION_TAGS[Tag] ?? motion.div
  const variants = fast ? staggerFastVariants : staggerContainerVariants
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      transition={delay ? { delayChildren: delay } : undefined}
    >
      {children}
    </MotionTag>
  )
}

/** A child item that fades up inside a StaggerContainer. */
export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUpVariants}
      transition={EASE_TRANSITION}
    >
      {children}
    </motion.div>
  )
}

/** Scale-up on scroll. Good for banners / hero-like elements. */
export function ScaleUp({
  children,
  className,
  delay = 0,
  duration = 1.1,
}: {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
}) {
  return (
    <motion.div
      className={className}
      variants={scaleUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      transition={{ ...EASE_TRANSITION, duration, delay }}
    >
      {children}
    </motion.div>
  )
}

/** Slide in from the left on scroll. */
export function FadeLeft({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      className={className}
      variants={fadeLeftVariants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      transition={{ ...EASE_TRANSITION, delay }}
    >
      {children}
    </motion.div>
  )
}
