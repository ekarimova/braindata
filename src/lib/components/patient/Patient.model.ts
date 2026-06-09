export interface Patient {
  id: string;
  name: string;
  ageYears: number;
  sex: string;
  diagnosis: string;
}

export interface Medication {
  name: string;
  doseMgPerDay: number;
}

export interface Recording {
  id: string;
  startTime: string;
  durationSec: number;
  notes: string;
}
/**
 * Props for the patient header view component.
 */
export interface PatientViewProps {
  patient: Patient;
  recording: Recording;
}