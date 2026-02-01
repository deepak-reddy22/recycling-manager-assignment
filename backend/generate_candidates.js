import { faker } from "@faker-js/faker";
import fs from "fs";

let sql = "";

for (let i = 1; i <= 40; i++) {
  const name = faker.person.fullName();
  const experience = faker.number.int({ min: 2, max: 18 });
  const skills = faker.helpers.arrayElements(
    ["Leadership", "Safety", "Sustainability", "Planning", "Operations"],
    3
  ).join(", ");

  const crisis = faker.number.int({ min: 50, max: 100 });
  const sustainability = faker.number.int({ min: 50, max: 100 });
  const motivation = faker.number.int({ min: 50, max: 100 });
  const total = crisis + sustainability + motivation;

  sql += `
INSERT INTO candidates VALUES (${i}, '${name}', ${experience}, '${skills}');
INSERT INTO evaluations VALUES (${i}, ${i}, ${crisis}, ${sustainability}, ${motivation}, ${total});
`;
}

fs.writeFileSync("sample_data.sql", sql);
