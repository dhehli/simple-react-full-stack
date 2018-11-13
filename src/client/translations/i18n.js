import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import translationDE from './de/common.json';
import translationEN from './en/common.json';

i18n
	.use(reactI18nextModule)
	.init({
		interpolation: { escapeValue: false }, // React already does escaping
		lng: 'de', // language to use
		resources: {
			en: {
				translation: translationEN // 'common' is our custom namespace
			},
			de: {
				translation: translationDE
			}
		}
	});

	

export default i18n;
