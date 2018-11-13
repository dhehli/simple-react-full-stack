import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import translationDE from './de/common.json';
import translationEN from './en/common.json';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
	.use(LanguageDetector)
	.use(reactI18nextModule)	
	.init({
		interpolation: { escapeValue: false }, // React already does escaping
		fallbackLng: 'de',
		resources: {
			en: {
				translation: translationEN // 'common' is our custom namespace
			},
			de: {
				translation: translationDE
			}
		},
		react: {
      wait: true,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default'
    }
	});

	

export default i18n;
