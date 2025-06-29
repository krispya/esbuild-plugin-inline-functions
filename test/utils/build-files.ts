import * as esbuild from 'esbuild';
import { inlineFunctionsPlugin } from '../../src';

export async function buildFiles(entryPoint: string) {
	return await esbuild.build({
		entryPoints: [entryPoint],
		bundle: true,
		write: false,
		format: 'esm',
		plugins: [inlineFunctionsPlugin()],
		// Ensure relative imports work
		resolveExtensions: ['.js', '.ts'],
	});
} 