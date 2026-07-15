---
title: "Using this OpenAPI description"
---

# Using this OpenAPI description

This repository publishes machine-generated OpenAPI descriptions of
GitHub's REST API. It does not accept pull requests that edit the
description directly; the files here are produced from the schema that
also validates live API requests.

## Choosing a file

Each description ships in two formats:

- The bundled version keeps references between components intact and is
  the preferred format for most tooling.
- The dereferenced version resolves every reference inline, which some
  older tools require but which makes the file much larger.

Use `descriptions/api.github.com/api.github.com.yaml` for the current
bundled description, or one of the date-stamped files in the same
directory to pin to a specific release.

## Keeping up with changes

Check `descriptions/api.github.com/CHANGELOG.md` for a per-release record
of what changed in the schema. A new date-stamped file is added alongside
the unversioned bundle on each release.

To track changes programmatically, diff two date-stamped descriptions rather
than the unversioned bundle, which is overwritten in place on each release.
