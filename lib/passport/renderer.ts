import type {ElementKey, ScoreRecord} from '@/domain/algorithm/types';

export type PassportFormat = 'square' | 'story';

export interface PassportRenderData {
  typeNumber: string;
  guardianName: string;
  rhythm: string;
  archetype: string;
  summary: string;
  elements: ScoreRecord<ElementKey>;
  elementLabels: Record<ElementKey, string>;
  footer: string;
}

const palette = {
  canvas: '#f4f1ec', surface: '#ffffff', charcoal: '#262626', muted: '#77716a',
  forest: '#4f7a5a', border: '#cec7bd', wood: '#66886d', fire: '#b9664f',
  earth: '#aa874f', metal: '#7d7c78', water: '#466b83'
} as const;

const elementColors: Record<ElementKey, string> = {
  wood: palette.wood, fire: palette.fire, earth: palette.earth, metal: palette.metal, water: palette.water
};

const elementOrder: readonly ElementKey[] = ['wood', 'fire', 'earth', 'metal', 'water'];

function roundedRect(context: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number) {
  context.beginPath();
  context.roundRect(x, y, width, height, radius);
}

function wrapText(context: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth: number, lineHeight: number, maxLines: number) {
  const words = Array.from(text);
  let line = '';
  let lineIndex = 0;
  for (const word of words) {
    const candidate = line + word;
    if (context.measureText(candidate).width > maxWidth && line) {
      context.fillText(line, x, y + lineIndex * lineHeight);
      line = word;
      lineIndex += 1;
      if (lineIndex >= maxLines) return;
    } else {
      line = candidate;
    }
  }
  if (lineIndex < maxLines) context.fillText(line, x, y + lineIndex * lineHeight);
}

export function passportFilename(typeNumber: string, format: PassportFormat) {
  return `BODY32-TYPE-${typeNumber}-${format}.png`;
}

export async function renderPassport(data: PassportRenderData, format: PassportFormat): Promise<Blob> {
  await document.fonts.ready;
  const width = 1080;
  const height = format === 'square' ? 1080 : 1920;
  const scale = width / 1080;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext('2d');
  if (!context) throw new Error('Canvas rendering is unavailable.');

  context.fillStyle = palette.canvas;
  context.fillRect(0, 0, width, height);

  const padding = 78 * scale;
  const cardHeight = height - padding * 2;
  roundedRect(context, padding, padding, width - padding * 2, cardHeight, 46 * scale);
  context.fillStyle = palette.surface;
  context.fill();
  context.strokeStyle = palette.border;
  context.lineWidth = 2 * scale;
  context.stroke();

  context.fillStyle = palette.charcoal;
  context.font = `800 ${30 * scale}px Inter, Arial, sans-serif`;
  context.fillText('BODY32', padding + 54 * scale, padding + 74 * scale);
  context.fillStyle = palette.forest;
  context.font = `700 ${18 * scale}px Inter, Arial, sans-serif`;
  context.textAlign = 'right';
  context.fillText(`TYPE ${data.typeNumber}`, width - padding - 54 * scale, padding + 72 * scale);
  context.textAlign = 'left';

  const emblemY = format === 'square' ? 365 : 525;
  const emblemRadius = format === 'square' ? 150 : 190;
  context.beginPath();
  context.arc(width / 2, emblemY, emblemRadius, 0, Math.PI * 2);
  context.fillStyle = '#eef5ef';
  context.fill();
  context.strokeStyle = palette.forest;
  context.lineWidth = 2;
  context.stroke();
  context.beginPath();
  context.arc(width / 2, emblemY, emblemRadius * 0.72, 0, Math.PI * 2);
  context.setLineDash([8, 12]);
  context.strokeStyle = palette.border;
  context.stroke();
  context.setLineDash([]);
  context.fillStyle = palette.charcoal;
  context.textAlign = 'center';
  context.font = `italic ${format === 'square' ? 132 : 170}px Georgia, serif`;
  context.fillText(data.archetype.slice(0, 1), width / 2, emblemY + (format === 'square' ? 46 : 58));

  const titleY = format === 'square' ? 610 : 820;
  context.fillStyle = palette.forest;
  context.font = `700 ${18 * scale}px Inter, Arial, sans-serif`;
  context.fillText(`${data.rhythm} · ${data.archetype}`, width / 2, titleY);
  context.fillStyle = palette.charcoal;
  context.font = `600 ${format === 'square' ? 60 : 72}px Inter, Arial, sans-serif`;
  context.fillText(data.guardianName, width / 2, titleY + 74);

  context.fillStyle = palette.muted;
  context.font = `400 ${format === 'square' ? 25 : 30}px Inter, Arial, sans-serif`;
  wrapText(context, data.summary, width / 2, titleY + 132, width - 300, format === 'square' ? 38 : 46, format === 'square' ? 2 : 3);

  const barsY = format === 'square' ? 825 : 1150;
  const barWidth = width - padding * 2 - 108;
  context.textAlign = 'left';
  elementOrder.forEach((element, index) => {
    const y = barsY + index * (format === 'square' ? 38 : 58);
    const score = Math.round(data.elements[element]);
    context.fillStyle = palette.muted;
    context.font = `600 ${format === 'square' ? 15 : 20}px Inter, Arial, sans-serif`;
    context.fillText(data.elementLabels[element], padding + 54, y);
    roundedRect(context, padding + 190, y - 13, barWidth - 190, format === 'square' ? 12 : 16, 8);
    context.fillStyle = '#eae6df';
    context.fill();
    roundedRect(context, padding + 190, y - 13, (barWidth - 190) * score / 100, format === 'square' ? 12 : 16, 8);
    context.fillStyle = elementColors[element];
    context.fill();
    context.fillStyle = palette.charcoal;
    context.textAlign = 'right';
    context.fillText(String(score), width - padding - 54, y);
    context.textAlign = 'left';
  });

  context.fillStyle = palette.muted;
  context.font = `400 ${format === 'square' ? 14 : 18}px Inter, Arial, sans-serif`;
  context.fillText(data.footer, padding + 54, height - padding - 48);

  return new Promise((resolve, reject) => canvas.toBlob((blob) => blob ? resolve(blob) : reject(new Error('Could not create PNG.')), 'image/png'));
}

export async function downloadPassport(data: PassportRenderData, format: PassportFormat) {
  const blob = await renderPassport(data, format);
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.download = passportFilename(data.typeNumber, format);
  link.href = url;
  link.click();
  URL.revokeObjectURL(url);
}
