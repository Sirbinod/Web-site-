import {GLTFLoader} from "https://unpkg.com/three@0.127.0/examples/jsm/loaders/GLTFLoader.js";

import {setupModel} from "./setupModel.js";

async function loadBirds() {
  const loader = new GLTFLoader();

  const [parrotData] = await Promise.all([
    // image one
    loader.loadAsync("/assets/models/Parrot.glb"),

    // image two
    // loader.loadAsync("/assets/models/Flamingo.glb"),

    // image third
    // loader.loadAsync("/assets/models/Stork.glb"),
  ]);

  console.log("Squaaawk!", parrotData);

  const parrot = setupModel(parrotData);
  parrot.position.set(-1.5, 1, 2.5);

  // const flamingo = setupModel(flamingoData);
  // flamingo.position.set(7.5, 0, -10);

  // const stork = setupModel(storkData);
  // stork.position.set(0, -2.5, -10);

  return {
    parrot,
    // flamingo,
    // stork,
  };
}

export {loadBirds};
