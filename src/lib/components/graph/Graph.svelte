<script lang="ts">

  import './Graph.css';
  import type { GraphProps, GraphModel } from './graph.types';
  import { createGraphModel } from './Graph.ts';

  const view: GraphProps = $props();
  const model: GraphModel = createGraphModel(view.graph);

</script>

<div class="graph-panel">
  <div class="graph-header">
    Anfall-Warscheinlichkeit über die Zeit
  </div>

  <div class="graph-body">
    {#if !model.hasData}
      <div style="font-size: 0.85rem; color: var(--color-text-muted);">
        Keine Daten verfügbar.
      </div>
    {:else}
      <svg
        class="graph-svg"
        viewBox={`0 0 ${model.width} ${model.height}`}
        role="img"
        aria-label="Anfall-Warscheinlichkeit über die Zeit"
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