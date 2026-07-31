# Design QA — Sabah V13 cinematic executive redesign

## Comparison target

- Source visual truth: `C:\Users\Matin\Downloads\Generated image 3.png`
- Source pixels: 869 × 1810
- Rendered implementation:
  - `work/qa-v13/contact-desktop.png`
  - `work/qa-v13/manifesto-desktop.png`
  - `work/qa-v13/leadership-desktop.png`
- Combined comparison input: `work/qa-v13/source-vs-implementation.png`
- Rendered pixels: 1425 × 990 per desktop capture
- CSS viewport: 1440 × 1000, device scale factor 1
- Responsive viewport checked: 390 × 844
- State: Persian RTL; default state for manifesto and leadership; empty and submitted states for contact form
- Density normalization: source and implementation were fitted proportionally into a 2200 × 1800 comparison canvas without cropping.

## Full-view comparison evidence

The combined comparison confirms the same cinematic executive system across all three surfaces: warm paper panels, graphite industrial photography, restrained champagne-gold accents, square geometry, strong Persian hierarchy, and an editorial grid. The implementation preserves the selected concept’s layout logic while adapting it to the existing site shell and real content.

The requested intentional deviation is present: the leadership portrait has been replaced by an anonymous executive photographed entirely from behind. No face, profile, or reflection is visible.

## Focused region evidence

- Contact: focused desktop and mobile captures confirm dark labels and text on opaque light fields, visible borders, a high-contrast submit action, and a readable success message.
- Manifesto: focused desktop and mobile captures confirm the overlapping paper statement, full-width industrial image, and three-stage supply/production/market band.
- Leadership: focused desktop and mobile captures confirm the anonymous executive image, readable executive profile, and aligned leadership pillars.

## Required fidelity surfaces

- Fonts and typography: Vazirmatn is active for Persian UI and display text. Weight, line height, and wrapping preserve the approved hierarchy; control labels remain readable at small sizes.
- Spacing and layout rhythm: the three sections use calibrated editorial spacing, aligned rules, sharp panels, and responsive single-column stacking without horizontal overflow.
- Colors and visual tokens: warm ivory, graphite, smoked steel and restrained gold match the selected direction. Contrast is materially improved in the form.
- Image quality and asset fidelity: industrial imagery is sharp and consistently graded. The new leadership image matches the cinematic palette and contains no identifiable face or invented logo.
- Copy and content: existing Sabah portfolio copy, names, role and contact facts are preserved. No new claims, metrics, pages, or navigation were introduced.

## Interaction and runtime evidence

- Page identity: `Sabah Industrial Group | گروه صنعتی صباح`
- Routes checked: `/fa`, `/fa/contact`
- Form tested end-to-end with locally supplied mock values.
- Interest selection changed to «فناوری».
- Submit action displayed the expected local success message.
- Browser console: no errors or warnings.
- Responsive check: no horizontal overflow at 390 × 844.

## Findings

- No actionable P0, P1, or P2 differences remain.
- P3: the live contact section exposes less of the architectural background than the concept board because the production form and directory use the site’s wider content container. This is an acceptable adaptation that improves form legibility.

## Comparison history

1. Initial implementation comparison:
   - Contact contrast failure resolved with opaque light inputs, dark labels, dark input text and a graphite submit action.
   - Sparse manifesto resolved with a cinematic image field, overlapping statement panel and three-stage value-chain band.
   - Monolithic dark leadership box resolved with a light editorial profile, anonymous executive image and leadership pillars.
2. Responsive pass:
   - Verified mobile stacking, readable form controls, intact image crops and no horizontal overflow.
3. Interaction pass:
   - Verified form fill, select and submitted state; console remained clean.

## Final result

final result: passed
