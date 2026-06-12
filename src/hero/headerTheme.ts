/** Height of the fixed portfolio header — keep in sync with navbar layout. */
export const HEADER_HEIGHT = 72

/** Sections declare which header palette to use while the header overlaps them. */
export const HEADER_THEME_ATTR = 'data-header-theme'

export type HeaderTheme = 'light' | 'dark'

/**
 * `light` — white nav / logo / CTA (for dark section backgrounds)
 * `dark`  — navy nav / logo / CTA (for light section backgrounds)
 */
export function readHeaderThemeFromDom(fallback: HeaderTheme = 'light'): HeaderTheme {
  const probeY = HEADER_HEIGHT / 2
  const sections = document.querySelectorAll<HTMLElement>(`[${HEADER_THEME_ATTR}]`)

  for (const section of sections) {
    const rect = section.getBoundingClientRect()
    if (rect.top <= probeY && rect.bottom > probeY) {
      const value = section.getAttribute(HEADER_THEME_ATTR)
      if (value === 'light' || value === 'dark') return value
    }
  }

  return fallback
}
