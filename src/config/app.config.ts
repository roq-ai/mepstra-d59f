interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Sales Manager', 'Marketing Specialist', 'Customer Support Representative'],
  tenantName: 'Organization',
  applicationName: 'Mepstra',
  addOns: ['chat', 'notifications', 'file'],
};
