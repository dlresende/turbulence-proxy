# Turbulence Proxy Release
[Turbulence BOSH release](https://github.com/cppforlife/turbulence-release)
only talks HTTPS, which is not currently supported by the [CF routing
release](https://github.com/cloudfoundry-incubator/routing-release).  The
Turbulence Proxy release is a temporary workaround to allow the routing release
to create routes to turbulence.

## Add blobs

```bash
wget https://nodejs.org/dist/v6.11.0/node-v6.11.0-linux-x64.tar.xz -O ~/Downloads/node-v6.11.0-linux-x64.tar.xz
bosh add-blob ~/Downloads/node-v6.11.0-linux-x64.tar.xz node-v6.11.0-linux-x64.tar.xz
```

# Create releases

```bash
bosh create-release --force
```
