import { faker } from "@faker-js/faker";

const users = [...Array(50)].map((_, index) => ({
  id: faker.datatype.uuid(),
  idNumber: faker.random.numeric(16),
  name: faker.name.fullName(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  email: faker.internet.email(),
  streetName: faker.address.streetName(),
  streetAddress: faker.address.streetAddress(),
}));

export default users;
