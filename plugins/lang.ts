export default defineNuxtPlugin({
	state() {
	    return {
	    	en: {
	    		work: 'Works',
	    		about: "About",
	    		letswork: 'Let’s work',
	    		isproject: 'Is there a project?',
	    		question: 'For all questions',
	    		office: 'Office in Russia',
	    		office2: 'Office in Dubai',
	    		go: 'Go',
	    		articles: 'Articles',
	    		readmore: 'Read more',
	    		info: 'About'
	    	},
	    	rus: {
	    		work: 'Вакансии',
	    		about: 'О нас',
	    		letswork: 'Оставить заявку',
	    		isproject: 'Есть проект?',
	    		question: 'По всем вопросам',
	    		office: 'Офис в России',
	    		office2: 'Офис в Дубае',
	    		go: 'Оставить заявку',
	    		articles: 'Наши проекты',
	    		readmore: 'Узнать больше',
	    		info: 'Информация'
	    	}
	    };
  },
});