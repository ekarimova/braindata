// src/lib/components/seizures/seizure.types.ts

export interface Seizure {
  id: number;
  onsetSec: number;
  offsetSec: number;
  confidence: number; // 0–1
}

export interface SeizureTableViewProps {
  seizures: Seizure[];
}