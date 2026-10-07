# AI Failure Audit

## Defect 1 - Countdown Interval Continues After Completion

### Defect Description
The AI-generated countdown continued running its setInterval
after the event time had already been reached.

The function returned after displaying "Event started!", but
the interval itself was never cleared.

### Diagnostic Method
I reviewed the countdown control flow and inspected the timer
logic.

The return statement only exited updateCountdown() and did not
stop the repeating interval.

### Refactored Solution
I stored the interval ID and called clearInterval() when the
remaining time reached zero.

This prevents unnecessary timer callbacks after the countdown
has completed.


## Defect 2 - Error State Was Not Reachable During Submission

### Defect Description
The form contained an ERROR state and a catch block, but the
mock submitRegistration() function always resolved successfully.

Therefore the asynchronous error path could not actually be
tested.

### Diagnostic Method
I inspected the Promise implementation and followed the form
state transitions.

The Promise only called resolve() and never called reject().

### Refactored Solution
I refactored the mock submission function so that it can
simulate both successful and failed submissions.

This allowed both SUCCESS and ERROR state transitions to be
verified.


## Defect 3 - trim() Was Mistaken for XSS Protection

### Defect Description
The generated solution used trim() while discussing input
sanitization.

However, trim() only removes leading and trailing whitespace
and does not prevent HTML or JavaScript injection.

### Diagnostic Method
I reviewed how user-controlled input was rendered and tested
the name field with HTML-like input.

### Refactored Solution
User-controlled output is rendered with textContent instead of
innerHTML.

This ensures the input is displayed as text rather than being
interpreted as HTML.