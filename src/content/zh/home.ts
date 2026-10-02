import type { HomeContent } from '@/types/site';

export const homeContent: HomeContent = {
  seo: {
    title: 'Linwood Forest Insurance Group | 宾夕法尼亚州 Whitehall 独立保险代理',
    description:
      '退伍军人拥有的独立保险代理，服务 Whitehall、Lehigh Valley，并持照服务 PA、NJ、DE、MD、VA 和 DC。',
  },
  hero: {
    eyebrow: '退伍军人拥有的独立代理',
    title: '为 Lehigh Valley 的家庭、企业和人生规划提供保险建议。',
    body: 'Linwood Forest Insurance Group 帮助家庭、企业主、房地产经纪人和贷款机构比较可信保险公司的方案，并提供清晰、本地化的服务。',
    primaryCta: {
      label: '获取报价',
      href: '/get-quote',
    },
    secondaryCta: {
      label: '致电 (610) 572-7322',
      href: 'tel:+16105727322',
      external: true,
    },
    image: {
      src: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80',
      alt: '占位图片：温馨的郊区住宅外观。',
    },
  },
  whoWeAre: {
    eyebrow: '关于我们',
    title: '本地顾问，让保险更容易理解。',
    body: '占位文案：我们的团队结合保险公司资源、实用的保障审查，以及扎根 Whitehall 和 Lehigh Valley 社区的服务。',
    points: [
      '独立比较多家保险公司方案。',
      '协助保单变更、理赔问题和续保。',
      '持照服务 PA、NJ、DE、MD、VA 和 DC。',
    ],
  },
  services: {
    eyebrow: '保险服务',
    title: '围绕客户真实生活和业务需求配置保障。',
    cards: [
      {
        title: '个人保险',
        description: '占位文案：住宅、汽车、公寓、摩托车、洪水、伞险和宠物保险。',
        href: '/personal-insurance',
        items: ['住宅', '汽车', '洪水', '伞险'],
      },
      {
        title: '商业保险',
        description: '占位文案：企业主、商业汽车、一般责任和工伤保险。',
        href: '/business-insurance',
        items: ['企业主', '商业汽车', '责任', '工伤'],
      },
      {
        title: '人寿保险',
        description: '占位文案：定期寿险、家庭保障规划，以及点击后加载的评级工具。',
        href: '/life-insurance',
        items: ['定期寿险', '家庭规划', '需求评估'],
      },
    ],
  },
  team: {
    eyebrow: '团队预览',
    title: '来自可联系到的真人顾问的直接答案。',
    body: '占位文案：认识本地顾问、服务专员和合作保险公司团队。',
    members: [
      {
        name: '保险顾问',
        role: '个人保险',
        summary: '本地保险顾问占位简介。',
        image: 'https://placehold.co/320x320/png?text=Advisor',
      },
      {
        name: '商业专员',
        role: '商业保险',
        summary: '商业保障支持占位简介。',
        image: 'https://placehold.co/320x320/png?text=Specialist',
      },
      {
        name: '客户服务',
        role: '保单支持',
        summary: '客户服务与续保占位简介。',
        image: 'https://placehold.co/320x320/png?text=Service',
      },
    ],
  },
  stats: [
    {
      value: '6',
      label: '持照州份',
      description: '服务 PA、NJ、DE、MD、VA 和 Washington D.C. 客户。',
      icon: 'location',
      tone: 'blue',
    },
    {
      value: '50+',
      label: '保险公司',
      description: '与多家优质保险公司合作，帮助客户比较保障方案。',
      icon: 'building',
      tone: 'green',
    },
    {
      value: '1000+',
      label: '满意客户',
      description: '众多客户信任我们保护重要资产和家庭需求。',
      icon: 'clients',
      tone: 'blue',
    },
    {
      value: '$2M',
      label: '理赔协助',
      description: '在客户最需要时协助处理重要理赔事项。',
      icon: 'claims',
      tone: 'green',
    },
    {
      value: '5/5',
      label: '客户评分',
      description: '客户重视清晰解释、快速回应和实际建议。',
      icon: 'star',
      tone: 'orange',
    },
    {
      value: '98%',
      label: '客户续约',
      description: '主动续保审查和可靠服务建立长期关系。',
      icon: 'growth',
      tone: 'red',
    },
    {
      value: '15+',
      label: '经验年数',
      description: '团队拥有个人、商业和人寿保险相关经验。',
      icon: 'shield',
      tone: 'blue',
    },
    {
      value: '24/7',
      label: '支持渠道',
      description: '紧急情况可使用服务资源和保险公司理赔渠道。',
      icon: 'support',
      tone: 'green',
    },
  ],
  testimonials: {
    eyebrow: '客户评价',
    title: '用于改版预览的静态证明内容。',
    items: [
      {
        quote: '占位评价：描述清晰建议、快速回复和更有信心的保障选择。',
        author: '住宅客户',
        location: 'Whitehall, PA',
      },
      {
        quote: '占位评价：小企业主获得实用保单建议。',
        author: '企业主',
        location: 'Lehigh Valley',
      },
      {
        quote: '占位评价：房地产经纪人或贷款合作伙伴协调保险时间线。',
        author: '推荐合作伙伴',
        location: '宾夕法尼亚东部',
      },
    ],
  },
  blog: {
    eyebrow: '博客预览',
    title: '为本地客户准备的保险提示。',
    posts: [
      {
        title: '续保季之前应检查什么',
        excerpt: '面向房主和驾驶人的占位文章摘要。',
        href: '/blog/renewal-review',
        date: '2026-09-15',
      },
      {
        title: '成长型小企业的保障基础',
        excerpt: '面向企业主的占位文章摘要。',
        href: '/blog/business-coverage-basics',
        date: '2026-08-28',
      },
      {
        title: '买房时要问的保险问题',
        excerpt: '面向买家、经纪人和贷款机构的占位文章摘要。',
        href: '/blog/home-buying-insurance',
        date: '2026-08-05',
      },
    ],
  },
  partners: {
    eyebrow: '保险公司合作伙伴',
    title: '我们合作的可信保险公司。',
    logos: [
      {
        name: 'Universal Property and Casualty Insurance Company',
        src: '/images/partners/universal-property.png',
      },
      {
        name: 'The Philadelphia Contributionship',
        src: '/images/partners/philadelphia-contributionship.png',
      },
      {
        name: 'State Auto Insurance',
        src: '/images/partners/state-auto.png',
      },
      {
        name: 'Safeco Insurance',
        src: '/images/partners/safeco-insurance.png',
      },
      {
        name: 'Progressive',
        src: '/images/partners/progressive.png',
      },
      {
        name: 'National General Insurance',
        src: '/images/partners/national-general.png',
      },
      {
        name: 'Erie Insurance',
        src: '/images/partners/erie.png',
      },
      {
        name: 'Travelers Insurance',
        src: '/images/partners/travelers.png',
      },
    ],
  },
  contactCta: {
    title: '准备好进行更清晰的保障沟通了吗？',
    body: '占位文案：从报价请求开始，或致电 Whitehall 办公室获取本地建议。',
    primaryCta: {
      label: '开始报价',
      href: '/get-quote',
    },
    secondaryCta: {
      label: '发送邮件',
      href: 'mailto:sales@linwoodforest.com',
      external: true,
    },
  },
};
