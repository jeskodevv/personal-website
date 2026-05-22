---
title: "Distributed Log Aggregator"
slug: "distributed-log-aggregator"
status: "active"
description: "A system for collecting, routing, and querying structured logs from multiple services. Started as a weekend experiment. Now handles real traffic."
started: "2025-11-15T00:00:00Z"
updated: "2026-05-21T00:00:00Z"
tags: ["go", "grpc", "raft", "distributed-systems"]
featured: true
version: "1.4"
---

## Goal

Ingest 50k events/sec across 3 nodes without losing data during failover.

## Current State

v1.4 — Raft consensus added. Still struggling with split-brain edge cases.

## Failures

- **2025-12-03**: Chose gRPC too early. Protobuf versioning became a nightmare.
- **2026-01-17**: Lost 3 days debugging a race condition that was actually a clock skew issue.
- **2026-02-28**: Underestimated disk I/O pressure. Entire queue design had to be rethought.

## Lessons

Distributed systems punish assumptions. Write your failure modes down before you write code.