export const depthLabels = ['Surface', 'Shallow', 'Medium', 'Deep', 'Abyssal'] as const;

export function getDepthLabel(depth: number): string {
  return depthLabels[depth - 1] || 'Unknown';
}
