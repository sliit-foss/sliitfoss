import { writeFile } from 'fs';

import 'dotenv/config';

const targetPath = `./src/environments/environment.prod.ts`;
const environmentFileContent = `
export const environment = {
    production: true,
    firebaseConfig: "${process.env.FIREBASE_WEB_CONFIG}",
    authEmail: "${process.env.AUTH_EMAIL}",
    authPass: "${process.env.AUTH_PASS}",
    emailUserId: "${process.env.EMAIL_USER_ID}",
    emailTemplateId: "${process.env.EMAIL_TEMPLATE_ID}",
    emailServiceId: "${process.env.EMAIL_SERVICE_ID}",
}`;

writeFile(targetPath, environmentFileContent, function (err) {
  if (err) console.log(err);
  console.log(`Wrote variables to ${targetPath}`);
});
