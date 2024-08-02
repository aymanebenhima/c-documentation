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
        { text: 'Comments', link: '/en/comments' },
        { text: 'Variables', link: '/en/variables' },
        { text: 'Data Types', link: '/en/dataTypes' },
        { text: 'Operators', link: '/en/operators' },
        { text: 'Output', link: '/en/output' },
        { text: 'Control Structures', items: [
            { text: 'Switch Statement', link: '/en/switch' },
            { text: 'Loops', link: '/en/loops' }
          ] 
        }
      ],
      '/fr/': [
        { text: 'Introduction', link: '/fr/intro' },
        { text: 'Commencer', link: '/fr/getStarted' },
        { text: 'Commentaires', link: '/fr/comments' },
        { text: 'Variables', link: '/fr/variables' },
        { text: 'Types de données', link: '/fr/dataTypes' },
        { text: 'Opérateurs', link: '/fr/operators' },
        { text: 'Sortie', link: '/fr/output' },
        { text: 'Structures de contrôle', items: [
            { text: 'Instruction Switch', link: '/fr/switch' },
            { text: 'Boucles', link: '/fr/loops' }
          ] 
        }
      ]
    }
  }
})
