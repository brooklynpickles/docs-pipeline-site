---
title: "Items"
---

# Items

An item belongs to a single owner and has a title and an optional
description. Every item is returned to the client with its ID, owner ID,
and creation timestamp in addition to the fields you set.

## Creating and updating items

Send a title and, optionally, a description to create an item. The title
must be between one and 255 characters. Updates accept the same fields
and only change the values you include in the request body.
