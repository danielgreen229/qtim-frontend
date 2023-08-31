<template>
	<footer class="work">
	   	<div class="container container--small">
	      	<div class="work__caption">{{ TranslatedText.isproject }}</div>
	      	<div class="work__body">
	         	<div class="work__body-col">
	            	<button class="work__title">
	               		<h2>Let’s work together</h2>
	            	</button>
	         	</div>
	         	<div class="work__body-col">
	            	<address class="work__address">
	               		<div class="work__address-block">
			               	<span class="caption">{{ TranslatedText.question }}</span> 
			               	<a href="tel:+79202780068"> +7 (920) 278—00—68</a> 
			               	<a href="mailto:info@qtim.ru">qtim@agency.com</a> 
	               		</div>
	               		<div class="work__address-block">
	                  	<span class="caption">{{ TranslatedText.office }}</span> 
	                  	<div>139 Ruben Station Lake Drew, NM 52678</div>
	                  		<a href="/contacts" class="btn btn--location">
			                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
			                        <path d="M7.5 10.5L10.5 1.5L1.5 4.5L5.25 6.75L7.5 10.5Z" stroke="#E2BEFF" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
			                    </svg>
	                 		</a>
	               		</div>
	               		<div class="work__address-block">
		                  	<span class="caption">{{ TranslatedText.office2 }}</span> 
	                  		<div>139 Ruben Station Lake Drew, NM 52678</div>
	                  		<a href="/contacts" class="btn btn--location">
	                     		<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
	                        		<path d="M7.5 10.5L10.5 1.5L1.5 4.5L5.25 6.75L7.5 10.5Z" stroke="#E2BEFF" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
	                     		</svg>
	                  		</a>
	               		</div>
	            	</address>
	         	</div>
	      	</div>
	      	<footer class="work__footer">
	         	<div class="work__footer-col">
		         	<a href="mailto:info@qtim.ru" target="_blank" class="hover">email</a>
		         	<a href="https://t.me/qtim_pro" target="_blank" class="hover">telegram</a>
		         </div>
	         	<button class="btn btn--go" >
	         		<span >{{ TranslatedText.go }}</span>
	         	</button> 
	         	<div class="work__footer-col">
		         	<a href="https://vk.com/qtim_agency" target="_blank" class="hover" >vk</a>
		         	<a href="https://www.linkedin.com/company/75761973/" target="_blank" class="hover" >linkedin</a>
		        </div>
	      	</footer>
	   	</div>
	</footer>
</template>

<script lang="ts">
export default {
	name: 'footerCom',
	computed: {
	    TranslatedText () {
	    	let currentLang = this.$store.state.language
	        let text = this.$store.state.lang[currentLang]
	        return text
	    },
	},
}
</script>

<style scoped>
.work {
    overflow: hidden;
    background-color: #e2beff;
    padding: 140px 0 30px;
}

.work__caption {
    margin-bottom: 56px;
    font-size: 16px;
    line-height: 120%;
    letter-spacing: .01em;
    color: #101010;
}

.work__body {
    display: flex;
    flex-wrap: wrap;
}
.work__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 273px;
    position: relative;
}
.work__title {
    color: #101010;
    transition: all .2s linear;
    max-width: 464px;
    display: block;
    text-align: left;
}

.work__body-col:first-child {
    width: 69%;
}

.work__title h2 {
    background-image: linear-gradient(90deg,#101010 0,#101010);
    background-repeat: repeat-x;
    background-position: 0 100%;
    background-size: 100% 3px;
    font-size: 112px;
    line-height: 100%;
    font-weight: 400;
    display: inline;
}

.work__address {
    font-size: 16px;
    line-height: 120%;
    letter-spacing: .01em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 152px;
}

.work__address .caption {
    display: block;
    margin-top: 0px;
    margin-bottom: 12px;
    font-weight: 600;
}

.work__address a {
    display: block;
    color: #101010;
    margin: 4px 0;
}

address {
    margin-bottom: 1rem;
    font-style: normal;
    line-height: inherit;
}

.work__address .btn--location {
    background: #101010;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    margin-top: 8px;
    transition: all .3s ease;
    position: relative;
}

.work__address .btn--location svg {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}

.work__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 273px;
    position: relative;
}

