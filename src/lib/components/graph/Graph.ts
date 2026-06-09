// src/lib/components/graph/GraphView.ts
import type {
  GraphData,
  GraphPoint,
  GraphModel,
  Extents,
  AxisTick
} from './graph.types';


function getExtents(points: GraphPoint[]): Extents {
  if (points.length === 0) {
    return { minX: 0, maxX: 1, minY: 0, maxY: 1 };
  }

  const xs = points.map((p) => p.timeSec);
  const ys = points.map((p) => p.value);

  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys, 0);
  const maxY = Math.max(...ys, 1);

  return { minX, maxX, minY, maxY };
}

function mapToSvg(
  p: GraphPoint,
  extents: Extents,
  width: number,
  height: number,
  paddingLeft: number,
  paddingRight: number,
  paddingTop: number,
  paddingBottom: number
) {
  const { minX, maxX, minY, maxY } = extents;
  const innerWidth = width - paddingLeft - paddingRight;
  const innerHeight = height - paddingTop - paddingBottom;

  const xNorm = (p.timeSec - minX) / (maxX - minX || 1);
  const yNorm = (p.value - minY) / (maxY - minY || 1);

  const x = paddingLeft + xNorm * innerWidth;
  const y = paddingTop + (1 - yNorm) * innerHeight;

  return { x, y };
}

export function createGraphModel(graph: GraphData): GraphModel {
  const width = 600;
  const height = 220;
  const paddingLeft = 40;
  const paddingRight = 10;
  const paddingTop = 10;
  const paddingBottom = 24;

  const points = graph.points ?? [];
  const hasData = points.length > 0;
  const extents = getExtents(points);

  const pointsSvg = points.map((p) =>
    mapToSvg(p, extents, width, height, paddingLeft, paddingRight, paddingTop, paddingBottom)
  );

  const pathD = !hasData
    ? ''
    : pointsSvg
        .map((pt, index) => `${index === 0 ? 'M' : 'L'} ${pt.x} ${pt.y}`)
        .join(' ');

  const areaD = !hasData
    ? ''
    : [
        `M ${pointsSvg[0].x} ${height - paddingBottom}`,
        ...pointsSvg.map((pt) => `L ${pt.x} ${pt.y}`),
        `L ${pointsSvg[pointsSvg.length - 1].x} ${height - paddingBottom}`,
        'Z'
      ].join(' ');

  const xTicks: AxisTick[] = (() => {
    const { minX, maxX } = extents;
    const ticks: AxisTick[] = [];
    const count = 5;
    const span = maxX - minX || 1;
    for (let i = 0; i <= count; i++) {
      const value = minX + (span * i) / count;
      const { x } = mapToSvg(
        { timeSec: value, value: extents.minY },
        extents,
        width,
        height,
        paddingLeft,
        paddingRight,
        paddingTop,
        paddingBottom
      );
      ticks.push({ value, pos: x, label: `${value.toFixed(0)}s` });
    }
    return ticks;
  })();

  const yBaseValues = [0, 0.25, 0.5, 0.75, 1];
  const yTicks: AxisTick[] = yBaseValues.map((v) => {
    const { y } = mapToSvg(
      { timeSec: extents.minX, value: v },
      extents,
      width,
      height,
      paddingLeft,
      paddingRight,
      paddingTop,
      paddingBottom
    );
    return { value: v, pos: y, label: `${(v * 100).toFixed(0)}%` };
  });

  return {
    width,
    height,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
    pathD,
    areaD,
    xTicks,
    yTicks,
    hasData
  };
}