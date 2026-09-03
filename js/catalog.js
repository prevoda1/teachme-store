const PRODUCTS = [
  { id: "blazer", name: "Navy Academic Blazer", price: 168, cat: "outerwear", body: ["slim","curvy","plus","tall","male","petite"], img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80" },
  { id: "dress", name: "Cream Midi Dress", price: 128, cat: "dresses", body: ["curvy","petite","slim","plus"], img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80" },
  { id: "tote", name: "Leather Laptop Tote", price: 148, cat: "bags", body: ["slim","curvy","plus","tall","male","petite"], img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80" },
  { id: "loafers", name: "Comfort Loafers", price: 118, cat: "shoes", body: ["slim","curvy","plus","tall","male","petite"], img: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=800&q=80" },
  { id: "planner", name: "Gold-Embossed Planner", price: 36, cat: "accessories", body: ["slim","curvy","plus","tall","male","petite"], img: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80" },
  { id: "cardigan", name: "Burgundy Cashmere Cardigan", price: 158, cat: "knitwear", body: ["curvy","plus","petite","slim"], img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80" },
  { id: "scarf", name: "Silk Scarf & Glasses Set", price: 64, cat: "accessories", body: ["slim","curvy","plus","petite","tall"], img: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=800&q=80" },
  { id: "trouser", name: "Charcoal Stretch Trouser", price: 98, cat: "outerwear", body: ["slim","tall","male","plus"], img: "https://images.unsplash.com/photo-1594938298603-c8148c396185?auto=format&fit=crop&w=800&q=80" },
  { id: "blouse", name: "Ivory Soft Blouse", price: 78, cat: "knitwear", body: ["petite","curvy","slim"], img: "https://images.unsplash.com/photo-1485968579580-b6d80931b38a?auto=format&fit=crop&w=800&q=80" }
];

const LOOKS = [
  { id: 1, title: "Slim Athletic", body: "slim", note: "Clean lines, cropped blazer, tapered trouser.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80", items: ["blazer","trouser","loafers"] },
  { id: 2, title: "Curvy / Hourglass", body: "curvy", note: "Defined waist midi + cardigan drape.", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80", items: ["dress","cardigan","tote"] },
  { id: 3, title: "Athletic Male Casual", body: "male", note: "Unstructured blazer over knit, weekend campus.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80", items: ["blazer","loafers","planner"] },
  { id: 4, title: "Plus-Size / Full Figure", body: "plus", note: "Long cardigan, structured tote, forgiving midi.", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=800&q=80", items: ["cardigan","dress","tote"] },
  { id: 5, title: "Tall Slim", body: "tall", note: "Elongating navy column and long blazer.", img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80", items: ["blazer","trouser","scarf"] },
  { id: 6, title: "Male Professor Power Suit", body: "male", note: "Full authority tailoring for lecture and defense.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80", items: ["blazer","trouser","loafers"] },
  { id: 7, title: "Petite", body: "petite", note: "Raised waist midi, scaled blazer, no overwhelm.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80", items: ["dress","blouse","loafers"] },
  { id: 8, title: "Athletic Male Campus", body: "male", note: "Knit layer, comfortable loafers, planner in hand.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80", items: ["cardigan","tote","loafers"] },
  { id: 9, title: "Mature Professional Woman", body: "curvy", note: "Burgundy knit, cream midi, gold planner.", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80", items: ["cardigan","dress","planner"] },
  { id: 10, title: "Young Elementary Teacher", body: "slim", note: "Washable cream dress, scarf set, easy loafers.", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80", items: ["dress","scarf","loafers"] }
];
