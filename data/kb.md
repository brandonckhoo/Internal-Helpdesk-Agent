# Company Knowledge Base

> Internal reference document for the Helpdesk Agent.
> Last updated: 2026-02-28

---

## IT & Hardware

### Requesting a New Device or Upgrade
- Submit a hardware request via the **IT Service Portal** at `portal.company.internal`.
- Include your manager's written approval (email or Slack screenshot).
- Standard processing time: **3–5 business days**.
- Eligible upgrades: laptop, monitor, keyboard, mouse, headset, webcam.
- Budget ceiling for standard requests: **$2,500**. Requests above this require VP approval.

### Loaner Equipment
- Loaners are available for up to **14 days** while your device is being repaired.
- Contact IT at `it-support@company.internal` or Slack `#it-requests`.

### Device Setup & Provisioning
- New devices ship pre-imaged with macOS/Windows and standard software.
- IT onboarding checklist is sent via email on Day 1.
- VPN client (Tailscale) and SSO (Okta) are pre-installed.

### Repairs & Damage
- Accidental damage: submit a ticket with photos via the IT portal.
- Warranty repairs are handled by IT — do not send devices directly to vendors.
- Liquid damage voids the company warranty; a replacement may be charged to the employee.

---

## Software & Access

### Requesting Software Licenses
- Submit a software request via the IT portal, including business justification.
- Approved software list: `portal.company.internal/software-catalog`.
- Unlisted software requires Security review (allow **5–7 business days**).
- No personal software may be installed on company devices without IT approval.

### Access & Permissions
- System access requests must be sponsored by your direct manager.
- Submit via IT portal → "Access Request" form.
- Standard SLA: **1 business day** for existing systems, **3 days** for new provisioning.
- Offboarding access is revoked within **4 hours** of the last working day.

### Password & MFA
- All accounts require MFA via Okta Verify or a hardware key (YubiKey).
- Passwords must be **14+ characters**; use the company 1Password team vault.
- Lost MFA device: contact IT immediately at `it-support@company.internal`.

---

## HR & People

### Time Off & PTO
- PTO policy: **unlimited PTO** with a recommended minimum of 15 days/year.
- Submit time off requests in **Workday** at least **2 business days** in advance for < 3 days off; **2 weeks** for longer breaks.
- Holidays: see the company calendar in Workday → "Time Off" → "Public Holidays".
- Sick leave: notify your manager same-day via Slack; log in Workday.

### Parental Leave
- Primary caregiver: **16 weeks** fully paid.
- Secondary caregiver: **6 weeks** fully paid.
- Submit leave request to HR at `hr@company.internal` at least **4 weeks** in advance.

### Performance Reviews
- Cycles: **mid-year** (June) and **annual** (December).
- Self-reviews, peer reviews, and manager reviews are done in Lattice.
- Calibration sessions happen after submissions close; results communicated within 2 weeks.

### Onboarding
- Week 1: IT setup, role orientation, meet-your-team sessions.
- Week 2–4: role-specific training, shadow sessions, assigned onboarding buddy.
- 30/60/90-day check-ins with manager scheduled automatically via Workday.

### Offboarding
- Manager initiates offboarding in Workday.
- IT and Finance are notified automatically.
- Final paycheck includes accrued PTO (where applicable by state law).
- Return company equipment within **5 business days** of last day.

---

## Finance & Expenses

### Expense Reimbursement
- Use **Expensify** to submit receipts within **30 days** of the expense.
- Approved expense categories: travel, meals (client or team, ≤ $75/person), office supplies, training.
- Reimbursements are processed in the **next bi-weekly payroll run**.
- Receipts required for any expense over **$25**.

### Travel Policy
- Book travel via **TripActions** (company travel portal).
- Economy class for flights under **6 hours**; business class requires VP approval.
- Hotel: up to **$250/night** in most cities; up to **$350/night** in high-cost cities (NYC, SF, London).
- Meals while traveling: up to **$80/day**.

### Corporate Cards
- Corporate Amex cards are issued to employees with travel/recurring expenses.
- Request via Finance at `finance@company.internal`.
- Personal use on corporate cards is prohibited and subject to disciplinary action.

### Invoices & Vendor Payments
- Send vendor invoices to `ap@company.internal`.
- Payment terms: Net 30 by default.
- New vendor setup requires a W-9 and vendor onboarding form.

---

## Security & Compliance

### Reporting a Security Incident
- Suspected phishing or breach: report immediately to `security@company.internal` or Slack `#security-incidents`.
- Do not forward suspicious emails — use the "Report Phishing" button in Gmail.
- Security team SLA: acknowledge within **1 hour**, investigate within **4 hours**.

### Data Handling
- Customer data must remain in approved systems (listed in the Data Classification Policy).
- No customer PII may be stored in personal cloud storage (Google Drive personal, Dropbox, etc.).
- Data retention: see the Data Retention Policy in Notion under "Legal & Compliance".

