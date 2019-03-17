# Spotify Player

This project was developed to create an awesome example of how you can use the [simple-spotify-wrapper](https://github.com/jpedroschmitz/simple-spotify-wrapper) library.

![Spotify Player Screenshot](spotify-player.png)

## Getting Started

Before we get started make sure you have node and npm installed on your machine. Also, you will need to have a Spotify account.

### Install and run

1. First go to [Spotify Developers API](https://developer.spotify.com/web-api/) and create your token. Then add your token on [src/Spotify.js](src/Spotify.js). **Remember that the token will expire in 60min**
2. Once you have the token you can clone this repository.
2. Then on the project folder run `npm install` or `yarn` to get all the dependencies.
3. Use `npm start` to get the server running on [http://localhost:8080/](http://localhost:8080/).

### Testing

To run the tests you can use the following command:

```sh
npm test
```

Or if you want to test the coverage use:

```sh
npm run test:coverage
```

## Browser Support

This Application relies on [Fetch API](https://fetch.spec.whatwg.org/). And this API is supported in the following browsers.

![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png) | ![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) |
--- | --- | --- | --- | --- |
42+ ✔ | 39+ ✔ | 29+ ✔ | 10.1+ ✔ | Nope ✘ |

## Future features?

- [ ] Create authentication method to get token
- [ ] Create player buttons
- [ ] Create a similar interface to Spotify Web.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Authors

| ![João Pedro Schmitz](https://avatars2.githubusercontent.com/u/26466516?v=3&s=150)|
|:---------------------:|
|  [João Pedro Schmitz](https://github.com/jpedroschmitz/)   |

