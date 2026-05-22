---
title: "Custom Keyboard Firmware"
status: "paused"
started: "2026-02-15T00:00:00Z"
hypothesis: "Building a keyboard firmware from scratch will teach me more about embedded systems than reading books."
conclusion: "Correct, but the learning curve is steeper than expected."
tags: ["embedded", "c", "hardware"]
---

## What I Built

A basic QMK-like firmware for a 60% keyboard. Key scanning, debouncing, basic layers.

## What I Learned

- Matrix scanning is simple in theory, noise in practice
- Debouncing is an art, not a science
- USB HID descriptors are arcane

## Why Paused

The hardware side (PCB design, soldering) became a bottleneck. Shelved until I have time to learn KiCad properly.