### Acceptable Use
- Company devices and network are for work purposes; incidental personal use is permitted.
- Prohibited: torrenting, cryptocurrency mining, accessing illegal content.
- All activity on company networks is subject to monitoring per the Employee Privacy Notice.

---

## Office & Facilities

### Office Access
- Badge access is provisioned on Day 1 and linked to your Okta account.
- Lost badge: contact Facilities at `facilities@company.internal` or the front desk.
- Guest access: submit a visitor request 24 hours in advance via the Facilities portal.

### Meeting Rooms
- Book via **Google Calendar** → "Rooms & Resources".
- Release the room if you're running 10+ minutes late — rooms auto-release after 15 minutes.
- AV issues: submit a ticket to IT or call the AV support line posted in each room.

### Remote Work
- Employees may work remotely up to **3 days/week** (role-dependent).
- Fully remote employees must be in the office for **quarterly all-hands** weeks.
- Home office stipend: **$500 one-time** on joining; **$100/year** thereafter.

---

## Communication & Tools

### Internal Tools Stack
| Tool | Purpose |
|------|---------|
| Slack | Team communication |
| Google Workspace | Email, Docs, Calendar, Drive |
| Notion | Internal wiki & documentation |
| Workday | HR, payroll, time off |
| Lattice | Performance reviews & 1:1s |
| Jira | Engineering project tracking |
| Expensify | Expense reporting |
| TripActions | Travel booking |
| 1Password | Password management |
| Okta | SSO & MFA |

### Slack Guidelines
- Set your status when OOO or in a focus block.
- Use threads for replies; keep channel noise low.
- Emergency escalation: use `@here` in `#incidents` only for active production issues.

---

## Escalation Contacts

| Team | Slack Channel | Email |
|------|--------------|-------|
| IT Support | `#it-requests` | `it-support@company.internal` |
| HR | `#people-team` | `hr@company.internal` |
| Finance | `#finance-help` | `finance@company.internal` |
| Security | `#security-incidents` | `security@company.internal` |
| Facilities | `#facilities` | `facilities@company.internal` |
| Legal | `#legal` | `legal@company.internal` |
| Engineering | `#engineering` | `engineering@company.internal` |
| Product | `#product` | `product@company.internal` |

---

## Feature Requests

### Submitting a Feature Request
- Feature requests should be directed to the **Product team** for evaluation and prioritization.
- Submit via Jira → "Feature Request" issue type, or reach out on Slack `#product`.
- Include a clear description of the problem you're trying to solve and any relevant context.
- The Product team will triage requests and follow up within **5 business days**.

### Engineering Involvement
- If your feature request has a technical dependency or requires an engineering estimate, CC the Engineering team at `engineering@company.internal` or tag `#engineering` in your Jira ticket.
- Engineering and Product review requests together in weekly triage.
- For urgent or business-critical requests, escalate directly to your manager who can raise it with the Product or Engineering lead.

---

## Engineering — Development Process

### Branching Strategy
- We follow **trunk-based development** with short-lived feature branches.
- Branch naming convention: `<type>/<ticket-id>-<short-description>` (e.g., `feat/ENG-1234-add-oauth`).
- All branches must be cut from `main`; do not branch off other feature branches.
- Feature branches should live no longer than **3 days**; break large changes into smaller PRs.

### Pull Requests
- All changes require a PR with at least **1 approving review** before merging.
- PRs touching production infrastructure, payment flows, or auth require **2 approvals**.
- PR descriptions must include: summary of change, testing steps, and link to Linear ticket.
- Use the PR template at `.github/pull_request_template.md` — do not delete its sections.
- Draft PRs are encouraged for work-in-progress; mark ready for review when all CI checks pass.

### Code Review Etiquette
- Reviews should be completed within **1 business day** of the review request.
- Be specific and constructive; reference the line number or file in your comments.
- Use the `[nit]` prefix for non-blocking style suggestions.
- Do not approve a PR you haven't fully read; use "Request changes" when you spot blockers.

### Local Development Setup
- Prerequisites: Node.js 20+, Docker, direnv, and the 1Password CLI for secrets.
- Clone the repo, run `make setup` to install dependencies and configure pre-commit hooks.
- Environment variables are stored in 1Password; run `op run -- make dev` to start locally.
- The local dev environment runs on `http://localhost:3000`; services listed in `docker-compose.yml`.
- Database migrations run automatically on startup in local/staging; apply manually in prod.

### Testing Standards
- Unit tests are required for all new business logic; aim for **≥ 80% coverage** on new files.
- Integration tests live in `tests/integration/` and run against a local Docker environment.
- Do not merge PRs with failing tests unless there is an explicit override approved by an EM.
- Test file naming: `<module>.test.ts` co-located with the source file.
- Use `vitest` for unit tests; `Playwright` for end-to-end tests.

