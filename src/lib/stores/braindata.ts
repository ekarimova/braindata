import { writable, derived } from 'svelte/store';

const selectedSeizureId = writable<number | null>(null);

const createSelectedGraph = (graphs: Array<any>) =>
  derived(selectedSeizureId, ($selectedSeizureId) => {
    if ($selectedSeizureId === null) {
      return graphs[0] ?? null;
    }

    return graphs.find((graph) => graph.seizureId === $selectedSeizureId) ?? null;
  });

function selectSeizure(id: number) {
  selectedSeizureId.set(id);
}

export { selectedSeizureId, selectSeizure, createSelectedGraph };