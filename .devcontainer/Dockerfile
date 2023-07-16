ARG VARIANT=bullseye
# FROM --platform=amd64 mcr.microsoft.com/vscode/devcontainers/base:0-${VARIANT}
FROM mcr.microsoft.com/vscode/devcontainers/base:0-${VARIANT}
RUN export DEBIAN_FRONTEND=noninteractive \
  && apt-get update && apt-get install -y xdg-utils \
  && apt-get clean -y && rm -rf /var/lib/apt/lists/*
# RUN curl -fsSL https://aka.ms/install-azd.sh | bash
RUN mkdir -p /opt/microsoft/azd \
  && curl -L https://github.com/Azure/azure-dev/releases/download/azure-dev-cli_1.1.0/azd-linux-arm64-beta.tar.gz | tar zxvf - -C /opt/microsoft/azd \
  && ln -s /opt/microsoft/azd/azd-linux-arm64-beta /usr/local/bin/azd
