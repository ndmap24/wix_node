"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "constants/blend_mode.js"));
const { NETWORK } = require(path.join(basePath, "constants/network.js"));

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Your Collection";
const description = "Remember to replace this description";
// const baseUri = "ipfs://NewUriToReplace";
const baseUri = "ipfs://QmTSEJ9XbofXxcSZYveeShPZYU9bu2tQZbW7EQLfScgx3e";
const solanaMetadata = {
  symbol: "NOC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 10,
    layersOrder: [
      { name: "Background" },
      { name: "Tail"},
      { name: "Beaver's Right Arm"},
      { name: "Body" }, 
      { name: "Shirt"},
      { name: "Shirt Graphics"},
      { name: "Necklaces"},
      { name: "Head"},
      { name: "Hat or hair"},
      { name: "Eyes"},
      { name: "Glasses"},
      { name: "Nose Piercings"},
      { name: "Beaver's Right Ear"},
      // { name: "Cigars and Joints"},
      // { name: "Fishing Lures"},
      { name: "Iris"},
      { name: "Item in Beaver's Left Hand"},
      { name: "Item in Right Hand"},
      { name: "Left ARm Shirt"},
      // { name:  "Left Ear Piercing"},
      // { name: "Left Hand Item SET2"},
      // { name: "Nipple piercings"},
      { name: "Right arm shirt"},
      // { name: "Right ear piercing"},
      
      
      { name: "Lower Mouth"},
      { name: "Beaver's Left Ear" },
      { name: "Beaver's Left Arm" },
      // { name: "Tail"},
      
      
      
      { name: "Right Foot"},
      { name: "Left Foot"}, 
      // { name: "Foregrounds"},
      
           
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 512,
  height: 512,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
};
