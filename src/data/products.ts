export interface Product {
  id: string;
  name: string;
  englishName: string;
  category: 'cake' | 'baked' | 'gift';
  categoryLabel: string;
  price: string;
  description: string;
  flavorNote?: string;
  ingredients: string[];
  isSpecialite?: boolean;
  isSeasonal?: boolean;
  image: string;
}

export const categories = [
  { id: 'all', label: 'All Menu', subLabel: '全商品' },
  { id: 'cake', label: 'Fresh Cakes', subLabel: '生菓子' },
  { id: 'baked', label: 'Baked Goods', subLabel: '焼き菓子' },
  { id: 'gift', label: 'Gift Sets', subLabel: 'ギフト・詰め合わせ' },
] as const;

export const products: Product[] = [
  {
    id: 'tarte-chocolat-orange',
    name: 'タルトショコラ・オランジュ',
    englishName: 'Tarte Chocolat Orange',
    category: 'cake',
    categoryLabel: '生菓子',
    price: '¥580',
    description: '濃厚焼きチョコタルトミルクチョコレートムース果肉を残したオレンジジュレミルクチョコレートグラサージュ',
    flavorNote: '軽やかな純生クリームのコクと、苺の爽やかな酸味',
    ingredients: ['厳選生クリーム', '新鮮卵', '旬の国産苺', '国産小麦'],
    isSpecialite: true,
    image: '/images/products/01.jpg'
  },
  {
    id: 'fromage-cru',
    name: 'フロマージュ・クリュ',
    englishName: 'Fromage Cru',
    category: 'cake',
    categoryLabel: '生菓子',
    price: '¥620',
    description: '口当たりなめらかなさっぱりレアチーズマンゴーとパッションフルーツのクリームマンゴーグラサージュ生クリーム',
    flavorNote: 'マンゴーの甘みとパッションフルーツの酸味',
    ingredients: ['クリームチーズ', 'サワークリーム', '新鮮卵', '発酵バター'],
    isSpecialite: true,
    image: '/images/products/02.jpg'
  },
  {
    id: 'fig-royal',
    name: 'フィグ・ロワイヤル',
    englishName: 'Fig Royal',
    category: 'cake',
    categoryLabel: '生菓子',
    price: '¥730',
    description: 'バニラのババロアフランボワーズジュレ赤ワインとシナモンでコンポートしたいちぢくコンポートのシロップを使用したゼリー甘さ控えめの生クリーム',
    flavorNote: 'いちぢくの濃厚な甘みと赤ワインの芳醇な香り',
    ingredients: ['バニラビーンズ', 'フランボワーズジュレ', '赤ワイン', 'シナモン', ''],
    isSpecialite: true,
    image: '/images/products/03.jpg'
  },
  {
    id: 'pain-epices',
    name: 'パンピス',
    englishName: 'Pain d\'épices',
    category: 'cake',
    categoryLabel: '生菓子',
    price: '¥620',
    description: 'ジョコンド生地(アーモンドプードル使用)フランボワーズジャムババロワピスターシュグレープフルーツムース ',
    flavorNote: '甘酸っぱいフランボワーズとピスタチオの豊かな風味',
    ingredients: ['新鮮卵', '厳選生クリーム', '国産小麦', 'きび砂糖'],
    isSpecialite: true,
    image: '/images/products/04.jpg'
  },
  {
    id: 'ichijiku-tart',
    name: 'いちぢく タルト',
    englishName: 'Fig Tart',
    category: 'cake',
    categoryLabel: '生菓子',
    price: '¥700',
    description: 'クレーム・ダマンド(アーモンドクリーム)と一緒に焼いたタルト自家製フランボワーズジャムカスタードクリームいちぢく',
    flavorNote: 'みずみずしい果汁の爽快感と、タルト生地の香ばしい風味',
    ingredients: ['旬の厳選フルーツ', '発酵バター', 'アーモンドクリーム', '新鮮卵'],
    isSeasonal: true,
    image: '/images/products/05.jpg'
  },
  {
    id: 'foret-noire',
    name: 'フォレノワール',
    englishName: 'Foret Noire',
    category: 'cake',
    categoryLabel: '生菓子',
    price: '¥650',
    description: '濃厚チョコレートスポンジ口当たりの軽いさっぱりホワイトチョコクリームアメリカンチェリーコンポート(白ワインとキルシュ使用)濃厚チョコレートクリーム',
    flavorNote: 'チェリーとチョコレートの芳醇な香り',
    ingredients: ['アメリカンチェリーコンポート', '厳選生クリーム', '濃厚チョコレートクリーム', '濃厚チョコレートスポンジ'],
    isSeasonal: true,
    image: '/images/products/06.jpg'
  },
  {
    id: 'american-cherry-pistachio-tart',
    name: 'アメリカンチェリーとピスタチオのタルト',
    englishName: "American Cherry and Pistachio Tart",
    category: 'cake',
    categoryLabel: '生菓子',
    price: '¥600',
    description: 'クレーム・ダマンド(アーモンドクリーム)と一緒に焼いたタルトカスタードクリームアメリカンチェリ濃厚ピスタチオクリーム',
    flavorNote: '旬素材の魅力を最大限に活かした日替わりの味わい',
    ingredients: ['季節の厳選果実', '自家製クリーム', 'パティシエ厳選素材'],
    isSpecialite: true,
    image: '/images/products/07.jpg'
  },
  {
    id: 'fig-creamcheese-butter-sand',
    name: 'いちぢくとクリームチーズのバターサンド',
    englishName: 'Fig and Cream Cheese Butter Sand',
    category: 'baked',
    categoryLabel: '焼菓子',
    price: '¥1130',
    description: 'ポートワインとスパイスでコンポートしたいちぢくクリームチーズとバターを合わせたクリームサクサクに焼き上げたサブレ',
    flavorNote: '焦がし発酵バターの芳醇なアロマとアーモンドの豊かなコク',
    ingredients: ['国産発酵バター', 'アーモンドパウダー', '新鮮卵', '国産小麦'],
    image: '/images/products/08.jpg'
  }
];
