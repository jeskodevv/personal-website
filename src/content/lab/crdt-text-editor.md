---
title: "CRDT Text Editor Experiment"
status: "active"
started: "2026-05-01T00:00:00Z"
hypothesis: "A simple collaborative text editor using CRDTs can be built in a weekend."
conclusion: ""
tags: ["crdt", "collaboration", "typescript"]
---

## Hypothesis

A simple collaborative text editor using CRDTs can be built in a weekend.

## Progress

- Day 1: Read three papers. Realized "simple" was optimistic.
- Day 2: Implemented a basic RGA (Replicated Growable Array). Works for single-character inserts.
- Day 3: Deletion is harder than expected. Tombstones accumulate.

## Current Blocker

Garbage collection of tombstones without breaking convergence. Every paper has a different approach and none of them feel simple.