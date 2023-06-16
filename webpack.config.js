export default defineConfig({
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV),
          }),
    ],
  
})
  