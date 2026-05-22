import { getCollection } from 'astro:content';

export interface SearchItem {
  id: string;
  title: string;
  type: string;
  url: string;
  date?: Date;
  tags?: string[];
}

export async function buildSearchIndex(): Promise<SearchItem[]> {
  const [projects, journals, notes, writings, lab, toolbox, archives] = await Promise.all([
    getCollection('projects'),
    getCollection('journals'),
    getCollection('notes'),
    getCollection('writings'),
    getCollection('lab'),
    getCollection('toolbox'),
    getCollection('archives')
  ]);

  const index: SearchItem[] = [];

  projects.forEach(p => {
    if (!p.data.draft) {
      index.push({
        id: p.id,
        title: p.data.title,
        type: 'project',
        url: `/projects/${p.id}`,
        date: p.data.started,
        tags: p.data.tags
      });
    }
  });

  journals.forEach(j => {
    if (!j.data.draft) {
      index.push({
        id: j.id,
        title: j.data.title || `Journal — ${j.data.date.toISOString().split('T')[0]}`,
        type: 'journal',
        url: `/journals/${j.id}`,
        date: j.data.date,
        tags: j.data.tags
      });
    }
  });

  notes.forEach(n => {
    if (!n.data.draft) {
      index.push({
        id: n.id,
        title: `Note — ${n.data.date.toISOString().split('T')[0]}`,
        type: 'note',
        url: `/notes/${n.id}`,
        date: n.data.date,
        tags: n.data.tags
      });
    }
  });

  writings.forEach(w => {
    if (!w.data.draft) {
      index.push({
        id: w.id,
        title: w.data.title,
        type: 'writing',
        url: `/writings/${w.id}`,
        date: w.data.date,
        tags: w.data.tags
      });
    }
  });

  lab.forEach(e => {
    if (!e.data.draft) {
      index.push({
        id: e.id,
        title: e.data.title,
        type: 'experiment',
        url: `/lab/${e.id}`,
        date: e.data.started,
        tags: e.data.tags
      });
    }
  });

  toolbox.forEach(t => {
    index.push({
      id: t.id,
      title: t.data.name,
      type: 'tool',
      url: `/toolbox`,
      date: t.data.date,
      tags: []
    });
  });

  archives.forEach(a => {
    index.push({
      id: a.id,
      title: a.data.title,
      type: 'archive',
      url: `/archives`,
      date: a.data.date,
      tags: a.data.tags
    });
  });

  return index.sort((a, b) => {
    const dateA = a.date ? new Date(a.date).getTime() : 0;
    const dateB = b.date ? new Date(b.date).getTime() : 0;
    return dateB - dateA;
  });
}