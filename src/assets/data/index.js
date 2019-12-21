import angular from '../img/angular.png'
import angularHover from '../img/angular-hover.png'
import django from '../img/django.png'
import djangoHover from '../img/django-hover.png'
import js from '../img/js.png'
import jsHover from '../img/js-hover.png'
import restapi from '../img/restapi.png'
import restapiHover from '../img/restapi-hover.png'
import vue from '../img/vue.png'
import vueHover from '../img/vue-hover.png'
import react from '../img/react.png'
import reactHover from '../img/react-hover.png'
import nodejs from '../img/nodejs.png'
import nodejsHover from '../img/nodejs-hover.png'
import python from '../img/python.png'
import pythonHover from '../img/python-hover.png'
import php from '../img/php.png'
import phpHover from '../img/php-hover.png'
import laravel from '../img/laravel.png'
import laravelHover from '../img/laravel-hover.png'
import wordpress from '../img/wordpress.png'
import wordpressHover from '../img/wordpress-hover.png'
import git from '../img/git.png'
import gitHover from '../img/git-hover.png'
import mongoDB from '../img/mongodb.png'
import mongoDBHover from '../img/mongodb-hover.png'
import mysql from '../img/mysql.png'
import mysqlHover from '../img/mysql-hover.png'

import mangaGif from '../img/projects/manga.gif'
import mangaIcon from '../img/projects/manga-icon.png'

import emergencyGif from '../img/projects/emergency.gif'
import emergencyIcon from '../img/projects/emergency-icon.png'

import gomatiGif from '../img/projects/gomati.gif'
import gomatiIcon from '../img/projects/gomati-icon.png'

import craveeGif from '../img/projects/cravee.gif'
import craveeIcon from '../img/projects/cravee-icon.png'

import jamdavaoGif from '../img/projects/jamdavao.gif'
import jamdavaoIcon from '../img/projects/jamdavao-icon.png'

import sweeepGif from '../img/projects/sweeepGif.png'
import sweeepIcon from '../img/projects/sweeep-icon.png'

import btcGif from '../img/projects/btc.png'
import btcIcon from '../img/projects/btc-icon.png'



let colorYellow = '#F2C94C'
let colorBlue = '#56CCF2'
let colorGreen = '#27AE60'
let colorOrange = '#F2994A'
let colorRed = '#EB5757'
let colorViolet = '#BB6BD9'

