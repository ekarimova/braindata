
export interface GraphPoint {
  timeSec: number;
  value: number; // 0–1
}

export interface GraphData {
  points: GraphPoint[];
}

export interface GraphProps {
  graph: GraphData;
}

export interface AxisTick {
  value: number;
  pos: number;
  label: string;
}

export interface Extents {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
}

export interface GraphModel {
  width: number;
  height: number;
  paddingLeft: number;
  paddingRight: number;
  paddingTop: number;
  paddingBottom: number;
  pathD: string;
  areaD: string;
  xTicks: AxisTick[];
  yTicks: AxisTick[];
  hasData: boolean;
}