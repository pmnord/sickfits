import { list } from '@keystone-next/keystone/schema';
import { text, password, relationship } from '@keystone-next/fields';

// named export because it makes the auto imports a little nicer?
export const User = list({
  // access: ,
  // ui
  fields: {
    name: text({ isRequired: true }),
    email: text({ isRequired: true, isUnique: true }),
    password: password(),
    // TODO add roles, cart and orders
  },
});
