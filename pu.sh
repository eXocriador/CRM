#!/bin/bash

# Check if commit message is provided
if [ $# -eq 0 ]; then
    echo "Usage: ./push.sh \"Your commit message\""
    echo "Example: ./push.sh \"Add new feature\""
    exit 1
fi

# Get commit message from first argument
COMMIT_MESSAGE="$1"

# Git operations
echo "Adding all files..."
git add .

echo "Committing with message: $COMMIT_MESSAGE"
git commit -m "$COMMIT_MESSAGE"

echo "Pushing to remote..."
git push

echo "✅ Successfully pushed to repository!"