### Code Style
- TypeScript strict mode is enforced; avoid `any` types — use `unknown` and narrow with guards.
- ESLint and Prettier run on pre-commit hooks; configure your editor to format on save.
- Commit messages follow Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`, etc.
- Questions on code style? Ask in `#eng-platform` on Slack.

---

## Engineering — CI/CD and Deployments

### CI Pipeline Overview
- All PRs trigger the CI pipeline via **GitHub Actions**.
- Pipeline stages: lint → type-check → unit tests → integration tests → build.
- Total pipeline time target: **< 10 minutes**. Alert `#eng-platform` if it exceeds 15 minutes.
- Failed pipelines block merges; do not merge with a red pipeline without EM sign-off.

### Deployment Environments
| Environment | Branch | URL | Deploy Trigger |
|---|---|---|---|
| Local | any | localhost:3000 | Manual |
| Staging | `main` | `staging.company.internal` | Auto on merge |
| Production | release tags | `app.company.com` | Manual promotion |

### Staging Deployments
- Every merge to `main` triggers an automatic deploy to staging.
- Staging uses production-parity data (anonymized). Treat it as prod-like.
- If staging is broken, post in `#eng-staging` immediately — it blocks QA and CS testing.
- Staging URL: `staging.company.internal` (VPN required).

### Production Deployments
- Production deploys are manual promotions from staging, triggered in **ArgoCD**.
- Deploy window: **Tuesday and Thursday, 10am–3pm PT** (outside of window requires EM approval).
- All production deploys require a Linear deploy ticket with a rollback plan documented.
- Run the smoke test suite after every prod deploy: `make smoke-test ENV=prod`.
- On-call engineer is primary owner of any production deploy.

### Rollbacks
- If a deploy causes errors or degraded metrics, rollback immediately — do not try to hotfix first.
- Rollback in ArgoCD: select the previous revision and click "Sync".
- Notify `#incidents` with the deploy ticket link and a brief description of the issue.
- Post-rollback: create a Linear ticket for the follow-up fix before re-deploying.

### Feature Flags
- We use **LaunchDarkly** for feature flags. All new features should ship behind a flag.
- Request flag creation via `#eng-platform`; include the flag key, default state, and expiry date.
- Flags must be cleaned up within **30 days** of full rollout. Stale flags cause tech debt alerts.

### Secrets Management
- Secrets are stored in **1Password** (team vault) and injected at runtime via the 1Password CLI.
- Never commit secrets to the repo; the pre-commit hook will block this.
- Rotate secrets immediately if you suspect exposure; alert `security@company.internal`.
- Production secrets are managed by the Platform team; request via `#eng-platform`.

---

## Engineering — On-Call and Incident Response

### On-Call Schedule
- Engineering on-call rotates weekly; the schedule is published in PagerDuty and linked in `#on-call`.
- Current on-call: check the `#on-call` Slack channel (bot posts the primary at 9am every Monday).
- Primary on-call carries a PagerDuty phone; secondary on-call must acknowledge pages within **10 minutes**.
- If you cannot take your on-call shift, arrange a swap via `#on-call` at least **48 hours** in advance.

### PagerDuty Escalation Policy
- Alert fires → Primary on-call notified via PagerDuty (push + SMS + call).
- If not acknowledged in **5 minutes** → Secondary on-call is paged.
- If not acknowledged in **10 more minutes** → Engineering Manager is paged.
- Escalate to VP Engineering only for SEV-1 events (see Severity Levels below).

### Severity Levels
| Severity | Definition | Response Time | Incident Commander |
|---|---|---|---|
| SEV-1 | Full production outage, data loss, or security breach | Immediate (< 5 min) | VP Engineering |
| SEV-2 | Major feature degraded, >20% of users impacted | < 15 minutes | EM on-call |
| SEV-3 | Minor feature degraded, <20% of users impacted | < 1 hour | Primary on-call |
| SEV-4 | Non-customer-facing issue, cosmetic bug | Next business day | Assigned engineer |

### Incident Response Steps
1. Acknowledge the PagerDuty alert; post in `#incidents` with a brief description.
2. Assess severity using the table above; declare the severity level in the channel.
3. For SEV-1/SEV-2: open a Zoom bridge immediately (link pinned in `#incidents`).
4. Mitigate first — rollback, disable feature flag, or take the affected component offline.
5. Communicate to stakeholders: post status updates in `#incidents` every **15 minutes** for active SEV-1/SEV-2.
6. Update the public status page at `status.company.com` for customer-impacting incidents.
7. Declare incident resolved when metrics return to baseline for **10+ minutes**.

