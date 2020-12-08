import {Dealer} from "zeromq"
import { ReactIR } from "./model";

import {Queue} from "./queue"

async function main() {
  const reactIRData = new ReactIR().generateFakeReactIR();
  const sender = new Dealer();
  await sender.bind("tcp://127.0.0.1:5555");

  const queue = new Queue(sender);
  queue.send("hello");
  queue.send("world!");
  queue.send(null);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
})