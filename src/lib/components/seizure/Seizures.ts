// src/lib/components/seizures/SeizureTable.ts

export type { Seizure, SeizureTableViewProps } from './Seizures.types';

export function formatTime(sec: number): string {
  return `${sec.toFixed(1)}s`;
}

export function formatDuration(onsetSec: number, offsetSec: number): string {
  const dur = offsetSec - onsetSec;
  return `${dur.toFixed(1)}s`;
}

export function formatConfidence(conf: number): string {
  return `${Math.round(conf * 100)}%`;
}

export function humanType(raw: string): string {
  return raw.replace(/_/g, ' ');
}