### Post-Incident Review (PIR)
- SEV-1 and SEV-2 require a written PIR within **3 business days** of resolution.
- PIR template: Notion → Engineering → Incident Reviews.
- PIR must include: timeline, root cause, contributing factors, action items with owners and due dates.
- PIR review meeting is optional for SEV-2, mandatory for SEV-1. Schedule via `#eng-leadership`.
- Action items from PIRs are tracked as Linear tickets with `incident-followup` label.

### Monitoring & Alerting Tools
- Metrics and dashboards: **Datadog** (`datadog.company.internal`).
- Error tracking: **Sentry** (`sentry.company.internal`).
- Log aggregation: **Datadog Logs** (search via the Datadog UI or CLI).
- Synthetic monitoring: Datadog Synthetics — checks run every **1 minute** from 3 regions.
- Uptime SLA tracking: Datadog SLO dashboards linked in Notion → Engineering → SLOs.

---

## Engineering — Runbooks

### Runbook: Database Connection Pool Exhaustion
**Symptoms:** 5xx errors on DB-backed endpoints; Datadog shows `db.connections.active` near max.
**Steps:**
1. Check Datadog → `db.connections.active` vs `db.connections.max`. If ratio > 90%, this is the issue.
2. Identify the query causing pool exhaustion: run `SELECT * FROM pg_stat_activity ORDER BY duration DESC LIMIT 20;` in the read replica.
3. Kill long-running queries if safe: `SELECT pg_terminate_backend(<pid>);`
4. Increase pool size as a temporary fix: update `DATABASE_POOL_SIZE` env var in ArgoCD and redeploy.
5. Long-term: open a Linear ticket to optimize the offending query or add connection pooling via PgBouncer.
6. Page `#eng-platform` if steps 1–4 do not resolve within 30 minutes.

### Runbook: High API Latency
**Symptoms:** p95 latency > 2s in Datadog; user complaints about slow load times.
**Steps:**
1. Check Datadog APM traces for the slowest endpoints (`APM → Services → api`).
2. Identify if the bottleneck is DB, external API, or CPU-bound code.
3. For DB: check slow query log in RDS Performance Insights.
4. For external API: check the third-party status page; enable the circuit breaker in LaunchDarkly if available.
5. For CPU: check EC2/ECS CPU utilization in Datadog; scale horizontally if > 80% for > 5 minutes.
6. Rollback recent deploys if latency spike correlates with a recent deployment.
7. Notify `#incidents` at SEV-3 if p95 > 3s for > 15 minutes.

### Runbook: Memory Leak / OOM Crashes
**Symptoms:** ECS tasks restarting frequently; Datadog shows memory usage climbing to 100%.
**Steps:**
1. Check ECS Service Events in AWS Console for OOM kill events.
2. Take a heap snapshot in staging: set `ENABLE_HEAP_PROFILING=true` env var and reproduce the load.
3. Analyze with Chrome DevTools or `node --inspect`.
4. Common culprits: unbounded caches, event listener leaks, large response buffering.
5. Temporary fix: increase task memory limit in the ECS task definition (max 2x current).
6. Permanent fix: identify and patch the leak; test with a load test before promoting to prod.

### Runbook: Deployment Rollback Procedure
**Steps:**
1. Confirm the issue is deploy-related: compare error rate in Datadog before and after deploy time.
2. Open ArgoCD → select the affected application → History & Rollback tab.
3. Select the last known-good revision and click "Rollback".
4. ArgoCD will redeploy the previous container image; monitor Datadog for metric recovery.
5. Post in `#incidents`: "Rolled back [service] to revision [X] at [time] due to [issue]."
6. Do NOT re-deploy the broken version without identifying and fixing the root cause.
7. Create a Linear ticket with `incident-followup` label for the fix.

### Runbook: SSL Certificate Expiry Warning
**Steps:**
1. Certificates are managed by AWS ACM; expiry alerts fire 30 days before expiration.
2. ACM certificates auto-renew if DNS validation is in place. Check ACM Console for renewal status.
3. If renewal is stuck: verify the `_acme-challenge` DNS record in Route 53.
4. For certificates managed outside ACM: contact `#eng-platform` to trigger manual renewal.
5. Never let a certificate expire — if renewal is blocked and expiry is < 7 days, escalate to SEV-2.

---

## Customer Success — Onboarding Playbook

### Overview
- Customer Success Managers (CSMs) own the onboarding experience from contract signature to go-live.
- Target time-to-value: **≤ 30 days** from contract signature for SMB; **≤ 60 days** for Enterprise.
- Onboarding health is tracked in Gainsight; escalate to CS Lead if an account falls behind.

### Week 1: Kickoff
- Schedule the kickoff call within **3 business days** of contract signature.
- Kickoff agenda: introductions, product overview, success criteria alignment, technical requirements review.
- Send the onboarding welcome email using the template in Notion → CS → Templates → Onboarding Welcome.
- Confirm the customer's primary technical contact and executive sponsor in Salesforce.
- Create the customer's shared Slack Connect channel: `#customer-<company-name>` (invite their team).

