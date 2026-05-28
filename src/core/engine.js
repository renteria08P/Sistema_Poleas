import { Engine } from "@babylonjs/core";

export function createEngine(canvas) {
  return new Engine(canvas, true);
}
