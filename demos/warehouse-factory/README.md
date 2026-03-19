# A composed swarm modeling an automated factory

This example application contains the implementations of three different swarm protocols. Each of the swarm protocols models a separate workflow at an automated factory manufacturing cars; their implementations can be combined to form a composed swarm implementing the complete production process.

## Running the example with Docker

The example swarms can be **easily run by [downloading the artifact](https://doi.org/10.5281/zenodo.18459720)** accompanying the paper *Compositional Design, Implementation, and Verification of Swarms* (**TODO: insert DOI**). The artifact contains the example swarms packaged as Docker image and instructions on how to install the image and run the swarms.

Alternatively, the example can be installed and executed natively by following the instructions below.

## Running the example natively

**Note:** These instructions assume that [rustup](https://rustup.rs/) and [Node.js®](https://nodejs.org/en/download) (version >= 20 and with support for [TypeScript](https://www.typescriptlang.org/download/)) is installed on your system.

To begin, if you have not already done so, please clone this repository, `cd` to it and build the libraries [`machine-runner`](../../machine-runner), [`machine-core`](../../machine-static/machine-core), and [`machine-check`](../../machine-static/machine-check):
```
git clone https://github.com/DTU-SSE/machines.git && cd machines && npm run clean-build-machines
```

The machines in a swarm communicate using an asynchronous event propagation mechanism. The event streaming and processing engine [`ax`](https://crates.io/crates/ax) implements this mechanism. As a the next step, please install `ax` by running:

```
cargo install ax
```

Finally, to run the example swarm please run:
```
cd demos/warehouse-factory && npm i && bash start_warehouse_factory_quality.sh session1 /dev/null /dev/null
```

This will start an example composed swarm implementing the composition of three swarm protocols; the terminal is split into five windows with a machine running in each window.