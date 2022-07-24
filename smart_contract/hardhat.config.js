require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.2',
  // networks: {
  //   rinkeby: {
  //     url: 'https://eth-rinkeby.alchemyapi.io/v2/_cqfxl5yx4HFvVpPh0HgNOwKHpYANpiX',
  //     accounts: [
  //       'f2679263aadf9db7949246a5265f7cf0b0aece610ba4d84dcfc9304ccd050d0c',
  //     ],
  //   },
  // },
  // defaultNetwork: "matic",
  networks: {
    matic: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/pDjSxoziZ9eIM1nuqCcJ2v-yE5U5Nwv5',
      accounts: [
        'f90d889c00a9503f8a184516aa8950c1270276c18f0b21c5762e51770ee5d762',
      ],
      // accounts: [process.env.PRIVATE_KEY],
    },
  },
}
