import { Dealer } from "zeromq"
import { ReactIR } from "./model";

import { Queue } from "./queue"

async function main() {

  const sender = new Dealer();
  await sender.bind("tcp://127.0.0.1:5555");

  const queue = new Queue(sender);
  setInterval(function () {
    console.log("generating fake reactIR parameters");
    const reactIRData = new ReactIR().generateFakeReactIR();
    queue.send(JSON.stringify(reactIRData));
    queue.send(null);
  }, 1000);

}

main().catch(err => {
  console.error(err);
  process.exit(1);
})
