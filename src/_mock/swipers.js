import { faker } from "@faker-js/faker";

const swipers = [...Array(7)].map((_, index) => ({
  id: faker.datatype.uuid(),
  imageUrl: `/assets/images/swiper/swiper_${index + 1}.jpg`,
  title: faker.random.words(2),
}));

export default swipers;
