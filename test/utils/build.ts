import * as esbuild from 'esbuild';
import { inlineFunctionsPlugin } from '../../src';

export async function build(code: string) {
	return await esbuild.build({
        stdin: {
            contents: code,
            loader: 'js',
        },
        bundle: false,
        write: false,
        format: 'esm',
        plugins: [inlineFunctionsPlugin()],
    });
}