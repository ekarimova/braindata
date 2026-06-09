// src/lib/components/summary/summary.types.ts

export interface Summary {
  totalSeizures: number;
  maxSeizureProbability: number;
  seizureBurdenPercent: number;
}

export interface SummaryViewProps {
  summary: Summary;
}