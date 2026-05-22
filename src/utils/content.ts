import { getCollection } from 'astro:content';

export async function getActiveProjects() {
  const projects = await getCollection('projects');
  return projects.filter(p => p.data.status === 'active' && !p.data.draft);
}

export async function getRecentJournals(limit = 5) {
  const journals = await getCollection('journals');
  return journals
    .filter(j => !j.data.draft)
    .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())
    .slice(0, limit);
}

export async function getRecentNotes(limit = 6) {
  const notes = await getCollection('notes');
  return notes
    .filter(n => !n.data.draft)
    .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())
    .slice(0, limit);
}

export async function getFeaturedWritings(limit = 3) {
  const writings = await getCollection('writings');
  return writings
    .filter(w => w.data.featured && !w.data.draft)
    .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())
    .slice(0, limit);
}

export async function getAllTags() {
  const [projects, journals, notes, writings, lab] = await Promise.all([
    getCollection('projects'),
    getCollection('journals'),
    getCollection('notes'),
    getCollection('writings'),
    getCollection('lab')
  ]);
  const allTags = new Set<string>();
  [...projects, ...journals, ...notes, ...writings, ...lab].forEach(item => {
    item.data.tags?.forEach(tag => allTags.add(tag));
  });
  return Array.from(allTags).sort();
}