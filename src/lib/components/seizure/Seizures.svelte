<script lang="ts">
  import './Seizures.css';
  import type { SeizureTableViewProps, Seizure } from './Seizures.ts';
  import {
    formatTime,
    formatDuration,
    formatConfidence,
    humanType
  } from './Seizures.ts';

  const view: SeizureTableViewProps = $props();
</script>

<div class="seizure-table-wrapper">
  <div class="seizure-table-title">Anfalle</div>

  {#if view.seizures.length === 0}
    <div style="padding: 0.75rem 1rem; font-size: 0.85rem; color: var(--color-text-muted);">
      Keine Anfalle wurden aufgezeichnet
    </div>
  {:else}
    <table class="seizure-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Anfang</th>
          <th>Ande</th>
          <th>Dauer</th>
          <th>Vertrauen</th>
        </tr>
      </thead>
      <tbody>
        {#each view.seizures as sz (sz.id)}
          <tr>
            <td class="seizure-id">{sz.id}</td>
            <td>{formatTime(sz.onsetSec)}</td>
            <td>{formatTime(sz.offsetSec)}</td>
            <td>{formatDuration(sz.onsetSec, sz.offsetSec)}</td>
            <td>
              <div class="confidence-cell">
                <div class="confidence-bar-track">
                  <div
                    class="confidence-bar-fill"
                    style={`width: ${Math.round(sz.confidence * 100)}%;`}
                  ></div>
                </div>
                <span class="confidence-label">
                  {formatConfidence(sz.confidence)}
                </span>
              </div>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  {/if}
</div>