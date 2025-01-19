import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
	"./pages/**/*.{js,ts,jsx,tsx,mdx}",
	"./components/**/*.{js,ts,jsx,tsx,mdx}",
	"./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	extend: {
	  colors: {
		background: "#f8f8f8",
		foreground: "var(--foreground)",
	  },
	  animation: {
		"slide-down": "slideDown 1s cubic-bezier(.165,.84,.4,1)",
		"slide-up": "slideUp 1s cubic-bezier(.165,.84,.4,1)",
		"slide-in-left": "slideInLeft 1s cubic-bezier(.165,.84,.4,1)",
		"slide-in-right": "slideInRight 1.5s cubic-bezier(.165,.84,.4,1)",
		"open-circle": "openCircle 2s cubic-bezier(.165,.84,.4,1)",
		"scale-up-y": "scaleUpY 0.7s ease-in-out infinite",
		rotate: "rotate 2s linear infinite",
		"rain-drop": "rainDrop 1s linear infinite",
		"snow-drop": "snowDrop 1.5s linear infinite",
		marquee: 'marquee var(--duration) linear infinite',
		'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
		"first-lower-left-leg": "first-lower-left-leg 1.5s linear infinite",
		"qodef-flight":"qodef-flight 1.5s linear infinite",
		"qodef-move-and-return":"qodef-move-and-return 1.5s linear infinite",
		"qodef-propeler":"qodef-propeler 1.5s linear infinite"
	  },
	  keyframes: {
		slideDown: {
		  "0%": {
			transform: "translateY(-100%)",
		  },
		  "100%": {
			transform: "translateY(0)",
		  },
		},
		slideUp: {
		  "0%": {
			transform: "translateY(100%)",
			opacity: "0",
		  },
		  "100%": {
			transform: "translateY(0)",
			opacity: "1",
		  },
		},
		slideInLeft: {
		  "0%": {
			transform: "translateX(-100%)",
		  },
		  "100%": {
			transform: "translateY(0)",
		  },
		},
		slideInRight: {
		  "0%": {
			transform: "translateX(100%)",
		  },
		  "100%": {
			transform: "translateY(0)",
		  },
		},
		openCircle: {
		  "0%": {
			clipPath: "circle(0.0% at 50% 50%)",
		  },
		  "50%": {
			clipPath: "circle(30.0% at 50% 50%)",
		  },
		  "100%": {
			clipPath: "circle(100.0% at 50% 50%)",
		  },
		},
		scaleUpY: {
		  "0%": {
			gridRow: "span 1 / span 1",
		  },
		  "100%": {
			gridRow: "span 2 / span 2",
		  },
		},
		rotate: {
		  "0%": {
			transform: "rotate(0deg)",
		  },
		  "20%": {
			transform: "rotate(72deg)",
		  },
		  "40%": {
			transform: "rotate(144deg)",
		  },
		  "60%": {
			transform: "rotate(216deg)",
		  },
		  "80%": {
			transform: "rotate(288deg)",
		  },
		  "100%": {
			transform: "rotate(360deg)",
		  },
		},
		rainDrop: {
		  "0%": {
			transform: "translateY(0) translateX(0) skewX(-10deg)",
			opacity: "1.0",
		  },
		  "100%": {
			transform: "translateY(100%) translateX(-10%) skewX(-10deg)",
			opacity: "0",
		  },
		},
		snowDrop: {
		  "0%": {
			transform: "translateY(0) translateX(0) skewX(-20deg)",
			opacity: "1.0",
		  },
		  "20%": {
			transform: "translateY(0) translateX(-20%) skewX(-20deg)",
			opacity: "0.8",
		  },
		  "50%": {
			transform: "translateY(50%) translateX(0) skewX(-20deg)",
			opacity: "0.5",
		  },
		  "80%": {
			transform: "translateY(80%) translateX(20%) skewX(-20deg)",
			opacity: "0.3",
		  },
		  "100%": {
			transform: "translateY(100%) translateX(0) skewX(-20deg)",
			opacity: "0",
		  },
		},
		"upper-left-leg": {
		  "0%": {
			transform: "skew(0)",
		  },
		  "50%": {
			transform: "skew(35deg)",
		  },
		  "100%": {
			transform: "skew(0)",
		  },
		},
		"upper-right-leg": {
		  "0%": {
			transform: "skew(0)",
		  },
		  "50%": {
			transform: "skew(-35deg)",
		  },
		  "100%": {
			transform: "skew(0)",
		  },
		},
		"first-lower-left-leg": {
		  "0%": {
			transform: "translateX(0) translateY(0) rotate(0)",
		  },
		  "50%": {
			transform: "translateX(-2px) translateY(2px) rotate(-15deg)",
		  },
		  "100%": {
			transform: "translateX(0) translateY(0) rotate(0)",
		  },
		},
		"second-lower-left-leg": {
		  "0%": {
			transform: "translateX(0) rotate(0)",
		  },
		  "50%": {
			transform: "translateX(10px) rotate(25deg)",
		  },
		  "100%": {
			transform: "translateX(0) rotate(0)",
		  },
		},
		"bottom-legs": {
		  "0%": {
			transform: "rotateZ(0)",
		  },
		  "50%": {
			transform: "rotateZ(-20deg)",
		  },
		  "100%": {
			transform: "rotateZ(0)",
		  },
		},
		"bottom-legs-alter": {
		  "0%": {
			transform: "rotateZ(0)",
		  },
		  "50%": {
			transform: "rotateZ(15deg)",
		  },
		  "100%": {
			transform: "rotateZ(0)",
		  },
		},
		"qodef-move-and-return": {
		  "0%": {
			transform: "translateX(0)",
		  },
		  "50%": {
			transform: "translateX(3px)",
		  },
		  "100%": {
			transform: "translateX(0)",
		  },
		},
		"qodef-move-and-return-invert": {
		  "0%": {
			transform: "translateX(0)",
		  },
		  "50%": {
			transform: "translateX(-3px)",
		  },
		  "100%": {
			transform: "translateX(0)",
		  },
		},
		"qodef-jump": {
		  "50%": {
			transform: "translateY(-3px)",
		  },
		  "100%": {
			transform: "translateY(0)",
		  },
		},
		"qodef-flight": {
		  "0%": {
			transform: "translateY(0)",
		  },
		  "50%": {
			transform: "translateY(24px)",
		  },
		  "100%": {
			transform: "translateY(0)",
		  },
		},
		"qodef-float": {
		  "0%": {
			transform: "translateY(0)",
		  },
		  "50%": {
			transform: "translateY(16px)",
		  },
		  "100%": {
			transform: "translateY(0)",
		  },
		},
		"qodef-propeler": {
		  "0%": {
			transform: "rotateZ(0)",
		  },
		  "25%": {
			transform: "rotateZ(90deg)",
		  },
		  "50%": {
			transform: "rotateZ(180deg)",
		  },
		  "75%": {
			transform: "rotateZ(270deg)",
		  },
		  "100%": {
			transform: "rotateZ(360deg)",
		  },
		},
		marquee: {
			from: { transform: 'translateX(0)' },
			to: { transform: 'translateX(calc(-100% - var(--gap)))' },
		  },
		  'marquee-vertical': {
			from: { transform: 'translateY(0)' },
			to: { transform: 'translateY(calc(-100% - var(--gap)))' },
		  },
	  },
	  animationDelay: {
		"250": "250ms",
		"750": "750ms",
	  },
	  borderRadius: {
		lg: "var(--radius)",
		md: "calc(var(--radius) - 2px)",
		sm: "calc(var(--radius) - 4px)",
	  },
	},
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
