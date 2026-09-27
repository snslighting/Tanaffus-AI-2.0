# Tanaffus — Case A submission

**Mission:** reduce repetitive teacher grading and paperwork while teachers control academic decisions. **Vision:** make reviewed work useful for the next lesson and give teachers their evenings back.

## What is delivered

A React/TypeScript prototype, a browser presentation at `/pitch.html`, and an editable pitch deck. The prototype contains assignment creation, local file selection, simulated analysis, Trust Light review, editable scores and feedback, bulk approval, class results, student profiles, reports, and Mistake Radar.

**Scope:** sample data and simulated analysis only. No OCR, AI service, backend authentication, message delivery, or eMaktab connection exists. Uploaded file contents are not read. Filenames and demo state remain in browser storage. No actual customer traction has been established.

## Market and alternatives

Uzbekistan had **11,118 general secondary schools**, including **551 non-state schools**, at the beginning of 2025/26. Tashkent city had **145 non-state schools**. Non-state institutions grew **21.1% year over year**. Source: [National Statistics Committee, 31 March 2026, pp. 1–3](https://stat.uz/img/news/general-secondary-education_p67901.pdf).

At a hypothetical $1,080 annual institution plan, the all-school ceiling is $12,007,440/year, the non-state-school segment is $595,080/year, and the initial Tashkent city segment is $156,600/year. These calculations assume one plan per institution and 100% adoption. They describe sizing scenarios, not obtainable revenue forecasts. Public procurement and product suitability sharply constrain reach.

[Gradescope](https://www.gradescope.com/get_started) offers rubric workflows and AI-assisted grouping for certain questions. [MagicSchool](https://www.magicschool.ai/magic-tools) offers teacher tools including rubric generation and feedback. Existing categories validate demand for help with assessment, but do not prove demand for Tanaffus. Proposed positioning combines uncertainty-based review, a local mathematics focus, and mistake-to-lesson follow-through. Validate this against competitors in pilot interviews; do not claim exclusive functionality.

## Users, buyers and adoption

Start with grade 8–10 mathematics teachers in non-state Tashkent schools. A principal or academic coordinator sponsors the plan. A lead teacher champions the pilot. Onboarding lasts 20 minutes and uses an existing assignment and school rubric. Run paired manual/assisted grading with the same papers and collect qualitative feedback. Continued use should come from reusable rubrics, visible override controls, report exports and useful follow-up lessons.

## Roadmap and launch

| Stage | Timing | Scope and gate |
|---|---|---|
| Prototype | Complete | Local, synthetic workflow to demonstrate the experience |
| Evaluated MVP | Months 1–3 | Secure storage, upload, OCR, mathematics rubric scoring, audit history; 500 consented papers independently checked by two teachers |
| First pilot | Months 4–6 | Three schools, 30 teachers, six-week evaluation; human-reviewed Uzbek/Russian feedback |
| Paid rollout | Months 7–12 | Administration and reporting, measured reliability; ten paid schools targeted |
| Expansion | Year 2+ | Regions and subjects, then universities or neighboring markets after separate evaluations |

Assume two engineers with part-time teaching, design and privacy support. Budget assumes lean founder compensation. Local quotes are required. Defer complex open-ended grading and real school API integrations until a narrow MVP works reliably.

Go-to-market funnel for Year 1 (hypothesis): 100 qualified contacts → 25 demos → 15 pilots → 10 paid schools. The first cohort is three schools, with subsequent cohorts later in the year. Use direct school outreach, teacher communities, lead-teacher referrals, and consented case studies. Year 2 and 3 acquisition expands across Uzbekistan; no partnership is claimed as secured.

## Proposed pricing

30-paper trial followed by a $1,080/year school plan covering 30 seats and 18,000 single-page papers pooled across the school. This equals $3/teacher/month when all seats are used. Optional 1,000-paper blocks at $40 prevent unbounded usage. Onboarding and support services may become additional revenue after validation. The forecast counts only base subscriptions. Prices are USD equivalents for modeling, not local market quotations. Test academic-year seasonality and willingness to pay before committing.

## Three-year model

All figures below are assumptions in USD, before tax.

| Metric | Year 1 | Year 2 | Year 3 |
|---|---:|---:|---:|
| Schools at year end | 10 | 50 | 150 |
| Average paid schools | 5 | 30 | 100 |
| Average licensed teachers (30/school) | 150 | 900 | 3,000 |
| Papers (50/teacher/month × 12) | 90,000 | 540,000 | 1,800,000 |
| Revenue ($1,080 × average schools) | 5,400 | 32,400 | 108,000 |
| Inference ($0.02/paper) | 1,800 | 10,800 | 36,000 |
| Hosting and support | 1,200 | 4,800 | 12,000 |
| Product team | 27,000 | 38,000 | 48,000 |
| Sales | 4,000 | 10,000 | 16,000 |
| Administration | 5,000 | 6,000 | 8,000 |
| Total cost | 39,000 | 69,600 | 120,000 |
| Operating result | −33,600 | −37,200 | −12,000 |

Average paid schools use a simple linear ramp between year-end counts: 5, 30, 100. Revenue is based on these averages, not the year-end run rate. The usage model normalizes 12 months; seasonality and actual seat activation must be measured. Fixed product costs assume founders below market compensation and need validation.

Three-year operating funding gap: $82,800. Adding 20% contingency gives $99,360, approximately $100,000. This excludes financing, taxes, FX, and capital expenditure. Annual upfront payment changes cash timing, so this is not a cash-flow forecast. The model does **not** promise profitability by Year 3.

At Year 3 economics, per-school annual revenue $1,080 minus inference $360 and hosting/support allocation $48 yields contribution of $672 (62.2%). Fully loaded CAC target <$600 implies about 10.7 months contribution payback, before fixed team costs. A doubling of inference cost to $0.04/paper adds $36,000 in Year 3 and increases its loss to $48,000. At 20% lower average school count (80), Year 3 revenue is $86,400; with usage-scaled inference of $28,800, fixed hosting/support $12,000 and other costs $72,000, loss is $26,400. These are separate sensitivities.

## Metrics and release gates

Measure median teacher time per assignment including setup, upload, corrections and report creation. Target at least 50% reduction relative to paired manual grading. The UI’s 3h 40m weekly time-saving figure is illustrative, not computed from measured time. The completion estimate uses 4 minutes manual minus 30 seconds assisted per paper, with setup and outliers excluded.

Proposed scoring gate: at least 95% agreement within one point of a 20-point rubric, against adjudicated teacher scores. Report confidence intervals and errors across handwriting quality and language groups. Do not interpret this threshold as sufficient on its own for high-stakes assessment. Keep teacher approval mandatory. Track false high-confidence suggestions and manual abstention rates.

Other targets: 70% monthly active paid teachers, 80% annual school retention, zero unapproved grade transfers, CAC below $600 including sales labor. At 80% retention, reaching 50 schools from 10 requires 42 gross additions; reaching 150 from 50 requires 110. No targets have been demonstrated yet.

## Risks and mitigations

| Risk | Practical response |
|---|---|
| Inaccurate grading, bias, poor handwriting | Use adjudicated local datasets, show evidence, allow overrides, abstain on unclear work, audit group-specific errors |
| Student data exposure | Minimize names, restrict access, encrypt storage, audit actions, set deletion periods, obtain school approval and jurisdiction-specific legal review |
| Teacher resistance | Co-design rubrics, demonstrate one assignment, retain manual control, measure time rather than promise savings |
| Unreliable internet | Resumable uploads, clear retry states and local drafts; do not claim offline AI processing |
| Expensive inference | Per-paper metering, bounded trials, prepaid usage, multi-page/retry accounting, cost gate before scale |
| Procurement delays | Small school pilots, annual budgets, lead-teacher champions, reference cases |
| Integration failures | Export approved grades first; authorized partner APIs only after separate testing |

## Criteria map

| Criterion | Pitch slide(s) | Demo or supporting evidence |
|---|---|---|
| 1 Mission, vision, value | 1–3 | Dashboard time-saving story |
| 2 Market, trends, competitors | 4–5 | Official source links, market calculations above |
| 3 Users and adoption | 6 | Teacher workflow, school buyer |
| 4 Roadmap | 12 | Gated MVP and pilot stages |
| 5 Monetization | 11 | Pooled school plan with usage caps |
| 6 Go-to-market | 13 | Pilot funnel and regional expansion |
| 7 Financials and metrics | 14–15 | Reconciled model and sensitivities |
| 8 Risks | 16 | Practical proposed controls |
| 9 Prototype concept | 3, 7–10 | Running React prototype |
| 10 Sample screens | 8–10 | Actual dashboard, review and radar screenshots |
| 11 Killer flow | 7 | Create → analyze → review → approve → report |
| 12 Differentiation | 10 | Mistake Radar and Trust Light |

## Demo talk track (three minutes)

1. Show dashboard: “Tanaffus means break. It gives teachers time back while keeping decisions with them.”
2. Create an assignment, retain the 20-point sample rubric and load 28 sample papers. Explain the analysis is simulated.
3. Approve 25 green papers. Open a yellow result and edit its score or feedback. Show the red-paper manual check.
4. Approve remaining work, show completion, preview the report and download it.
5. Open Mistake Radar: sign errors affect 11 of 28 sample students (39% rounded). Open a student and show the five-minute balance activity.
6. Close with the pilot ask: three schools, thirty teachers, measured time savings and scoring reliability before expansion.