.work__footer-col {
    position: relative;
    z-index: 6;
    margin: 0 -16px;
    display: flex;
}

.work__footer a {
    font-size: 16px;
    line-height: 120%;
    letter-spacing: .01em;
    color: #101010;
    margin: 0 16px;
    text-transform: capitalize;
}

.work__footer .btn--go {
    width: 358px;
    height: 358px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background: #101010;
    font-weight: 400;
    font-size: 32px;
    line-height: 100%;
    color: #fff;
    bottom: -210px;
    z-index: 5;
    transition: all .3s ease;
}

.work__footer .btn--go span {
    position: absolute;
    top: 122px;
    transition: opacity .2s ease;
    pointer-events: none;
}

.work__body-col:last-child {
    width: 31%;
    flex-grow: 1;
}

.work__footer .btn--go:hover {
    transform: translateX(-50%) scale(1.32);
}

.work__title:hover {
    color: #7941a7;
}

.work__title:hover h2 {
    background-image: linear-gradient(90deg,#7941a7 0,#7941a7);
}

.work__address .btn--location:hover {
    transform: scale(1.25);
}

a.hover:before {
    height: 10px;
}

a.hover:hover:before {
    opacity: 1;
    -webkit-animation: lineUp .3s ease forwards;
    animation: lineUp .3s ease forwards;
}

@media screen and (max-width: 935px) {

	.work__footer {
    	justify-content: center;
	}	
	.work__footer a {
	    color: #868686;
	}
	.work__footer .btn--go {
	    width: 375px;
	    height: 375px;
	    bottom: -198px;
	}
	.work__footer .btn--go span {
	    top: 100px;
	}
}

@media screen and (max-width: 768px) {
	.work__body-col:first-child {
	    width: 100%;
	}
	.work__body-col:last-child {
	    width: 100%;
	    margin-top: 48px;
	}
}

@media screen and (max-width: 600px) {
	.work__address {
	    flex-wrap: wrap;
	    flex-direction: row;
	    max-width: 100%;
	    margin: 0 -13.5px;
	}
	.work {
	    padding: 50px 0 14px;
	}
	.work__caption {
	    margin-bottom: 24px;
	}
	.work__footer {
	    justify-content: center;
	}
	.work__title h2 {
	    font-size: 80px;
	    line-height: 100%;
	}
	.work__address-block:first-child {
	    width: 100%;
	}
	.work__address-block {
	    padding: 0 13.5px;
	}
	.work__footer-col {
	    margin: 0 -9.5px;
	}
	.work__footer a {
	    font-size: 14px;
	    margin: 0 9.5px;
	}
	.work__footer-col:last-child {
	    padding-left: 20px;
	}
	.work__footer-col {
	    margin: 0 -9.5px;
	}
	.work__address-block:nth-child(2), .work__address-block:nth-child(3) {
	    width: 50%;
	}
}

.work__address-block:not(:last-child) {
    margin-bottom: 36px;
}

@-webkit-keyframes lineUp {
    0% {
        transform-origin: 50% 100%;
        transform: scaleY(.045)
    }

    50% {
        transform-origin: 50% 100%;
        transform: scaleX(1)
    }

    51% {
        transform-origin: 50% 0;
        transform: scaleX(1)
    }

    to {
        transform-origin: 50% 0;
        transform: scaleY(.045)
    }
}

@keyframes lineUp {
    0% {
        transform-origin: 50% 100%;
        transform: scaleY(.045)
    }

    50% {
        transform-origin: 50% 100%;
        transform: scaleX(1)
    }

    51% {
        transform-origin: 50% 0;
        transform: scaleX(1)
    }

    to {
        transform-origin: 50% 0;
        transform: scaleY(.045)
    }
}
</style>