interface FilterOptions {
  /** Element wrapping the `.seg-opt` links. */
  containerId: string;
  /** Element wrapping the filterable cards. */
  gridId: string;
  /** Data attribute each card is tagged with, e.g. `track` for `data-track`. */
  attribute: string;
}

/**
 * Segmented filter shared by the blog and portfolio indexes.
 *
 * The controls are real links to per-category routes, so they work without JS
 * and crawlers can follow them. This intercepts the click to filter in place,
 * which is faster and keeps the reader's scroll position.
 */
export function initFilter({ containerId, gridId, attribute }: FilterOptions): void {
  const container = document.getElementById(containerId);
  const status = document.getElementById(`${containerId}-status`);
  const cards = document.querySelectorAll<HTMLElement>(`#${gridId} [data-${attribute}]`);
  if (!container) return;

  container.addEventListener('click', (event) => {
    const link = (event.target as HTMLElement).closest<HTMLAnchorElement>('[data-filter]');
    if (!link) return;
    // Let modified clicks open the real route in a new tab or window.
    if (event.metaKey || event.ctrlKey || event.shiftKey || (event as MouseEvent).button !== 0) return;

    event.preventDefault();

    container.querySelectorAll<HTMLAnchorElement>('.seg-opt').forEach((opt) => {
      opt.classList.remove('is-active');
      opt.removeAttribute('aria-current');
    });
    link.classList.add('is-active');
    link.setAttribute('aria-current', 'page');

    const filter = link.dataset.filter;
    let visibleCount = 0;
    cards.forEach((card) => {
      const visible = filter === 'all' || card.dataset[attribute] === filter;
      card.hidden = !visible;
      if (visible) visibleCount++;
    });

    if (status) {
      status.textContent = `Showing ${visibleCount} ${visibleCount === 1 ? 'item' : 'items'} in ${link.textContent?.trim() ?? 'selection'}`;
    }

    history.replaceState(null, '', link.href);
  });
}
