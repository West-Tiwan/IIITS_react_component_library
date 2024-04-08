import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

export default [
    {
        input: './stories/button/Button.jsx',
        output: [
            {
                file: 'dist/button.js',
                format: 'cjs'
            },
            {
                file: 'dist/button.es.js',
                format: 'es',
                exports: 'named'
            }
        ],
        plugins: [
            postcss({
                plugins: [],
                minimize: true,
            }),
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/preset-react']
            }),
            external(),
            resolve(),
        ],
    }
]