export interface NewsItem {
  id: string;
  date: string;
  category: 'Seasonal' | 'Notice' | 'Event';
  title: string;
  excerpt: string;
}

export const newsItems: NewsItem[] = [
  {
    id: 'news-1',
    date: '2020.04.18',
    category: 'Notice',
    title: '松本市寿台に「pâtisserie favori」をオープンいたしました',
    excerpt: '生まれ育った松本・寿台の地に、洋菓子店「favori（ファヴォリ）」を開店いたしました。デリシア寿店近く、専用駐車場も完備しております。皆さまのお気に入りのケーキを見つけに、ぜひお気軽にお立ち寄りください。',
  },
  {
    id: 'news-2',
    date: '2020.05.26',
    category: 'Event',
    title: '松本経済新聞にて当店をご紹介いただきました',
    excerpt: '「松本・寿にパティスリー『favori』 生まれ育ったエリアで『地域密着店に』」と題して、オープンの経緯やお店の想い、ショートケーキやチーズケーキ、シュークリームなどのこだわりを詳しく取材・掲載していただきました。',
  },
  {
    id: 'news-3',
    date: '2021.05.28',
    category: 'Notice',
    title: '松本調理師製菓師専門学校の「先輩のお店紹介」に掲載されました',
    excerpt: '母校である松本調理師製菓師専門学校の公式ホームページにて、卒業生のお店として当店のコンセプトや看板ショートケーキへのこだわりをご紹介いただきました。',
  }
];
