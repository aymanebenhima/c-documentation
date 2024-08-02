import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "C Programming Essentials",
  description: "Learn the basics of C programming.",
  themeConfig: {
    nav: [
      { text: 'English', link: '/en/intro' },
      { text: 'Français', link: '/fr/intro' },
    ],
    sidebar: {
      '/en/': [
        { text: 'Introduction', link: '/en/intro' },
        { text: 'Getting Started', link: '/en/getStarted' },
        { text: 'Basic Syntax', link: '/en/syntax' },
        { text: 'Output', link: '/en/output' },
        { text: 'Comments', link: '/en/comments' },
        { text: 'Variables', link: '/en/variables' },
        { text: 'Data Types', link: '/en/dataTypes' },
        { text: 'Operators', link: '/en/operators' },
        { text: 'Booleans', link: '/en/booleans' },
        { text: 'Conditional Statements', items: [
            { text: 'If...Else', link: '/en/ifElse' },
            { text: 'Switch Statement', link: '/en/switch' }
          ] 
        },
        { text: 'Loops', items: [
            { text: 'For and While Loops', link: '/en/loops' },
            { text: 'Break and Continue', link: '/en/breakContinue' }
          ]
        }
      ],
      '/fr/': [
        { text: 'Introduction', link: '/fr/intro' },
        { text: 'Commencer', link: '/fr/getStarted' },
        { text: 'Syntaxe de base', link: '/fr/syntax' },
        { text: 'Sortie', link: '/fr/output' },
        { text: 'Commentaires', link: '/fr/comments' },
        { text: 'Variables', link: '/fr/variables' },
        { text: 'Types de données', link: '/fr/dataTypes' },
        { text: 'Opérateurs', link: '/fr/operators' },
        { text: 'Booléens', link: '/fr/booleans' },
        { text: 'Instructions conditionnelles', items: [
            { text: 'Si...Sinon', link: '/fr/ifElse' },
            { text: 'Instruction Switch', link: '/fr/switch' }
          ] 
        },
        { text: 'Boucles', items: [
            { text: 'Boucles For et While', link: '/fr/loops' },
            { text: 'Break et Continue', link: '/fr/breakContinue' }
          ]
        }
      ]
    }
  }
})
