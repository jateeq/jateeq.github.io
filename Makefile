# Root Makefile - Jawad Ateeq's Personal Website
# Usage: make <command>

.PHONY: help dev build deploy

# Default target
help:
	@echo "🌟 Jawad Ateeq's Personal Website"
	@echo ""
	@echo "Quick commands:"
	@echo "  make dev     - Start local development server"
	@echo "  make build   - Build for production"
	@echo ""
	@echo "Note: All commands automatically run in jawadateeq-blog directory"

# Start local development server
dev:
	@echo "🚀 Starting local development server..."
	cd jawadateeq-blog && make deploy-local

# Build for production
build:
	@echo "🏗️ Building for production..."
	cd jawadateeq-blog && make build

# Deploy (just push to git)
deploy:
	@echo "🚀 Deploying to GitHub Pages..."
	@echo "Pushing to git (GitHub Actions will handle deployment)"
	git add . && git commit -m "Update blog content" && git push
