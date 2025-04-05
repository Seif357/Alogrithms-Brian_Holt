import React from "react";
import { shuffle, range } from "lodash";
import { App, snapshot, done, clear } from "./sort-visualizer";

import "./sort.css";

function sort(nums) {
  for (let i = 1; i < nums.length; i++) {
    temp = nums[i];
    for (let j = i; j > 0&& temp < nums[j - 1]; j--) {
      snapshot(nums);
        nums[j] = nums[j - 1];
        nums[j - 1] = temp;
      }
    }
  snapshot(nums);
}

export default function SortComponent() {
  clear();
  sort(shuffle(range(10)));
  done();
  return <App />;
}
