import { Worker } from "worker_threads";
;

// Simple Worker Pool
export class WorkerPool {
    constructor(size) {
        this.size = size;
        this.workers = [];
        this.queue = [];

        for (let i = 0; i < size; i++) {
            this.workers.push(this.createWorker());
        }
    }

    createWorker() {
        const worker = new Worker('./src/worker.mjs', { type: "module" });
        worker.busy = false;
        worker.on("message", (result) => {
            worker.resolve(result);
            console.log("resolved!")
            worker.busy = false;
            this.runNext();
        });
        return worker;
    }

    runNext() {
        const task = this.queue.shift();
        if (!task) return;

        const freeWorker = this.workers.find(w => !w.busy);
        if (!freeWorker) {
            this.queue.unshift(task);
            return;
        }

        freeWorker.busy = true;
        freeWorker.resolve = task.resolve;
        freeWorker.postMessage(task.data);
    }

    run(data) {
        return new Promise((resolve) => {
            this.queue.push({ data, resolve });
            this.runNext();
        });
    }
}