### Week 2–3: Technical Setup
- Coordinate with Solutions Engineering for SSO/SAML configuration (SLA: **3 business days**).
- Provide the API integration guide: `docs.company.com/api` — walk through the quickstart together.
- Set up data migration if applicable; use the Data Migration Checklist in Notion.
- Configure user roles and permissions per the customer's org chart provided during kickoff.
- Validate integration with a test data set before importing production data.

### Week 4: Training & Go-Live
- Conduct role-based training sessions: Admin training (2h) + End User training (1h).
- Training recordings are auto-uploaded to the customer's shared Google Drive folder.
- Go-live checklist: SSO enabled, data loaded, users provisioned, Slack Connect active, support contact set.
- CSM sends the "You're live!" email with the support portal link and CSM direct contact.
- Schedule the 2-week post-go-live check-in on the same day as go-live.

### Post-Go-Live
- **Day 14**: Check-in call — review adoption metrics, resolve any blockers, confirm value realization.
- **Day 30**: Health review — update Gainsight health score, share the 30-day usage summary.
- **Day 60**: First QBR prep begins (see QBR Playbook).
- Escalate to the CS Lead immediately if: the customer goes dark, NPS < 7, or adoption < 20% of licensed seats.

### Escalation Contacts
- Technical integration issues: `solutions-eng@company.internal` or `#solutions-engineering`.
- Billing/contract issues: `finance@company.internal`.
- Product feature gaps blocking go-live: escalate via `#cs-to-product` Slack channel.
- Executive escalations: VP of Customer Success at `vp-cs@company.internal`.

---

## Customer Success — QBRs and Account Health

### Quarterly Business Reviews (QBRs)
- QBRs are conducted every 90 days for Enterprise accounts (ARR > $50K) and every 180 days for SMB.
- QBR owner: the assigned CSM, with optional attendance by CS Lead or VP CS for strategic accounts.
- QBR prep begins **2 weeks** before the meeting; use the QBR Deck Template in Notion → CS → Templates.

### QBR Agenda Template
1. Executive summary: health score, key wins, open issues
2. Product usage review: MAUs, feature adoption heatmap, top workflows
3. ROI analysis: value delivered vs. success criteria from kickoff
4. Roadmap alignment: upcoming releases relevant to the customer
5. Goals for next quarter: 3–5 measurable objectives agreed with the customer
6. Open items and action log review

### Health Score Components (Gainsight)
| Signal | Weight |
|---|---|
| Product usage (DAU/MAU ratio) | 30% |
| Support ticket volume & CSAT | 20% |
| NPS score (last survey) | 20% |
| Contract renewal date proximity | 15% |
| Executive engagement | 15% |

### Health Thresholds
- **Green (70–100)**: Healthy. Standard QBR cadence.
- **Yellow (40–69)**: At risk. Increase check-in cadence to bi-weekly; create a success plan in Gainsight.
- **Red (0–39)**: Critical risk. Escalate to CS Lead and VP CS within **24 hours**; initiate churn recovery playbook.

### NPS Surveys
- NPS surveys are sent automatically via Gainsight every **90 days**.
- Detractors (0–6): CSM must follow up within **48 hours** to understand and address the concern.
- Passives (7–8): CSM follows up within **1 week** to identify improvement areas.
- Promoters (9–10): Request a case study or G2 review; introduce to the customer reference program.

---

## Customer Success — Churn Escalation

### Identifying Churn Risk
- Automatic Gainsight alerts fire when a health score drops below 40 or renewal is < 90 days away.
- Manual triggers: customer mentions budget cuts, dissatisfaction, or competitor evaluation in any interaction.
- Any "cancel" or "not renewing" language in email or Slack must be escalated within **4 hours**.

### Churn Recovery Playbook
1. **Immediate (Day 0)**: CSM flags the account as "Churn Risk" in Gainsight; notifies CS Lead via Slack DM.
2. **Day 1**: CSM schedules an executive sponsor call (customer VP/C-Suite) within **3 business days**.
3. **Day 3**: CS Lead joins the call. Agenda: listen, understand root cause, present a recovery plan.
4. **Day 5**: Prepare a written recovery plan — may include: feature commitment, SLA credits, price concession (requires VP CS and Finance approval).
5. **Day 10**: Follow-up call to confirm whether the recovery plan has been accepted.
6. **Day 30**: Reassess health score; if still Red, escalate to VP CS for executive-to-executive outreach.

### Approved Recovery Levers
| Lever | Approval Required |
|---|---|
| SLA credit (≤ 20% of MRR) | CS Lead |
| SLA credit (> 20% of MRR) | VP CS + Finance |
| Price concession (≤ 10%) | VP CS |
| Price concession (> 10%) | CEO |
| Feature commitment / accelerated roadmap | VP Product |

