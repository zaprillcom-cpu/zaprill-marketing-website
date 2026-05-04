# DESIGN.md

## Color Strategy: Committed
The design uses a committed color strategy with a vivid primary purple and a soft cool-neutral canvas.

- **Primary**: `oklch(0.61 0.2 292)` (Vivid Purple)
- **Background**: `oklch(0.97 0.008 282)` (Soft Cool-Neutral)
- **Foreground**: `oklch(0.22 0.02 282)` (Dark Slate)
- **Accent**: `oklch(0.93 0.015 282)`

## Typography
- **Heading**: Satoshi / System Sans (Bold, tracking-tight)
- **Body**: Satoshi / System Sans (Light, leading-relaxed)

## Layout Principles
- **Bento / Glassmorphism**: Use rounded corners (`--radius: 0.85rem` or higher for components) and subtle backdrop blurs.
- **Rhythmic Spacing**: Avoid identical padding; use vertical breathing room (py-32).
- **Asymmetric Balance**: Use varying card widths or heights to create visual interest.

## Components
- **SectionHeading**: Centered or side-aligned with a pill-style badge.
- **Reveal**: All major sections should use a fade-in / slide-up reveal animation.
- **Card**: Use `bg-card/50 backdrop-blur-xl` for a premium feel.
