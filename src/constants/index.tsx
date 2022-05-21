//import { IconType } from "src/components/common/Icon/Icon";
import portfolio1 from "src/assets/images/portfolio-1.jpg";
import portfolio2 from "src/assets/images/portfolio-2.jpg";
import portfolio3 from "src/assets/images/portfolio-3.jpg";
import portfolio4 from "src/assets/images/portfolio-4.jpg";
import portfolio5 from "src/assets/images/portfolio-5.jpg";
import portfolio6 from "src/assets/images/portfolio-6.jpg";
import portfolio7 from "src/assets/images/portfolio-7.jpg";
import portfolio8 from "src/assets/images/portfolio-8.jpg";
import partner1 from "src/assets/images/partner_1.jpg";
import partner2 from "src/assets/images/partner_2.jpg";
import partner3 from "src/assets/images/partner_3.jpg";
import logo_futura_menu from "src/assets/images/logo_futura_menu.svg";
import celentano_logo from "src/assets/images/celentano-logo.svg";
import shoco_logo from "src/assets/images/shoco-logo.svg";

import axios from "axios";
import { IconType } from "src/components/common/Icon";

export type TextBlockProps = {
  title: string;
  text: Array<string>;
};

export const textBlock1 = {
  title: "Ідея та місія проєкту",
  text: [
    "Наш проєкт є важливою частиною ширшого руху, спрямованого на те, щоб зробити мистецтво доступним, недорогим та справедливим. Мистецтво пропонує нам спосіб звернутись до світу без стін. Мистецтво допомагає нам зцілити ушкоджену тканину нашого життя через мистецтво мистецтва. У нас є місце для художників, які знаходяться в авангарді свого ремесла, які вирощують і надихають своє ремесло і знаходяться в авангарді теперішнього моменту змінного міського світу.",
  ],
};

export const textBlock2 = {
  title: "Коли стираються стереотипи і народжується мистецтво!",
  text: [
    "... Таланти розчиняються у віртуальному просторі,",
    "Але все важче в таке занурюватися знову.",
    "Тим сильніше спокуси успіху, хисткості та ясності …",
    "Коли реальність «витікає» за вікно і ми стаємо тими, хто є, сцена з реальності стає проекцією в символічний світ. За вікном це щось таке, за чим ховається ваше життя. А що там – у тій прихованій реальності, що висить у вікні? А за дверима? За тими дверима теж є щось? Чи ні? І чи буває такий сміх, коли за вікном з'являється те, що в нас там?",
  ],
};

export const protfolio = [
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5,
  portfolio6,
  portfolio7,
  portfolio8,
];

export const textBlock3 = {
  title: "Пристрасть до якості – відмінна риса наших художників!",
  text: [
    "Програма Art IBC пропонує значну приватну добірку робіт таких художників, як Бенксі, Баскіа, Бохнер, Ботеро, Шагал, Кондо, Брати Коннори, Далі, Дайн, Франкенталер, Харінг, Херст, Хокні, Індіана, Кац, KAWS, Кунс, Лагеманн, Ліхтенштейн, Лонго, Манус, Матісс, Міро, Муракамі, Містер Промивання мозку, Пікассо, Квінн, Ріхтер, Руша, Слонем, Султан, Уорхол, Вессельманн і Вербікі.",
  ],
};

export interface ICoordinators {
  image: string;
  name: string;
  position: string;
  phoneNumber: string;
  email: string;
}

export const coordinators: ICoordinators[] = [
  {
    image: partner1,
    name: "Михайло Крамаренко",
    position: "Логістика",
    phoneNumber: "+38 093 830 26 84",
    email: "kramarenko@gmail.com",
  },
  {
    image: partner2,
    name: "Тетяна Бахур",
    position: "Фінансові питання",
    phoneNumber: "+ 38 093 456 21 50",
    email: "tetiana.bakhur@gmail.com ",
  },
  {
    image: partner3,
    name: "Денис Захарчук",
    position: "Координатор",
    phoneNumber: "+38 063 516 73 07",
    email: "denys.zaharchuk@gmail.com ",
  },
];

export interface IPartners {
  logo: string;
  link: string;
}

export const partners: IPartners[] = [
  {
    logo: logo_futura_menu,
    link: "https://futura-hub.com.ua/main-en/",
  },
  {
    logo: celentano_logo,
    link: "https://pizzacelentano.com/",
  },
  {
    logo: shoco_logo,
    link: "https://shoco.ua/",
  },
];

export const REG_EX_NAME = /^[a-zA-Z-]{3,40}$/;
export const REG_EX_SURNAME = /^[a-zA-Z]{3,50}$/;
export const REG_EX_M0BILE = /^[0-9]{9}$/;
export const REG_EX_EMAIL = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
export const REG_EX_PASSWORD =
  /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export const BASE_URL = "http://localhost:3001/api/";
export const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzZiYWE2NmMzZGYwYzE4ZTYxYzI1MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MTk0ODIzMSwiZXhwIjoxNjUyMjA3NDMxfQ.29lTqowZSUooWSI640qGiUi0Fs3HVV0fh5NuYBhUqss";

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Barer ${TOKEN}` },
});

export type FoodStuffItemType = {
  img: string;
  title: string;
  desc: string;
  price: number;
};

export interface productItems {
  title: string;
  desc: string;
  img: string;
  price: number;
  quantity?: number;
}

interface socialMediaProp {
  id: number;
  icon: IconType;
  link: string;
}

export const socialMedia: socialMediaProp[] = [
  {
    id: 1,
    icon: IconType.Facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: 2,
    icon: IconType.Instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: 3,
    icon: IconType.YouTube,
    link: "https://www.youtube.com/",
  },
  {
    id: 4,
    icon: IconType.Viber,
    link: "https://www.viber.com/",
  },
  {
    id: 5,
    icon: IconType.Telegram,
    link: "https://web.telegram.org/",
  },
];
