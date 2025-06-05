import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'personal-panacea-s3-bucket',
});