### Closed-Lost Process
- If churn is confirmed, mark the opportunity as Closed-Lost in Salesforce with a reason code.
- Reason codes: Budget, Competitor, Product Gap, Executive Change, Dissatisfaction, Other.
- Complete a churn debrief doc (template in Notion → CS → Churn Analysis) within **5 business days**.
- Share the debrief with CS Lead, VP CS, and VP Product.
- Off-board the customer: notify IT to revoke access 30 days after contract end (or as specified in the contract).

---

## Sales — Demo and Discovery

### Discovery Call Best Practices
- The goal of discovery is to understand the prospect's **pain, process, and priorities** — not to pitch.
- Use the MEDDIC framework: Metrics, Economic Buyer, Decision Criteria, Decision Process, Identify Pain, Champion.
- Key discovery questions:
  - "What does your current workflow look like for [problem area]?"
  - "What would success look like 6 months after implementing our solution?"
  - "Who else is involved in this decision?"
  - "What's the cost of doing nothing?"
- Log all discovery call notes in Salesforce within **24 hours**; use the Discovery Notes field.

### Demo Preparation
- Request a sandbox environment from Sales Ops via `#sales-ops` at least **48 hours** before the demo.
- Demo environment is pre-seeded with industry-relevant sample data — specify the prospect's industry when requesting.
- Customize the demo flow using the Demo Customization Guide in Notion → Sales → Demo Playbooks.
- Technical demos (API, SSO, custom integrations) require a Solutions Engineer — request via `#solutions-engineering` with **3 business days** notice.

### Demo Structure (45-minute session)
1. **0–5 min**: Agenda review and rapport building
2. **5–15 min**: Discovery deepening — confirm pain points uncovered before the call
3. **15–35 min**: Tailored demo focusing on the top 2–3 use cases
4. **35–42 min**: ROI framing — connect demo to their stated success metrics
5. **42–45 min**: Next steps — agree on a specific follow-up action before ending the call

### Post-Demo
- Send a follow-up email within **2 hours** of the demo with: key takeaways, a one-pager PDF, and proposed next steps.
- Update Salesforce opportunity stage; log the demo date, attendees, and sentiment.
- If the demo surfaced a product gap, open a Product Gap ticket in Jira with the prospect's ARR and use case.

---

## Sales — Pricing and Packaging

### Current Packaging Tiers
| Tier | Price | Seats | Key Features |
|---|---|---|---|
| Starter | $199/mo | Up to 10 | Core features, email support, 99.5% SLA |
| Growth | $799/mo | Up to 50 | All Starter + API access, SSO, Slack integration, 99.9% SLA |
| Enterprise | Custom | Unlimited | All Growth + custom integrations, dedicated CSM, SLA ≥ 99.95%, SOC 2 report |

### Discount Authority
| Discount | Approval |
|---|---|
| ≤ 10% | AE discretion |
| 11–20% | Sales Manager |
| 21–30% | VP Sales |
| > 30% | CEO + VP Sales |

- All discounts must be documented in Salesforce with a business justification.
- Discounts are on list price; do not discount professional services or implementation fees.

### Multi-Year Deals
- 2-year deal: AE may offer up to **10% discount** off annual pricing without additional approval.
- 3-year deal: up to **15% discount** with Sales Manager approval.
- Multi-year deals must be approved by Finance before sending the order form.

### Custom Enterprise Pricing
- Enterprise deals require a pricing call with Sales Manager, Finance, and optionally VP Sales.
- Volume pricing, usage-based add-ons, and custom SKUs are available — contact `sales-ops@company.internal`.
- Never quote custom pricing verbally — all custom pricing must be sent as a formal quote from Salesforce CPQ.

### Competitive Situations
- Competitive battlecards are maintained in Notion → Sales → Competitive Intelligence.
- If you encounter a competitor not listed, contact `product@company.internal` to initiate a battlecard.
- Do not disparage competitors in writing; focus on your differentiation.
- For competitive proofs of concept (POCs), loop in Solutions Engineering early.

---

## Sales — Handoff to Customer Success

### When to Initiate Handoff
- Handoff begins when the contract is **fully executed** (not verbal commitment).
- Sales notifies CS by posting in `#cs-sales-handoffs` Slack channel with the account name and ARR.
- AE completes the Sales-to-CS Handoff Template in Salesforce within **24 hours** of close.

### Handoff Template Fields
- Account overview: company size, industry, use case summary
- Economic buyer and executive sponsor (name, title, email)
- Technical contact (name, title, email, technical sophistication level)
- Contracted features, add-ons, and any custom commitments
- Pricing, discount, and payment terms
- Known risks or sensitivities (e.g., competitor they evaluated, previous support issues)
- Promised timeline for go-live
- Any special agreements not in the standard order form

