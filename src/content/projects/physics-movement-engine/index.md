---
title: "Physics-Based Movement Engine"
slug: "physics-movement-engine"
status: "active"
description: "A 2D movement system built from scratch. Rigid body simulation with constraint solvers. The third rewrite of an idea I've had since 2022."
started: "2026-01-10T00:00:00Z"
updated: "2026-05-20T00:00:00Z"
tags: ["rust", "wasm", "physics", "simulation"]
featured: true
version: "0.9"
---

## Goal

A movement system that feels physical without being annoying to control.

## Redesigns

- **v0.1**: Position-based. Felt like sliding on ice.
- **v0.5**: Velocity-based with drag. Better. Still mushy.
- **v0.9**: Impulse + constraint solver. This is the one.

## Architecture Decision

Chose Rust + WASM over C++ because I wanted to learn the language under pressure. The borrow checker has strong opinions about game loops.