export function fontAutoColor(rgb: string): 'black' | 'white' {
  const [r, g, b] = rgb.match(/\d+/g)!.map(Number)

  const brightness = (r * 299 + g * 587 + b * 114) / 1000

  return brightness > 150 ? 'black' : 'white'
}
