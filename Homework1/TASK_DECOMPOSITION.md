# Homework 1 - Task Decomposition

## M1 - WCAG 2.2 AA Audit
- Check semantic landmarks
- Check color contrast
- Check image alt text
- Check form labels

## M2 - Keyboard / Focus Audit
- Test entire page using Tab and Shift+Tab
- Ensure no keyboard focus trap
- Ensure focus indicator is visible
### Audit Result
- No keyboard focus trap was detected.
- Keyboard navigation works in both forward and reverse directions.

## M3 - CSP & Event Security
- Add Content Security Policy
- Remove all inline onclick/onchange handlers
- Bind events inside script.js
## M3 - CSP & Event Security

### Implementation
- Added Content Security Policy.
- Restricted scripts and styles to same-origin resources.
- Verified that no inline event handlers are used.

### Audit Result
- No onclick, onchange, or onsubmit handlers were found.
- No CSP violations were reported in the browser console.


## M4 - Lighthouse Optimization
- Optimize images
- Remove unnecessary resources
- Fix accessibility/performance problems
- Target Lighthouse score: 100
### Audit Result
- Lighthouse audit score: 100.
- No additional asset optimization was required.