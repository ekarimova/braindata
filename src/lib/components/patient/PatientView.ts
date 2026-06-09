export type { Patient, Recording, PatientViewProps } from './Patient.model';

export function formatStart(startTime: string): string {
  return new Date(startTime).toLocaleString();
}

export function formatDuration(durationSec: number): string {
  return `${durationSec} Sekunden`;
}