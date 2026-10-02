import type { ProductPageContent } from '@/types/site';

export const insuranceProducts: ProductPageContent[] = [
  {
    slug: 'home',
    hero: {
      title: '住宅保险',
      body: '用于阶段 2 CMS 迁移的产品占位文案。',
    },
    coverageList: ['住宅结构', '个人财物', '责任保障'],
    faqs: [
      {
        question: '我应该检查什么？',
        answer: '可复用产品页面模板的占位答案。',
      },
    ],
    cta: {
      label: '获取住宅报价',
      href: '/get-quote',
    },
  },
];
