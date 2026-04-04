export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base do app
        fundo: "#170A36",
        fundo_claro: "#22114D",

        // Marca
        primaria: "#6C48C5",
        primariaHover: "#703fec",
        rosa_claro: "#C68FE6",
        amarelo: "#FFEA00",

        // Feedback
        success: "#3fb950",
        warning: "#facc15",
        danger: "#ef4444",

        // Texto
        texto: "#e6edf3",
        textoSecundario: "#8b949e",

        // UI
        border: "#30363d",
      },
    },
  },
  plugins: [],
}