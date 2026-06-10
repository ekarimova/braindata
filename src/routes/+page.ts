// src/routes/+page.ts
import type { LoadEvent } from '@sveltejs/kit';
import { asset } from '$app/paths';

export const load = async ({ fetch }: LoadEvent) => {
  const res = await fetch(asset('/api/mock.json'));

  if (!res.ok) {
    throw new Error('Failed to load mock.json');
  }

  const json = await res.json();

  return {
    patient: json.patient,
    recording: json.recording,
    summary: json.summary,
    seizures: json.seizures,
    graphs: json.graphs
  };
};