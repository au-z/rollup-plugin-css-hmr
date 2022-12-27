import { define, html } from "hybrids";
import styles from "./my-counter.css?inline";

export const MyCounter = define<any>({
  tag: "my-counter",
  count: 0,
  render: ({ count }) =>
    html`
      <button onclick="${(host, e) => host.count--}">-</button>
      <span>${count}</span>
      <button onclick="${(host, e) => host.count++}">+</button>
    `.style(styles),
});
