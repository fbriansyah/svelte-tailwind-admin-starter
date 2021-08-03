import { cubicOut } from 'svelte/easing';

/**
 * fungsi untuk proses transisi secara horizontal yang 
 * digunakan oleh svelte/transition
 * @param {object} node element yang akan dimanipulasi
 * @param {object} setting setting untuk animasi [delay, duration, easing]
 * @returns 
 */
export function sideBarSlide(node, { delay = 0, duration = 400, easing = cubicOut }) {
  const style = getComputedStyle(node);
  const opacity = +style.opacity;
  const width = parseFloat(style.width);
  const paddingTop = parseFloat(style.paddingTop);
  const paddingBottom = parseFloat(style.paddingBottom);
  const marginTop = parseFloat(style.marginTop);
  const marginBottom = parseFloat(style.marginBottom);
  const borderTopWidth = parseFloat(style.borderTopWidth);
  const borderBottomWidth = parseFloat(style.borderBottomWidth);

  return {
    delay,
    duration,
    easing,
    css: (t) =>
      `overflow: hidden;` +
      `opacity: ${Math.min(t * 20, 1) * opacity};` +
      `width: ${t * width}px;` +
      `padding-top: ${t * paddingTop}px;` +
      `padding-bottom: ${t * paddingBottom}px;` +
      `margin-top: ${t * marginTop}px;` +
      `margin-bottom: ${t * marginBottom}px;` +
      `border-top-width: ${t * borderTopWidth}px;` +
      `border-bottom-width: ${t * borderBottomWidth}px;`
  };
}