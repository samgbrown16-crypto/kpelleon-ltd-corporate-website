# Kpelleon Ltd corporate website (frontend only)

A responsive React + Vite corporate website using a premium navy, white and gold visual identity, with a dark/light theme toggle.

## Included
- Home, About, Services, Products and Contact pages
- Privacy Policy, Terms & Conditions and Refund Policy starter pages
- Responsive mobile navigation
- Dark/light theme toggle (preference stored in browser localStorage)
- Contact form that opens the visitor's email application using `mailto:` (no backend)

## Run locally
1. Install Node.js (LTS).
2. Extract this project.
3. Open the project folder in VS Code.
4. Run `npm install`.
5. Run `npm run dev`.
6. Open the local URL printed by Vite.

## Build for deployment
Run `npm run build`. The production site is generated in `dist/`.

## Before publishing — important
Edit `src/main.jsx` and update the `COMPANY` object:
- Replace `REPLACE_WITH_COMPANY_EMAIL` with Kpelleon's real public business email.
- Replace the business address placeholder with the official address Kpelleon is authorized to publish.

Review all company descriptions and legal policy pages. The Privacy Policy, Terms & Conditions and Refund Policy are starter drafts, not legal advice or a statement that Kpelleon is compliant. Adapt them to actual data processing, payment terms, refund practices and applicable law. Do not submit draft policies to a payment provider as final policies without reviewing them.

This is a frontend-only project. It has no database, authentication, server API or form-submission backend. The contact form uses `mailto:` and will not store enquiries.
