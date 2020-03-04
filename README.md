# adacon-no

*Ada Lovelace Conference 2020 in Oslo*

<https://adacon.no>

## Running with docker

See <https://github.com/Starefossen/docker-github-pages>:

    docker run -it --rm -v "$PWD":/usr/src/app -p "4000:4000" starefossen/github-pages

The page will be available on <http://localhost:4000/20/dev.html>.

### CSS optimization

In order to create a CSS file with only the neccessary styles, we use [`uncss`](https://github.com/uncss/uncss).

    npm ci
    make 20/theme.uncss.css

You can test the result on <http://localhost:4000/20/>.