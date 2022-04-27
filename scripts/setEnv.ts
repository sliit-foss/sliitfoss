import { writeFile } from 'fs';

import 'dotenv/config';

const targetPath = `./src/environments/environment.prod.ts`;
const environmentFileContent = `
export const environment = {
    production: true,
    firebaseConfig: "${process.env.FIREBASE_WEB_CONFIG}",
    authEmail: "${process.env.AUTH_EMAIL}",
    authPass: "${process.env.AUTH_PASS}",
    emailUserId: "${process.env.emailUserId}",
    emailTemplateId: "${process.env.emailTemplateId}",
    emailServiceId: "${process.env.emailServiceId}",
}`;

writeFile(targetPath, environmentFileContent, function (err) {
  if (err) console.log(err);
  console.log(`Wrote variables to ${targetPath}`);
});
