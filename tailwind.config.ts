import type { Config } from "tailwindcss";
const config: Config = {content:["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}"],theme:{extend:{colors:{"cheops-dark":"#001633","cheops-orange":"#ffab40","cheops-cyan":"#0097a7"},boxShadow:{soft:"0 8px 30px rgba(0,22,51,.08)"}}},plugins:[]};
export default config;