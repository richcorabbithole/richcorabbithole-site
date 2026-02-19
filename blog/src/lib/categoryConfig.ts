export type Category = 'tech' | 'science' | 'history' | 'gaming' | 'maker' | 'pop-culture' | 'other' | 'lifestyle';

export const categoryConfig: Record<Category, { label: string; color: string }> = {
  tech:          { label: 'TECH',        color: 'var(--color-cat-tech)' },
  science:       { label: 'SCIENCE',     color: 'var(--color-cat-science)' },
  history:       { label: 'HISTORY',     color: 'var(--color-cat-history)' },
  gaming:        { label: 'GAMING',      color: 'var(--color-cat-gaming)' },
  maker:         { label: 'MAKER',       color: 'var(--color-cat-maker)' },
  'pop-culture': { label: 'POP CULTURE', color: 'var(--color-cat-pop-culture)' },
  other:         { label: 'OTHER',       color: 'var(--color-cat-other)' },
  lifestyle:     { label: 'LIFESTYLE',   color: 'var(--color-cat-lifestyle)' },
};
