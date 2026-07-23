export interface ReceiptItem {
  name: string;
  price: number;
  link: string;
}

export interface ReceiptContent {
  storeName: string;
  subtitle: string;
  orderNumber: string;
  customerName: string;
  thankYouMessage: string;
  websiteUrl: string;
  githubRepo: string;
  images: {
    pageBackground: string;
    shaderTexture: string;
    headerLogo: string;
    barcodeGif?: string;
  };
  items: ReceiptItem[];
}


export const receiptContent: ReceiptContent = {
  storeName: "MSME",
  subtitle: "SEMESTER 1",
  orderNumber: "#0001",
  customerName: "STUDENT",
  thankYouMessage: "THANK YOU FOR VISITING!",
  websiteUrl:
    "These resources are curated through peer recommendations, student confirmations, and faculty suggestions. If you have questions regarding any material, please reach out to the department authority.",
  githubRepo: "praveen-tek/stuff-you-looking-for",
  images: {
    pageBackground: `/background.png`,
    shaderTexture:
      "https://app.paper.design/file-assets/01KAA2GZFSDFEH1RRF4G8FHFFC/01KY7XJ7K3ZEVPNM3MK05587FF.webp",
    headerLogo: `/dandelions.png`,
    barcodeGif: `/barcode.gif`,
  },
  items: [
    {
      name: "Engineering Physics — H.K. Malik & A. Singh",
      price: 450,
      link: "https://www.amazon.in/s?k=engineering+physics+hk+malik",
    },
    {
      name: "Engineering Chemistry — Jain & Jain",
      price: 520,
      link: "https://www.amazon.in/s?k=engineering+chemistry+jain+jain",
    },
    {
      name: "Higher Engineering Mathematics — B.S. Grewal",
      price: 650,
      link: "https://www.amazon.in/s?k=higher+engineering+mathematics+bs+grewal",
    },
    {
      name: "Basic Electrical Engineering — D.P. Kothari",
      price: 480,
      link: "https://www.amazon.in/s?k=basic+electrical+engineering+kothari",
    },
    {
      name: "Programming in ANSI C — E. Balagurusamy",
      price: 395,
      link: "https://www.amazon.in/s?k=programming+in+ansi+c+balagurusamy",
    },
    {
      name: "A Text Book of Engineering Drawing — N.D. Bhatt",
      price: 420,
      link: "https://www.amazon.in/s?k=engineering+drawing+nd+bhatt",
    },
    {
      name: "Engineering Mechanics — S.S. Bhavikatti",
      price: 380,
      link: "https://www.amazon.in/s?k=engineering+mechanics+bhavikatti",
    },
    {
      name: "Microelectronic Circuits — Sedra & Smith",
      price: 610,
      link: "https://www.amazon.in/s?k=microelectronic+circuits+sedra+smith",
    },
    {
      name: "Perspectives in Environmental Studies — R. Rajagopalan",
      price: 290,
      link: "https://www.amazon.in/s?k=environmental+studies+rajagopalan",
    },
    {
      name: "Technical Communication — Meenakshi Raman & S. Sharma",
      price: 350,
      link: "https://www.amazon.in/s?k=technical+communication+meenakshi+raman",
    },
    {
      name: "Materials Science and Engineering — V. Raghavan",
      price: 430,
      link: "https://www.amazon.in/s?k=materials+science+and+engineering+raghavan",
    },
    {
      name: "Elements of Workshop Technology — S.K. Hajra Choudhury",
      price: 495,
      link: "https://www.amazon.in/s?k=workshop+technology+hajra+choudhury",
    },
    {
      name: "Data Structures Using C — Reema Thareja",
      price: 540,
      link: "https://www.amazon.in/s?k=data+structures+using+c+reema+thareja",
    },
    {
      name: "Digital Design — M. Morris Mano",
      price: 580,
      link: "https://www.amazon.in/s?k=digital+design+morris+mano",
    },
    {
      name: "Thermodynamics: An Engineering Approach — Yunus Cengel",
      price: 720,
      link: "https://www.amazon.in/s?k=thermodynamics+cengel",
    },
    {
      name: "Introduction to Algorithms — Cormen, Leiserson, Rivest & Stein",
      price: 890,
      link: "https://www.amazon.in/s?k=introduction+to+algorithms+cormen",
    },
    {
      name: "Linear Algebra and Its Applications — Gilbert Strang",
      price: 610,
      link: "https://www.amazon.in/s?k=linear+algebra+gilbert+strang",
    },
    {
      name: "Object-Oriented Programming in C++ — Robert Lafore",
      price: 460,
      link: "https://www.amazon.in/s?k=object+oriented+programming+in+c%2B%2B+robert+lafore",
    },
    {
      name: "Engineering Graphics Tool Kit & Mini Drafter Set",
      price: 599,
      link: "https://www.amazon.in/s?k=engineering+drawing+kit",
    },
    {
      name: "Casio FX-991CW ClassWiz Non-Programmable Scientific Calculator",
      price: 1495,
      link: "https://www.amazon.in/s?k=casio+fx+991cw",
    },
    {
      name: "Waterproof A3/A4 Drawing Sheet Storage Container Tube",
      price: 250,
      link: "https://www.amazon.in/s?k=drawing+sheet+holder+tube",
    },
    {
      name: "Standard Engineering Practical Lab Journals (Set of 4)",
      price: 320,
      link: "https://www.amazon.in/s?k=engineering+practical+lab+notebook",
    },
  ],
};