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

import ratingsvillGif from '../img/projects/ratingsville.gif'
import ratingsvillIcon from '../img/projects/ratingsville-icon.png'

import groomandbrew from '../img/projects/groomandbrew.png'
import groomandbrewGif from '../img/projects/groomandbrew-gif.png'

import sweeepm from '../img/projects/sweeep-m.png'

import noIcon from '../img/projects/no-icon.png'

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
      year: '2015-2016',
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
      year: '2016-2017',
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
      year: '2017-2017',
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
      year: '2018-Current',
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
    {
      name: 'NEGOSAYO TECHNOLOGY',
      jobDescription: 'JAVASCRIPT / MOBILE DEVELOPER',
      time: 'Part Time',
      year: '2020-Current',
      jobPoints: [
        {
          description: 'Web/React native development of Delivery Application'
        },
        {
          description: 'Head of the javascript front end team'
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
      name: 'Food & Errand Delivery',
      description: 'A food and errands delivery application, it is already expanding to different cities here in the philippines and is adding more services to cater in the near future',
      icon: noIcon,
      confidential: true,
      project_type: 'Client',
      tags: ['React Native','React JS', 'Web System', 'Socket IO','Android','IOS'],
      roles: [
        'Developed the rider wobile version',
        'Developed the rider web version',
        'Developed the merchant mobile version',
        'Developed the merchant web version',
      ]
    },
    {
      name: 'Weather App Mobile (日本語)',
      description: 'A weather application that uses a device to gather information and AI to process its prediction. An application that is collaborated with Filipinos and Japanese developers',
      icon: noIcon,
      confidential: true,
      project_type: 'Client',
      tags: ['React Native','Javascript', 'AWS Amplify','Android','IOS'],
      roles: [
        'Created UI components that will match clients expectations',
        'Implemented AWS Amplify',
        'Simultaneously developed for both android & ios',
        'Dynamic components in map view relatively to its weather datas'
      ]
    },
    {
      name: 'Accounting System (日本語)',
      description: 'One of the developers in this system. It is an automation of japanese invoice processing. Built with the collaboration of Filipinos and Japanese Companies',
      icon: noIcon,
      confidential: true,
      project_type: 'Client',
      tags: ['Python','Django REST','REST Api','MySQL', 'VueJS', 'Webpack', 'Google Vision API', 'Web System'],
      // site_url: 'https://sweeep.ai/',
      roles: [
        'Started the admin dashboard using vuetify components',
        'Created front end user functionalities',
        'Developed some of the backend apis',
        'Used vue in the front end',
        'created python api for exporting data into csv or excel',
        'vuex to manipulate states in the entire project',
        'added cookies and localstorage for caching and session'
      ]
    },
    {
      name: 'Accounting System Mobile Version(日本語)',
      description: 'Mobile version of the japanese accounting system. Its primary use is to capture invoice in the mobile and upload it to the system',
      icon: noIcon,
      confidential: true,
      project_type: 'Client',
      tags: ['React Native','Android','Ios','Mobile Development', 'ReactJS'],
      roles: [
        'Used nativebase as the primary theme for the app',
        'Created functional components and page',
        'Added navigation using React-navigation v5',
        'created Camera Function to capture invoices',
        'created upload api',
        'converted images into pdf',
        'used axios for api request',
        'react redux for state management'
      ]
    },
    {
      name: 'Business Registration',
      description: 'One of the core developers in this project. A web system for setting up a business in Malaysia',
      icon: noIcon,
      project_type: 'Client',
      confidential: true,
      tags: ['Python','Django REST','REST Api','VueJS', 'Webpack', 'Web System'],
      roles: [
        'Coded admin components functionalities',
        'Developed backend APIs',
        'used vue in the front end',
        'created a complicated multi components based on the design',
        'added dynamic data print function'
      ]
    },
    {
      name: 'Groom & Brew System',
      description: 'Sole developer for a startup project. A system dedicated for local barbershops in Davao City.',
      icon: groomandbrew,
      project_type: 'Personal, Startup',
      tags: ['Laravel 5','ReactJS','REST Api','Serializer', 'PHP', 'Webpack','Web System'],
      site_url: 'https://dev.groomandbrew.com',
      roles: [
        'Setup the project',
        'Created class based and functional ReactJS components',
        'Implemented Pusher API for realtime booking',
        'Created and coded the entire system',
        'Organized personal task management for better development',
        'Developed Point of Sales',
        'Developed Profiling',
        'Developed Roles and Routes dynamic access',
        'Applied ChartJS for reports',
        'Developed Inventory',
        'Manage and maintenance of the system'
      ]
    },
    {
      name: 'Ratingsville',
      description: 'A web site application wherein parents can check all the children daycare facilities around united states. I am one of the core developer of this system.',
      icon: ratingsvillIcon,
      project_type: 'Client',
      tags: ['MongoDB','Angular 1','NodeJS','Express JS'],
      site_url: 'https://ratingsville.com/',
      roles: [
        'Created backend APIs',
        'Created controllers for RESTful integration',
        'Coded components on the admin dashboard',
        'Created a function to export data to excel'
      ]
    },
    {
      name: 'Manga Translation System',
      description: 'A simple web application system for manga translation. The system provides easier user interface in the translation process. From the translators to checkers then to proof readers. It enhances the speed and the quality of the project.',
      icon: mangaIcon,
      tags: ['VueJS','Webpack','Npm','Firebase','Javascript','Juery UI','JSON'],
      project_type: 'Personal',
      roles: [
        'Coded the entire dashboard admin with HTML/CSS/SCSS',
        'Integrated real-time data using firebase',
        'jQueryUI for the draggable contents',
        'Applied a cropper library',
        'Developed the entire system'
      ]
    },
    {
      name: 'e-Locator',
      description: 'A website system and mobile application for 911 emergency responders. This system features a real time data of the responders and the callers.',
      icon: emergencyIcon,
      project_type: 'Client',
      tags: ['AngularJS 1','Ionic','Firebase','Npm','Web System'],
      roles: [
        'Created a website system using Angular 1',
        'Developed a mobile application with Ionic 1',
        'Applied cordova functions to access mobile native functionalities',
        'Developed a function to use camera to take a picture and upload it directly to the cloud server',
        'Added geolocation and synced it to the real time database',
        'System uses firebase as the database'
      ]
    },
    {
      name: 'GoMati',
      description: 'A website application system that provides real time data reservation on hotels and beaches in the area of Mati. It uses geolocation to locate the nearest hotel and beached.',
      icon: gomatiIcon,
      project_type: 'Client',
      tags: ['Ionic','AngularJS 1','Firebase','Npm','Web System','REST Api','Real Time','Mobile','PHP'],
      roles: [
        'Developed dashboard using an admin template',
        'Created PHP Api end points',
        'Mobile application using Ionic 1',
        'Added geolocation to mobile app',
        'System uses firebase and mySQL as the database'
      ]
    },
    {
      name: 'Craveee',
      site_url: 'https://kimsean.github.io/cravee/',
      description: 'A simple web application to find restaurants in Davao City by food category.',
      icon: craveeIcon,
      project_type: 'Personal',
      tags: ['ReactJS','Node','JSON','Google Maps', 'Create React App'],
      roles: [
        'Developed the application',
        'Used ReactJS as the main framework for the front end',
        'created JSON to get the data and render it to the DOM',
        'Designed and applied the user interface'
      ]
    },
    {
      name: 'Jam Davao',
      description: 'Band & Gigs directory for local events located in davao city.',
      icon: jamdavaoIcon,
      project_type: 'Client',
      tags: ['Php','Bootstrap','REST Api','Mysql', 'Google Maps', 'Web System'],
      roles: [
        'Built the system with native php',
        'Integrated google maps',
        'Developed the backend queries'
      ]
    }
  ]
}

export default data