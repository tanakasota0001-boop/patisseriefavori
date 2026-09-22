/**
 * サイト全体の共通設定・テキスト・画像集約ファイル
 * 
 * 💡 このファイルを編集するだけで、店舗情報、全セクションの文言、画像URL、
 * ナビゲーション、お問い合わせフォームの選択肢などを誰でも簡単に差し替えられます。
 */

export const siteConfig = {
  // ==========================================
  // 1. 店舗基本情報 (Store Information)
  // ==========================================
  store: {
    nameEn: "pâtisserie favori",
    nameJa: "パティスリー ファヴォリ",
    subtitle: "Patisserie & Baked Sweets",
    logo: "/images/logo.png",
    logoWhite: "/images/logo-white.png",
    tagline: "お気に入りのケーキを見つけてほしい\n地域に寄り添う街のお菓子屋さん",
    shortConcept: "フランス語で「お気に入り」を意味するfavori。旬のフルーツとこだわりの生クリームで、世代を超えて長く愛されるスイーツをお届けします。",
    description: "長野県松本市寿台にある洋菓子店「pâtisserie favori（パティスリー ファヴォリ）」。店名には「お気に入りのケーキを見つけてほしい」という思いが込められています。看板商品のショートケーキをはじめ、しっとり濃厚なチーズケーキ、注文後にクリームを詰めるサクサクのシュークリーム、縁起の良い「寿ロール」、旬のフルーツを贅沢に使った季節限定スイーツなど、常時約15種類のケーキと焼き菓子を心を込めてお届けします。",
    postalCode: "399-0025",
    address: "長野県松本市寿台7丁目12-2",
    tel: "0263-87-3570",
    email: "info@patisserie-favori.jp",
    businessHours: "10:00 ～ 19:00",
    businessHoursNote: "※当日分のお菓子が無くなり次第終了となる場合がございます",
    holidays: "毎週水曜日 / 第1・第3火曜日",
    holidaysNote: "※不定休あり。祝日や季節の営業案内、臨時休業は公式Instagramにてお知らせいたします",
    // 営業カレンダーで定休日に指定する曜日 (0:日曜, 1:月曜, 2:火曜, 3:水曜, 4:木曜, 5:金曜, 6:土曜)
    weeklyHolidayDays: [3],
    includeFirstAndThirdTuesday: true,
    // 特別営業日（定休日の曜日でも営業する日: "YYYY-MM-DD" または "MM-DD"）
    specialOpenDates: ["09-22", "2026-09-22"],
    // 臨時休業日・振替休業日（通常営業の曜日でも休業する日: "YYYY-MM-DD" または "MM-DD"）
    specialHolidayDates: [
      "09-08", "2026-09-08",
      "09-24", "2026-09-24",
      "09-29", "2026-09-29"
    ],
    accessList: [
      "松本市寿エリア「デリシア寿店」近く",
      "JR篠ノ井線「平田駅」または「村井駅」より車で約8分",
      "長野自動車道「塩尻北IC」より車で約10分"
    ],
    parking: "専用駐車場あり（店舗前）",
    instagramUrl: "https://www.instagram.com/patisserie_favori/",
    instagramAccountName: "@patisserie_favori",
    threadsUrl: "",
    threadsAccountName: "",
    xUrl: "",
    xAccountName: "",
    googleMapsUrl: "https://maps.google.com/?q=パティスリー+favori+松本市寿台7-12-2",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12882.56640332947!2d137.9864605!3d36.1752751!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x41ef215793b6e46a!2z44OR44OG44Kj44K544Oq44O8IOODleOCoeODtOOCqeODqg!5e0!3m2!1sja!2sjp!4v1622176645756!5m2!1sja!2sjp",
    copyrightYear: "2026"
  },

  // ==========================================
  // 2. ナビゲーションメニュー (Navigation)
  // ==========================================
  navigation: {
    links: [
      { id: "concept", labelEn: "Concept", labelJa: "こだわり", href: "#concept" },
      { id: "collection", labelEn: "Menu", labelJa: "商品一覧", href: "#collection" },
      { id: "specialty", labelEn: "Specialité", labelJa: "ホールケーキ", href: "#specialty" },
      { id: "about", labelEn: "Chef", labelJa: "職人の想い", href: "#about" },
      { id: "store", labelEn: "Store", labelJa: "店舗情報", href: "#store" },
      { id: "news", labelEn: "News", labelJa: "お知らせ", href: "#news" }
    ],
    contactBtnText: "ご予約・お問い合わせ",
    mobileContactBtnText: "ご予約・お問い合わせ"
  },

  // ==========================================
  // 3. 画像設定 (Images Management)
  // ==========================================
  images: {
    // トップの大きなカルーセル画像
    heroSlides: [
      {
        url: "/images/hero/01.png",
        subTitle: "pâtisserie favori",
        title: "お気に入りのケーキを\n日常に特別なひとときを",
        tag: "Patisserie & Sweets"
      },
      {
        url: "/images/hero/02.png",
        subTitle: "Your Favorite Sweets",
        title: "あなたのお気に入りに出会う\n心を満たす ひとつのお菓子",
        tag: "Crafted with Heart"
      }
    ],

    // コンセプトセクション画像（メイン・サブ）
    concept: {
      main: "/images/concept/concept-main.png",
      sub: "/images/concept/concept-sub.png"
    },

    // オーダーメイド（Sur-Mesure）ギャラリー画像
    specialite: {
      items: [
        {
          id: "mothers-day-cake",
          title: "MOTHER'S DAY CAKE",
          subTitle: "母の日デコレーションケーキ",
          desc: "大切な方へ感謝の気持ちを込めて。パティシエが心を込めてお作りする特別仕立てのデコレーションケーキです。",
          image: "/images/specialite/001.jpg",
          aspect: "standard"
        },
        {
          id: "fathers-day-cake",
          title: "FATHER'S DAY CAKE",
          subTitle: "父の日デコレーションケーキ",
          desc: "美しく繊細なデコレーションと軽やかな生クリーム。特別な記念日のお祝いに。",
          image: "/images/specialite/002.jpg",
          aspect: "standard"
        },
        {
          id: "mothers-day-cake",
          title: "MOTHER'S DAY CAKE",
          subTitle: "母の日デコレーションケーキ",
          desc: "大切な方へ感謝の気持ちを込めて。パティシエが心を込めてお作りする特別仕立てのデコレーションケーキです。",
          image: "/images/specialite/003.jpg",
          aspect: "wide"
        },
        {
          id: "hina-matsuri-cake",
          title: "HINA-MATSURI CAKE",
          subTitle: "ひなまつりデコレーションケーキ",
          desc: "ひなまつりにぴったりの華やかなデコレーションケーキです。",
          image: "/images/specialite/004.jpg",
          aspect: "standard"
        },
        {
          id: "shine-muscat-cake",
          title: "SHINE MUSCAT CAKE",
          subTitle: "シャインマスカットのデコレーションケーキ",
          desc: "旬のシャインマスカットを贅沢に使用した、華やかなデコレーションケーキです。",
          image: "/images/specialite/005.jpg",
          aspect: "standard"
        },
        {
          id: "momo-decoration",
          title: "MOMO DECORATION",
          subTitle: "桃のデコレーションケーキ",
          desc: "旬の桃を惜しみなくあしらった、華やかでみずみずしい特注ケーキ。",
          image: "/images/specialite/006.jpg",
          aspect: "wide"
        }
      ]
    },

    // シェフ・工房紹介セクション画像
    about: {
      image: "/images/favori/keizai_main.jpg",
      roleText: "Owner Patissier & Chef"
    },

    // Instagramギャラリー写真
    gallery: [
      {
        url: "/images/gallery/001.jpg"
      },
      {
        url: "/images/gallery/003.jpg"
      },
      {
        url: "/images/gallery/002.jpg"
      },
      {
        url: "/images/gallery/004.jpg"
      },
      {
        url: "/images/gallery/005.jpg"
      }
    ]
  },

  // ==========================================
  // 4. 各セクションの文章・見出し (Content Texts)
  // ==========================================
  content: {
    // --- コンセプトセクション (Concept) ---
    concept: {
      badge: "こだわり",
      titleEn: "Concept",
      subtitleJa: "フランス語で「お気に入り」を意味する、地域に寄り添う街のケーキ屋さん。",
      lead: "お気に入りのケーキを見つけてほしい\n生まれ育った松本・寿の地から",
      paragraphs: [
        "店名の「favori（ファヴォリ）」は、フランス語で「お気に入り」という意味を持っています。\n「お店に並ぶたくさんのスイーツの中から、あなたにとって特別なお気に入りのケーキを見つけてほしい」という温かい思いを込めて名付けました。",
        "ショーケースには、特別な生クリームにこだわった看板のショートケーキをはじめ、しっとり濃厚なチーズケーキ、香ばしい生地にクリームを詰めるシュークリーム、地名にちなんだ「寿ロール」など、定番から旬の限定スイーツまで常時約15種類が並びます。",
        "生まれ育ったなじみ深い松本市寿台で、以前精肉店だった建物を改装し、ぬくもりあるアトリエに。\nお客様との対話を大切に、リクエストに寄り添いながら、子どもからお年寄りまで世代を超えて長く愛される地域密着の店を目指しています。"
      ],
      promisesTitle: "Our 3 Commitments",
      promises: [
        {
          num: "01. こだわりの生クリームと旬の果実",
          title: "素材の魅力を引き出す素直なおいしさ",
          desc: "看板商品のショートケーキには特別な生クリームを厳選。季節ごとの新鮮なフルーツと合わせ、軽やかで上品な後味に仕上げています。"
        },
        {
          num: "02. 15年の東京修業と丁寧な技",
          title: "確かなクラフトマンシップと手作りの温もり",
          desc: "東京で15年腕を磨いたオーナーパティシエが、生地の焼き加減からクリームの泡立てまで妥協なく、毎日作りたての美味しさをお届けします。"
        },
        {
          num: "03. 生まれ育った地域に根ざして",
          title: "世代を超えて愛される笑顔あふれる店づくり",
          desc: "親しみやすい定番ケーキから縁起の良い「寿ロール」、日替わりの「本日のきまぐれ」まで。地域のお客様に寄り添う温かな空間でお迎えします。"
        }
      ]
    },

    // --- オーダーメイドセクション (Order Made) ---
    specialite: {
      badge: "ホールケーキ・アニバーサリー",
      titleEn: "Custom Cakes",
      subtitleJa: "特別な記念日やお祝いを彩る、favoriの特注ホールケーキ",
      heading: "大切な記念日に\nお気に入りのケーキを",
      desc: "お誕生日や記念日、特別なご家族のお祝いに。\n\n看板商品のショートケーキをはじめ、旬のフルーツをふんだんに使ったデコレーションケーキやタルトなど、思い出に残るひとときを彩る特別なホールケーキをお仕立ていたします。\n\nご希望のメッセージやお好みに合わせて心を込めて丁寧にお作りいたします。",
      tags: ["# ホールケーキ", "# アニバーサリー", "# 誕生日ケーキ", "# オーダーメイド"],
      catalogBtn: "電話で予約する",
      reservationNotice: "※ホールケーキ・デコレーションケーキのご予約はお電話または店頭にて承っております。",
      hoverBadge: "詳細を見る",
      menuLink: "商品ラインナップを見る"
    },

    // --- 商品一覧セクション (Collection) ---
    menu: {
      badge: "商品一覧",
      titleEn: "Collection",
      subtitleJa: "定番のショートケーキやチーズケーキから、旬の限定タルト、手土産の焼き菓子まで",
      hoverBadge: "詳しく見る",
      taxLabel: "（税込）",
      closeButtonText: "閉じる",
      noticeBoxTitle: "【ケーキ・焼き菓子のご予約について】",
      noticeBoxText: "ホールケーキやお誕生日ケーキのご予約、焼き菓子の詰め合わせはお電話（0263-87-3570）または店頭にて承っております。日々のラインナップや季節の限定商品、当日の焼き上がり状況などは公式Instagram（@patisserie_favori）にて随時更新しております。お気軽にお問い合わせください。",
      ctaButton: "お電話でのご予約・お問い合わせ"
    },

    // --- シェフ・工房セクション (About) ---
    about: {
      badge: "シェフの想い",
      titleEn: "Chef",
      subtitleJa: "子どもからお年寄りまで、長く愛されるお店づくりを。",
      paragraphs: [
        "東京の製菓専門学校を卒業後、都内の洋菓子店で約15年間にわたりパティシエとしての腕を磨き、2017年に信州・松本へUターンいたしました。市内のケーキ店勤務を経て、自身が生まれ育ったなじみのある寿台の地で、2020年4月に「pâtisserie favori」を開店いたしました。",
        "店名の「favori（ファヴォリ）」は、フランス語で「お気に入り」という意味を持っています。「お店に足を運んでくださる皆さまに、自分だけのお気に入りのケーキを見つけてほしい」という思いを込めました。",
        "看板商品のショートケーキには口どけと風味にこだわった特別な生クリームを使用。クリームチーズとサワークリームでしっとりと仕上げたチーズケーキや、注文を受けてからクリームを詰めるサクサクのシュークリーム、地名にちなんだ「寿ロール」など、素材の良さを生かした素直な美味しさを追求しています。",
        "妻であり松本調理師製菓師専門学校出身のパティシエ・菜摘と共に店を切り盛りし、お客様の声に耳を傾けながら、地域の皆さまの日常やお祝いに温かく寄り添う店であり続けたいと願っています。"
      ],
      chefTitle: "オーナーパティシエ",
      chefName: "百瀬 弘士 / 百瀬 菜摘",
      chefNameEn: "Hiroshi Momose & Natsumi Momose"
    },

    // --- お知らせ＆Instagramセクション (News) ---
    news: {
      badge: "お知らせ",
      titleEn: "NEWS",
      subtitleJa: "最新情報・営業案内・メディア掲載",
      instagramBadge: "公式SNS",
      instagramTitleEn: "Social Media",
      instagramSubtitleJa: "Instagramで日々のケーキや最新情報を配信中",
      instagramCta: "Instagramを見る",
      instagramHoverBadge: "Instagramを開く"
    },

    // --- 店舗情報＆営業カレンダー (Store) ---
    store: {
      badge: "店舗情報",
      titleEn: "STORE",
      subtitleJa: "店舗情報・営業案内・交通アクセス",
      calendarTitle: "営業カレンダー",
      legendHoliday: "定休日（水曜、第1・第3火曜）",
      legendToday: "本日",
      tableLabels: {
        address: "住所",
        tel: "電話番号",
        hours: "営業時間",
        access: "アクセス",
        parking: "駐車場"
      },
      calendar: {
        weekdays: ["日", "月", "火", "水", "木", "金", "土"],
        prevMonthAria: "前月",
        nextMonthAria: "次月"
      }
    },

    // --- フッター (Footer) ---
    footer: {
      navTitle: "Navigation",
      storeTitle: "Store Information",
      snsTitle: "Official Social Accounts",
      backToTop: "Back to Top"
    },

    // --- お電話でのご予約・お問い合わせモーダル (Reservation Guide Modal) ---
    contact: {
      badge: "お電話でのご予約・お問い合わせ",
      titleEn: "Reservation by Phone",
      subtitleJa: "ご予約・お取り置きはお電話または店頭にて承っております",
      desc: "当店では確実なお渡しとお客様のご要望に寄り添ったお仕立てのため、ホールケーキや商品のご予約・お取り置きはお電話または店頭にて承っております。（Web・SNS DMでのご予約受付は行っておりません）",
      phoneNoticeTitle: "【ご予約・お問い合わせ専用ダイヤル】",
      callButtonText: "お電話をかける",
      hoursText: "受付時間：10:00 ～ 19:00（毎週水曜、第1・第3火曜 定休）",
      checklistTitle: "お電話の際にお伺いする内容",
      checklistItems: [
        { label: "ご希望の商品", detail: "ホールケーキの種類・サイズ（号数）、カットケーキ、焼き菓子ギフトなど" },
        { label: "お受取日時", detail: "ご来店予定の日時（営業時間 10:00〜19:00 内）" },
        { label: "メッセージプレート・ローソク", detail: "お名前、記念日メッセージ、ローソクの本数など" },
        { label: "お客様情報", detail: "お名前、当日ご連絡のつくお電話番号" }
      ],
      noticeTitle: "ご予約に関するお願い",
      noticeList: [
        "ホールケーキ・特注デコレーションケーキは、できるだけお早めのご予約（数日前〜1週間前目安）をお願いいたします。",
        "当日分のお取り置きも在庫状況により承りますので、お気軽にお電話にてお確かめください。",
        "製造中や接客中はお電話に出られない場合がございます。その際は誠に恐れ入りますが、少し時間を置いておかけ直しいただけますようお願い申し上げます。"
      ],
      closeBtnText: "閉じる"
    }
  }
};
