export type { Summary, SummaryViewProps } from './KpiRow.types';

export function formatPercent(value: number): string {
  return `${value.toFixed(1)}%`;
}

export function formatProbability(prob: number): string {
  return `${(prob * 100).toFixed(1)}%`;
}