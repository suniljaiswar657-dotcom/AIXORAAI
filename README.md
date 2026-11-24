# AIXORA AI

**One Platform. Limitless AI Possibilities.**

AIXORA AI is an all-in-one AI SaaS platform in development. The initial foundation uses Next.js, React and TypeScript.

## Current status

- [x] Initial responsive marketing homepage
- [x] Initial design system
- [x] SEO metadata baseline
- [ ] Supabase authentication and database
- [ ] Secure AI API gateway
- [ ] AI Chat and Writer
- [ ] PDF and Research tools
- [ ] Credit ledger and billing
- [ ] Admin dashboard
- [ ] Production security and deployment verification

Tools marked as coming soon or planned are not yet functional. Do not represent them as live services.

## Local development

Requirements: Node.js 20.9 or later.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Environment variables

Add secrets only to your deployment environment or a local ignored `.env.local` file. Never commit API keys or Supabase service-role credentials.

## Product principles

- Build real functionality, not demo-only controls.
- Keep provider secrets server-side.
- Enforce user-level authorization and database RLS.
- Track usage and costs before enabling paid AI features.
- Test each module before marking it live.
