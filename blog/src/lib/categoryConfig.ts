export type Category = 'tech' | 'science' | 'history' | 'gaming' | 'maker' | 'other';

export const categoryConfig: Record<Category, { label: string; color: string }> = {
  tech:    { label: 'TECH',    color: 'var(--color-cat-tech)' },
  science: { label: 'SCIENCE', color: 'var(--color-cat-science)' },
  history: { label: 'HISTORY', color: 'var(--color-cat-history)' },
  gaming:  { label: 'GAMING',  color: 'var(--color-cat-gaming)' },
  maker:   { label: 'MAKER',   color: 'var(--color-cat-maker)' },
  other:   { label: 'OTHER',   color: 'var(--color-cat-other)' }
};
