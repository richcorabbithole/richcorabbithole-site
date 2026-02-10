richcorabbithole Blog - Claude Code Project Guide

Quick Start:
This is a blog about hyperfixations, built with Astro + GitHub Pages for the site, AWS Lambda + Anthropic API for AI agents that help create content.

Repository Structure:
- blog/ - Astro static site
- agents/ - AWS Lambda functions (Serverless Framework)
- cli/ - Command-line tools
- .github/workflows/ - CI/CD pipelines

Technology Stack:
Frontend: Astro, Vue 3, TypeScript, Tailwind CSS
Backend: AWS Lambda (Node.js 20), Anthropic Claude API, AWS SDK v3
Infrastructure: Serverless Framework (IaC), GitHub Actions (CI/CD)
Hosting: GitHub Pages (blog), Cloudflare (DNS)

Key File Locations:
- Blog posts: blog/src/content/blog/*.md
- Content schema: blog/src/content/config.ts
- Agent handlers: agents/*/handler.js
- Agent prompts: agents/shared/prompts.js
- Infrastructure: agents/serverless.yml
- CI/CD: .github/workflows/

Content Schema:
All blog posts must have: title (string), description (string), publishDate (Date), hyperfixation (enum: tech/science/history/gaming/maker/other), researchDepth (1-5), tags (array), optional: draft, featured, coverImage, sources

AI Agent System:
- Research Agent: Claude Sonnet 4, researches topics deeply, outputs markdown notes
- Writing Agent: Claude Sonnet 4, transforms research into blog posts
- Editorial Agent: Claude Sonnet 4, reviews and improves clarity
- SEO Agent: Claude Haiku 4, generates metadata (title, description, tags, slug)
- Publish Pipeline: Orchestrates all agents, creates GitHub PR

Development Workflows:

Creating Posts with Agents:
node cli/agent.js publish "Topic Name" category depth
Example: node cli/agent.js publish "Rust Async Runtime" tech 4
This triggers: Research (2-3min) → Write (3-4min) → Edit (1-2min) → SEO (30sec) → GitHub PR (10sec)
Review PR, merge when satisfied, GitHub Pages auto-deploys

Manual Post Creation:
node cli/new-post.js "Post Title"
Edit: blog/src/content/blog/post-title.md
Commit and push to deploy

Local Development:
Blog: cd blog/ && npm run dev (localhost:4321)
Agents: cd agents/ && npm run offline (localhost:3000)

Infrastructure Management:

Serverless Framework Commands:
- Deploy: serverless deploy --stage dev
- Deploy function: serverless deploy function -f research --stage dev
- View logs: serverless logs -f research -t --stage dev
- Invoke: serverless invoke -f research --stage dev --data '{"topic":"test"}'
- Remove: serverless remove --stage dev
- Info: serverless info --stage dev

Environment Variables:
Required in GitHub Secrets: AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, ANTHROPIC_API_KEY, GITHUB_TOKEN
Auto-injected: STAGE, S3_BUCKET, DYNAMODB_TABLE

Deployment Pipeline:
- develop branch → dev environment (auto)
- main branch → staging (auto) → prod (manual approval)
Steps: Lint → Test → Type check → Deploy → Smoke tests

Testing:
- Unit tests: cd agents/ && npm test
- Watch mode: npm test -- --watch
- Coverage: npm test -- --coverage
- Integration: npm run test:integration -- --stage dev
- Smoke tests: npm run test:smoke -- --stage dev

Debugging:
- Lambda logs: serverless logs -f research -t --stage dev
- CloudWatch: AWS Console → Log Groups → /aws/lambda/richcorabbithole-agents-dev-research
- DynamoDB tasks: aws dynamodb get-item --table-name agent-tasks-dev --key '{"taskId":{"S":"task-XXX"}}'

Common Tasks:

Adding New Agent:
1. Create agents/new-agent/handler.js
2. Add function to serverless.yml
3. Implement handler with Claude API
4. Add tests
5. Deploy: serverless deploy --stage dev

Modifying Infrastructure:
1. Edit agents/serverless.yml
2. Preview: serverless deploy --stage dev --dry-run
3. Deploy: serverless deploy --stage dev

Updating Dependencies:
npm update in blog/ and agents/, commit, push triggers CI/CD

Troubleshooting:
- Build failures: Check GitHub Actions logs, verify schema compliance
- Lambda timeout: Increase timeout in serverless.yml
- Out of memory: Increase memorySize in serverless.yml
- Poor agent results: Review prompts in agents/shared/prompts.js

Best Practices:
- Follow content schema strictly
- Test before deploy (npm test)
- Use dev for testing, staging for validation, prod for release
- All infrastructure changes through serverless.yml
- Document changes
- Never commit secrets
- Be mindful of Lambda costs (timeout/memory)

Quick Reference Commands:
- Blog dev: cd blog && npm run dev
- Create post: node cli/agent.js publish "Topic" category depth
- Deploy agents: cd agents && serverless deploy --stage dev
- View logs: serverless logs -f research -t --stage dev
- Run tests: cd agents && npm test

Important Notes for Claude Code:
1. All blog posts must follow schema in blog/src/content/config.ts
2. Always run tests before deploying agents
3. Infrastructure changes go through serverless.yml
4. Agent system prompts are in agents/shared/prompts.js
5. Never expose API keys or credentials
6. Deploy to dev first, then staging, then prod

Philosophy:
This project celebrates deep dives into varied interests. AI agents accelerate research and drafting, but human editing and curation make it special.