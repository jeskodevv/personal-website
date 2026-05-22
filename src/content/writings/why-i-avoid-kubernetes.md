---
title: "Why I Avoid Kubernetes for Personal Projects"
description: "Operational overhead ate all the time I would have spent building. Docker Compose works fine."
date: "2026-03-20T00:00:00Z"
tags: ["infrastructure", "opinion"]
featured: false
---

## The Kubernetes Home Lab

I spent three months building a Kubernetes home lab. Three nodes, persistent volumes, ingress controllers, cert-manager, the whole thing.

It was beautiful. And completely unnecessary.

## The Realization

Every hour I spent debugging a pod restart was an hour I didn't spend building. Every YAML file I wrote was a file that needed maintenance. Every abstraction I added was a layer of complexity that would eventually break.

## What I Actually Need

- A few Docker containers
- Docker Compose
- A reverse proxy
- Backups

That's it. For personal projects, that's always been enough.

## The Lesson

Don't let infrastructure become the project. The goal is to build things, not to build the thing that builds things.