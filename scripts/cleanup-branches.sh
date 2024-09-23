#!/bin/bash

# Script para limpar branches locais mescladas
git checkout main
git pull origin main

# Excluir branches que foram mescladas
for branch in $(git branch --merged | grep -v 'main'); do
    git branch -d "$branch"
done