let data = {
  work_history: [
    {
      name: 'WISE CO.',
      jobDescription: 'FRONT END DEVELOPER',
      time: 'Full Time',
      jobPoints: [
        {
          description: 'Designed a restaurant start up mobile application.'
        },
        {
          description: 'Developed mobile api to server.'
        },
        {
          description: 'Enhanced knowledged and learning on cordova.'
        },
        {
          description: 'Worked on a wordpress project.'
        }
      ]
    },
    {
      name: 'AUXILIUS LIMITED',
      jobDescription: 'JAVASCRIPT DEVELOPER',
      time: 'Part Time',
      jobPoints: [
        {
          description: 'Developed an all things child care related web application.'
        },
        {
          description: 'Created models and nodeJS api routes'
        }
      ]
    },
    {
      name: 'FREELANCE DEVELOPER',
      jobDescription: 'FULL STACK DEVELOPER',
      time: 'Freelance',
      jobPoints: [
        {
          description: 'Experience in real time mobile application using firebase & Ionic'
        },
        {
          description: 'Proposed an emergency respond mobile application in the 911 city office'
        },
        {
          description: 'Joined and participated on a telco hackathon program'
        },
      ]
    },
    {
      name: 'PISTACIA INC.',
      jobDescription: 'SOFTWARE ENGINEER',
      time: 'Full Time',
      jobPoints: [
        {
          description: 'Experienced two git repository for a single project'
        },
        {
          description: 'Developed a system using VueJS'
        },
        {
          description: 'Learned and enhanced knowledge on Python and Django REST framework'
        },
        {
          description: 'Practices better code reviews and project management'
        }
      ]
    },
  ],
  skills:[
    {
      name: 'Javascript',
      icon: js,
      iconHover: jsHover,
      value: 5,
      color: colorYellow
    },
    {
      name: 'REST Api',
      icon: restapi,
      iconHover: restapiHover,
      value: 4,
      color: colorBlue
    },
    {
      name: 'Vue JS',
      icon: vue,
      iconHover: vueHover,
      value: 4,
      color: colorGreen
    },
    {
      name: 'React JS',
      icon: react,
      iconHover: reactHover,
      value: 4,
      color: colorBlue
    },
    {
      name: 'Angular 1',
      icon: angular,
      iconHover: angularHover,
      value: 3,
      color: colorRed
    },
    {
      name: 'Node JS',
      icon: nodejs,
      iconHover: nodejsHover,
      value: 3,
      color: colorGreen
    },
    {
      name: 'Python',
      icon: python,
      iconHover: pythonHover,
      value: 4,
      color: colorBlue
    },
    {
      name: 'Django REST',
      icon: django,
      iconHover: djangoHover,
      value: 4,
      color: colorGreen
    },
    {
      name: 'PHP',
      icon: php,
      iconHover: phpHover,
      value: 4,
      color: colorViolet
    },
    {
      name: 'Laravel',
      icon: laravel,
      iconHover: laravelHover,
      value: 3,
      color: colorRed
    },
    {
      name: 'Wordpress',
      icon: wordpress,
      iconHover: wordpressHover,
      value: 4,
      color: colorBlue
    },
    {
      name: 'Git',
      icon: git,
      iconHover: gitHover,
      value: 4,
      color: colorOrange,
    },
    {
      name: 'MongoDB',
      icon: mongoDB,
      iconHover: mongoDBHover,
      value: 3,
      color: colorGreen
    },
    {
      name: 'MySQL',
      icon: mysql,
      iconHover: mysqlHover,
      value: 4,
      color: colorViolet
    }
  ],
  projects: [
    {
      name: 'Manga Translation System',
      description: 'A web app system for easier manga translation. This also provides real time data using firebase',
      gif: mangaGif,
      icon: mangaIcon,
      tags: ['VueJS','Webpack','Npm','Firebase','Javascript','Juery UI','JSON']
    },
    {
      name: 'e-Locator',
      description: 'An emergency app',
      gif: emergencyGif,
      icon: emergencyIcon,
      tags: ['AngularJS 1','Ionic','Firebase','Npm','Web System']
    },
    {
      name: 'GoMati',
      description: 'A reservation system for hotels and beaches',
      gif: gomatiGif,
      icon: gomatiIcon,
      tags: ['Ionic','AngularJS 1','Firebase','Npm','Web System','REST Api','Real Time','Mobile','PHP']
    },
    {
      name: 'Cravee',
      description: 'Find restaurants by category in Davao City',
      gif: craveeGif,
      icon: craveeIcon,
      tags: ['ReactJS','Node','JSON','Google Maps']
    },
    {
      name: 'Jam Davao',
      description: 'Band & Gigs directory for local events.',
      gif: jamdavaoGif,
      icon: jamdavaoIcon,
      tags: ['Php','Bootstrap','REST Api','Mysql', 'Google Maps', 'Web System']
    },
    {
      name: 'Sweeep by AML & Pistacia',
      description: 'I am one of the developers in this system. It is an automation for invoice processing. Built with the collaboration of Filipinos (Pistacia) and Japanese (AML) Companies',
      gif: sweeepGif,
      icon: sweeepIcon,
      tags: ['Python','Django REST','REST Api','MySQL', 'VueJS', 'Webpack', 'Google Vision API', 'Web System']
    },
    {
      name: 'BTC by Pistacia',
      description: 'One of the developer in this system. A web system for a company in Malaysia',
      gif: btcGif,
      icon: btcIcon,
      tags: ['Python','Django REST','REST Api','VueJS', 'Webpack', 'Web System']
    }
  ]
}

export default data