# Improvement Note

## Problem in the Baseline
The baseline version of the AI Study Notes Assistant used simple keyword checks and a weak fallback matching method based on overlapping words. This sometimes caused the app to guess an answer for unsupported questions instead of clearly saying the topic was outside the app’s scope.

## Change Made
The routing logic in `app/api/ask/route.ts` was updated to improve topic matching and remove the weak fallback scoring approach. The improved version keeps direct checks for the supported topics (AI, Machine Learning, NLP, and Computer Vision) and returns a clear fallback message for unsupported topics.

## Why This Is Better
This change makes the app more reliable and easier to debug. Supported questions are still answered correctly, paraphrased questions are matched more clearly, and unsupported questions no longer risk receiving a misleading guessed answer.

## Evidence from Evaluation
The same 7 evaluation cases were run again after the improvement. In the final version, all 7 cases passed. In particular, unsupported questions such as “What is deep learning?” and “Tell me about robotics.” now return a clear fallback message instead of an incorrect guessed answer.

## Final Outcome
The final version performed better than the baseline on the same evaluation set. The improvement shows that simpler and more explicit routing can be more effective for a small fixed-scope AI application.