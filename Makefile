# Jawad Ateeq's Personal Website
# Usage: make <command>

.PHONY: help install dev build clean

# Default target
help:
	@echo "🌟 Jawad Ateeq's Personal Website"
	@echo ""
	@echo "Essential commands:"
	@echo "  make install  - Install dependencies (one-time setup)"
	@echo "  make dev      - Start local development server"
	@echo "  make build    - Build for production"
	@echo "  make clean    - Clean build artifacts"
	@echo ""
	@echo "URLs:"
	@echo "  Local:      http://localhost:3000/"
	@echo "  Production: https://jateeq.github.io/console/"
	@echo ""
	@echo "Deploy: Just 'git push' (GitHub Actions handles deployment)"

# One-time setup: install dependencies
install:
	@echo "📦 Installing dependencies..."
	cd jawadateeq-blog && npm ci

# Start local development server
dev:
	@echo "🚀 Starting local development server..."
	@echo "Environment: NODE_ENV=development (set by Docusaurus)"
	@echo "Blog will be available at: http://localhost:3000/"
	@pkill -f "docusaurus start" || true
	cd jawadateeq-blog && npm start

# Build for production
build:
	@echo "🏗️ Building for GitHub Pages production..."
	@echo "Environment: NODE_ENV=production (set by Docusaurus)"
	cd jawadateeq-blog && npm run build

# Clean build artifacts
clean:
	@echo "🧹 Cleaning build artifacts..."
	cd jawadateeq-blog && rm -rf build/ node_modules/.cache/