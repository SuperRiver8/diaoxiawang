export type Venue = {
  id: string;
  name: string;
  area: string;
  address: string;
  hours: string;
  contact: string;
  transport: string;
};

export type Promotion = {
  id: string;
  title: string;
  category: string;
  description: string;
  period: string;
  tone: string;
};

export type Video = {
  id: string;
  title: string;
  duration: string;
  category: string;
};
export type PointTransaction = {
  id: string;
  date: string;
  label: string;
  venue: string;
  points: number;
};
export type MemberCoupon = {
  id: string;
  title: string;
  description: string;
  kind: "cash" | "threshold";
  discountAmount: number;
  minimumSpend?: number;
  validUntil: string;
  status: "available" | "used" | "expired";
};

export const venues: Venue[] = [
  {
    id: "kwun-tong",
    name: "釣蝦王・觀塘店",
    area: "觀塘",
    address: "九龍觀塘巧明街116–118號萬年工業大廈4樓A",
    hours: "營業時間待客戶最終確認",
    contact: "3565 2198",
    transport: "觀塘港鐵站步行約2分鐘",
  },
  {
    id: "lai-chi-kok",
    name: "釣蝦王・荔枝角店",
    area: "荔枝角",
    address: "九龍荔枝角長沙灣道883號億利工業中心6樓616室",
    hours: "一至五 13:00–00:00；六日及公眾假期 12:00–00:00",
    contact: "5282 5850",
    transport: "荔枝角港鐵站步行約2分鐘",
  },
];

export const promotions: Promotion[] = [
  {
    id: "promo-1",
    title: "新會員迎新積分",
    category: "會員限定",
    description: "完成電郵註冊即可查看迎新積分與兩店通用會員禮遇。",
    period: "長期推廣 · 演示內容",
    tone: "from-[#6d3df5] to-[#8f63ff] text-white",
  },
  {
    id: "promo-2",
    title: "平日晚場挑戰",
    category: "期間限定",
    description: "下班後相約朋友，在城市裡來一場不一樣的釣蝦聚會。",
    period: "星期一至四 · 演示內容",
    tone: "from-[#ff7a1a] to-[#ffad55] text-white",
  },
  {
    id: "promo-3",
    title: "新手釣蝦小教室",
    category: "場內消息",
    description: "由場內同事分享入門技巧，第一次玩都可以輕鬆上手。",
    period: "逢週末 · 演示內容",
    tone: "from-[#33214f] to-[#5a3b83] text-white",
  },
];

export const videos: Video[] = [
  {
    id: "video-1",
    title: "一分鐘看懂釣蝦樂趣",
    duration: "01:08",
    category: "新手入門",
  },
  {
    id: "video-2",
    title: "荔枝角店場內直擊",
    duration: "00:42",
    category: "場館日常",
  },
  {
    id: "video-3",
    title: "朋友挑戰賽精華",
    duration: "01:26",
    category: "精彩時刻",
  },
];

export const pointTransactions: PointTransaction[] = [
  {
    id: "tx-1",
    date: "8月26日",
    label: "到店消費積分",
    venue: "釣蝦王・荔枝角店",
    points: 180,
  },
  {
    id: "tx-2",
    date: "8月19日",
    label: "會員活動獎賞",
    venue: "兩店通用",
    points: 80,
  },
  {
    id: "tx-3",
    date: "8月12日",
    label: "兌換場內飲品",
    venue: "釣蝦王・觀塘店",
    points: -60,
  },
  {
    id: "tx-4",
    date: "8月03日",
    label: "到店消費積分",
    venue: "釣蝦王・觀塘店",
    points: 240,
  },
];

export const memberCoupons: MemberCoupon[] = [
  {
    id: "coupon-1",
    title: "會員現金券",
    description: "兩店通用，結帳時出示會員頁面。",
    kind: "cash",
    discountAmount: 50,
    validUntil: "2026-12-31",
    status: "available",
  },
  {
    id: "coupon-2",
    title: "同行釣蝦優惠",
    description: "單次消費滿 HK$300 可使用。",
    kind: "threshold",
    minimumSpend: 300,
    discountAmount: 60,
    validUntil: "2026-10-31",
    status: "available",
  },
  {
    id: "coupon-3",
    title: "生日月驚喜",
    description: "生日月份限定會員禮遇。",
    kind: "cash",
    discountAmount: 30,
    validUntil: "2026-08-31",
    status: "used",
  },
  {
    id: "coupon-4",
    title: "夏日同行券",
    description: "過往推廣優惠券。",
    kind: "threshold",
    minimumSpend: 200,
    discountAmount: 40,
    validUntil: "2026-07-31",
    status: "expired",
  },
];