### Joint Kickoff Call
- AE and CSM attend the kickoff call together for accounts with ARR > $25K.
- AE makes the introduction and formally hands over the relationship to the CSM.
- After the kickoff call, AE is available for escalations but the CSM owns the relationship.

### Post-Close AE Involvement
- AE should not re-engage the customer without CSM coordination during the first 90 days.
- AE is responsible for expansion opportunities surfaced by the CSM (upsell/cross-sell).
- AE and CSM sync monthly on accounts in their shared book of business.

---

## Product — Roadmap and Planning

### Planning Cadence
- **Annual planning**: October–November. Sets the 12-month strategic themes and OKRs.
- **Quarterly planning**: Last 2 weeks of each quarter. Defines the priority stack for the next quarter.
- **Sprint planning**: Every 2 weeks. Engineers and PM align on the sprint backlog.
- Product roadmap is published in Notion → Product → Roadmap and updated monthly.

### Roadmap Tiers
| Tier | Horizon | Commitment |
|---|---|---|
| Now | Current quarter | Committed; in sprint |
| Next | 1–2 quarters | Highly likely; scoped |
| Later | 3–4 quarters | Directional; subject to change |
| Exploring | No set timeline | Under research; not committed |

- External roadmap sharing requires VP Product approval; use only the approved customer-facing deck.
- Never commit roadmap items to customers without VP Product sign-off.

### Prioritization Framework
- We use **RICE scoring**: Reach × Impact × Confidence / Effort.
- PMs calculate RICE scores for each initiative before quarterly planning.
- Customer feature requests are tracked in Jira; ARR-weighted request counts factor into RICE scores.
- Engineering capacity constraints are input by the EM before scoring is finalized.

### Roadmap Review Meetings
- Monthly roadmap review: first Monday of each month, 10am PT. All PMs, EMs, and VP Product.
- Quarterly all-hands roadmap update: last week of each quarter. All employees.
- CSMs and Sales may request a 1:1 roadmap briefing for strategic accounts via `#product`.

---

## Product — PRD Process and Beta Programs

### PRD Lifecycle
1. **Discovery**: PM writes a 1-page problem statement; reviews with EM and Design lead.
2. **Solution Design**: PM writes the full PRD using the template in Notion → Product → PRD Template.
3. **Design Review**: UX shares mockups in Figma; design review meeting scheduled within 1 week.
4. **Engineering Review**: EM reviews for feasibility and effort estimate; any scope changes logged.
5. **Stakeholder Sign-Off**: PRD signed off by VP Product, EM, and relevant team lead (CS, Sales, Legal).
6. **Sprint Ready**: PM creates Jira epics and stories; EM grooms and adds to the sprint backlog.

### PRD Required Sections
- Problem statement and user personas
- Success metrics (primary and secondary KPIs)
- Proposed solution and key user flows
- Out of scope (explicitly listed)
- Technical considerations (flagged by PM; detailed by Engineering)
- Security & privacy considerations
- Roll-out plan (feature flag, beta, GA dates)
- Open questions and decision log

### Beta Programs
- Beta programs are available for Growth and Enterprise customers.
- PM nominates beta candidates based on: use case fit, engagement level, and willingness to give feedback.
- Beta invitation sent by the CSM through the standard beta invite email (template in Notion → CS → Beta).
- Beta participants agree to: weekly feedback calls, NPS survey at program end, case study participation.
- Beta feedback is logged in the PRD's "Beta Findings" section and reviewed before GA.
- Beta programs last a maximum of **60 days**; extension requires VP Product approval.
- To nominate a customer for beta: post in `#product-beta` with the account name, ARR, and use case rationale.

---

## Legal & Compliance — SOC 2 and GDPR

### SOC 2 Type II Certification
- The company holds a **SOC 2 Type II** certification, audited annually by Prescient Assurance.
- Audit period: January 1 – December 31. Report available by February 28 of the following year.
- Covered Trust Service Criteria: Security, Availability, Confidentiality.
- The current SOC 2 report is stored in **Vanta** (`vanta.company.internal`) — access requires VP or above.
- Customer-facing SOC 2 summary (one-pager) is available from Sales and CS teams.
- To share the full report with a customer, they must sign an NDA first; coordinate with `legal@company.internal`.

### SOC 2 Continuous Compliance
- All engineers must complete the annual security training in Vanta by **January 31**.
- Background checks are required for all new hires and processed via Checkr during onboarding.
- Access reviews run quarterly in Vanta; managers review and certify their team's access within **5 business days** of notification.
- Any policy exception requires approval by the CISO and is logged in Vanta.
- Vendor risk assessments are required for all new SaaS vendors processing company or customer data.

