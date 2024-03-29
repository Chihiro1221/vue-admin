import * as veeValidate from 'vee-validate';
import * as rules from '@vee-validate/rules';
import { loadLocaleFromURL, localize } from '@vee-validate/i18n';
import yup from './yup';

void loadLocaleFromURL('https://unpkg.com/@vee-validate/i18n@4.1.0/dist/locale/zh_CN.json');

veeValidate.configure({
  generateMessage: localize('zh_CN'),
});

Object.keys(rules).forEach(key => {
  veeValidate.defineRule(key, rules[key]);
});

function useFields(fields: string[]) {
  fields.forEach(field => veeValidate.useField(field));
}

export default { yup, ...veeValidate, useFields };
