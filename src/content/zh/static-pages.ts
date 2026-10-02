import type { StaticPage } from '@/types/static-pages';
import { enStaticPages } from '@/content/en/static-pages';

// TODO: human review of Chinese placeholder translations before launch.
export const zhStaticPages: StaticPage[] = enStaticPages.map((page) => ({
  ...page,
  title: `${page.title}`,
  description: `中文占位内容：${page.description}`,
  eyebrow: page.eyebrow ? `中文占位：${page.eyebrow}` : undefined,
  intro: `中文占位内容，需人工审核：${page.intro}`,
  sections: page.sections.map((section) => ({
    ...section,
    heading: `中文占位：${section.heading}`,
    body: section.body ? `中文占位内容，需人工审核：${section.body}` : undefined,
    bullets: section.bullets?.map((bullet) => `中文占位：${bullet}`),
    cards: section.cards?.map((card) => ({
      ...card,
      title: `中文占位：${card.title}`,
      body: `中文占位内容，需人工审核：${card.body}`,
    })),
  })),
  cta: page.cta
    ? {
        ...page.cta,
        title: `中文占位：${page.cta.title}`,
        body: `中文占位内容，需人工审核：${page.cta.body}`,
        label: page.cta.external ? '打开链接' : '联系我们',
      }
    : undefined,
}));