### GDPR Compliance
- The company is GDPR compliant as a data processor for EU customers.
- Data Processing Agreements (DPAs) are available on request; standard DPA is in Notion → Legal → GDPR.
- Customer data requests (access, deletion, portability) must be fulfilled within **30 days** per GDPR.
- Route data subject requests to `privacy@company.internal`; do not attempt to fulfill them manually.
- EU customer data is stored in `eu-west-1` (AWS Ireland); data residency is contractually guaranteed for Enterprise customers.
- Sub-processors list is maintained in Notion → Legal → GDPR → Sub-processors and updated within **14 days** of any change.

### Incident Notification
- A data breach affecting EU residents must be reported to the relevant Data Protection Authority within **72 hours** of discovery.
- CISO is the notification owner; escalate any suspected breach to `security@company.internal` immediately.
- Customer notification SLA: Enterprise customers must be notified within **24 hours**; SMB within **48 hours**.

---

## Legal & Compliance — NDAs and Vendor Contracts

### Non-Disclosure Agreements (NDAs)
- All external NDA requests must be routed through `legal@company.internal`.
- Standard turnaround for our paper NDA: **1 business day**.
- Turnaround for reviewing a third-party NDA: **3 business days**.
- Do not sign any NDA without Legal review and approval — this includes NDAs presented at events.
- One-way vs. mutual NDAs: use one-way when only we are disclosing; mutual when both parties share information.
- NDA storage: all signed NDAs are filed in DocuSign and linked in Salesforce (customer NDAs) or the vendor register (vendor NDAs).

### Vendor Contracts
- All vendor contracts with an annual value > **$10,000** require Legal review.
- Contracts < $10,000/year may be signed by a VP with Finance approval.
- Contracts > $100,000/year require CFO signature.
- Submit contracts for review via the Legal intake form in Notion → Legal → Contract Requests.
- Standard review SLA: **5 business days** for new contracts; **3 business days** for renewals.

### Data Processing Agreements (DPAs)
- Required for any vendor that processes personal data on our behalf.
- Standard DPA template is in Notion → Legal → Templates → DPA.
- If a vendor refuses our DPA, escalate to the CISO and Legal before proceeding.

### Contract Renewal Management
- Contracts are tracked in the Vendor Register in Notion → Legal → Vendor Register.
- Renewal reminders are sent by Legal **90 days** before expiration.
- If you receive a renewal invoice without a reminder, contact `legal@company.internal` immediately.
- Unauthorized auto-renewals that exceed budget may result in personal liability — always confirm with Legal.

---

## Support — SLAs and Tier Definitions

### Support Tiers
| Plan | Channels | First Response | Resolution Target |
|---|---|---|---|
| Starter | Email only | 1 business day | 3 business days |
| Growth | Email + Slack Connect | 4 business hours | 1 business day |
| Enterprise | Email + Slack Connect + Phone | 1 hour (P1/P2), 4 hours (P3/P4) | 4 hours (P1), 8 hours (P2), 2 days (P3/P4) |

### Priority Definitions
| Priority | Definition | Example |
|---|---|---|
| P1 – Critical | Production system down; no workaround | Login broken for all users; data loss |
| P2 – High | Core feature impaired; workaround available | Exports failing; SSO intermittent |
| P3 – Medium | Non-critical feature degraded | UI rendering issue; slow reports |
| P4 – Low | Cosmetic issue or general question | Tooltip text wrong; how-to question |

### SLA Clock
- SLA clock starts when the ticket is created (email received or Slack message sent to the support channel).
- SLA clock pauses when: we are waiting for customer information (status set to "Pending Customer").
- SLA clock restarts when the customer responds.
- SLA breach alerts fire in Zendesk and notify the Support Manager via Slack `#support-alerts`.

### Escalation to Engineering
- P1 issues automatically create a PagerDuty alert for the on-call engineer.
- For P2 issues requiring engineering involvement: Support Manager pages on-call via PagerDuty.
- Support must provide a Zendesk ticket link, a description of the issue, and steps to reproduce when escalating to Engineering.
- Engineering SLA to respond to Support escalations: **30 minutes** for P1, **2 hours** for P2.

### Support Tools
| Tool | Purpose |
|---|---|
| Zendesk | Primary ticket management |
| Slack Connect | Direct customer channel (Growth and Enterprise) |
| Loom | Async video responses for complex how-to issues |
| Statuspage | Public status updates at `status.company.com` |
| Jira | Bug and feature request tracking (linked from Zendesk) |
| Datadog | For diagnosing customer-specific performance issues |

### CSAT and Quality
- CSAT surveys are sent automatically after ticket resolution (1-day delay).
- Target CSAT: **≥ 95%** overall; < 90% triggers a weekly review with the Support Manager.
- Support leads review a random 10% of resolved tickets weekly for quality coaching.
- Tickets receiving a bad CSAT score (1–3 stars) are reviewed within **24 hours** and a follow-up is sent to the customer.
