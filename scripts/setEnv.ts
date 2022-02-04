import { writeFile } from 'fs';

import 'dotenv/config';

const targetPath = `./src/environments/environment.prod.ts`;
const environmentFileContent = `
export const environment = {
    production: true,
    firebaseConfig: "${process.env.firebaseConfig}",
    emailUserId: "${process.env.emailUserId}",
    emailTemplateId: "${process.env.emailTemplateId}",
    emailServiceId: "${process.env.emailServiceId}",
}`;

writeFile(targetPath, environmentFileContent, function (err) {
  if (err) console.log(err);
  console.log(`Wrote variables to ${targetPath}`);
});
