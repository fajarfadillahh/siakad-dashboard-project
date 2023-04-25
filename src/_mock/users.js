import { faker } from "@faker-js/faker";

const users = [...Array(32)].map(() => ({
  id: faker.datatype.uuid(),
  idNumber: faker.random.numeric(16),
  name: faker.name.fullName(),
  avatarUrl: faker.image.avatar(),
  email: faker.internet.email(),
  streetName: faker.address.streetName(),
  streetAddress: faker.address.streetAddress(),
}));

export default users;
