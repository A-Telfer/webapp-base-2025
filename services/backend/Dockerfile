FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive
ENV TZ=America/Toronto

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    build-essential \
    python3 \
    python3-pip \
    git \
    curl \
    wget && \
    rm -rf /var/lib/apt/lists/*

RUN pip install uv