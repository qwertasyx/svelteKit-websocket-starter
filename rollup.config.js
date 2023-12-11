// rollup.config.js
import typescript from '@rollup/plugin-typescript';
/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
	input: 'src/server/backend.ts',
	external: ['socket.io'],
	output: { dir: 'dist' },
	plugins: [typescript({ sourceMap: false })]
};

export default config;
