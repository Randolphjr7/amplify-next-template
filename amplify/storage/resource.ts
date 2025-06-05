import { defineStorage } from '@aws-amplify/backend';




export const storage = defineStorage({
    name: 'personal-panacea-s3-bucket',
    access: (allow) => ({
      'public/*': [
        allow.guest.to(['read', 'write', 'delete']),
        allow.authenticated.to(['read', 'write', 'delete']), 
      ]
    })
  });