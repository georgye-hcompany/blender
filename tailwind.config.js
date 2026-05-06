/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{svelte,js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        'bl-bg':         '#303030',
        'bl-panel':      '#3d3d3d',
        'bl-header':     '#3d3d3d',
        'bl-border':     '#1f1f1f',
        'bl-text':       '#e6e6e6',
        'bl-muted':      '#a0a0a0',
        'bl-accent':     '#4772b3',
        'bl-active':     '#5680c2',
        'bl-hover':      '#4a4a4a',
        'bl-input':      '#545454',
        'bl-viewport':   '#393939',
      },
      fontSize: { '10': '10px', '11': '11px', '12': '12px', '13': '13px' }
    }
  },
  plugins: []
}
