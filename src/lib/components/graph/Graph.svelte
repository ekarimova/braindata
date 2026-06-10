<script lang="ts">
  import './Graph.css';
  import type { GraphProps, GraphModel } from './graph.types';
  import { createGraphModel } from './Graph.ts';
  import { selectedSeizureId } from '$lib/stores/braindata';

  const view: GraphProps = $props();

  let selectedGraph = $derived(
    $selectedSeizureId === null
      ? (view.graphs[0] ?? null)
      : (view.graphs.find((graph) => graph.seizureId === $selectedSeizureId) ?? view.graphs[0] ?? null)
  );

  let model = $derived(
    selectedGraph ? createGraphModel(selectedGraph) : null
  );
</script>

<div class="graph-panel">
  <div class="graph-header">
    {selectedGraph?.name ?? 'Anfall-Warscheinlichkeit über die Zeit'}
  </div>

  <div class="graph-body">
    {#if !model || !model.hasData}
      <div style="font-size: 0.85rem; color: var(--color-text-muted);">
        Keine Daten verfügbar.
      </div>
    {:else}
      <svg
        class="graph-svg"
        viewBox={`0 0 ${model.width} ${model.height}`}
        role="img"
        aria-label={selectedGraph?.name ?? 'Anfall-Warscheinlichkeit über die Zeit'}
      >
        {#each model.yTicks as t}
          <line
            class="graph-grid-line"
            x1={model.paddingLeft}
            x2={model.width - model.paddingRight}
            y1={t.pos}
            y2={t.pos}
            stroke-dasharray="2 3"
          />
          <text
            class="graph-tick-label"
            x={model.paddingLeft - 6}
            y={t.pos + 3}
            text-anchor="end"
          >
            {t.label}
          </text>
        {/each}

        {#each model.xTicks as t}
          <line
            class="graph-grid-line"
            x1={t.pos}
            x2={t.pos}
            y1={model.paddingTop}
            y2={model.height - model.paddingBottom}
            stroke-dasharray="2 3"
          />
          <text
            class="graph-tick-label"
            x={t.pos}
            y={model.height - model.paddingBottom + 14}
            text-anchor="middle"
          >
            {t.label}
          </text>
        {/each}

        <path class="graph-area" d={model.areaD} />
        <path class="graph-path" d={model.pathD} />
      </svg>
    {/if}
  </div>
</div>